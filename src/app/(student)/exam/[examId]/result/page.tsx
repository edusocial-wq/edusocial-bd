import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Clock, Trophy } from "lucide-react";

interface Props {
  searchParams: Promise<{ attemptId?: string }>;
}

export default async function ExamResultPage({ searchParams }: Props) {
  const { attemptId } = await searchParams;

  const session = await auth();
  if (!session?.user) redirect("/login");

  if (!attemptId) notFound();

  const attempt = await db.examAttempt.findUnique({
    where: { id: attemptId },
    include: {
      exam: {
        include: {
          questions: { orderBy: { order: "asc" } },
          course: { select: { title_bn: true } },
        },
      },
    },
  });

  if (!attempt || attempt.userId !== session.user.id) notFound();

  const answers = attempt.answers as Record<string, string>;
  const questions = attempt.exam.questions;
  const pct = attempt.totalMarks
    ? Math.round(((attempt.score ?? 0) / attempt.totalMarks) * 100)
    : null;

  const gradeLabel =
    pct === null
      ? "মূল্যায়নাধীন"
      : pct >= 80
      ? "A+"
      : pct >= 70
      ? "A"
      : pct >= 60
      ? "A-"
      : pct >= 50
      ? "B"
      : pct >= 40
      ? "C"
      : "F";

  const gradeColor =
    pct === null
      ? "text-muted-foreground"
      : pct >= 70
      ? "text-success"
      : pct >= 40
      ? "text-warning"
      : "text-destructive";

  return (
    <div className="max-w-2xl mx-auto">
      {/* Result card */}
      <div className="rounded-xl border border-border bg-card p-8 text-center mb-8">
        <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-foreground mb-1">{attempt.exam.title_bn}</h1>
        <p className="text-muted-foreground text-sm mb-6">{attempt.exam.course.title_bn}</p>

        {attempt.status === "GRADING" ? (
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Clock className="h-5 w-5" />
            <span>রচনামূলক উত্তর মূল্যায়নাধীন। শিক্ষক মূল্যায়ন করলে ফলাফল আপডেট হবে।</span>
          </div>
        ) : (
          <>
            <div className={`text-6xl font-bold ${gradeColor} mb-2`}>{gradeLabel}</div>
            <div className="text-2xl font-semibold text-foreground">
              {attempt.score ?? 0} / {attempt.totalMarks ?? 0} নম্বর
            </div>
            {pct !== null && (
              <div className="mt-2 text-muted-foreground">{pct}% সঠিক</div>
            )}
          </>
        )}
      </div>

      {/* Question-by-question review (MCQ only) */}
      {attempt.exam.type !== "WRITTEN" && (
        <div className="mb-8">
          <h2 className="font-semibold text-foreground mb-4">প্রশ্নের বিশ্লেষণ</h2>
          <div className="space-y-4">
            {questions.map((q, i) => {
              if (q.type !== "MCQ") return null;
              const userAnswer = answers[q.id];
              const isCorrect = userAnswer === q.correctAnswer;
              const opts = q.options as { label: string; value: string }[] | null;

              return (
                <div
                  key={q.id}
                  className={`rounded-lg border p-4 ${
                    isCorrect
                      ? "border-success/30 bg-success/5"
                      : userAnswer
                      ? "border-destructive/30 bg-destructive/5"
                      : "border-border bg-muted/30"
                  }`}
                >
                  <div className="flex items-start gap-2 mb-3">
                    {isCorrect ? (
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                    )}
                    <span className="text-sm font-medium text-foreground">
                      {i + 1}. {q.body_bn}
                    </span>
                  </div>
                  {opts && (
                    <div className="space-y-1 pl-6">
                      {opts.map((opt) => (
                        <div
                          key={opt.value}
                          className={`text-xs px-2 py-1 rounded ${
                            opt.value === q.correctAnswer
                              ? "bg-success/15 text-success font-medium"
                              : opt.value === userAnswer && !isCorrect
                              ? "bg-destructive/10 text-destructive line-through"
                              : "text-muted-foreground"
                          }`}
                        >
                          {opt.label}
                          {opt.value === q.correctAnswer && " ✓"}
                        </div>
                      ))}
                    </div>
                  )}
                  {q.explanation && (
                    <p className="mt-2 pl-6 text-xs text-muted-foreground italic">
                      ব্যাখ্যা: {q.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex gap-3 justify-center">
        <Link href="/exam">
          <Button variant="outline">সব পরীক্ষা দেখুন</Button>
        </Link>
        <Link href="/dashboard">
          <Button>ড্যাশবোর্ডে যান</Button>
        </Link>
      </div>
    </div>
  );
}
