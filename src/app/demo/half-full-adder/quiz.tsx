"use client";
import { useState } from "react";

const questions = [
  {
    q: "হাফ অ্যাডারে দুটি ইনপুট A=1, B=1 হলে Sum ও Carry কত?",
    options: ["Sum=0, Carry=1", "Sum=1, Carry=1", "Sum=1, Carry=0", "Sum=0, Carry=0"],
    answer: 0,
    explanation: "Sum = A⊕B = 1⊕1 = 0। Carry = A·B = 1·1 = 1। তাই Sum=0, Carry=1।",
  },
  {
    q: "হাফ অ্যাডারে Sum আউটপুট কোন গেট দিয়ে পাওয়া যায়?",
    options: ["AND গেট", "OR গেট", "XOR গেট", "NAND গেট"],
    answer: 2,
    explanation: "Sum = A ⊕ B। XOR গেট দিয়ে হাফ অ্যাডারের Sum আউটপুট তৈরি হয়।",
  },
  {
    q: "হাফ অ্যাডারে Carry আউটপুট কোন গেট দিয়ে পাওয়া যায়?",
    options: ["OR গেট", "AND গেট", "XOR গেট", "NOT গেট"],
    answer: 1,
    explanation: "Carry = A · B। AND গেট দিয়ে হাফ অ্যাডারের Carry আউটপুট তৈরি হয়।",
  },
  {
    q: "হাফ অ্যাডার ও ফুল অ্যাডারের মূল পার্থক্য কী?",
    options: ["ফুল অ্যাডারে বেশি আউটপুট আছে", "হাফ অ্যাডারে ৩টি ইনপুট আছে", "ফুল অ্যাডারে XOR নেই", "ফুল অ্যাডারে Carry-in ইনপুট আছে"],
    answer: 3,
    explanation: "ফুল অ্যাডারে A, B ছাড়াও Carry-in (Cin) নামে তৃতীয় ইনপুট থাকে, যা পূর্ববর্তী বিটের carry বহন করে।",
  },
  {
    q: "ফুল অ্যাডারে A=1, B=1, Cin=1 হলে Sum ও Cout কত?",
    options: ["Sum=0, Cout=1", "Sum=1, Cout=0", "Sum=1, Cout=1", "Sum=0, Cout=0"],
    answer: 2,
    explanation: "Sum = 1⊕1⊕1 = 1। Cout = (1·1)+(1·1)+(1·1) = 1। তাই Sum=1, Cout=1।",
  },
  {
    q: "ফুল অ্যাডারের Sum এক্সপ্রেশন কোনটি?",
    options: ["A⊕B⊕Cin", "A·B+Cin", "A+B+Cin", "(A⊕B)·Cin"],
    answer: 0,
    explanation: "ফুল অ্যাডারে Sum = A ⊕ B ⊕ Cin (তিনটি ইনপুটের XOR)।",
  },
  {
    q: "ফুল অ্যাডারের Carry-out (Cout) এক্সপ্রেশন কোনটি?",
    options: ["A⊕B⊕Cin", "A+B+Cin", "A·B·Cin", "AB + BCin + ACin"],
    answer: 3,
    explanation: "Cout = AB + BCin + ACin। যেকোনো দুটি ইনপুট 1 হলেই Carry তৈরি হয়।",
  },
  {
    q: "একটি ফুল অ্যাডার তৈরি করতে কয়টি হাফ অ্যাডার ও কয়টি OR গেট লাগে?",
    options: ["১টি হাফ অ্যাডার ও ২টি OR গেট", "২টি হাফ অ্যাডার ও ১টি OR গেট", "৩টি হাফ অ্যাডার", "২টি হাফ অ্যাডার ও ২টি OR গেট"],
    answer: 1,
    explanation: "একটি ফুল অ্যাডার = ২টি হাফ অ্যাডার + ১টি OR গেট। এটি পরীক্ষায় প্রায়ই আসে।",
  },
  {
    q: "হাফ অ্যাডারে A=0, B=0 হলে আউটপুট কী?",
    options: ["Sum=0, Carry=0", "Sum=1, Carry=0", "Sum=0, Carry=1", "Sum=1, Carry=1"],
    answer: 0,
    explanation: "Sum = 0⊕0 = 0, Carry = 0·0 = 0। উভয় আউটপুটই 0।",
  },
  {
    q: "n-bit binary addition করতে কয়টি ফুল অ্যাডার লাগে?",
    options: ["n-1 টি", "2n টি", "n+1 টি", "n টি"],
    answer: 3,
    explanation: "n-bit যোগ করতে n টি ফুল অ্যাডার লাগে (প্রথমটি হাফ অ্যাডারও হতে পারে, কিন্তু সাধারণত n ফুল অ্যাডার ধরা হয়)।",
  },
];

export default function HalfFullAdderQuiz() {
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

  if(phase==="idle") return <div style={{textAlign:"center",padding:"2rem 0"}}><p style={{color:"#6b7280",marginBottom:"1.5rem"}}>১০টি MCQ — হাফ ও ফুল অ্যাডার</p><button onClick={startQuiz} style={bs("#d97706")}>কুইজ শুরু করুন →</button></div>;

  if(phase==="result") return (
    <div style={{textAlign:"center",padding:"2rem 0"}}>
      <div style={{fontSize:"4rem",marginBottom:"0.5rem"}}>{score>=7?"🎉":score>=5?"👍":"📚"}</div>
      <div style={{fontSize:"3rem",fontWeight:800,color:gc}}>{grade}</div>
      <div style={{fontSize:"1.5rem",fontWeight:700,margin:"0.5rem 0"}}>{score} / ১০ সঠিক</div>
      <div style={{textAlign:"left",margin:"1.5rem 0"}}>
        {questions.map((qq,i)=>{const ok=answers[i]===qq.answer;return(<div key={i} style={{display:"flex",gap:"0.75rem",padding:"0.75rem",borderRadius:"0.5rem",marginBottom:"0.5rem",background:ok?"#f0fdf4":"#fef2f2",border:`1px solid ${ok?"#bbf7d0":"#fecaca"}`}}><span>{ok?"✅":"❌"}</span><div><div style={{fontSize:"0.875rem",fontWeight:600,color:"#1f2937"}}>{i+1}. {qq.q}</div>{!ok&&<div style={{fontSize:"0.8rem",color:"#16a34a",marginTop:"0.25rem"}}>সঠিক: {qq.options[qq.answer]}</div>}</div></div>);})}
      </div>
      <button onClick={startQuiz} style={bs("#d97706")}>আবার চেষ্টা করুন</button>
    </div>
  );

  const isCorrect=selected===q.answer;
  return (
    <div>
      <div style={{height:"6px",background:"#e5e7eb",borderRadius:"99px",marginBottom:"1.5rem"}}><div style={{height:"100%",width:`${((current+1)/10)*100}%`,background:"#d97706",borderRadius:"99px",transition:"width 0.3s"}}/></div>
      <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:"0.75rem",padding:"1.25rem",marginBottom:"1.25rem",fontWeight:600,fontSize:"1.05rem",color:"#0f172a",lineHeight:1.6}}>{current+1}. {q.q}</div>
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
      {selected!==null&&<button onClick={next} style={bs("#d97706")}>{current===9?"ফলাফল দেখুন →":"পরের প্রশ্ন →"}</button>}
    </div>
  );
}
function bs(bg:string):React.CSSProperties{return{background:bg,color:"#fff",border:"none",borderRadius:"0.625rem",padding:"0.75rem 1.75rem",fontSize:"1rem",fontWeight:600,cursor:"pointer"};}
