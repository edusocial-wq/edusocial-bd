"use client";
import { useState } from "react";

const questions = [
  {
    q: "ডিকোডার (Decoder) কী করে?",
    options: ["n ইনপুট থেকে 2ⁿ আউটপুট তৈরি করে", "2ⁿ ইনপুট থেকে n আউটপুট তৈরি করে", "বাইনারি যোগ করে", "কোড রূপান্তর করে"],
    answer: 0,
    explanation: "ডিকোডার n ইনপুট নিয়ে সর্বোচ্চ 2ⁿ আউটপুট দেয়। যেমন 2-to-4 ডিকোডারে 2 ইনপুট ও 4 আউটপুট।",
  },
  {
    q: "এনকোডার (Encoder) কী করে?",
    options: ["n ইনপুট থেকে 2ⁿ আউটপুট তৈরি করে", "লজিক গেট সরলীকরণ করে", "2ⁿ ইনপুট থেকে n আউটপুট তৈরি করে", "ডিকোডারের বিপরীত কাজ নয়"],
    answer: 2,
    explanation: "এনকোডার ডিকোডারের বিপরীত কাজ করে: 2ⁿ ইনপুট নিয়ে n বিট আউটপুট দেয়।",
  },
  {
    q: "2-to-4 ডিকোডারে ইনপুট A=0, B=1 হলে কোন আউটপুট লাইন সক্রিয় হবে?",
    options: ["D0", "D1", "D2", "D3"],
    answer: 1,
    explanation: "AB=01 (দশমিকে 1) তাই D1 সক্রিয় হবে। D0=00, D1=01, D2=10, D3=11।",
  },
  {
    q: "2-to-4 ডিকোডারে ইনপুট A=1, B=1 হলে কোন আউটপুট সক্রিয় হবে?",
    options: ["D0", "D1", "D2", "D3"],
    answer: 3,
    explanation: "AB=11 (দশমিকে 3) তাই D3 সক্রিয় হবে।",
  },
  {
    q: "৭-সেগমেন্ট ডিসপ্লেতে কয়টি সেগমেন্ট থাকে?",
    options: ["8টি", "4টি", "7টি", "16টি"],
    answer: 2,
    explanation: "৭-সেগমেন্ট ডিসপ্লেতে a, b, c, d, e, f, g — মোট ৭টি সেগমেন্ট থাকে। এগুলো জ্বালিয়ে 0-9 দেখানো হয়।",
  },
  {
    q: "BCD to 7-Segment ডিকোডার কোথায় ব্যবহার হয়?",
    options: ["ডিজিটাল ডিসপ্লেতে", "মেমোরিতে", "RAM-এ", "CPU-তে"],
    answer: 0,
    explanation: "BCD to 7-Segment ডিকোডার ডিজিটাল ঘড়ি, ক্যালকুলেটর, মিটারের সংখ্যা দেখানোর জন্য ব্যবহার হয়।",
  },
  {
    q: "4-to-2 এনকোডারে D2=1 (বাকি 0) হলে আউটপুট B1B0 কত?",
    options: ["01", "11", "00", "10"],
    answer: 3,
    explanation: "D2 সক্রিয় মানে দশমিক 2 = বাইনারি 10। তাই B1=1, B0=0 → আউটপুট 10।",
  },
  {
    q: "Enable (EN) পিন কী কাজ করে ডিকোডারে?",
    options: ["ইনপুট বাড়ায়", "সার্কিট সক্রিয় বা নিষ্ক্রিয় করে", "আউটপুট উল্টায়", "Carry তৈরি করে"],
    answer: 1,
    explanation: "Enable পিন 1 হলে ডিকোডার কাজ করে, 0 হলে সব আউটপুট 0 হয়ে যায়। এটি chip select হিসেবে কাজ করে।",
  },
  {
    q: "3-to-8 ডিকোডারে সর্বোচ্চ কয়টি আউটপুট লাইন থাকে?",
    options: ["8টি", "3টি", "6টি", "16টি"],
    answer: 0,
    explanation: "n=3 হলে 2ⁿ = 2³ = 8টি আউটপুট লাইন। 3-to-8 ডিকোডারে 8টি আউটপুট।",
  },
  {
    q: "Priority Encoder কী?",
    options: ["শুধুমাত্র একটি ইনপুট নেয়", "BCD কোড তৈরি করে", "ডিকোডারের মতো কাজ করে", "একাধিক ইনপুট সক্রিয় থাকলে সর্বোচ্চ অগ্রাধিকারের ইনপুট এনকোড করে"],
    answer: 3,
    explanation: "Priority Encoder একাধিক ইনপুট সক্রিয় থাকলে সর্বোচ্চ priority-র (সাধারণত সর্বোচ্চ নম্বর) ইনপুট এনকোড করে।",
  },
];

export default function EncoderDecoderQuiz() {
  const [phase, setPhase] = useState<"idle"|"quiz"|"result">("idle");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number|null>(null);
  const [answers, setAnswers] = useState<(number|null)[]>(Array(10).fill(null));

  const score = answers.filter((a,i)=>a===questions[i].answer).length;
  function startQuiz(){setAnswers(Array(10).fill(null));setCurrent(0);setSelected(null);setPhase("quiz");}
  function handleSelect(idx:number){if(selected!==null)return;setSelected(idx);const u=[...answers];u[current]=idx;setAnswers(u);}
  function next(){if(current===9)setPhase("result");else{setCurrent(c=>c+1);setSelected(null);}}

  const q=questions[current];
  const grade=score>=9?"A+":score>=8?"A":score>=7?"A-":score>=5?"B":score>=3?"C":"F";
  const gc=score>=7?"#16a34a":score>=5?"#d97706":"#dc2626";

  if(phase==="idle") return <div style={{textAlign:"center",padding:"2rem 0"}}><p style={{color:"#6b7280",marginBottom:"1.5rem"}}>১০টি MCQ — এনকোডার ও ডিকোডার</p><button onClick={startQuiz} style={bs("#dc2626")}>কুইজ শুরু করুন →</button></div>;
  if(phase==="result") return (
    <div style={{textAlign:"center",padding:"2rem 0"}}>
      <div style={{fontSize:"4rem",marginBottom:"0.5rem"}}>{score>=7?"🎉":score>=5?"👍":"📚"}</div>
      <div style={{fontSize:"3rem",fontWeight:800,color:gc}}>{grade}</div>
      <div style={{fontSize:"1.5rem",fontWeight:700,margin:"0.5rem 0"}}>{score} / ১০ সঠিক</div>
      <div style={{textAlign:"left",margin:"1.5rem 0"}}>
        {questions.map((qq,i)=>{const ok=answers[i]===qq.answer;return(<div key={i} style={{display:"flex",gap:"0.75rem",padding:"0.75rem",borderRadius:"0.5rem",marginBottom:"0.5rem",background:ok?"#f0fdf4":"#fef2f2",border:`1px solid ${ok?"#bbf7d0":"#fecaca"}`}}><span>{ok?"✅":"❌"}</span><div><div style={{fontSize:"0.875rem",fontWeight:600,color:"#1f2937"}}>{i+1}. {qq.q}</div>{!ok&&<div style={{fontSize:"0.8rem",color:"#16a34a",marginTop:"0.25rem"}}>সঠিক: {qq.options[qq.answer]}</div>}</div></div>);})}
      </div>
      <button onClick={startQuiz} style={bs("#dc2626")}>আবার চেষ্টা করুন</button>
    </div>
  );

  const isCorrect=selected===q.answer;
  return (
    <div>
      <div style={{height:"6px",background:"#e5e7eb",borderRadius:"99px",marginBottom:"1.5rem"}}><div style={{height:"100%",width:`${((current+1)/10)*100}%`,background:"#dc2626",borderRadius:"99px",transition:"width 0.3s"}}/></div>
      <div style={{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:"0.75rem",padding:"1.25rem",marginBottom:"1.25rem",fontWeight:600,fontSize:"1.05rem",color:"#0f172a",lineHeight:1.6}}>{current+1}. {q.q}</div>
      <div style={{display:"flex",flexDirection:"column",gap:"0.625rem",marginBottom:"1.25rem"}}>
        {q.options.map((opt,i)=>{
          let bg="#fff",border="#d1d5db",color="#374151";
          if(selected!==null){if(i===q.answer){bg="#f0fdf4";border="#86efac";color="#15803d";}else if(i===selected&&i!==q.answer){bg="#fef2f2";border="#fca5a5";color="#b91c1c";}else{bg="#f9fafb";color="#9ca3af";}}
          return <button key={i} onClick={()=>handleSelect(i)} disabled={selected!==null} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.875rem 1rem",borderRadius:"0.625rem",border:`2px solid ${border}`,background:bg,color,textAlign:"left",cursor:selected!==null?"default":"pointer",fontSize:"0.95rem",fontWeight:500}}>
            <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"1.75rem",height:"1.75rem",borderRadius:"50%",background:i===q.answer&&selected!==null?"#16a34a":selected===i&&i!==q.answer?"#dc2626":"#e5e7eb",color:selected!==null&&(i===q.answer||i===selected)?"#fff":"#374151",fontSize:"0.8rem",fontWeight:700,flexShrink:0}}>{["ক","খ","গ","ঘ"][i]}</span>{opt}
          </button>;
        })}
      </div>
      {selected!==null&&<div style={{padding:"1rem",borderRadius:"0.625rem",background:isCorrect?"#f0fdf4":"#fef9c3",border:`1px solid ${isCorrect?"#86efac":"#fde68a"}`,marginBottom:"1.25rem",fontSize:"0.9rem",color:"#1e293b"}}><strong>{isCorrect?"✅ সঠিক!":"❌ ভুল।"}</strong> {q.explanation}</div>}
      {selected!==null&&<button onClick={next} style={bs("#dc2626")}>{current===9?"ফলাফল দেখুন →":"পরের প্রশ্ন →"}</button>}
    </div>
  );
}
function bs(bg:string):React.CSSProperties{return{background:bg,color:"#fff",border:"none",borderRadius:"0.625rem",padding:"0.75rem 1.75rem",fontSize:"1rem",fontWeight:600,cursor:"pointer"};}
