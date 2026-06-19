"use client";
import { useState } from "react";
const C = "#0891b2";
const questions = [
  { q: "বাইনারিতে 1 + 1 = ?", options: ["10", "2", "11", "0"], answer: 0, explanation: "বাইনারিতে 1+1=10 (মানে দশমিকে ২)। এখানে Sum=0 এবং Carry=1।" },
  { q: "বাইনারি 1011 এর ১-এর পূরক (1's complement) কী?", options: ["0101", "1100", "0100", "1000"], answer: 2, explanation: "১-এর পূরক করতে প্রতিটি বিট উল্টে দিতে হয়: 1011 → 0100।" },
  { q: "বাইনারি 1010 এর ২-এর পূরক (2's complement) কী?", options: ["0101", "0110", "0111", "1010"], answer: 1, explanation: "২-এর পূরক = ১-এর পূরক + 1। 1010 → 0101 (১-এর পূরক) → 0110 (২-এর পূরক)।" },
  { q: "বাইনারিতে 110 + 011 = ?", options: ["0110", "1010", "1100", "1001"], answer: 3, explanation: "110 + 011: LSB থেকে: 0+1=1, 1+1=10(0,carry1), 1+0+1=10(0,carry1) → 1001।" },
  { q: "২-এর পূরক পদ্ধতিতে 8-bit এ -5 কীভাবে প্রকাশ পায়?", options: ["00000101", "11111010", "11111011", "10000101"], answer: 2, explanation: "5=00000101। ১-এর পূরক: 11111010। ২-এর পূরক(+1): 11111011।" },
  { q: "বাইনারি যোগে Carry কখন তৈরি হয়?", options: ["1+1 যোগ করলে", "0+0 যোগ করলে", "1+0 যোগ করলে", "0+1 যোগ করলে"], answer: 0, explanation: "বাইনারিতে শুধুমাত্র 1+1=10 হলে Carry=1 তৈরি হয়।" },
  { q: "2's complement পদ্ধতিতে বিয়োগ কীভাবে করা হয়?", options: ["সরাসরি বিট বাদ দিয়ে", "1's complement যোগ করে", "XOR অপারেশন দিয়ে", "বিয়োজকের 2's complement যোগ করে"], answer: 3, explanation: "A - B = A + (2's complement of B)। এভাবে বিয়োগকে যোগে পরিণত করা হয়।" },
  { q: "বাইনারি 1111 + 0001 = ?", options: ["1111", "10000", "0000", "1110"], answer: 1, explanation: "1111 + 0001 = 10000। চারটি বিটে Carry প্রপাগেট হয়ে 5-bit ফলাফল হয়।" },
  { q: "8-bit 2's complement পদ্ধতিতে সর্বনিম্ন ঋণাত্মক সংখ্যা কোনটি?", options: ["-128", "-127", "-255", "-256"], answer: 0, explanation: "8-bit 2's complement-এ range হলো -128 থেকে +127। 10000000 = -128।" },
  { q: "বাইনারি 1101 - 0101 = ? (2's complement পদ্ধতিতে)", options: ["0110", "1010", "0111", "1000"], answer: 3, explanation: "0101 এর 2's complement = 1011। তারপর 1101 + 1011 = 11000। Overflow bit বাদ: 1000।" },
];
export default function BinaryArithmeticQuiz() {
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
  if(phase==="idle") return <div style={{textAlign:"center",padding:"2rem 0"}}><p style={{color:"#6b7280",marginBottom:"1.5rem"}}>১০টি MCQ — বাইনারি গণিত</p><button onClick={start} style={S(C)}>কুইজ শুরু করুন →</button></div>;
  if(phase==="result") return(<div style={{textAlign:"center",padding:"2rem 0"}}><div style={{fontSize:"3rem",fontWeight:800,color:gc}}>{grade}</div><div style={{fontSize:"1.5rem",fontWeight:700,margin:"0.5rem 0"}}>{score}/১০ সঠিক</div><div style={{textAlign:"left",margin:"1.5rem 0"}}>{questions.map((qq,i)=>{const o=ans[i]===qq.answer;return <div key={i} style={{display:"flex",gap:"0.75rem",padding:"0.75rem",borderRadius:"0.5rem",marginBottom:"0.5rem",background:o?"#f0fdf4":"#fef2f2",border:`1px solid ${o?"#bbf7d0":"#fecaca"}`}}><span>{o?"✅":"❌"}</span><div><div style={{fontSize:"0.875rem",fontWeight:600}}>{i+1}. {qq.q}</div>{!o&&<div style={{fontSize:"0.8rem",color:"#16a34a",marginTop:"0.25rem"}}>সঠিক: {qq.options[qq.answer]}</div>}<div style={{fontSize:"0.78rem",color:"#64748b",marginTop:"0.2rem"}}>{qq.explanation}</div></div></div>;})}</div><button onClick={start} style={S(C)}>আবার চেষ্টা করুন</button></div>);
  return(<div><div style={{height:"6px",background:"#e5e7eb",borderRadius:"99px",marginBottom:"1.5rem"}}><div style={{height:"100%",width:`${((cur+1)/10)*100}%`,background:C,borderRadius:"99px",transition:"width 0.3s"}}/></div><div style={{background:"#ecfeff",border:"1px solid #a5f3fc",borderRadius:"0.75rem",padding:"1.25rem",marginBottom:"1.25rem",fontWeight:600,fontSize:"1.05rem",color:"#0f172a",lineHeight:1.6,fontFamily:"system-ui,monospace"}}>{cur+1}. {q.q}</div><div style={{display:"flex",flexDirection:"column",gap:"0.625rem",marginBottom:"1.25rem"}}>{q.options.map((opt,i)=>{let bg="#fff",border="#d1d5db",color="#374151";if(sel!==null){if(i===q.answer){bg="#f0fdf4";border="#86efac";color="#15803d";}else if(i===sel&&i!==q.answer){bg="#fef2f2";border="#fca5a5";color="#b91c1c";}else{bg="#f9fafb";color="#9ca3af";}}return <button key={i} onClick={()=>pick(i)} disabled={sel!==null} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.875rem 1rem",borderRadius:"0.625rem",border:`2px solid ${border}`,background:bg,color,textAlign:"left",cursor:sel!==null?"default":"pointer",fontSize:"0.95rem",fontWeight:500,fontFamily:"system-ui,monospace"}}><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"1.75rem",height:"1.75rem",borderRadius:"50%",background:i===q.answer&&sel!==null?"#16a34a":sel===i&&i!==q.answer?"#dc2626":"#e5e7eb",color:sel!==null&&(i===q.answer||i===sel)?"#fff":"#374151",fontSize:"0.8rem",fontWeight:700,flexShrink:0}}>{["ক","খ","গ","ঘ"][i]}</span>{opt}</button>;})}</div>{sel!==null&&<div style={{padding:"1rem",borderRadius:"0.625rem",background:ok?"#f0fdf4":"#fef9c3",border:`1px solid ${ok?"#86efac":"#fde68a"}`,marginBottom:"1.25rem",fontSize:"0.9rem",color:"#1e293b"}}><strong>{ok?"✅ সঠিক!":"❌ ভুল।"}</strong> {q.explanation}</div>}{sel!==null&&<button onClick={next} style={S(C)}>{cur===9?"ফলাফল দেখুন →":"পরের প্রশ্ন →"}</button>}</div>);
}
