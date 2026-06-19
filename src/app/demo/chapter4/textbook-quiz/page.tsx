"use client";
import { useState } from "react";
import Link from "next/link";

/* ──────────────────────────────────────────────────
   NCTB HSC ICT Chapter 4 — পাঠ্যবইয়ের অনুশীলনী MCQ
   ──────────────────────────────────────────────────*/
const questions = [
  {
    q: "HTML-কে কী ধরনের ভাষা বলা হয়?",
    options: ["মার্কআপ ভাষা","প্রোগ্রামিং ভাষা","অ্যাসেম্বলি ভাষা","কম্পাইলড ভাষা"],
    answer: 0,
    ref: "৪.২ HTML",
    explanation: "HTML একটি Markup Language, Programming Language নয়। ট্যাগ দিয়ে কনটেন্ট চিহ্নিত করা হয়।",
  },
  {
    q: "নিচের কোনটি ওয়েব পেজের মূল ভাষা?",
    options: ["C++","Python","HTML","Assembly"],
    answer: 2,
    ref: "৪.২ HTML",
    explanation: "HTML (HyperText Markup Language) ওয়েব পেজ তৈরির মূল ভাষা।",
  },
  {
    q: "URL-এর পূর্ণরূপ হলো —",
    options: ["Universal Reference Link","Uniform Resource Locator","Uniform Reference Locator","United Resource Location"],
    answer: 1,
    ref: "৪.১ ওয়েব ধারণা",
    explanation: "URL = Uniform Resource Locator। ইন্টারনেটে রিসোর্সের ঠিকানা নির্দেশ করে।",
  },
  {
    q: "HTML ট্যাগ কোন বন্ধনীর মধ্যে লেখা হয়?",
    options: ["{ } (Curly brace)","[ ] (Square bracket)","( ) (Parenthesis)","< > (Angular bracket)"],
    answer: 3,
    ref: "৪.২ HTML",
    explanation: "HTML ট্যাগ সবসময় < > অ্যাঙ্গুলার ব্র্যাকেটের মধ্যে লেখা হয়। যেমন: <p>, <h1>।",
  },
  {
    q: "CSS-এর পূর্ণরূপ হলো —",
    options: ["Computer Style Sheets","Colored Style Sheets","Cascading Style Sheets","Creative Style Sheets"],
    answer: 2,
    ref: "৪.৩ CSS",
    explanation: "CSS = Cascading Style Sheets। ওয়েব পেজের উপস্থাপনা নিয়ন্ত্রণ করে।",
  },
  {
    q: "HTML ডকুমেন্ট শুরু হয় কোন ট্যাগ দিয়ে?",
    options: ["<!DOCTYPE html>","<html>","<head>","<start>"],
    answer: 0,
    ref: "৪.২ HTML",
    explanation: "<!DOCTYPE html> দিয়ে HTML5 ডকুমেন্ট ঘোষণা করা হয়। এটি ব্রাউজারকে জানায় এটি HTML5 ডকুমেন্ট।",
  },
  {
    q: "ওয়েব পেজে হাইপারলিংক তৈরিতে কোন ট্যাগ ব্যবহার হয়?",
    options: ["<link>","<hyper>","<connect>","<a>"],
    answer: 3,
    ref: "৪.২ HTML",
    explanation: "<a href='url'> ট্যাগ দিয়ে হাইপারলিংক তৈরি হয়। 'a' = anchor।",
  },
  {
    q: "CSS-এ Class Selector লেখার সঠিক নিয়ম কোনটি?",
    options: ["#className { }",".className { }","className { }","*className { }"],
    answer: 1,
    ref: "৪.৩ CSS",
    explanation: "CSS Class Selector . (ডট) দিয়ে শুরু হয়। যেমন: .myClass { color: blue; }।",
  },
  {
    q: "JavaScript-এ কোনো উপাদানে ক্লিক করলে কোন Event ঘটে?",
    options: ["onclick","onload","onchange","onmouseover"],
    answer: 0,
    ref: "৪.৪ JavaScript",
    explanation: "onclick Event তখনই ঘটে যখন ব্যবহারকারী HTML উপাদানে মাউস দিয়ে ক্লিক করে।",
  },
  {
    q: "HTTP-এর পূর্ণরূপ হলো —",
    options: ["High Text Transmission Protocol","HyperText Transport Protocol","HyperLink Transfer Protocol","HyperText Transfer Protocol"],
    answer: 3,
    ref: "৪.১ ওয়েব ধারণা",
    explanation: "HTTP = HyperText Transfer Protocol। ওয়েব ক্লায়েন্ট ও সার্ভারের মধ্যে ডেটা আদান-প্রদানের প্রোটোকল।",
  },
  {
    q: "HTML-এ টেবিলের একটি সারি তৈরিতে কোন ট্যাগ ব্যবহার হয়?",
    options: ["<td>","<table>","<tr>","<row>"],
    answer: 2,
    ref: "৪.২ HTML",
    explanation: "<tr> = Table Row। প্রতিটি সারি <tr> দিয়ে এবং প্রতিটি ঘর <td> বা <th> দিয়ে তৈরি হয়।",
  },
  {
    q: "ওয়েব পেজ ব্রাউজারে দেখার সফটওয়্যার কোনটি?",
    options: ["Web Server","Web Browser","Notepad","Compiler"],
    answer: 1,
    ref: "৪.১ ওয়েব ধারণা",
    explanation: "Web Browser (Chrome, Firefox, Edge) HTML পার্স করে ব্যবহারকারীর কাছে ওয়েব পেজ প্রদর্শন করে।",
  },
  {
    q: "CSS Box Model-এ Margin কোথায় থাকে?",
    options: ["Content-এর ভেতরে","সবচেয়ে বাইরে","Border-এর ভেতরে","Padding-এর বাইরে, Border-এর ভেতরে"],
    answer: 1,
    ref: "৪.৩ CSS",
    explanation: "Box Model: Content → Padding → Border → Margin। Margin সবচেয়ে বাইরে — উপাদানগুলোর মধ্যে দূরত্ব তৈরি করে।",
  },
  {
    q: "JavaScript-এ পরিবর্তন করা যায় না এমন ভেরিয়েবল কোনটি দিয়ে ঘোষণা করা হয়?",
    options: ["var","let","fixed","const"],
    answer: 3,
    ref: "৪.৪ JavaScript",
    explanation: "const দিয়ে ঘোষিত ভেরিয়েবলের মান পরিবর্তন করা যায় না। পুনরায় মান দিলে TypeError হয়।",
  },
  {
    q: "HTML-এ ছবি যোগ করতে src attribute কোথায় ব্যবহার হয়?",
    options: ["<img> ট্যাগে","<a> ট্যাগে","<p> ট্যাগে","<div> ট্যাগে"],
    answer: 0,
    ref: "৪.২ HTML",
    explanation: "<img src='photo.jpg' alt='বিবরণ'> — src attribute <img> ট্যাগে ছবির ফাইলের পথ নির্দেশ করে।",
  },
];

const TOTAL = questions.length;

export default function TextbookQuizPage() {
  const [phase, setPhase] = useState<"idle"|"quiz"|"result">("idle");
  const [cur, setCur] = useState(0);
  const [sel, setSel] = useState<number|null>(null);
  const [ans, setAns] = useState<(number|null)[]>(Array(TOTAL).fill(null));

  const score = ans.filter((a, i) => a === questions[i].answer).length;

  function start() { setAns(Array(TOTAL).fill(null)); setCur(0); setSel(null); setPhase("quiz"); }
  function pick(i: number) {
    if (sel !== null) return;
    setSel(i);
    const u = [...ans]; u[cur] = i; setAns(u);
  }
  function next() {
    if (cur === TOTAL - 1) setPhase("result");
    else { setCur(c => c + 1); setSel(null); }
  }

  const q = questions[cur];
  const isCorrect = sel === q?.answer;
  const grade = score >= 14 ? "A+" : score >= 12 ? "A" : score >= 11 ? "A-" : score >= 9 ? "B" : score >= 6 ? "C" : "F";
  const gc = score >= 11 ? "#16a34a" : score >= 9 ? "#d97706" : "#dc2626";

  const btn: React.CSSProperties = { background:"#0f172a",color:"#fff",border:"none",borderRadius:"0.625rem",padding:"0.75rem 1.75rem",fontSize:"1rem",fontWeight:600,cursor:"pointer" };

  if (phase === "idle") return (
    <div style={{ minHeight:"100vh", background:"#f8fafc", fontFamily:"'Noto Sans Bengali',system-ui,sans-serif", padding:"2rem 1rem" }}>
      <div style={{ maxWidth:"680px", margin:"0 auto" }}>
        <div style={{ fontSize:"0.85rem", marginBottom:"1.5rem" }}>
          <Link href="/demo/chapter4" style={{ color:"#0f172a", textDecoration:"none", fontWeight:600 }}>← অধ্যায় ৪ সূচি</Link>
        </div>
        <div style={{ background:"#0f172a", color:"#e2e8f0", borderRadius:"1rem", padding:"2.5rem", textAlign:"center" }}>
          <div style={{ fontSize:"3rem", marginBottom:"0.75rem" }}>📝</div>
          <h1 style={{ fontSize:"1.5rem", fontWeight:800, color:"#f1f5f9", margin:"0 0 0.5rem" }}>পাঠ্যবইয়ের অনুশীলনী কুইজ</h1>
          <p style={{ color:"#94a3b8", fontSize:"0.95rem", margin:"0 0 0.5rem" }}>অধ্যায় ৪: ওয়েব ডিজাইন পরিচিতি</p>
          <p style={{ color:"#64748b", fontSize:"0.85rem", margin:"0 0 2rem" }}>NCTB HSC ICT পাঠ্যবইয়ের Chapter শেষের অনুশীলনী প্রশ্ন</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"0.75rem", marginBottom:"2rem" }}>
            {[["📊",`${TOTAL} প্রশ্ন`,"অনুশীলনী MCQ"],["📖","৪টি বিষয়","৪.১ থেকে ৪.৪"],["🎯","A+ পেতে","১৪/১৫ দরকার"]].map(([i,t,d])=>(
              <div key={t} style={{ background:"#1e293b", borderRadius:"0.75rem", padding:"1rem" }}>
                <div style={{ fontSize:"1.5rem" }}>{i}</div>
                <div style={{ fontWeight:700, color:"#f1f5f9", fontSize:"0.9rem", margin:"0.25rem 0" }}>{t}</div>
                <div style={{ fontSize:"0.75rem", color:"#64748b" }}>{d}</div>
              </div>
            ))}
          </div>
          <button onClick={start} style={btn}>কুইজ শুরু করুন →</button>
        </div>
      </div>
    </div>
  );

  if (phase === "result") return (
    <div style={{ minHeight:"100vh", background:"#f8fafc", fontFamily:"'Noto Sans Bengali',system-ui,sans-serif", padding:"2rem 1rem" }}>
      <div style={{ maxWidth:"680px", margin:"0 auto" }}>
        <div style={{ background:"#0f172a", borderRadius:"1rem", padding:"2rem", textAlign:"center", marginBottom:"2rem" }}>
          <div style={{ fontSize:"4rem", marginBottom:"0.5rem" }}>{score >= 11 ? "🎉" : score >= 9 ? "👍" : "📚"}</div>
          <div style={{ fontSize:"3.5rem", fontWeight:800, color:gc }}>{grade}</div>
          <div style={{ fontSize:"1.75rem", fontWeight:700, color:"#f1f5f9", margin:"0.5rem 0" }}>{score} / {TOTAL} সঠিক</div>
          <p style={{ color:"#94a3b8", margin:"0 0 1.5rem" }}>
            {score === TOTAL ? "অসাধারণ! সব প্রশ্ন সঠিক!" : score >= 11 ? "খুব ভালো করেছেন!" : "আরও অনুশীলন করুন।"}
          </p>
          <button onClick={start} style={btn}>আবার চেষ্টা করুন</button>
        </div>

        <div style={{ marginBottom:"2rem" }}>
          <h2 style={{ fontSize:"1.1rem", fontWeight:700, color:"#0f172a", marginBottom:"1rem" }}>প্রশ্নওয়ারী ফলাফল</h2>
          {questions.map((qq, i) => {
            const correct = ans[i] === qq.answer;
            return (
              <div key={i} style={{ background:"#fff", border:`1px solid ${correct?"#bbf7d0":"#fecaca"}`, borderLeft:`4px solid ${correct?"#16a34a":"#dc2626"}`, borderRadius:"0.75rem", padding:"1rem", marginBottom:"0.75rem" }}>
                <div style={{ display:"flex", gap:"0.5rem", alignItems:"flex-start" }}>
                  <span style={{ fontSize:"1rem", flexShrink:0 }}>{correct?"✅":"❌"}</span>
                  <div style={{ flex:1 }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:"0.5rem", flexWrap:"wrap" }}>
                      <div style={{ fontWeight:600, color:"#1f2937", fontSize:"0.875rem" }}>{i+1}. {qq.q}</div>
                      <span style={{ fontSize:"0.72rem", background:"#f1f5f9", color:"#64748b", borderRadius:"0.375rem", padding:"0.1rem 0.4rem", whiteSpace:"nowrap", flexShrink:0 }}>{qq.ref}</span>
                    </div>
                    {!correct && (
                      <div style={{ fontSize:"0.8rem", color:"#16a34a", marginTop:"0.35rem" }}>
                        ✓ সঠিক উত্তর: <strong>{qq.options[qq.answer]}</strong>
                      </div>
                    )}
                    <div style={{ fontSize:"0.8rem", color:"#64748b", marginTop:"0.35rem" }}>{qq.explanation}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem" }}>
          <Link href="/demo/chapter4" style={{ color:"#0f172a", fontWeight:600, textDecoration:"none", fontSize:"0.9rem" }}>← অধ্যায় ৪ সূচি</Link>
          <button onClick={start} style={{...btn, fontSize:"0.9rem", padding:"0.625rem 1.25rem"}}>আবার দিন</button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight:"100vh", background:"#f8fafc", fontFamily:"'Noto Sans Bengali',system-ui,sans-serif", padding:"2rem 1rem" }}>
      <div style={{ maxWidth:"680px", margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.25rem", flexWrap:"wrap", gap:"0.5rem" }}>
          <Link href="/demo/chapter4" style={{ color:"#0f172a", textDecoration:"none", fontSize:"0.85rem", fontWeight:600 }}>← অধ্যায় ৪</Link>
          <span style={{ fontSize:"0.85rem", color:"#64748b" }}>প্রশ্ন {cur+1} / {TOTAL}</span>
        </div>

        {/* progress */}
        <div style={{ height:"6px", background:"#e5e7eb", borderRadius:"99px", marginBottom:"1.5rem" }}>
          <div style={{ height:"100%", width:`${((cur+1)/TOTAL)*100}%`, background:"#0f172a", borderRadius:"99px", transition:"width 0.3s" }}/>
        </div>

        {/* topic ref badge */}
        <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.75rem" }}>
          <span style={{ fontSize:"0.72rem", background:"#1e293b", color:"#94a3b8", borderRadius:"0.375rem", padding:"0.2rem 0.5rem" }}>📖 {q.ref}</span>
          <span style={{ fontSize:"0.72rem", color:"#94a3b8" }}>পাঠ্যবইয়ের অনুশীলনী</span>
        </div>

        <div style={{ background:"#1e293b", color:"#f1f5f9", borderRadius:"0.875rem", padding:"1.5rem", marginBottom:"1.25rem", fontWeight:600, fontSize:"1.05rem", lineHeight:1.7 }}>
          {cur+1}. {q.q}
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:"0.625rem", marginBottom:"1.25rem" }}>
          {q.options.map((opt, i) => {
            let bg="#fff", border="#e2e8f0", color="#374151";
            if (sel !== null) {
              if (i === q.answer) { bg="#f0fdf4"; border="#86efac"; color="#15803d"; }
              else if (i === sel && i !== q.answer) { bg="#fef2f2"; border="#fca5a5"; color="#b91c1c"; }
              else { bg="#f9fafb"; color="#9ca3af"; }
            }
            return (
              <button key={i} onClick={() => pick(i)} disabled={sel !== null}
                style={{ display:"flex", alignItems:"center", gap:"0.75rem", padding:"0.875rem 1rem", borderRadius:"0.75rem", border:`2px solid ${border}`, background:bg, color, textAlign:"left", cursor:sel!==null?"default":"pointer", fontSize:"0.95rem", fontWeight:500 }}>
                <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:"1.75rem", height:"1.75rem", borderRadius:"50%", background:i===q.answer&&sel!==null?"#16a34a":sel===i&&i!==q.answer?"#dc2626":"#1e293b", color:"#f1f5f9", fontSize:"0.8rem", fontWeight:700, flexShrink:0 }}>
                  {["ক","খ","গ","ঘ"][i]}
                </span>
                {opt}
                {sel!==null && i===q.answer && <span style={{ marginLeft:"auto" }}>✓</span>}
                {sel!==null && i===sel && i!==q.answer && <span style={{ marginLeft:"auto" }}>✗</span>}
              </button>
            );
          })}
        </div>

        {sel !== null && (
          <div style={{ padding:"1rem", borderRadius:"0.75rem", background:isCorrect?"#f0fdf4":"#fef9c3", border:`1px solid ${isCorrect?"#86efac":"#fde68a"}`, marginBottom:"1.25rem", fontSize:"0.9rem", color:"#1e293b" }}>
            <strong>{isCorrect ? "✅ সঠিক!" : "❌ ভুল।"}</strong> {q.explanation}
          </div>
        )}

        {sel !== null && (
          <button onClick={next} style={btn}>
            {cur === TOTAL-1 ? "ফলাফল দেখুন →" : "পরের প্রশ্ন →"}
          </button>
        )}
      </div>
    </div>
  );
}
