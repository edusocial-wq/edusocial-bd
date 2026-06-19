"use client";
import { useState } from "react";
import Link from "next/link";

const questions = [
  { q: "C প্রোগ্রামের শুরু হয় কোন ফাংশন থেকে?", options: ["main()","start()","begin()","init()"], answer: 0, ref: "৫.৩ C প্রোগ্রামিং", explanation: "প্রতিটি C প্রোগ্রাম main() ফাংশন থেকে শুরু হয়। এটি বাধ্যতামূলক।" },
  { q: "কম্পাইলার ও ইন্টারপ্রেটারের মধ্যে মূল পার্থক্য কী?", options: ["ইন্টারপ্রেটার দ্রুততর","কম্পাইলার লাইন ধরে ধরে অনুবাদ করে","কম্পাইলার পুরো প্রোগ্রাম একসাথে অনুবাদ করে","কোনো পার্থক্য নেই"], answer: 2, ref: "৫.১ ভাষার ধারণা", explanation: "Compiler পুরো Source Code একসাথে Object Code-এ রূপান্তর করে। Interpreter লাইন ধরে ধরে তাৎক্ষণিক কার্যকর করে।" },
  { q: "ফ্লোচার্টে Decision বোঝাতে কোন আকৃতি ব্যবহার হয়?", options: ["আয়তক্ষেত্র","হীরা (Diamond)","ডিম্বাকার","সমান্তরালবাহু"], answer: 1, ref: "৫.২ ডিজাইন টুলস", explanation: "হীরা (◇) বা Diamond আকৃতি ফ্লোচার্টে Decision বা শর্ত বোঝায়।" },
  { q: "C ভাষায় পূর্ণসংখ্যার ডেটা টাইপ কোনটি?", options: ["float","char","string","int"], answer: 3, ref: "৫.৩ C প্রোগ্রামিং", explanation: "int = Integer (পূর্ণসংখ্যা)। float = দশমিক। char = একটি অক্ষর।" },
  { q: "অ্যাসেম্বলি ভাষাকে মেশিন ভাষায় রূপান্তরকারী প্রোগ্রামটির নাম কী?", options: ["Compiler","Interpreter","Assembler","Linker"], answer: 2, ref: "৫.১ ভাষার ধারণা", explanation: "Assembler হলো সেই ট্রান্সলেটর যা Assembly Language (mnemonics) কে Machine Language-এ রূপান্তর করে।" },
  { q: "C ভাষায় স্ক্রিনে আউটপুট দেওয়ার ফাংশন কোনটি?", options: ["printf()","print()","cout","output()"], answer: 0, ref: "৫.৩ C প্রোগ্রামিং", explanation: "printf() — C ভাষায় formatted আউটপুটের প্রধান ফাংশন। যেমন: printf(\"সংখ্যা: %d\", n);" },
  { q: "অ্যালগরিদমের কোন বৈশিষ্ট্যটি নিশ্চিত করে যে এটি একসময় শেষ হবে?", options: ["Definiteness","Effectiveness","Input","Finiteness"], answer: 3, ref: "৫.২ ডিজাইন টুলস", explanation: "Finiteness মানে অ্যালগরিদম নির্দিষ্ট সংখ্যক ধাপের পর অবশ্যই শেষ হবে — অসীম চলবে না।" },
  { q: "C প্রোগ্রামে for লুপের সঠিক গঠন কোনটি?", options: ["for(condition)","for(init; condition; update)","for(init, condition, update)","loop(init; condition)"], answer: 1, ref: "৫.৩ C প্রোগ্রামিং", explanation: "for লুপের গঠন: for(initialization; condition; update) { body }। তিনটি অংশ সেমিকোলন দিয়ে আলাদা।" },
  { q: "কোন প্রজন্মের ভাষায় মানুষের ভাষার সবচেয়ে কাছাকাছি?", options: ["5GL (পঞ্চম প্রজন্ম)","1GL (প্রথম প্রজন্ম)","2GL (দ্বিতীয় প্রজন্ম)","3GL (তৃতীয় প্রজন্ম)"], answer: 0, ref: "৫.১ ভাষার ধারণা", explanation: "5GL (পঞ্চম প্রজন্ম) সবচেয়ে মানব-ভাষার কাছাকাছি। AI ও Expert System-এ ব্যবহৃত হয়।" },
  { q: "C ভাষায় scanf() ফাংশনে ভেরিয়েবলের আগে কোন চিহ্ন দিতে হয়?", options: ["* (তারকা)","# (হ্যাশ)","@ (এট)","& (এম্পারস্যান্ড)"], answer: 3, ref: "৫.৩ C প্রোগ্রামিং", explanation: "scanf(\"%d\", &n) — & হলো Address-of operator যা ভেরিয়েবলের মেমোরি ঠিকানা দেয়। scanf এই ঠিকানায় মান সংরক্ষণ করে।" },
  { q: "ফ্লোচার্টে Start ও End বোঝানো হয় কোন আকৃতিতে?", options: ["আয়তক্ষেত্র","হীরা","ডিম্বাকার বা Terminal","সমান্তরালবাহু"], answer: 2, ref: "৫.২ ডিজাইন টুলস", explanation: "ডিম্বাকার (Oval) বা Terminal চিহ্ন দিয়ে ফ্লোচার্টের Start ও End বোঝানো হয়।" },
  { q: "C ভাষায় Array-এর সূচক (index) কত থেকে শুরু হয়?", options: ["1","0","−1","-1 বা 0"], answer: 1, ref: "৫.৩ C প্রোগ্রামিং", explanation: "C-তে (এবং বেশিরভাগ প্রোগ্রামিং ভাষায়) Array-এর index 0 থেকে শুরু। int a[5] হলে সূচক: a[0] থেকে a[4]।" },
  { q: "C ভাষার জনক কে?", options: ["Linus Torvalds","Dennis Ritchie","Bill Gates","Bjarne Stroustrup"], answer: 1, ref: "৫.৩ C প্রোগ্রামিং", explanation: "C ভাষা ১৯৭২ সালে Dennis Ritchie Bell Labs-এ তৈরি করেন। Bjarne Stroustrup C++ তৈরি করেন।" },
  { q: "নিয়ন্ত্রণ কাঠামো কত ধরনের?", options: ["২ ধরনের","৪ ধরনের","৫ ধরনের","৩ ধরনের — Sequence, Selection, Iteration"], answer: 3, ref: "৫.২ ডিজাইন টুলস", explanation: "তিন ধরনের: ১. Sequence (ধারাবাহিক), ২. Selection (if-else/switch), ৩. Iteration (for/while/do-while)।" },
  { q: "do-while লুপ ও while লুপের মূল পার্থক্য কী?", options: ["do-while কমপক্ষে একবার চলে, while একবারও না চলতে পারে","while দ্রুততর","do-while শুধু গণনায়","কোনো পার্থক্য নেই"], answer: 0, ref: "৫.৩ C প্রোগ্রামিং", explanation: "do-while: শর্ত শেষে চেক হয় — কমপক্ষে একবার চলে। while: শর্ত শুরুতে চেক — শর্ত মিথ্যা হলে একবারও নাও চলতে পারে।" },
];

const TOTAL = questions.length;

export default function Chapter5TextbookQuiz() {
  const [phase, setPhase] = useState<"idle"|"quiz"|"result">("idle");
  const [cur, setCur] = useState(0);
  const [sel, setSel] = useState<number|null>(null);
  const [ans, setAns] = useState<(number|null)[]>(Array(TOTAL).fill(null));

  const score = ans.filter((a, i) => a === questions[i].answer).length;
  function start() { setAns(Array(TOTAL).fill(null)); setCur(0); setSel(null); setPhase("quiz"); }
  function pick(i: number) { if (sel !== null) return; setSel(i); const u = [...ans]; u[cur] = i; setAns(u); }
  function next() { if (cur === TOTAL - 1) setPhase("result"); else { setCur(c => c + 1); setSel(null); } }

  const q = questions[cur];
  const isCorrect = sel === q?.answer;
  const grade = score >= 14 ? "A+" : score >= 12 ? "A" : score >= 11 ? "A-" : score >= 9 ? "B" : score >= 6 ? "C" : "F";
  const gc = score >= 11 ? "#16a34a" : score >= 9 ? "#d97706" : "#dc2626";

  const btn: React.CSSProperties = { background:"#0f172a",color:"#fff",border:"none",borderRadius:"0.625rem",padding:"0.75rem 1.75rem",fontSize:"1rem",fontWeight:600,cursor:"pointer" };

  if (phase === "idle") return (
    <div style={{ minHeight:"100vh", background:"#f8fafc", fontFamily:"'Noto Sans Bengali',system-ui,sans-serif", padding:"2rem 1rem" }}>
      <div style={{ maxWidth:"680px", margin:"0 auto" }}>
        <div style={{ fontSize:"0.85rem", marginBottom:"1.5rem" }}>
          <Link href="/demo/chapter5" style={{ color:"#0f172a", textDecoration:"none", fontWeight:600 }}>← অধ্যায় ৫ সূচি</Link>
        </div>
        <div style={{ background:"#0f172a", color:"#e2e8f0", borderRadius:"1rem", padding:"2.5rem", textAlign:"center" }}>
          <div style={{ fontSize:"3rem", marginBottom:"0.75rem" }}>📝</div>
          <h1 style={{ fontSize:"1.5rem", fontWeight:800, color:"#f1f5f9", margin:"0 0 0.5rem" }}>পাঠ্যবইয়ের অনুশীলনী কুইজ</h1>
          <p style={{ color:"#94a3b8", fontSize:"0.95rem", margin:"0 0 0.5rem" }}>অধ্যায় ৫: প্রোগ্রামিং ভাষা</p>
          <p style={{ color:"#64748b", fontSize:"0.85rem", margin:"0 0 2rem" }}>NCTB HSC ICT পাঠ্যবইয়ের Chapter শেষের অনুশীলনী প্রশ্ন</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"0.75rem", marginBottom:"2rem" }}>
            {[["📊",`${TOTAL} প্রশ্ন`,"অনুশীলনী MCQ"],["📖","৩টি বিষয়","৫.১ থেকে ৫.৩"],["🎯","A+ পেতে","১৪/১৫ দরকার"]].map(([i,t,d])=>(
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
          <Link href="/demo/chapter5" style={{ color:"#0f172a", fontWeight:600, textDecoration:"none", fontSize:"0.9rem" }}>← অধ্যায় ৫ সূচি</Link>
          <button onClick={start} style={{...btn, fontSize:"0.9rem", padding:"0.625rem 1.25rem"}}>আবার দিন</button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight:"100vh", background:"#f8fafc", fontFamily:"'Noto Sans Bengali',system-ui,sans-serif", padding:"2rem 1rem" }}>
      <div style={{ maxWidth:"680px", margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.25rem", flexWrap:"wrap", gap:"0.5rem" }}>
          <Link href="/demo/chapter5" style={{ color:"#0f172a", textDecoration:"none", fontSize:"0.85rem", fontWeight:600 }}>← অধ্যায় ৫</Link>
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
