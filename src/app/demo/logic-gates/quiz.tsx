"use client";

import { useState } from "react";

const questions = [
  {
    q: "AND গেটে দুটি ইনপুট A=1 এবং B=0 হলে আউটপুট কত?",
    options: ["0", "1", "অনির্ধারিত", "2"],
    answer: 0,
    explanation: "AND গেটে সব ইনপুট 1 হলেই আউটপুট 1 হয়। এখানে B=0 তাই আউটপুট 0।",
  },
  {
    q: "OR গেটে A=0 এবং B=0 হলে আউটপুট কত?",
    options: ["1", "A", "0", "B"],
    answer: 2,
    explanation: "OR গেটে অন্তত একটি ইনপুট 1 হলে আউটপুট 1 হয়। উভয়ই 0 তাই আউটপুট 0।",
  },
  {
    q: "NOT গেটে ইনপুট 1 হলে আউটপুট কত?",
    options: ["1", "0", "2", "অপরিবর্তিত"],
    answer: 1,
    explanation: "NOT গেট ইনভার্টার হিসেবে কাজ করে। ইনপুট 1 হলে আউটপুট 0, আর ইনপুট 0 হলে আউটপুট 1।",
  },
  {
    q: "NAND গেটে A=1 এবং B=1 হলে আউটপুট কত?",
    options: ["1", "AND এর মতো", "OR এর মতো", "0"],
    answer: 3,
    explanation: "NAND = NOT + AND। AND এর আউটপুট হতো 1, NOT করলে হয় 0। তাই আউটপুট 0।",
  },
  {
    q: "NOR গেটে A=0 এবং B=0 হলে আউটপুট কত?",
    options: ["0", "অনির্ধারিত", "1", "A+B"],
    answer: 2,
    explanation: "NOR = NOT + OR। OR(0,0)=0, NOT(0)=1। তাই আউটপুট 1।",
  },
  {
    q: "XOR গেটে A=1 এবং B=1 হলে আউটপুট কত?",
    options: ["0", "1", "2", "A"],
    answer: 0,
    explanation: "XOR (exclusive OR) আউটপুট 1 হয় শুধুমাত্র যখন ইনপুটগুলো ভিন্ন হয়। A=B=1 হওয়ায় আউটপুট 0।",
  },
  {
    q: "কোন গেটকে 'Universal Gate' বলা হয়?",
    options: ["শুধু AND", "শুধু OR", "XOR", "NAND ও NOR উভয়কে"],
    answer: 3,
    explanation: "NAND এবং NOR উভয় গেট দিয়েই যেকোনো লজিক সার্কিট তৈরি করা যায়, তাই এদের Universal Gate বলে।",
  },
  {
    q: "AND গেটের বুলিয়ান এক্সপ্রেশন কোনটি?",
    options: ["Y = A + B", "Y = A · B", "Y = Ā", "Y = A ⊕ B"],
    answer: 1,
    explanation: "AND গেটের এক্সপ্রেশন Y = A · B (A AND B)। · চিহ্ন গুণ অর্থাৎ AND অপারেশন বোঝায়।",
  },
  {
    q: "XOR গেটে A=1 এবং B=0 হলে আউটপুট কত?",
    options: ["1", "0", "A", "B"],
    answer: 0,
    explanation: "XOR আউটপুট 1 হয় যখন ইনপুটগুলো ভিন্ন। A=1 ও B=0 ভিন্ন, তাই আউটপুট 1।",
  },
  {
    q: "কোন গেটে সব ইনপুট 0 হলেও আউটপুট 1 হয়?",
    options: ["OR", "AND", "XOR", "NOR"],
    answer: 3,
    explanation: "NOR গেটে সব ইনপুট 0 হলে OR(0,0)=0, তারপর NOT(0)=1। একমাত্র NOR-এ এটা হয়।",
  },
];

export default function LogicGatesQuiz() {
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
    if (selected !== null) return;
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
  const grade = score >= 9 ? "A+" : score >= 8 ? "A" : score >= 7 ? "A-" : score >= 5 ? "B" : score >= 3 ? "C" : "F";
  const gradeColor = score >= 7 ? "#16a34a" : score >= 5 ? "#d97706" : "#dc2626";

  if (phase === "idle") {
    return (
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
          ১০টি MCQ প্রশ্ন — প্রতিটি উত্তরের পর ব্যাখ্যা দেখুন
        </p>
        <button onClick={startQuiz} style={btn("#7c3aed")}>কুইজ শুরু করুন →</button>
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
        <div style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0.5rem 0" }}>{score} / ১০ সঠিক</div>
        <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
          {score === 10 ? "অসাধারণ! পারফেক্ট স্কোর!" : score >= 7 ? "খুব ভালো!" : "আরও অনুশীলন করুন।"}
        </p>
        <div style={{ textAlign: "left", marginBottom: "2rem" }}>
          {questions.map((qq, i) => {
            const correct = answers[i] === qq.answer;
            return (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "0.75rem",
                padding: "0.75rem", borderRadius: "0.5rem", marginBottom: "0.5rem",
                background: correct ? "#f0fdf4" : "#fef2f2",
                border: `1px solid ${correct ? "#bbf7d0" : "#fecaca"}`,
              }}>
                <span style={{ fontSize: "1.1rem" }}>{correct ? "✅" : "❌"}</span>
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1f2937" }}>{i + 1}. {qq.q}</div>
                  {!correct && (
                    <div style={{ fontSize: "0.8rem", color: "#16a34a", marginTop: "0.25rem" }}>
                      সঠিক: {qq.options[qq.answer]}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={startQuiz} style={btn("#7c3aed")}>আবার চেষ্টা করুন</button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
        <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>প্রশ্ন {current + 1} / ১০</span>
        <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>{answers.filter(a => a !== null).length} উত্তর দেওয়া</span>
      </div>
      <div style={{ height: "6px", background: "#e5e7eb", borderRadius: "99px", marginBottom: "1.5rem" }}>
        <div style={{ height: "100%", width: `${((current + 1) / 10) * 100}%`, background: "#7c3aed", borderRadius: "99px", transition: "width 0.3s" }} />
      </div>

      <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: "0.75rem", padding: "1.25rem", marginBottom: "1.25rem", fontWeight: 600, fontSize: "1.05rem", color: "#1e293b", lineHeight: 1.6 }}>
        {current + 1}. {q.q}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.25rem" }}>
        {q.options.map((opt, i) => {
          let bg = "#ffffff", border = "#d1d5db", color = "#374151";
          if (selected !== null) {
            if (i === q.answer) { bg = "#f0fdf4"; border = "#86efac"; color = "#15803d"; }
            else if (i === selected && i !== q.answer) { bg = "#fef2f2"; border = "#fca5a5"; color = "#b91c1c"; }
            else { bg = "#f9fafb"; color = "#9ca3af"; }
          }
          return (
            <button key={i} onClick={() => handleSelect(i)} disabled={selected !== null}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.875rem 1rem", borderRadius: "0.625rem", border: `2px solid ${border}`, background: bg, color, textAlign: "left", cursor: selected !== null ? "default" : "pointer", fontSize: "0.95rem", fontWeight: 500 }}>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "1.75rem", height: "1.75rem", borderRadius: "50%", background: i === q.answer && selected !== null ? "#16a34a" : selected === i && i !== q.answer ? "#dc2626" : "#e5e7eb", color: selected !== null && (i === q.answer || i === selected) ? "#fff" : "#374151", fontSize: "0.8rem", fontWeight: 700, flexShrink: 0 }}>
                {["ক", "খ", "গ", "ঘ"][i]}
              </span>
              {opt}
              {selected !== null && i === q.answer && <span style={{ marginLeft: "auto" }}>✓</span>}
              {selected !== null && i === selected && i !== q.answer && <span style={{ marginLeft: "auto" }}>✗</span>}
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div style={{ padding: "1rem", borderRadius: "0.625rem", background: isCorrect ? "#f0fdf4" : "#fef9c3", border: `1px solid ${isCorrect ? "#86efac" : "#fde68a"}`, marginBottom: "1.25rem", fontSize: "0.9rem", color: "#1e293b" }}>
          <strong>{isCorrect ? "✅ সঠিক!" : "❌ ভুল।"}</strong> {q.explanation}
        </div>
      )}

      {selected !== null && (
        <button onClick={next} style={btn("#7c3aed")}>
          {current === 9 ? "ফলাফল দেখুন →" : "পরের প্রশ্ন →"}
        </button>
      )}
    </div>
  );
}

function btn(bg: string): React.CSSProperties {
  return { background: bg, color: "#fff", border: "none", borderRadius: "0.625rem", padding: "0.75rem 1.75rem", fontSize: "1rem", fontWeight: 600, cursor: "pointer" };
}
