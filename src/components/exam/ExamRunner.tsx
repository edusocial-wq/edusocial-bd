"use client";

import { useState, useCallback, useTransition } from "react";
import { useRouter } from "next/navigation";
import ExamTimer from "./ExamTimer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle, Circle, AlertCircle } from "lucide-react";

interface Question {
  id: string;
  body_bn: string;
  type: string;
  options: { label: string; value: string }[] | null;
  marks: number;
  order: number;
}

interface ExamRunnerProps {
  exam: {
    id: string;
    title_bn: string;
    type: string;
    durationMins: number;
    courseName: string;
    questions: Question[];
  };
  attempt: {
    id: string;
    endsAt: string | null;
    savedAnswers: Record<string, string>;
  };
}

export default function ExamRunner({ exam, attempt }: ExamRunnerProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [answers, setAnswers] = useState<Record<string, string>>(attempt.savedAnswers ?? {});
  const [currentIdx, setCurrentIdx] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);

  const handleRestoreAnswers = useCallback((saved: Record<string, string>) => {
    setAnswers((prev) => ({ ...saved, ...prev }));
  }, []);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const submitExam = useCallback(async () => {
    setSubmitting(true);
    try {
      await fetch(`/api/exam/${attempt.id}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      // Clear localStorage on successful submit
      try { localStorage.removeItem(`exam-answers-${attempt.id}`); } catch {}
      startTransition(() => {
        router.push(`/exam/${exam.id}/result?attemptId=${attempt.id}`);
      });
    } catch {
      setSubmitting(false);
      alert("জমা দিতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }
  }, [answers, attempt.id, exam.id, router]);

  const handleTimeUp = useCallback(() => {
    submitExam();
  }, [submitExam]);

  const currentQ = exam.questions[currentIdx];
  const answeredCount = exam.questions.filter((q) => answers[q.id] !== undefined).length;
  const progress = (answeredCount / exam.questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <p className="text-sm text-muted-foreground">{exam.courseName}</p>
          <h1 className="text-xl font-bold text-foreground">{exam.title_bn}</h1>
        </div>
        <ExamTimer
          attemptId={attempt.id}
          durationSecs={exam.durationMins * 60}
          endsAt={attempt.endsAt}
          onTimeUp={handleTimeUp}
          answers={answers}
          onAnswersRestore={handleRestoreAnswers}
        />
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
          <span>{answeredCount}/{exam.questions.length} উত্তর দেওয়া হয়েছে</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question navigation dots */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {exam.questions.map((q, i) => (
          <button
            key={q.id}
            onClick={() => setCurrentIdx(i)}
            className={cn(
              "h-8 w-8 rounded-md text-xs font-medium transition-colors",
              i === currentIdx
                ? "bg-primary text-primary-foreground"
                : answers[q.id] !== undefined
                ? "bg-success/20 text-success border border-success/30"
                : "bg-muted text-muted-foreground border border-border hover:bg-accent"
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Current question */}
      {currentQ && (
        <div className="rounded-xl border border-border bg-card p-6 mb-6">
          <div className="flex items-start gap-3 mb-5">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
              {currentIdx + 1}
            </span>
            <p className="text-foreground font-medium leading-relaxed">{currentQ.body_bn}</p>
          </div>

          {currentQ.type === "MCQ" && currentQ.options ? (
            <div className="space-y-2.5">
              {currentQ.options.map((opt) => {
                const selected = answers[currentQ.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(currentQ.id, opt.value)}
                    className={cn(
                      "w-full flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors",
                      selected
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background hover:bg-accent text-foreground"
                    )}
                  >
                    {selected ? (
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    ) : (
                      <Circle className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    )}
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <textarea
              value={answers[currentQ.id] ?? ""}
              onChange={(e) => handleAnswer(currentQ.id, e.target.value)}
              placeholder="এখানে আপনার উত্তর লিখুন..."
              rows={6}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4">
        <Button
          variant="outline"
          onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
          disabled={currentIdx === 0}
        >
          ← আগের প্রশ্ন
        </Button>

        {currentIdx < exam.questions.length - 1 ? (
          <Button onClick={() => setCurrentIdx((i) => i + 1)}>
            পরের প্রশ্ন →
          </Button>
        ) : (
          <Button
            variant={confirmSubmit ? "destructive" : "default"}
            onClick={() => {
              if (confirmSubmit) {
                submitExam();
              } else {
                setConfirmSubmit(true);
              }
            }}
            disabled={submitting || isPending}
          >
            {submitting
              ? "জমা হচ্ছে..."
              : confirmSubmit
              ? "নিশ্চিত করুন ও জমা দিন"
              : "পরীক্ষা জমা দিন"}
          </Button>
        )}
      </div>

      {confirmSubmit && !submitting && (
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-warning/10 border border-warning/30 p-3 text-sm text-warning">
          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <div>
            <strong>আপনি কি নিশ্চিত?</strong> এখনো {exam.questions.length - answeredCount}টি প্রশ্নের উত্তর দেননি।
            জমা দিলে আর পরিবর্তন করতে পারবেন না।
            <button
              className="block mt-1 text-xs underline text-muted-foreground"
              onClick={() => setConfirmSubmit(false)}
            >
              বাতিল করুন
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
