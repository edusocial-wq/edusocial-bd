"use client";
import { useState } from "react";
import Link from "next/link";

const questions = [
  { q: "বিশ্বগ্রাম (Global Village) ধারণার প্রবর্তক কে?", options: ["Marshall McLuhan","Bill Gates","Tim Berners-Lee","Mark Zuckerberg"], answer: 0, ref: "১.১ বিশ্বগ্রাম", explanation: "Marshall McLuhan কানাডিয়ান দার্শনিক ১৯৬০-এর দশকে 'Global Village' ধারণা প্রবর্তন করেন।" },
  { q: "Artificial Intelligence (AI) কী?", options: ["রোবট তৈরির বিজ্ঞান","কম্পিউটার প্রোগ্রামিং","মানুষের মতো বুদ্ধিমত্তাসম্পন্ন যন্ত্র তৈরির বিজ্ঞান","ইন্টারনেট প্রযুক্তি"], answer: 2, ref: "১.২ সাম্প্রতিক প্রবণতা", explanation: "AI = Artificial Intelligence। মানুষের বুদ্ধিমত্তার অনুকরণে যন্ত্রে কৃত্রিম বুদ্ধিমত্তা তৈরির বিজ্ঞান।" },
  { q: "1 ন্যানোমিটার (nm) = কত মিটার?", options: ["10⁻⁶ মিটার","10⁻⁹ মিটার","10⁻³ মিটার","10⁻¹² মিটার"], answer: 1, ref: "১.২ সাম্প্রতিক প্রবণতা", explanation: "1 nm = 10⁻⁹ meter। Nanotechnology ন্যানোমিটার স্কেলে পদার্থ নিয়ন্ত্রণ করে।" },
  { q: "Phishing কী?", options: ["কম্পিউটার ভাইরাস","নেটওয়ার্ক হ্যাকিং","স্প্যাম মেইল","ভুয়া ই-মেইল দিয়ে তথ্য চুরির প্রতারণা"], answer: 3, ref: "১.৫ সাইবার নিরাপত্তা", explanation: "Phishing = ভুয়া ই-মেইল বা ওয়েবসাইট ব্যবহার করে পাসওয়ার্ড, ব্যাংক তথ্য চুরি।" },
  { q: "ডিজিটাল বাংলাদেশ রূপকল্পের লক্ষ্যমাত্রা ছিল কোন সাল?", options: ["২০৩০","২০৪১","২০২১","২০৫০"], answer: 2, ref: "১.৩ ডিজিটাল বাংলাদেশ", explanation: "ডিজিটাল বাংলাদেশ রূপকল্প ২০২১ — স্বাধীনতার সুবর্ণজয়ন্তীকে লক্ষ্য করে।" },
  { q: "Bioinformatics কোন দুটি ক্ষেত্রের সমন্বয়?", options: ["জীববিজ্ঞান + ICT","রসায়ন + পদার্থবিজ্ঞান","চিকিৎসা + প্রকৌশল","গণিত + পরিসংখ্যান"], answer: 0, ref: "১.২ সাম্প্রতিক প্রবণতা", explanation: "Bioinformatics = Biology + Information Technology। DNA বিশ্লেষণ, জিনোম ম্যাপিংয়ে ব্যবহৃত।" },
  { q: "Firewall কী?", options: ["Antivirus সফটওয়্যার","পাসওয়ার্ড ম্যানেজার","ডেটা ব্যাকআপ টুল","নেটওয়ার্ক ট্র্যাফিক পর্যবেক্ষণ ও নিয়ন্ত্রণকারী সুরক্ষা ব্যবস্থা"], answer: 3, ref: "১.৫ সাইবার নিরাপত্তা", explanation: "Firewall নেটওয়ার্কে প্রবেশকারী ও বের হওয়া ট্র্যাফিক পর্যবেক্ষণ করে অননুমোদিত ট্র্যাফিক ব্লক করে।" },
  { q: "Cryosurgery-তে কোন পদার্থ ব্যবহার হয়?", options: ["তরল হিলিয়াম","তরল নাইট্রোজেন (-196°C)","বরফ","তরল কার্বন ডাইঅক্সাইড"], answer: 1, ref: "১.২ সাম্প্রতিক প্রবণতা", explanation: "Cryosurgery তরল নাইট্রোজেন (−196°C) বা Argon গ্যাস ব্যবহার করে রোগাক্রান্ত টিস্যু ধ্বংস করে।" },
  { q: "ডিজিটাল বিভাজন (Digital Divide) কী?", options: ["প্রযুক্তিতে সমান সুযোগ না পাওয়ার বৈষম্য","ইন্টারনেট বন্ধ হওয়া","ডিভাইস নষ্ট হওয়া","সোশ্যাল মিডিয়া বন্ধ"], answer: 0, ref: "১.৪ নৈতিকতা ও সামাজিক প্রভাব", explanation: "Digital Divide = প্রযুক্তিতে প্রবেশাধিকারের বৈষম্য — ধনী-দরিদ্র, শহর-গ্রামের পার্থক্য।" },
  { q: "Ransomware কী করে?", options: ["শুধু বিজ্ঞাপন দেখায়","নেটওয়ার্ক বন্ধ করে","পাসওয়ার্ড চুরি করে","ফাইল এনক্রিপ্ট করে মুক্তিপণ চায়"], answer: 3, ref: "১.৫ সাইবার নিরাপত্তা", explanation: "Ransomware ফাইল লক (encrypt) করে মুক্তিপণ (Ransom) দাবি করে। WannaCry বিখ্যাত উদাহরণ।" },
  { q: "Virtual Reality (VR)-তে কী হয়?", options: ["বাস্তবে ভ্রমণ করা হয়","সিনেমা দেখা যায়","কৃত্রিম পরিবেশে বাস্তবের অনুভূতি তৈরি হয়","ইন্টারনেট ব্যবহার করা যায়"], answer: 2, ref: "১.২ সাম্প্রতিক প্রবণতা", explanation: "VR কম্পিউটার তৈরি কৃত্রিম পরিবেশে ব্যবহারকারীকে বাস্তবের মতো অনুভব দেয় — VR Headset পরে।" },
  { q: "ই-গভর্ন্যান্স (e-Governance) কী?", options: ["শুধু ইন্টারনেট সংযোগ","ICT ব্যবহারে সরকারি সেবা প্রদান","কম্পিউটার প্রশিক্ষণ","অনলাইন শপিং"], answer: 1, ref: "১.৩ ডিজিটাল বাংলাদেশ", explanation: "e-Governance = ICT ব্যবহার করে অনলাইনে সরকারি সেবা, তথ্য নাগরিকদের কাছে পৌঁছে দেওয়া।" },
  { q: "IPR = ?", options: ["Internet Protocol Rights","Intellectual Property Rights — মেধাসৃষ্টির আইনি সুরক্ষা","International Privacy Rules","Integrated Property Registry"], answer: 1, ref: "১.৪ নৈতিকতা ও সামাজিক প্রভাব", explanation: "IPR = Intellectual Property Rights। সৃজনশীল কাজের (বই, সফটওয়্যার, উদ্ভাবন) আইনগত সুরক্ষা।" },
  { q: "Worm ও Virus-এর পার্থক্য কী?", options: ["একই ধরনের Malware","Virus দ্রুততর","Worm বেশি ক্ষতিকর","Worm নিজে নিজে ছড়ায়; Virus হোস্ট প্রোগ্রাম দরকার"], answer: 3, ref: "১.৫ সাইবার নিরাপত্তা", explanation: "Worm নেটওয়ার্কে নিজে নিজে ছড়ায়, কোনো হোস্ট দরকার নেই। Virus অন্য প্রোগ্রামে সংযুক্ত হয়ে ছড়ায়।" },
  { q: "স্মার্ট বাংলাদেশ রূপকল্প কোন সাল লক্ষ্যমাত্রা?", options: ["২০৪১","২০৩০","২০২৫","২০৫০"], answer: 0, ref: "১.৩ ডিজিটাল বাংলাদেশ", explanation: "স্মার্ট বাংলাদেশ রূপকল্প ২০৪১ — Smart Citizen, Smart Government, Smart Economy, Smart Society।" },
];

const TOTAL = questions.length;

export default function Chapter1TextbookQuiz() {
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
          <Link href="/demo/chapter1" style={{ color:"#0f172a", textDecoration:"none", fontWeight:600 }}>← অধ্যায় ১ সূচি</Link>
        </div>
        <div style={{ background:"#0f172a", color:"#e2e8f0", borderRadius:"1rem", padding:"2.5rem", textAlign:"center" }}>
          <div style={{ fontSize:"3rem", marginBottom:"0.75rem" }}>📝</div>
          <h1 style={{ fontSize:"1.5rem", fontWeight:800, color:"#f1f5f9", margin:"0 0 0.5rem" }}>পাঠ্যবইয়ের অনুশীলনী কুইজ</h1>
          <p style={{ color:"#94a3b8", fontSize:"0.95rem", margin:"0 0 0.5rem" }}>অধ্যায় ১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত</p>
          <p style={{ color:"#64748b", fontSize:"0.85rem", margin:"0 0 2rem" }}>NCTB HSC ICT পাঠ্যবইয়ের Chapter শেষের অনুশীলনী প্রশ্ন</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"0.75rem", marginBottom:"2rem" }}>
            {[["📊",`${TOTAL} প্রশ্ন`,"অনুশীলনী MCQ"],["📖","৫টি বিষয়","১.১ থেকে ১.৫"],["🎯","A+ পেতে","১৪/১৫ দরকার"]].map(([i,t,d])=>(
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
                    <span style={{ fontSize:"0.72rem", background:"#f1f5f9", color:"#64748b", borderRadius:"0.375rem", padding:"0.1rem 0.4rem", whiteSpace:"nowrap", flexShrink:0 }}>📖 {qq.ref}</span>
                  </div>
                  {!correct && <div style={{ fontSize:"0.8rem", color:"#16a34a", marginTop:"0.35rem" }}>✓ সঠিক: <strong>{qq.options[qq.answer]}</strong></div>}
                  <div style={{ fontSize:"0.8rem", color:"#64748b", marginTop:"0.35rem" }}>{qq.explanation}</div>
                </div>
              </div>
            </div>
          );
        })}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem", marginTop:"1rem" }}>
          <Link href="/demo/chapter1" style={{ color:"#0f172a", fontWeight:600, textDecoration:"none", fontSize:"0.9rem" }}>← অধ্যায় ১ সূচি</Link>
          <button onClick={start} style={{...btn, fontSize:"0.9rem", padding:"0.625rem 1.25rem"}}>আবার দিন</button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight:"100vh", background:"#f8fafc", fontFamily:"'Noto Sans Bengali',system-ui,sans-serif", padding:"2rem 1rem" }}>
      <div style={{ maxWidth:"680px", margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.25rem", flexWrap:"wrap", gap:"0.5rem" }}>
          <Link href="/demo/chapter1" style={{ color:"#0f172a", textDecoration:"none", fontSize:"0.85rem", fontWeight:600 }}>← অধ্যায় ১</Link>
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
