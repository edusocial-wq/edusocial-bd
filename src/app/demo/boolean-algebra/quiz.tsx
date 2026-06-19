"use client";
import { useState } from "react";

const questions = [
  {
    q: "De Morgan's theorem অনুযায়ী (A + B)' = ?",
    options: ["A' · B'", "A' + B'", "A · B", "A + B"],
    answer: 0,
    explanation: "De Morgan's ১ম theorem: (A+B)' = A'·B' অর্থাৎ OR-এর NOT = NOT গুলো AND করা।",
  },
  {
    q: "De Morgan's theorem অনুযায়ী (A · B)' = ?",
    options: ["A' · B'", "A + B", "A' + B'", "A · B"],
    answer: 2,
    explanation: "De Morgan's ২য় theorem: (A·B)' = A'+B' অর্থাৎ AND-এর NOT = NOT গুলো OR করা।",
  },
  {
    q: "বুলিয়ান সূত্র: A + 0 = ?",
    options: ["0", "A", "1", "A'"],
    answer: 1,
    explanation: "Identity Law: A + 0 = A। শূন্যের সাথে OR করলে মান অপরিবর্তিত থাকে।",
  },
  {
    q: "বুলিয়ান সূত্র: A · 1 = ?",
    options: ["1", "0", "A'", "A"],
    answer: 3,
    explanation: "Identity Law: A · 1 = A। ১ দিয়ে AND করলে মান অপরিবর্তিত থাকে।",
  },
  {
    q: "বুলিয়ান সূত্র: A + A' = ?",
    options: ["0", "A", "1", "A'"],
    answer: 2,
    explanation: "Complement Law: A + A' = 1। একটি মান ও তার পূরক OR করলে সবসময় 1।",
  },
  {
    q: "বুলিয়ান সূত্র: A · A' = ?",
    options: ["0", "1", "A", "A'"],
    answer: 0,
    explanation: "Complement Law: A · A' = 0। একটি মান ও তার পূরক AND করলে সবসময় 0।",
  },
  {
    q: "বুলিয়ান এক্সপ্রেশন A + AB সরল করলে কী হয়?",
    options: ["AB", "A + B", "1", "A"],
    answer: 3,
    explanation: "Absorption Law: A + AB = A(1 + B) = A · 1 = A। B কোনো প্রভাব ফেলে না।",
  },
  {
    q: "Double Complement Law: (A')' = ?",
    options: ["A'", "A", "0", "1"],
    answer: 1,
    explanation: "Double Complement: দুইবার NOT করলে মূল মান ফিরে আসে। (A')' = A।",
  },
  {
    q: "A · (B + C) = ?",
    options: ["AB + AC", "A + BC", "AB · AC", "A(B·C)"],
    answer: 0,
    explanation: "Distributive Law: A·(B+C) = AB + AC। বুলিয়ান অ্যালজেব্রায় সাধারণ বীজগণিতের মতো বিতরণ নিয়ম প্রযোজ্য।",
  },
  {
    q: "NAND গেটের বুলিয়ান এক্সপ্রেশন De Morgan দিয়ে প্রকাশ করলে?",
    options: ["A' · B'", "A + B", "(A+B)'", "A' + B'"],
    answer: 3,
    explanation: "(AB)' = A' + B' (De Morgan's theorem)। NAND আউটপুট = NOT(A AND B) = A' + B'।",
  },
];

export default function BooleanAlgebraQuiz() {
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

  if(phase==="idle") return <div style={{textAlign:"center",padding:"2rem 0"}}><p style={{color:"#6b7280",marginBottom:"1.5rem"}}>১০টি MCQ — বুলিয়ান অ্যালজেব্রা</p><button onClick={startQuiz} style={bs("#059669")}>কুইজ শুরু করুন →</button></div>;

  if(phase==="result") return (
    <div style={{textAlign:"center",padding:"2rem 0"}}>
      <div style={{fontSize:"4rem",marginBottom:"0.5rem"}}>{score>=7?"🎉":score>=5?"👍":"📚"}</div>
      <div style={{fontSize:"3rem",fontWeight:800,color:gc}}>{grade}</div>
      <div style={{fontSize:"1.5rem",fontWeight:700,margin:"0.5rem 0"}}>{score} / ১০ সঠিক</div>
      <div style={{textAlign:"left",margin:"1.5rem 0"}}>
        {questions.map((qq,i)=>{const ok=answers[i]===qq.answer;return(<div key={i} style={{display:"flex",gap:"0.75rem",padding:"0.75rem",borderRadius:"0.5rem",marginBottom:"0.5rem",background:ok?"#f0fdf4":"#fef2f2",border:`1px solid ${ok?"#bbf7d0":"#fecaca"}`}}><span>{ok?"✅":"❌"}</span><div><div style={{fontSize:"0.875rem",fontWeight:600,color:"#1f2937"}}>{i+1}. {qq.q}</div>{!ok&&<div style={{fontSize:"0.8rem",color:"#16a34a",marginTop:"0.25rem"}}>সঠিক: {qq.options[qq.answer]}</div>}</div></div>);})}
      </div>
      <button onClick={startQuiz} style={bs("#059669")}>আবার চেষ্টা করুন</button>
    </div>
  );

  const isCorrect=selected===q.answer;
  return (
    <div>
      <div style={{height:"6px",background:"#e5e7eb",borderRadius:"99px",marginBottom:"1.5rem"}}><div style={{height:"100%",width:`${((current+1)/10)*100}%`,background:"#059669",borderRadius:"99px",transition:"width 0.3s"}}/></div>
      <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"0.75rem",padding:"1.25rem",marginBottom:"1.25rem",fontWeight:600,fontSize:"1.05rem",color:"#0f172a",lineHeight:1.6,fontFamily:"system-ui,monospace"}}>{current+1}. {q.q}</div>
      <div style={{display:"flex",flexDirection:"column",gap:"0.625rem",marginBottom:"1.25rem"}}>
        {q.options.map((opt,i)=>{
          let bg="#fff",border="#d1d5db",color="#374151";
          if(selected!==null){if(i===q.answer){bg="#f0fdf4";border="#86efac";color="#15803d";}else if(i===selected&&i!==q.answer){bg="#fef2f2";border="#fca5a5";color="#b91c1c";}else{bg="#f9fafb";color="#9ca3af";}}
          return <button key={i} onClick={()=>handleSelect(i)} disabled={selected!==null} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.875rem 1rem",borderRadius:"0.625rem",border:`2px solid ${border}`,background:bg,color,textAlign:"left",cursor:selected!==null?"default":"pointer",fontSize:"0.95rem",fontWeight:500,fontFamily:"system-ui,monospace"}}>
            <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"1.75rem",height:"1.75rem",borderRadius:"50%",background:i===q.answer&&selected!==null?"#16a34a":selected===i&&i!==q.answer?"#dc2626":"#e5e7eb",color:selected!==null&&(i===q.answer||i===selected)?"#fff":"#374151",fontSize:"0.8rem",fontWeight:700,flexShrink:0}}>{["ক","খ","গ","ঘ"][i]}</span>
            {opt}
          </button>;
        })}
      </div>
      {selected!==null&&<div style={{padding:"1rem",borderRadius:"0.625rem",background:isCorrect?"#f0fdf4":"#fef9c3",border:`1px solid ${isCorrect?"#86efac":"#fde68a"}`,marginBottom:"1.25rem",fontSize:"0.9rem",color:"#1e293b"}}><strong>{isCorrect?"✅ সঠিক!":"❌ ভুল।"}</strong> {q.explanation}</div>}
      {selected!==null&&<button onClick={next} style={bs("#059669")}>{current===9?"ফলাফল দেখুন →":"পরের প্রশ্ন →"}</button>}
    </div>
  );
}
function bs(bg:string):React.CSSProperties{return{background:bg,color:"#fff",border:"none",borderRadius:"0.625rem",padding:"0.75rem 1.75rem",fontSize:"1rem",fontWeight:600,cursor:"pointer"};}
