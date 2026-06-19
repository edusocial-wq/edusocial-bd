"use client";
import { useState } from "react";
const C = "#7c3aed";
const questions = [
  { q: "AND গেটে A=1, B=0 হলে আউটপুট কত?", options: ["0", "1", "অনির্ধারিত", "2"], answer: 0, explanation: "AND গেটে সব ইনপুট 1 হলেই আউটপুট 1 হয়। B=0 তাই আউটপুট 0।" },
  { q: "OR গেটে A=0, B=0 হলে আউটপুট কত?", options: ["1", "A", "0", "B"], answer: 2, explanation: "OR গেটে অন্তত একটি ইনপুট 1 হলে আউটপুট 1। উভয়ই 0 তাই আউটপুট 0।" },
  { q: "NOT গেটে ইনপুট 1 হলে আউটপুট কত?", options: ["1", "0", "2", "অপরিবর্তিত"], answer: 1, explanation: "NOT গেট ইনভার্টার হিসেবে কাজ করে। ইনপুট 1 হলে আউটপুট 0।" },
  { q: "NAND গেটে A=1, B=1 হলে আউটপুট কত?", options: ["1", "AND এর মতো", "OR এর মতো", "0"], answer: 3, explanation: "NAND = NOT + AND। AND(1,1)=1, NOT(1)=0। তাই আউটপুট 0।" },
  { q: "NOR গেটে A=0, B=0 হলে আউটপুট কত?", options: ["0", "অনির্ধারিত", "1", "A+B"], answer: 2, explanation: "NOR = NOT + OR। OR(0,0)=0, NOT(0)=1। তাই আউটপুট 1।" },
  { q: "XOR গেটে A=1, B=1 হলে আউটপুট কত?", options: ["0", "1", "2", "A"], answer: 0, explanation: "XOR আউটপুট 1 শুধু যখন ইনপুট ভিন্ন। A=B=1 একই, তাই আউটপুট 0।" },
  { q: "কোন গেটকে 'Universal Gate' বলা হয়?", options: ["শুধু AND", "শুধু OR", "XOR", "NAND ও NOR উভয়কে"], answer: 3, explanation: "NAND ও NOR উভয় গেট দিয়ে যেকোনো লজিক সার্কিট তৈরি করা যায়।" },
  { q: "AND গেটের বুলিয়ান এক্সপ্রেশন কোনটি?", options: ["Y = A + B", "Y = A · B", "Y = Ā", "Y = A ⊕ B"], answer: 1, explanation: "AND গেটের এক্সপ্রেশন Y = A · B। · চিহ্ন AND অপারেশন বোঝায়।" },
  { q: "XOR গেটে A=1, B=0 হলে আউটপুট কত?", options: ["1", "0", "A", "B"], answer: 0, explanation: "XOR আউটপুট 1 যখন ইনপুট ভিন্ন। A=1, B=0 ভিন্ন তাই আউটপুট 1।" },
  { q: "কোন গেটে সব ইনপুট 0 হলেও আউটপুট 1 হয়?", options: ["OR", "AND", "XOR", "NOR"], answer: 3, explanation: "NOR গেটে OR(0,0)=0, তারপর NOT(0)=1। একমাত্র NOR-এ এটা হয়।" },
];
export default function LogicGatesQuiz() {
  const [phase,setPhase]=useState<"idle"|"quiz"|"result">("idle");
  const [cur,setCur]=useState(0);const [sel,setSel]=useState<number|null>(null);
  const [ans,setAns]=useState<(number|null)[]>(Array(10).fill(null));
  const score=ans.filter((a,i)=>a===questions[i].answer).length;
  function start(){setAns(Array(10).fill(null));setCur(0);setSel(null);setPhase("quiz");}
  function pick(i:number){if(sel!==null)return;setSel(i);const u=[...ans];u[cur]=i;setAns(u);}
  function next(){if(cur===9)setPhase("result");else{setCur(c=>c+1);setSel(null);}}
  const q=questions[cur],ok=sel===q?.answer;
  const grade=score>=9?"A+":score>=8?"A":score>=7?"A-":score>=5?"B":score>=3?"C":"F";
  const gc=score>=7?"#16a34a":score>=5?"#d97706":"#dc2626";
  const S=(bg:string):React.CSSProperties=>({background:bg,color:"#fff",border:"none",borderRadius:"0.625rem",padding:"0.75rem 1.75rem",fontSize:"1rem",fontWeight:600,cursor:"pointer"});
  if(phase==="idle") return <div style={{textAlign:"center",padding:"2rem 0"}}><p style={{color:"#6b7280",marginBottom:"1.5rem"}}>১০টি MCQ — লজিক গেট</p><button onClick={start} style={S(C)}>কুইজ শুরু করুন →</button></div>;
  if(phase==="result") return(<div style={{textAlign:"center",padding:"2rem 0"}}><div style={{fontSize:"3rem",fontWeight:800,color:gc}}>{grade}</div><div style={{fontSize:"1.5rem",fontWeight:700,margin:"0.5rem 0"}}>{score}/১০ সঠিক</div><div style={{textAlign:"left",margin:"1.5rem 0"}}>{questions.map((qq,i)=>{const o=ans[i]===qq.answer;return <div key={i} style={{display:"flex",gap:"0.75rem",padding:"0.75rem",borderRadius:"0.5rem",marginBottom:"0.5rem",background:o?"#f0fdf4":"#fef2f2",border:`1px solid ${o?"#bbf7d0":"#fecaca"}`}}><span>{o?"✅":"❌"}</span><div><div style={{fontSize:"0.875rem",fontWeight:600}}>{i+1}. {qq.q}</div>{!o&&<div style={{fontSize:"0.8rem",color:"#16a34a",marginTop:"0.25rem"}}>সঠিক: {qq.options[qq.answer]}</div>}<div style={{fontSize:"0.78rem",color:"#64748b",marginTop:"0.2rem"}}>{qq.explanation}</div></div></div>;})}</div><button onClick={start} style={S(C)}>আবার চেষ্টা করুন</button></div>);
  return(<div><div style={{height:"6px",background:"#e5e7eb",borderRadius:"99px",marginBottom:"1.5rem"}}><div style={{height:"100%",width:`${((cur+1)/10)*100}%`,background:C,borderRadius:"99px",transition:"width 0.3s"}}/></div><div style={{background:"#f5f3ff",border:"1px solid #ddd6fe",borderRadius:"0.75rem",padding:"1.25rem",marginBottom:"1.25rem",fontWeight:600,fontSize:"1.05rem",color:"#0f172a",lineHeight:1.6}}>{cur+1}. {q.q}</div><div style={{display:"flex",flexDirection:"column",gap:"0.625rem",marginBottom:"1.25rem"}}>{q.options.map((opt,i)=>{let bg="#fff",border="#d1d5db",color="#374151";if(sel!==null){if(i===q.answer){bg="#f0fdf4";border="#86efac";color="#15803d";}else if(i===sel&&i!==q.answer){bg="#fef2f2";border="#fca5a5";color="#b91c1c";}else{bg="#f9fafb";color="#9ca3af";}}return <button key={i} onClick={()=>pick(i)} disabled={sel!==null} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.875rem 1rem",borderRadius:"0.625rem",border:`2px solid ${border}`,background:bg,color,textAlign:"left",cursor:sel!==null?"default":"pointer",fontSize:"0.95rem",fontWeight:500}}><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"1.75rem",height:"1.75rem",borderRadius:"50%",background:i===q.answer&&sel!==null?"#16a34a":sel===i&&i!==q.answer?"#dc2626":"#e5e7eb",color:sel!==null&&(i===q.answer||i===sel)?"#fff":"#374151",fontSize:"0.8rem",fontWeight:700,flexShrink:0}}>{["ক","খ","গ","ঘ"][i]}</span>{opt}</button>;})}</div>{sel!==null&&<div style={{padding:"1rem",borderRadius:"0.625rem",background:ok?"#f0fdf4":"#fef9c3",border:`1px solid ${ok?"#86efac":"#fde68a"}`,marginBottom:"1.25rem",fontSize:"0.9rem",color:"#1e293b"}}><strong>{ok?"✅ সঠিক!":"❌ ভুল।"}</strong> {q.explanation}</div>}{sel!==null&&<button onClick={next} style={S(C)}>{cur===9?"ফলাফল দেখুন →":"পরের প্রশ্ন →"}</button>}</div>);
}
