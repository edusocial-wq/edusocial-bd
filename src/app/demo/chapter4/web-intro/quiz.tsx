"use client";
import { useState } from "react";

const questions = [
  { q: "URL-এর পূর্ণরূপ কী?", options: ["Uniform Resource Locator","Universal Resource Link","Uniform Reference Locator","United Resource Locator"], answer: 0, explanation: "URL = Uniform Resource Locator। ইন্টারনেটে কোনো রিসোর্সের সম্পূর্ণ ঠিকানা URL দিয়ে প্রকাশ করা হয়।" },
  { q: "HTTP-এর পূর্ণরূপ কী?", options: ["HyperText Transport Protocol","High Transfer Text Protocol","HyperText Transfer Protocol","HyperText Transmission Protocol"], answer: 2, explanation: "HTTP = HyperText Transfer Protocol। ওয়েব পেজ ক্লায়েন্ট ও সার্ভারের মধ্যে আদান-প্রদানের প্রোটোকল।" },
  { q: "ওয়েব পেজ ব্রাউজারে দেখতে কোন সফটওয়্যার লাগে?", options: ["Web Server","Web Browser","FTP Client","Text Editor"], answer: 1, explanation: "Web Browser (Chrome, Firefox, Edge) HTML পার্স করে ব্যবহারকারীর কাছে ওয়েব পেজ প্রদর্শন করে।" },
  { q: "কোনটি Static ওয়েব পেজের বৈশিষ্ট্য?", options: ["ব্যবহারকারীভেদে কনটেন্ট বদলায়","সার্ভার কোড চালায়","ডেটাবেজ ব্যবহার করে","কনটেন্ট সবার কাছে একই দেখায়"], answer: 3, explanation: "Static ওয়েব পেজ সব ব্যবহারকারীর কাছে একই দেখায়। Dynamic পেজ ব্যবহারকারী/সার্ভারের উপর নির্ভরে বদলায়।" },
  { q: "একটি URL-এ 'www.example.com' অংশটিকে কী বলে?", options: ["IP Address","Protocol","Domain Name","Path"], answer: 2, explanation: "www.example.com হলো Domain Name। এটি সার্ভারের IP address-এর সহজে মনে রাখার মতো নাম।" },
  { q: "HTTPS-এ 'S' কীসের জন্য?", options: ["Secure","Server","Standard","Simple"], answer: 0, explanation: "HTTPS = HTTP Secure। SSL/TLS প্রোটোকল দিয়ে ডেটা এনক্রিপ্ট করা হয়, তাই নিরাপদ।" },
  { q: "ওয়েব পোর্টাল কী?", options: ["একটি একক HTML ফাইল","ওয়েব সার্ভার সফটওয়্যার","ডোমেইন রেজিস্ট্রেশন সাইট","একাধিক সেবা একটি স্থান থেকে প্রদানকারী সাইট"], answer: 3, explanation: "ওয়েব পোর্টাল (যেমন Yahoo, Prothom Alo) একটি গেটওয়ে যেখান থেকে বিভিন্ন সেবা (নিউজ, মেইল, সার্চ) পাওয়া যায়।" },
  { q: "ক্লায়েন্ট-সার্ভার মডেলে ওয়েব সার্ভার কী করে?", options: ["HTML রেন্ডার করে","ওয়েব পেজ সংরক্ষণ করে এবং ব্রাউজারের অনুরোধে পাঠায়","URL ট্রান্সলেট করে","ডোমেইন নেম নিবন্ধন করে"], answer: 1, explanation: "ওয়েব সার্ভার (Apache, Nginx, IIS) ফাইল সংরক্ষণ করে এবং ব্রাউজার থেকে HTTP request আসলে ফাইল পাঠায়।" },
  { q: "DNS-এর কাজ কী?", options: ["Domain Name কে IP Address-এ রূপান্তর করে","HTML কোড প্রদর্শন করে","নেটওয়ার্ক নিরাপত্তা নিশ্চিত করে","ইমেইল পাঠায়"], answer: 0, explanation: "DNS (Domain Name System) মানুষের পড়ার মতো domain name (google.com)-কে IP address (142.250.x.x)-এ রূপান্তর করে।" },
  { q: "একটি ওয়েব সাইট ও একটি ওয়েব পেজের মধ্যে পার্থক্য কী?", options: ["একই জিনিস","ওয়েব সাইট একটি একক দলিল","ওয়েব পেজ শুধু ছবি দেখায়","ওয়েব পেজ একটি একক দলিল; ওয়েব সাইট একাধিক ওয়েব পেজের সমষ্টি"], answer: 3, explanation: "ওয়েব পেজ একটি একক HTML ফাইল। ওয়েব সাইট হলো পরস্পর সংযুক্ত একাধিক ওয়েব পেজের সমষ্টি।" },
];

export default function WebIntroQuiz() {
  const [phase, setPhase] = useState<"idle"|"quiz"|"result">("idle");
  const [cur, setCur] = useState(0);
  const [sel, setSel] = useState<number|null>(null);
  const [ans, setAns] = useState<(number|null)[]>(Array(10).fill(null));
  const score = ans.filter((a,i)=>a===questions[i].answer).length;
  function start(){setAns(Array(10).fill(null));setCur(0);setSel(null);setPhase("quiz");}
  function pick(i:number){if(sel!==null)return;setSel(i);const u=[...ans];u[cur]=i;setAns(u);}
  function next(){if(cur===9)setPhase("result");else{setCur(c=>c+1);setSel(null);}}
  const q=questions[cur], ok=sel===q?.answer;
  const grade=score>=9?"A+":score>=8?"A":score>=7?"A-":score>=5?"B":score>=3?"C":"F";
  const gc=score>=7?"#16a34a":score>=5?"#d97706":"#dc2626";
  const C="#0284c7";
  if(phase==="idle") return <div style={{textAlign:"center",padding:"2rem 0"}}><p style={{color:"#6b7280",marginBottom:"1.5rem"}}>১০টি MCQ — ওয়েব ডিজাইনের ধারণা</p><button onClick={start} style={S(C)}>কুইজ শুরু করুন →</button></div>;
  if(phase==="result") return (
    <div style={{textAlign:"center",padding:"2rem 0"}}>
      <div style={{fontSize:"4rem",marginBottom:"0.5rem"}}>{score>=7?"🎉":score>=5?"👍":"📚"}</div>
      <div style={{fontSize:"3rem",fontWeight:800,color:gc}}>{grade}</div>
      <div style={{fontSize:"1.5rem",fontWeight:700,margin:"0.5rem 0"}}>{score} / ১০ সঠিক</div>
      <div style={{textAlign:"left",margin:"1.5rem 0"}}>
        {questions.map((qq,i)=>{const o=ans[i]===qq.answer;return(<div key={i} style={{display:"flex",gap:"0.75rem",padding:"0.75rem",borderRadius:"0.5rem",marginBottom:"0.5rem",background:o?"#f0fdf4":"#fef2f2",border:`1px solid ${o?"#bbf7d0":"#fecaca"}`}}><span>{o?"✅":"❌"}</span><div><div style={{fontSize:"0.875rem",fontWeight:600,color:"#1f2937"}}>{i+1}. {qq.q}</div>{!o&&<div style={{fontSize:"0.8rem",color:"#16a34a",marginTop:"0.25rem"}}>সঠিক: {qq.options[qq.answer]}</div>}</div></div>);})}
      </div>
      <button onClick={start} style={S(C)}>আবার চেষ্টা করুন</button>
    </div>
  );
  return (
    <div>
      <div style={{height:"6px",background:"#e5e7eb",borderRadius:"99px",marginBottom:"1.5rem"}}><div style={{height:"100%",width:`${((cur+1)/10)*100}%`,background:C,borderRadius:"99px",transition:"width 0.3s"}}/></div>
      <div style={{background:"#f0f9ff",border:"1px solid #bae6fd",borderRadius:"0.75rem",padding:"1.25rem",marginBottom:"1.25rem",fontWeight:600,fontSize:"1.05rem",color:"#0f172a",lineHeight:1.6}}>{cur+1}. {q.q}</div>
      <div style={{display:"flex",flexDirection:"column",gap:"0.625rem",marginBottom:"1.25rem"}}>
        {q.options.map((opt,i)=>{
          let bg="#fff",border="#d1d5db",color="#374151";
          if(sel!==null){if(i===q.answer){bg="#f0fdf4";border="#86efac";color="#15803d";}else if(i===sel&&i!==q.answer){bg="#fef2f2";border="#fca5a5";color="#b91c1c";}else{bg="#f9fafb";color="#9ca3af";}}
          return <button key={i} onClick={()=>pick(i)} disabled={sel!==null} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.875rem 1rem",borderRadius:"0.625rem",border:`2px solid ${border}`,background:bg,color,textAlign:"left",cursor:sel!==null?"default":"pointer",fontSize:"0.95rem",fontWeight:500}}>
            <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"1.75rem",height:"1.75rem",borderRadius:"50%",background:i===q.answer&&sel!==null?"#16a34a":sel===i&&i!==q.answer?"#dc2626":"#e5e7eb",color:sel!==null&&(i===q.answer||i===sel)?"#fff":"#374151",fontSize:"0.8rem",fontWeight:700,flexShrink:0}}>{["ক","খ","গ","ঘ"][i]}</span>{opt}
          </button>;
        })}
      </div>
      {sel!==null&&<div style={{padding:"1rem",borderRadius:"0.625rem",background:ok?"#f0fdf4":"#fef9c3",border:`1px solid ${ok?"#86efac":"#fde68a"}`,marginBottom:"1.25rem",fontSize:"0.9rem",color:"#1e293b"}}><strong>{ok?"✅ সঠিক!":"❌ ভুল।"}</strong> {q.explanation}</div>}
      {sel!==null&&<button onClick={next} style={S(C)}>{cur===9?"ফলাফল দেখুন →":"পরের প্রশ্ন →"}</button>}
    </div>
  );
}
function S(bg:string):React.CSSProperties{return{background:bg,color:"#fff",border:"none",borderRadius:"0.625rem",padding:"0.75rem 1.75rem",fontSize:"1rem",fontWeight:600,cursor:"pointer"};}
