import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import ExamRunner from "@/components/exam/ExamRunner";

interface Props {
  params: Promise<{ examId: string }>;
}

export default async function ExamPage({ params }: Props) {
  const { examId } = await params;
  const session = await auth();
  if (!session?.user) redirect("/login");
  const userId = session.user.id;

  const exam = await db.exam.findUnique({
    where: { id: examId },
    include: {
      questions: { orderBy: { order: "asc" } },
      course: { select: { title_bn: true } },
    },
  });

  if (!exam || !exam.published) notFound();

  // Premium gate
  if (exam.isPremium && session.user.tier !== "PREMIUM") {
    redirect("/upgrade");
  }

  // Scheduled gate: can't start before scheduledAt
  if (exam.mode === "SCHEDULED" && exam.scheduledAt && exam.scheduledAt > new Date()) {
    redirect("/exam");
  }

  // Find or create attempt
  let attempt = await db.examAttempt.findFirst({
    where: { userId, examId, status: "IN_PROGRESS" },
  });

  if (!attempt) {
    const endsAt =
      exam.mode === "SCHEDULED" && exam.scheduledAt
        ? new Date(exam.scheduledAt.getTime() + exam.durationMins * 60_000)
        : new Date(Date.now() + exam.durationMins * 60_000);

    attempt = await db.examAttempt.create({
      data: {
        userId,
        examId,
        endsAt,
        totalMarks: exam.totalMarks,
      },
    });
  }

  // Server-side: enforce endsAt — if already past, auto-submit
  if (attempt.endsAt && attempt.endsAt < new Date()) {
    await db.examAttempt.update({
      where: { id: attempt.id },
      data: { status: "SUBMITTED", submittedAt: new Date() },
    });
    redirect(`/exam/${examId}/result?attemptId=${attempt.id}`);
  }

  return (
    <ExamRunner
      exam={{
        id: exam.id,
        title_bn: exam.title_bn,
        type: exam.type,
        durationMins: exam.durationMins,
        courseName: exam.course.title_bn,
        questions: exam.questions.map((q) => ({
          id: q.id,
          body_bn: q.body_bn,
          type: q.type,
          options: q.options as { label: string; value: string }[] | null,
          marks: q.marks,
          order: q.order,
        })),
      }}
      attempt={{
        id: attempt.id,
        endsAt: attempt.endsAt?.toISOString() ?? null,
        savedAnswers: attempt.answers as Record<string, string>,
      }}
    />
  );
}
