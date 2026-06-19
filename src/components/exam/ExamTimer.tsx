"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { formatTime } from "@/lib/utils";
import { Clock, Save } from "lucide-react";

interface ExamTimerProps {
  attemptId: string;
  durationSecs: number;
  endsAt?: string | null; // ISO string from server — used for scheduled exams
  onTimeUp: () => void;
  answers: Record<string, string>;
  onAnswersRestore: (answers: Record<string, string>) => void;
}

export default function ExamTimer({
  attemptId,
  durationSecs,
  endsAt,
  onTimeUp,
  answers,
  onAnswersRestore,
}: ExamTimerProps) {
  const storageKey = `exam-answers-${attemptId}`;
  const [secondsLeft, setSecondsLeft] = useState(() => {
    if (endsAt) {
      const diff = Math.floor((new Date(endsAt).getTime() - Date.now()) / 1000);
      return Math.max(0, diff);
    }
    return durationSecs;
  });
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const hasRestored = useRef(false);
  const onTimeUpRef = useRef(onTimeUp);
  onTimeUpRef.current = onTimeUp;

  // Restore saved answers on first mount
  useEffect(() => {
    if (hasRestored.current) return;
    hasRestored.current = true;
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        onAnswersRestore(parsed);
      }
    } catch {}
  }, [storageKey, onAnswersRestore]);

  // Autosave answers every 30 seconds
  const saveAnswers = useCallback(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(answers));
      setLastSaved(new Date());
    } catch {}
  }, [storageKey, answers]);

  useEffect(() => {
    const interval = setInterval(saveAnswers, 30_000);
    return () => clearInterval(interval);
  }, [saveAnswers]);

  // Countdown timer
  useEffect(() => {
    if (secondsLeft <= 0) {
      onTimeUpRef.current();
      return;
    }
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (endsAt) {
          const diff = Math.floor((new Date(endsAt).getTime() - Date.now()) / 1000);
          const next = Math.max(0, diff);
          if (next <= 0) onTimeUpRef.current();
          return next;
        }
        const next = s - 1;
        if (next <= 0) onTimeUpRef.current();
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [endsAt, secondsLeft]);

  const urgent = secondsLeft <= 300; // red when under 5 minutes

  return (
    <div
      className={`flex items-center gap-3 rounded-lg px-4 py-2.5 border ${
        urgent
          ? "bg-destructive/10 border-destructive/30 text-destructive"
          : "bg-muted border-border text-foreground"
      }`}
    >
      <Clock className={`h-4 w-4 ${urgent ? "animate-pulse" : ""}`} />
      <span className="font-mono font-semibold text-lg">{formatTime(secondsLeft)}</span>
      {lastSaved && (
        <span className="flex items-center gap-1 text-xs text-muted-foreground ml-2">
          <Save className="h-3 w-3" />
          সংরক্ষিত
        </span>
      )}
    </div>
  );
}
