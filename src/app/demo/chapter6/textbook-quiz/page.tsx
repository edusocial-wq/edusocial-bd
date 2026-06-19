"use client";
import { useState } from "react";
import Link from "next/link";

const questions = [
  { q: "DBMS-এর পূর্ণরূপ কী?", options: ["Database Management System","Data Base Multiple System","Digital Base Management System","Database Manipulation System"], answer: 0, ref: "৬.১ ডেটাবেজের ধারণা", explanation: "DBMS = Database Management System — ডেটাবেজ তৈরি, সংরক্ষণ ও পরিচালনার সফটওয়্যার।" },
  { q: "SQL-এর পূর্ণরূপ কী?", options: ["Simple Query Language","Sequential Query Language","Structured Query Language","Standard Query Language"], answer: 2, ref: "৬.৩ SQL", explanation: "SQL = Structured Query Language — রিলেশনাল ডেটাবেজ পরিচালনার আন্তর্জাতিক ভাষা।" },
  { q: "ডেটাবেজে Primary Key-এর কাজ কী?", options: ["ডেটা মুছে ফেলা","প্রতিটি Record-কে অদ্বিতীয়ভাবে চিহ্নিত করা","অন্য টেবিলের সাথে সংযোগ করা","ডেটা ক্রমানুসারে সাজানো"], answer: 1, ref: "৬.৩ SQL", explanation: "Primary Key প্রতিটি Record-কে অদ্বিতীয়ভাবে চিহ্নিত করে — Null বা Duplicate হতে পারে না।" },
  { q: "রিলেশনাল মডেলে ডেটা কোথায় সংরক্ষিত থাকে?", options: ["গাছের কাঠামোতে","জালের কাঠামোতে","লিনিয়ার লিস্টে","দ্বিমাত্রিক টেবিলে (Row ও Column)"], answer: 3, ref: "৬.২ ডেটাবেজ মডেল", explanation: "Relational Model-এ ডেটা দ্বিমাত্রিক টেবিলে রাখা হয় — Row = Record, Column = Field।" },
  { q: "SQL-এ টেবিল থেকে ডেটা বের করার কমান্ড কোনটি?", options: ["INSERT","UPDATE","SELECT","DELETE"], answer: 2, ref: "৬.৩ SQL", explanation: "SELECT কমান্ড টেবিল থেকে ডেটা বের করে। গঠন: SELECT columns FROM table WHERE condition;" },
  { q: "হায়ারার্কিক্যাল মডেলের কাঠামো কেমন?", options: ["গাছের মতো Parent-Child সম্পর্ক","জালের মতো","টেবিলের মতো","বৃত্তাকার"], answer: 0, ref: "৬.২ ডেটাবেজ মডেল", explanation: "Hierarchical Model গাছের মতো — একটি Root থেকে Child Node বিস্তৃত। প্রতিটি Child-এর মাত্র একটি Parent।" },
  { q: "SQL-এ নতুন ডেটা যোগ করার কমান্ড কোনটি?", options: ["ADD INTO","PUT INTO","CREATE INTO","INSERT INTO"], answer: 3, ref: "৬.৩ SQL", explanation: "INSERT INTO Table VALUES (মান...) কমান্ড দিয়ে টেবিলে নতুন Record যোগ করা হয়।" },
  { q: "ডেটা প্রক্রিয়াকরণের পর কী হয়?", options: ["আরো ডেটা","তথ্য (Information)","কোড","ফাইল"], answer: 1, ref: "৬.১ ডেটাবেজের ধারণা", explanation: "Data → প্রক্রিয়াকরণ → Information। কাঁচামাল (Data) প্রক্রিয়া করলে অর্থবহ তথ্য (Information) পাওয়া যায়।" },
  { q: "Foreign Key কী?", options: ["অন্য টেবিলের Primary Key-র রেফারেন্স","নিজ টেবিলের Primary Key","যেকোনো Unique Field","একটি বিশেষ ধরনের Index"], answer: 0, ref: "৬.৩ SQL", explanation: "Foreign Key একটি টেবিলের সেই Field যা অন্য টেবিলের Primary Key-কে রেফার করে এবং দুটি টেবিলের মধ্যে সম্পর্ক তৈরি করে।" },
  { q: "SQL-এ বিদ্যমান ডেটা পরিবর্তন করার কমান্ড কোনটি?", options: ["MODIFY","CHANGE","ALTER","UPDATE"], answer: 3, ref: "৬.৩ SQL", explanation: "UPDATE Table SET column=মান WHERE condition — নির্দিষ্ট শর্তে ডেটা পরিবর্তন করে।" },
  { q: "নিচের কোনটি DBMS সফটওয়্যার?", options: ["MS Word","Adobe Photoshop","MySQL","Google Chrome"], answer: 2, ref: "৬.১ ডেটাবেজের ধারণা", explanation: "MySQL হলো একটি জনপ্রিয় Open-Source DBMS। MS Word ওয়ার্ড প্রসেসর, Photoshop ইমেজ এডিটর।" },
  { q: "SELECT * FROM Student WHERE Marks > 80; — এই কমান্ডে * চিহ্ন কী বোঝায়?", options: ["গুণ অপারেটর","সব কলাম নির্বাচন","সব টেবিল","শর্ত নির্দেশক"], answer: 1, ref: "৬.৩ SQL", explanation: "SELECT *-এ * মানে সব কলাম নির্বাচন। এটি ঐ টেবিলের প্রতিটি Field-এর মান দেখাবে।" },
  { q: "Entity কী?", options: ["ডেটাবেজ কমান্ড","বাস্তব জগতের বস্তু যার সম্পর্কে ডেটা রাখা হয়","একটি টেবিলের কলাম","SQL-এর ধরন"], answer: 1, ref: "৬.২ ডেটাবেজ মডেল", explanation: "Entity হলো বাস্তব জগতের বস্তু বা ধারণা যার তথ্য ডেটাবেজে রাখা হয়। যেমন: ছাত্র, শিক্ষক, পণ্য।" },
  { q: "DDL ও DML-এর মধ্যে পার্থক্য কী?", options: ["DML কাঠামো তৈরি করে","দুটি একই ধরনের কমান্ড","DDL শুধু ডেটা মুছে","DDL কাঠামো তৈরি করে, DML ডেটা পরিচালনা করে"], answer: 3, ref: "৬.৩ SQL", explanation: "DDL (Data Definition Language): CREATE, DROP, ALTER — টেবিলের কাঠামো পরিচালনা। DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE — ডেটা পরিচালনা।" },
  { q: "ডেটাবেজ ব্যবহারের সুবিধা কোনটি?", options: ["Data Redundancy হ্রাস, Security ও Sharing","ডেটা হারিয়ে যায়","একজনই ব্যবহার করতে পারে","জটিল কাঠামো"], answer: 0, ref: "৬.১ ডেটাবেজের ধারণা", explanation: "ডেটাবেজের সুবিধা: Data Redundancy হ্রাস, Data Security, Data Sharing, Data Integrity, Backup & Recovery।" },
];

const TOTAL = questions.length;

export default function Chapter6TextbookQuiz() {
  const [phase, setPhase] = useState<"idle"|"quiz"|"result">("idle");
  const [cur, setCur] = useState(0);
  const [sel, setSel] = useState<number|null>(null);
  const [ans, setAns] = useState<(number|null)[]>(Array(TOTAL).fill(null));
  const score = ans.filter((a, i) => a === questions[i].answer).length;
  function start() { setAns(Array(TOTAL).fill(null)); setCur(0); setSel(null); setPhase("quiz"); }
  function pick(i: number) { if (sel !== null) return; setSel(i); const u = [...ans]; u[cur] = i; setAns(u); }
  function next() { if (cur === TOTAL-1) setPhase("result"); else { setCur(c => c+1); setSel(null); } }
  const q = questions[cur];
  const isCorrect = sel === q?.answer;
  const grade = score >= 14 ? "A+" : score >= 12 ? "A" : score >= 11 ? "A-" : score >= 9 ? "B" : score >= 6 ? "C" : "F";
  const gc = score >= 11 ? "#16a34a" : score >= 9 ? "#d97706" : "#dc2626";
  const btn: React.CSSProperties = { background:"#0f172a",color:"#fff",border:"none",borderRadius:"0.625rem",padding:"0.75rem 1.75rem",fontSize:"1rem",fontWeight:600,cursor:"pointer" };

  if (phase === "idle") return (
    <div style={{ minHeight:"100vh", background:"#f8fafc", fontFamily:"'Noto Sans Bengali',system-ui,sans-serif", padding:"2rem 1rem" }}>
      <div style={{ maxWidth:"680px", margin:"0 auto" }}>
        <div style={{ fontSize:"0.85rem", marginBottom:"1.5rem" }}>
          <Link href="/demo/chapter6" style={{ color:"#0f172a", textDecoration:"none", fontWeight:600 }}>← অধ্যায় ৬ সূচি</Link>
        </div>
        <div style={{ background:"#0f172a", color:"#e2e8f0", borderRadius:"1rem", padding:"2.5rem", textAlign:"center" }}>
          <div style={{ fontSize:"3rem", marginBottom:"0.75rem" }}>📝</div>
          <h1 style={{ fontSize:"1.5rem", fontWeight:800, color:"#f1f5f9", margin:"0 0 0.5rem" }}>পাঠ্যবইয়ের অনুশীলনী কুইজ</h1>
          <p style={{ color:"#94a3b8", fontSize:"0.95rem", margin:"0 0 0.5rem" }}>অধ্যায় ৬: ডেটাবেজ ম্যানেজমেন্ট সিস্টেম</p>
          <p style={{ color:"#64748b", fontSize:"0.85rem", margin:"0 0 2rem" }}>NCTB HSC ICT পাঠ্যবইয়ের Chapter শেষের অনুশীলনী প্রশ্ন</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"0.75rem", marginBottom:"2rem" }}>
            {[["📊",`${TOTAL} প্রশ্ন`,"অনুশীলনী MCQ"],["📖","৩টি বিষয়","৬.১ থেকে ৬.৩"],["🎯","A+ পেতে","১৪/১৫ দরকার"]].map(([i,t,d])=>(
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
          <div style={{ fontSize:"4rem", marginBottom:"0.5rem" }}>{score>=11?"🎉":score>=9?"👍":"📚"}</div>
          <div style={{ fontSize:"3.5rem", fontWeight:800, color:gc }}>{grade}</div>
          <div style={{ fontSize:"1.75rem", fontWeight:700, color:"#f1f5f9", margin:"0.5rem 0" }}>{score} / {TOTAL} সঠিক</div>
          <p style={{ color:"#94a3b8", margin:"0 0 1.5rem" }}>{score===TOTAL?"অসাধারণ! সব সঠিক!":score>=11?"খুব ভালো!":"আরও অনুশীলন করুন।"}</p>
          <button onClick={start} style={btn}>আবার চেষ্টা করুন</button>
        </div>
        <h2 style={{ fontSize:"1.1rem", fontWeight:700, color:"#0f172a", marginBottom:"1rem" }}>প্রশ্নওয়ারী ফলাফল</h2>
        {questions.map((qq, i) => {
          const correct = ans[i] === qq.answer;
          return (
            <div key={i} style={{ background:"#fff", border:`1px solid ${correct?"#bbf7d0":"#fecaca"}`, borderLeft:`4px solid ${correct?"#16a34a":"#dc2626"}`, borderRadius:"0.75rem", padding:"1rem", marginBottom:"0.75rem" }}>
              <div style={{ display:"flex", gap:"0.5rem", alignItems:"flex-start" }}>
                <span style={{ flexShrink:0 }}>{correct?"✅":"❌"}</span>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", gap:"0.5rem", flexWrap:"wrap" }}>
                    <div style={{ fontWeight:600, color:"#1f2937", fontSize:"0.875rem" }}>{i+1}. {qq.q}</div>
                    <span style={{ fontSize:"0.72rem", background:"#f1f5f9", color:"#64748b", borderRadius:"0.375rem", padding:"0.1rem 0.4rem", whiteSpace:"nowrap", flexShrink:0 }}>{qq.ref}</span>
                  </div>
                  {!correct && <div style={{ fontSize:"0.8rem", color:"#16a34a", marginTop:"0.35rem" }}>✓ সঠিক: <strong>{qq.options[qq.answer]}</strong></div>}
                  <div style={{ fontSize:"0.8rem", color:"#64748b", marginTop:"0.35rem" }}>{qq.explanation}</div>
                </div>
              </div>
            </div>
          );
        })}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem", marginTop:"1rem" }}>
          <Link href="/demo/chapter6" style={{ color:"#0f172a", fontWeight:600, textDecoration:"none", fontSize:"0.9rem" }}>← অধ্যায় ৬ সূচি</Link>
          <button onClick={start} style={{...btn, fontSize:"0.9rem", padding:"0.625rem 1.25rem"}}>আবার দিন</button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight:"100vh", background:"#f8fafc", fontFamily:"'Noto Sans Bengali',system-ui,sans-serif", padding:"2rem 1rem" }}>
      <div style={{ maxWidth:"680px", margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.25rem", flexWrap:"wrap", gap:"0.5rem" }}>
          <Link href="/demo/chapter6" style={{ color:"#0f172a", textDecoration:"none", fontSize:"0.85rem", fontWeight:600 }}>← অধ্যায় ৬</Link>
          <span style={{ fontSize:"0.85rem", color:"#64748b" }}>প্রশ্ন {cur+1} / {TOTAL}</span>
        </div>
        <div style={{ height:"6px", background:"#e5e7eb", borderRadius:"99px", marginBottom:"1.5rem" }}>
          <div style={{ height:"100%", width:`${((cur+1)/TOTAL)*100}%`, background:"#0f172a", borderRadius:"99px", transition:"width 0.3s" }}/>
        </div>
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
        {sel !== null && <button onClick={next} style={btn}>{cur === TOTAL-1 ? "ফলাফল দেখুন →" : "পরের প্রশ্ন →"}</button>}
      </div>
    </div>
  );
}
