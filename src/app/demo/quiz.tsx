"use client";

import { useState } from "react";

const questions = [
  {
    q: "বাইনারি সংখ্যা পদ্ধতির বেস (Base) কত?",
    options: ["২", "৮", "১০", "১৬"],
    answer: 0,
    explanation: "বাইনারি পদ্ধতিতে শুধুমাত্র ০ এবং ১ ব্যবহার করা হয়, তাই এর বেস ২।",
  },
  {
    q: "দশমিক ১০ কে বাইনারিতে প্রকাশ করলে কত হয়?",
    options: ["1100", "1001", "1010", "0110"],
    answer: 2,
    explanation: "১০ = ৮+২ = 2³+2¹ = 1010 (বাইনারি)।",
  },
  {
    q: "অক্টাল সংখ্যা পদ্ধতিতে ব্যবহৃত অঙ্কগুলো কী কী?",
    options: ["0-8", "0-7", "0-9", "0-F"],
    answer: 1,
    explanation: "অক্টাল পদ্ধতির বেস ৮, তাই 0 থেকে 7 পর্যন্ত অঙ্ক ব্যবহার হয়।",
  },
  {
    q: "হেক্সাডেসিমেল পদ্ধতিতে ১০ কে কোন প্রতীক দিয়ে প্রকাশ করা হয়?",
    options: ["B", "C", "D", "A"],
    answer: 3,
    explanation: "হেক্সাডেসিমেলে A=10, B=11, C=12, D=13, E=14, F=15।",
  },
  {
    q: "বাইনারি 1111 কে দশমিকে রূপান্তর করলে কত হয়?",
    options: ["১৪", "১৬", "১৫", "১৩"],
    answer: 2,
    explanation: "1111 = 2³+2²+2¹+2⁰ = 8+4+2+1 = 15।",
  },
  {
    q: "কম্পিউটার কোন সংখ্যা পদ্ধতি সরাসরি বোঝে?",
    options: ["বাইনারি", "দশমিক", "অক্টাল", "হেক্সাডেসিমেল"],
    answer: 0,
    explanation: "কম্পিউটার শুধুমাত্র 0 এবং 1 (বাইনারি) বোঝে — এটিই তার মূল ভাষা।",
  },
  {
    q: "দশমিক ২৫৫ কে হেক্সাডেসিমেলে প্রকাশ করলে কত হয়?",
    options: ["FE", "EF", "F0", "FF"],
    answer: 3,
    explanation: "255 = 16×15 + 15 = FF (হেক্সাডেসিমেল)।",
  },
  {
    q: "১ বাইট সমান কত বিট?",
    options: ["৪ বিট", "৮ বিট", "১৬ বিট", "৩২ বিট"],
    answer: 1,
    explanation: "১ বাইট = ৮ বিট। বিট হলো বাইনারি ডিজিটের সংক্ষিপ্ত রূপ।",
  },
  {
    q: "অক্টাল 17 কে দশমিকে রূপান্তর করলে কত হয়?",
    options: ["১৫", "১৬", "১৭", "১৪"],
    answer: 0,
    explanation: "17 (অক্টাল) = 1×8¹ + 7×8⁰ = 8+7 = 15 (দশমিক)।",
  },
  {
    q: "BCD-এর পূর্ণ নাম কী?",
    options: [
      "Binary Central Digit",
      "Bit Coded Decimal",
      "Binary Coded Data",
      "Binary Coded Decimal",
    ],
    answer: 3,
    explanation: "BCD = Binary Coded Decimal। প্রতিটি দশমিক অঙ্ককে আলাদাভাবে বাইনারিতে প্রকাশ করে।",
  },
];

export default function Quiz() {
  const [phase, setPhase] = useState<"idle" | "quiz" | "result">("idle");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(10).fill(null));
  const [showExplanation, setShowExplanation] = useState(false);

  const score = answers.filter((a, i) => a === questions[i].answer).length;

  function startQuiz() {
    setAnswers(Array(10).fill(null));
    setCurrent(0);
    setSelected(null);
    setShowExplanation(false);
    setPhase("quiz");
  }

  function handleSelect(idx: number) {
    if (selected !== null) return; // locked after answering
    setSelected(idx);
    setShowExplanation(true);
    const updated = [...answers];
    updated[current] = idx;
    setAnswers(updated);
  }

  function next() {
    if (current === 9) {
      setPhase("result");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  }

  const q = questions[current];
  const isCorrect = selected === q?.answer;

  const grade =
    score >= 9 ? "A+" : score >= 8 ? "A" : score >= 7 ? "A-" : score >= 5 ? "B" : score >= 3 ? "C" : "F";
  const gradeColor =
    score >= 7 ? "#16a34a" : score >= 5 ? "#d97706" : "#dc2626";

  if (phase === "idle") {
    return (
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
          ১০টি MCQ প্রশ্ন — প্রতিটি উত্তরের পর ব্যাখ্যা দেখুন
        </p>
        <button onClick={startQuiz} style={btnStyle("#2563eb")}>
          কুইজ শুরু করুন →
        </button>
      </div>
    );
  }

  if (phase === "result") {
    return (
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <div style={{ fontSize: "4rem", marginBottom: "0.5rem" }}>
          {score >= 7 ? "🎉" : score >= 5 ? "👍" : "📚"}
        </div>
        <div style={{ fontSize: "3rem", fontWeight: 800, color: gradeColor }}>{grade}</div>
        <div style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0.5rem 0" }}>
          {score} / ১০ সঠিক
        </div>
        <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
          {score === 10
            ? "অসাধারণ! সব প্রশ্নের সঠিক উত্তর দিয়েছেন।"
            : score >= 7
            ? "খুব ভালো! আরও একটু অনুশীলন করুন।"
            : "চিন্তা নেই! বিষয়টি আবার পড়ে কুইজ দিন।"}
        </p>

        {/* Per-question breakdown */}
        <div style={{ textAlign: "left", marginBottom: "2rem" }}>
          {questions.map((qq, i) => {
            const correct = answers[i] === qq.answer;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  background: correct ? "#f0fdf4" : "#fef2f2",
                  marginBottom: "0.5rem",
                  border: `1px solid ${correct ? "#bbf7d0" : "#fecaca"}`,
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{correct ? "✅" : "❌"}</span>
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1f2937" }}>
                    {i + 1}. {qq.q}
                  </div>
                  {!correct && (
                    <div style={{ fontSize: "0.8rem", color: "#16a34a", marginTop: "0.25rem" }}>
                      সঠিক উত্তর: {qq.options[qq.answer]}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={startQuiz} style={btnStyle("#2563eb")}>
          আবার চেষ্টা করুন
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>
          প্রশ্ন {current + 1} / ১০
        </span>
        <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>
          {answers.filter((a) => a !== null).length} উত্তর দেওয়া হয়েছে
        </span>
      </div>
      <div style={{ height: "6px", background: "#e5e7eb", borderRadius: "99px", marginBottom: "1.5rem" }}>
        <div
          style={{
            height: "100%",
            width: `${((current + 1) / 10) * 100}%`,
            background: "#2563eb",
            borderRadius: "99px",
            transition: "width 0.3s",
          }}
        />
      </div>

      {/* Question */}
      <div
        style={{
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "0.75rem",
          padding: "1.25rem",
          marginBottom: "1.25rem",
          fontWeight: 600,
          fontSize: "1.05rem",
          color: "#1e293b",
          lineHeight: 1.6,
        }}
      >
        {current + 1}. {q.q}
      </div>

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.25rem" }}>
        {q.options.map((opt, i) => {
          let bg = "#ffffff";
          let border = "#d1d5db";
          let color = "#374151";

          if (selected !== null) {
            if (i === q.answer) { bg = "#f0fdf4"; border = "#86efac"; color = "#15803d"; }
            else if (i === selected && i !== q.answer) { bg = "#fef2f2"; border = "#fca5a5"; color = "#b91c1c"; }
            else { bg = "#f9fafb"; color = "#9ca3af"; }
          } else {
            // hoverable — handled via inline style only (no CSS class)
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.875rem 1rem",
                borderRadius: "0.625rem",
                border: `2px solid ${border}`,
                background: bg,
                color,
                textAlign: "left",
                cursor: selected !== null ? "default" : "pointer",
                fontSize: "0.95rem",
                fontWeight: 500,
                transition: "all 0.15s",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "1.75rem",
                  height: "1.75rem",
                  borderRadius: "50%",
                  background: i === q.answer && selected !== null ? "#16a34a" : selected === i && i !== q.answer ? "#dc2626" : "#e5e7eb",
                  color: selected !== null && (i === q.answer || i === selected) ? "#fff" : "#374151",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {["ক", "খ", "গ", "ঘ"][i]}
              </span>
              {opt}
              {selected !== null && i === q.answer && <span style={{ marginLeft: "auto" }}>✓</span>}
              {selected !== null && i === selected && i !== q.answer && <span style={{ marginLeft: "auto" }}>✗</span>}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div
          style={{
            padding: "1rem",
            borderRadius: "0.625rem",
            background: isCorrect ? "#f0fdf4" : "#fef9c3",
            border: `1px solid ${isCorrect ? "#86efac" : "#fde68a"}`,
            marginBottom: "1.25rem",
            fontSize: "0.9rem",
            color: "#1e293b",
          }}
        >
          <strong>{isCorrect ? "✅ সঠিক!" : "❌ ভুল।"}</strong> {q.explanation}
        </div>
      )}

      {/* Next button */}
      {selected !== null && (
        <button onClick={next} style={btnStyle("#2563eb")}>
          {current === 9 ? "ফলাফল দেখুন →" : "পরের প্রশ্ন →"}
        </button>
      )}
    </div>
  );
}

function btnStyle(bg: string): React.CSSProperties {
  return {
    background: bg,
    color: "#fff",
    border: "none",
    borderRadius: "0.625rem",
    padding: "0.75rem 1.75rem",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
  };
}
