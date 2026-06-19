"use client";
import { useState } from "react";
import Link from "next/link";
const questions = [
  {q:"(1011)₂ কে দশমিকে রূপান্তর করলে হয়?",options:["১১","১৩","১০","১৫"],answer:0,topic:"📖 ৩.১ সংখ্যা পদ্ধতি",explanation:"1×2³+0×2²+1×2¹+1×2⁰ = 8+0+2+1 = 11"},
  {q:"BCD (Binary Coded Decimal) কোন পদ্ধতিতে সংখ্যা প্রকাশ করে?",options:["প্রতিটি দশমিক সংখ্যাকে পৃথকভাবে 4-bit বাইনারিতে","পুরো সংখ্যাকে একটি বাইনারিতে","হেক্সাডেসিমেল পদ্ধতিতে","অক্টাল পদ্ধতিতে"],answer:2,topic:"📖 ৩.১ সংখ্যা পদ্ধতি",explanation:"BCD-তে প্রতিটি দশমিক অঙ্ককে আলাদাভাবে 4-bit বাইনারিতে প্রকাশ করা হয়।"},
  {q:"(FF)₁₆ এর দশমিক মান কত?",options:["250","255","256","254"],answer:1,topic:"📖 ৩.১ সংখ্যা পদ্ধতি",explanation:"F=15। (FF)₁₆ = 15×16 + 15 = 240+15 = 255"},
  {q:"১০১১ এর ১-এর পূরক কোনটি?",options:["1100","0100","1010","0011"],answer:3,topic:"📖 ৩.২ বাইনারি গণিত",explanation:"১-এর পূরকে প্রতিটি বিট উল্টানো হয়: 1011 → 0100"},
  {q:"২-এর পূরক পদ্ধতিতে 8-bit সংখ্যার range কত?",options:["-127 থেকে +127","-128 থেকে +127","-128 থেকে +128","0 থেকে +255"],answer:2,topic:"📖 ৩.২ বাইনারি গণিত",explanation:"8-bit 2's complement range: -2⁷ থেকে 2⁷-1, অর্থাৎ -128 থেকে +127"},
  {q:"NAND গেটকে Universal Gate বলা হয় কারণ —",options:["এটি সবচেয়ে দ্রুত কাজ করে","এটি দিয়ে AND, OR, NOT সবই তৈরি করা যায়","এর দুটি ইনপুট আছে","এটি সবচেয়ে সহজ গেট"],answer:0,topic:"📖 ৩.৩ লজিক গেট",explanation:"NAND ও NOR গেট দিয়ে যেকোনো লজিক ফাংশন (AND, OR, NOT) তৈরি করা যায় বলে এদের Universal Gate বলে।"},
  {q:"XOR গেটের আউটপুট কখন 1 হয়?",options:["উভয় ইনপুট 1 হলে","উভয় ইনপুট ভিন্ন হলে","উভয় ইনপুট 0 হলে","যেকোনো একটি ইনপুট 1 হলে"],answer:3,topic:"📖 ৩.৩ লজিক গেট",explanation:"XOR-এর আউটপুট 1 হয় যখন ইনপুট ভিন্ন থাকে (00→0, 01→1, 10→1, 11→0)"},
  {q:"De Morgan's Theorem অনুযায়ী (A·B)' = ?",options:["A'+B'","A'·B'","AB","A+B"],answer:1,topic:"📖 ৩.৪ বুলিয়ান অ্যালজেব্রা",explanation:"De Morgan's 2nd Theorem: (A·B)' = A' + B'। AND-এর NOT = NOT গুলোর OR"},
  {q:"Absorption Law অনুযায়ী A + AB = ?",options:["B","AB","A","1"],answer:1,topic:"📖 ৩.৪ বুলিয়ান অ্যালজেব্রা",explanation:"Absorption Law: A + AB = A(1+B) = A·1 = A"},
  {q:"হাফ অ্যাডারে Sum আউটপুট কোন গেট দিয়ে পাওয়া যায়?",options:["AND","OR","XOR","NAND"],answer:3,topic:"📖 ৩.৫ হাফ ও ফুল অ্যাডার",explanation:"হাফ অ্যাডারে Sum = A ⊕ B (XOR গেট), Carry = A·B (AND গেট)"},
  {q:"ফুল অ্যাডারে কয়টি ইনপুট থাকে?",options:["২","৪","৩","১"],answer:2,topic:"📖 ৩.৫ হাফ ও ফুল অ্যাডার",explanation:"ফুল অ্যাডারে ৩টি ইনপুট: A, B এবং Carry-in (Cin)"},
  {q:"2-to-4 ডিকোডারে ইনপুট AB=10 হলে কোন আউটপুট active হয়?",options:["D0","D1","D2","D3"],answer:2,topic:"📖 ৩.৬ এনকোডার ও ডিকোডার",explanation:"2-to-4 decoder: AB=00→D0, 01→D1, 10→D2, 11→D3। তাই AB=10 → D2"},
  {q:"৭-সেগমেন্ট ডিসপ্লেতে কয়টি সেগমেন্ট থাকে?",options:["৫","৬","৮","৭"],answer:1,topic:"📖 ৩.৬ এনকোডার ও ডিকোডার",explanation:"৭-সেগমেন্ট ডিসপ্লেতে a, b, c, d, e, f, g — মোট ৭টি LED সেগমেন্ট থাকে"},
  {q:"SR ফ্লিপ-ফ্লপে S=1, R=1 হলে কী হয়?",options:["Q=1 হয়","Q=0 হয়","Forbidden (অনির্ধারিত) অবস্থা","Toggle হয়"],answer:3,topic:"📖 ৩.৭ ফ্লিপ-ফ্লপ",explanation:"SR ফ্লিপ-ফ্লপে S=R=1 হলে Forbidden State — এটি অনির্ধারিত ও নিষিদ্ধ অবস্থা"},
  {q:"JK ফ্লিপ-ফ্লপে J=1, K=1 হলে কী ঘটে?",options:["Set হয়","Reset হয়","কোনো পরিবর্তন হয় না","Toggle (Q পরিবর্তিত) হয়"],answer:0,topic:"📖 ৩.৭ ফ্লিপ-ফ্লপ",explanation:"JK ফ্লিপ-ফ্লপে J=K=1 হলে Toggle — আউটপুট Q পরিবর্তিত হয় (Q')। এটি SR-এর forbidden state সমস্যা দূর করে"},
];
function grade(s:number,t:number){const p=s/t;if(p>=14/15)return{g:"A+",c:"#15803d",bg:"#f0fdf4",msg:"অসাধারণ! পরীক্ষার জন্য সম্পূর্ণ প্রস্তুত!"};if(p>=12/15)return{g:"A",c:"#1d4ed8",bg:"#eff6ff",msg:"চমৎকার! আরও একটু অনুশীলন করুন।"};if(p>=11/15)return{g:"A-",c:"#0891b2",bg:"#ecfeff",msg:"ভালো! দুর্বল বিষয়গুলো পুনরায় পড়ুন।"};if(p>=9/15)return{g:"B",c:"#d97706",bg:"#fffbeb",msg:"চেষ্টা করুন! সংখ্যা পদ্ধতি ও লজিক গেট আরও পড়ুন।"};if(p>=6/15)return{g:"C",c:"#dc2626",bg:"#fef2f2",msg:"আরও পরিশ্রম দরকার। বিষয়গুলো পুনরায় পড়ুন।"};return{g:"F",c:"#7f1d1d",bg:"#fef2f2",msg:"হতাশ হবেন না। প্রতিটি বিষয় আবার পড়ুন।"};}
export default function Chapter3TextbookQuiz(){
  const[phase,setPhase]=useState<"idle"|"quiz"|"result">("idle");
  const[cur,setCur]=useState(0);
  const[sel,setSel]=useState<number|null>(null);
  const[ans,setAns]=useState<(number|null)[]>(Array(15).fill(null));
  function pick(i:number){if(sel===null)setSel(i);}
  function next(){const na=[...ans];na[cur]=sel;setAns(na);setSel(null);if(cur<14){setCur(cur+1);}else{setPhase("result");}}
  if(phase==="idle")return(
    <div style={{minHeight:"100vh",background:"#0f172a",fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"680px",width:"100%"}}>
        <Link href="/demo/chapter3" style={{color:"#7dd3fc",textDecoration:"none",fontSize:"0.875rem",fontWeight:600,display:"block",marginBottom:"1.5rem"}}>← অধ্যায় ৩ সূচি</Link>
        <div style={{textAlign:"center",marginBottom:"2.5rem"}}>
          <div style={{fontSize:"3rem",marginBottom:"0.75rem"}}>📝</div>
          <h1 style={{fontSize:"clamp(1.5rem,4vw,2rem)",fontWeight:800,color:"#f1f5f9",margin:"0 0 0.5rem"}}>পাঠ্যবইয়ের কুইজ</h1>
          <p style={{color:"#7dd3fc",fontSize:"1rem",margin:"0 0 0.5rem",fontWeight:600}}>অধ্যায় ৩ — ডিজিটাল ডিভাইস</p>
          <p style={{color:"#94a3b8",fontSize:"0.875rem",margin:0}}>NCTB HSC ICT পাঠ্যবইয়ের অনুশীলনী প্রশ্ন</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1rem",marginBottom:"2rem"}}>
          {[["১৫","মোট প্রশ্ন"],["৭","বিষয়"],["৯৩%","A+ স্কোর"]].map(([n,l])=>(
            <div key={l} style={{background:"#1e293b",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}>
              <div style={{fontSize:"1.75rem",fontWeight:800,color:"#38bdf8"}}>{n}</div>
              <div style={{color:"#94a3b8",fontSize:"0.78rem",marginTop:"0.2rem"}}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{background:"#1e293b",borderRadius:"0.875rem",padding:"1.25rem",marginBottom:"2rem"}}>
          <div style={{color:"#e2e8f0",fontSize:"0.875rem",fontWeight:600,marginBottom:"0.75rem"}}>📚 বিষয়সমূহ:</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:"0.5rem"}}>
            {["৩.১ সংখ্যা পদ্ধতি","৩.২ বাইনারি গণিত","৩.৩ লজিক গেট","৩.৪ বুলিয়ান অ্যালজেব্রা","৩.৫ হাফ/ফুল অ্যাডার","৩.৬ এনকোডার/ডিকোডার","৩.৭ ফ্লিপ-ফ্লপ"].map(t=>(
              <span key={t} style={{background:"#334155",color:"#7dd3fc",borderRadius:"0.375rem",padding:"0.25rem 0.6rem",fontSize:"0.75rem"}}>{t}</span>
            ))}
          </div>
        </div>
        <button onClick={()=>setPhase("quiz")} style={{width:"100%",background:"#2563eb",color:"#fff",border:"none",borderRadius:"0.875rem",padding:"1rem",fontSize:"1rem",fontWeight:700,cursor:"pointer"}}>কুইজ শুরু করুন →</button>
      </div>
    </div>
  );
  if(phase==="result"){
    const score=ans.filter((a,i)=>a===questions[i].answer).length;
    const{g,c,bg,msg}=grade(score,15);
    return(
      <div style={{minHeight:"100vh",background:"#f8fafc",fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
        <div style={{maxWidth:"700px",margin:"0 auto"}}>
          <div style={{background:bg,border:`2px solid ${c}`,borderRadius:"1rem",padding:"2rem",textAlign:"center",marginBottom:"2rem"}}>
            <div style={{fontSize:"4rem",fontWeight:800,color:c}}>{g}</div>
            <div style={{fontSize:"1.5rem",fontWeight:700,color:"#0f172a",margin:"0.5rem 0"}}>{score}/১৫ সঠিক</div>
            <div style={{color:"#64748b",fontSize:"0.875rem"}}>{msg}</div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"1.25rem",marginBottom:"2rem"}}>
            {questions.map((q,i)=>{const ua=ans[i];const correct=ua===q.answer;return(
              <div key={i} style={{background:"#fff",border:`1.5px solid ${correct?"#bbf7d0":"#fecaca"}`,borderLeft:`4px solid ${correct?"#16a34a":"#dc2626"}`,borderRadius:"0.875rem",padding:"1.25rem"}}>
                <div style={{fontSize:"0.72rem",color:"#64748b",marginBottom:"0.35rem"}}>{q.topic}</div>
                <div style={{fontWeight:600,color:"#0f172a",fontSize:"0.9rem",marginBottom:"0.75rem"}}>{i+1}. {q.q}</div>
                <div style={{display:"flex",flexDirection:"column",gap:"0.35rem",marginBottom:"0.75rem"}}>
                  {q.options.map((o,j)=>{
                    const isCorrect=j===q.answer;
                    const isUser=j===ua;
                    let bg2="#f8fafc",border2="1px solid #e2e8f0",color2="#374151";
                    if(isCorrect){bg2="#f0fdf4";border2="1px solid #86efac";color2="#15803d";}
                    if(isUser&&!isCorrect){bg2="#fef2f2";border2="1px solid #fca5a5";color2="#dc2626";}
                    return(
                      <div key={j} style={{background:bg2,border:border2,borderRadius:"0.5rem",padding:"0.5rem 0.75rem",fontSize:"0.82rem",color:color2,display:"flex",alignItems:"center",gap:"0.5rem"}}>
                        <span style={{fontWeight:700}}>{["ক","খ","গ","ঘ"][j]})</span> {o}
                        {isCorrect&&<span style={{marginLeft:"auto",fontSize:"0.75rem",color:"#16a34a",fontWeight:600}}>✓ সঠিক</span>}
                        {isUser&&!isCorrect&&<span style={{marginLeft:"auto",fontSize:"0.75rem",color:"#dc2626",fontWeight:600}}>✗ আপনার উত্তর</span>}
                      </div>
                    );
                  })}
                </div>
                <div style={{background:"#f1f5f9",borderRadius:"0.5rem",padding:"0.625rem 0.75rem",fontSize:"0.8rem",color:"#475569"}}>
                  <strong style={{color:"#0f172a"}}>ব্যাখ্যা:</strong> {q.explanation}
                </div>
              </div>
            );})}
          </div>
          <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
            <button onClick={()=>{setPhase("idle");setCur(0);setSel(null);setAns(Array(15).fill(null));}} style={{flex:1,background:"#0f172a",color:"#fff",border:"none",borderRadius:"0.875rem",padding:"0.875rem",fontSize:"0.9rem",fontWeight:700,cursor:"pointer"}}>পুনরায় চেষ্টা করুন</button>
            <Link href="/demo/chapter3" style={{flex:1}}><div style={{background:"#1d4ed8",color:"#fff",borderRadius:"0.875rem",padding:"0.875rem",fontSize:"0.9rem",fontWeight:700,cursor:"pointer",textAlign:"center"}}>← অধ্যায় ৩ সূচি</div></Link>
          </div>
        </div>
      </div>
    );
  }
  const q=questions[cur];
  return(
    <div style={{minHeight:"100vh",background:"#f8fafc",fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"680px",margin:"0 auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.5rem",flexWrap:"wrap",gap:"0.5rem"}}>
          <Link href="/demo/chapter3" style={{color:"#2563eb",textDecoration:"none",fontSize:"0.875rem",fontWeight:600}}>← অধ্যায় ৩</Link>
          <span style={{color:"#64748b",fontSize:"0.875rem"}}>প্রশ্ন {cur+1}/১৫</span>
        </div>
        <div style={{background:"#fff",height:"6px",borderRadius:"999px",marginBottom:"1.5rem",overflow:"hidden"}}>
          <div style={{background:"#2563eb",height:"100%",width:`${((cur+1)/15)*100}%`,transition:"width 0.3s"}}/>
        </div>
        <div style={{background:"#fff",borderRadius:"1rem",padding:"2rem",boxShadow:"0 2px 8px rgba(0,0,0,0.06)",marginBottom:"1.5rem"}}>
          <span style={{background:"#eff6ff",color:"#1d4ed8",borderRadius:"0.375rem",padding:"0.25rem 0.6rem",fontSize:"0.75rem",fontWeight:600,display:"inline-block",marginBottom:"0.75rem"}}>{q.topic}</span>
          <h2 style={{fontSize:"1.05rem",fontWeight:700,color:"#0f172a",margin:"0 0 1.5rem",lineHeight:1.6}}>{q.q}</h2>
          <div style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
            {q.options.map((o,i)=>{
              const chosen=sel===i;
              return(
                <button key={i} onClick={()=>pick(i)} style={{background:chosen?"#eff6ff":"#f8fafc",border:chosen?"2px solid #2563eb":"2px solid #e2e8f0",borderRadius:"0.75rem",padding:"0.875rem 1rem",cursor:sel===null?"pointer":"default",textAlign:"left",display:"flex",alignItems:"center",gap:"0.75rem",transition:"all 0.15s"}}>
                  <span style={{background:chosen?"#2563eb":"#e2e8f0",color:chosen?"#fff":"#64748b",borderRadius:"0.375rem",padding:"0.2rem 0.5rem",fontSize:"0.8rem",fontWeight:700,minWidth:"24px",textAlign:"center"}}>{["ক","খ","গ","ঘ"][i]}</span>
                  <span style={{color:chosen?"#1d4ed8":"#374151",fontWeight:chosen?600:400,fontSize:"0.9rem"}}>{o}</span>
                </button>
              );
            })}
          </div>
        </div>
        <button onClick={next} disabled={sel===null} style={{width:"100%",background:sel===null?"#94a3b8":"#2563eb",color:"#fff",border:"none",borderRadius:"0.875rem",padding:"1rem",fontSize:"1rem",fontWeight:700,cursor:sel===null?"not-allowed":"pointer",transition:"background 0.15s"}}>
          {cur<14?"পরবর্তী প্রশ্ন →":"ফলাফল দেখুন →"}
        </button>
      </div>
    </div>
  );
}
