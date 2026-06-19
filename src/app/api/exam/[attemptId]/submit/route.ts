import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

interface Params {
  params: Promise<{ attemptId: string }>;
}

export async function POST(req: NextRequest, { params }: Params) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { attemptId } = await params;
  const { answers } = await req.json();

  const attempt = await db.examAttempt.findUnique({
    where: { id: attemptId },
    include: { exam: { include: { questions: true } } },
  });

  if (!attempt || attempt.userId !== session.user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (attempt.status !== "IN_PROGRESS") {
    return NextResponse.json({ error: "Already submitted" }, { status: 400 });
  }

  // Server-side endsAt enforcement
  if (attempt.endsAt && attempt.endsAt < new Date()) {
    // Accept whatever answers they have — time's up
  }

  // Auto-grade MCQ questions
  const questions = attempt.exam.questions;
  let score = 0;
  const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);

  for (const q of questions) {
    if (q.type === "MCQ" && q.correctAnswer && answers[q.id] === q.correctAnswer) {
      score += q.marks;
    }
  }

  const hasWritten = questions.some((q) => q.type === "WRITTEN");

  const updated = await db.examAttempt.update({
    where: { id: attemptId },
    data: {
      answers,
      submittedAt: new Date(),
      score: hasWritten ? null : score, // null = pending teacher grading
      totalMarks,
      status: hasWritten ? "GRADING" : "GRADED",
    },
  });

  // Award FIRST_EXAM badge if this is the first completed attempt
  if (!hasWritten) {
    const prevCount = await db.examAttempt.count({
      where: { userId: session.user.id, status: "GRADED" },
    });
    if (prevCount === 1) {
      await db.badge.upsert({
        where: { userId_type: { userId: session.user.id, type: "FIRST_EXAM" } },
        update: {},
        create: { userId: session.user.id, type: "FIRST_EXAM" },
      });
    }
  }

  return NextResponse.json({
    attemptId: updated.id,
    score: updated.score,
    totalMarks: updated.totalMarks,
    status: updated.status,
  });
}
