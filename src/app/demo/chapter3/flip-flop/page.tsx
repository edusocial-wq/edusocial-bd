import FlipFlopQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "ফ্লিপ-ফ্লপ — HSC ICT অধ্যায় ৩.৭ | EduSocial BD" };
const C="#9333ea",BG="#fdf4ff",BR="#e9d5ff";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"center",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151",textAlign:"center"};
export default function FlipFlopPage(){
  const ffs=[
    {name:"SR ফ্লিপ-ফ্লপ",color:"#2563eb",rows:[["0","0","-","অপরিবর্তিত (No Change)"],["0","1","0","Reset"],["1","0","1","Set"],["1","1","?","Forbidden (নিষিদ্ধ)"]],inputs:"S, R",note:"S=R=1 — forbidden state"},
    {name:"JK ফ্লিপ-ফ্লপ",color:"#059669",rows:[["0","0","-","অপরিবর্তিত"],["0","1","0","Reset"],["1","0","1","Set"],["1","1","Q'","Toggle"]],inputs:"J, K",note:"SR-এর forbidden state সমস্যা দূর করে"},
    {name:"D ফ্লিপ-ফ্লপ",color:"#dc2626",rows:[["0","-","0","Reset"],["1","-","1","Set"]],inputs:"D",note:"Delay ফ্লিপ-ফ্লপ — Q = D (এক ক্লক পরে)"},
    {name:"T ফ্লিপ-ফ্লপ",color:"#d97706",rows:[["0","-","-","অপরিবর্তিত"],["1","-","Q'","Toggle"]],inputs:"T",note:"T=1 → Toggle, T=0 → No Change"},
  ];
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter3" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৩</Link>
          <span style={{color:BR}}>|</span>
          <Link href="/demo/chapter3/encoder-decoder" style={{color:C,textDecoration:"none"}}>এনকোডার/ডিকোডার</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>ফ্লিপ-ফ্লপ</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৩.৭</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>ফ্লিপ-ফ্লপ</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>SR, JK, D ও T ফ্লিপ-ফ্লপ — মেমোরি সেল ও ক্লক</p>
        </div>
        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>
          <div style={{background:"#1e293b",color:"#e2e8f0",borderRadius:"0.75rem",padding:"1.25rem",marginBottom:"1.5rem",fontSize:"0.875rem",lineHeight:1.8}}>
            <strong style={{color:"#fbbf24"}}>ফ্লিপ-ফ্লপ কী?</strong> ফ্লিপ-ফ্লপ হলো <strong>Sequential Logic Circuit</strong> — এটি বর্তমান ইনপুট ও আগের অবস্থা (previous state) উভয়ের উপর নির্ভর করে। এটি 1-bit তথ্য সংরক্ষণ করতে পারে — তাই এটি মেমোরির মূল উপাদান।
          </div>
          {ffs.map(ff=>(
            <div key={ff.name} style={{marginBottom:"1.5rem"}}>
              <h3 style={{...h3s,color:ff.color}}>{ff.name}</h3>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem",marginBottom:"0.75rem"}}>
                <div style={{background:"#f8fafc",border:`1.5px solid ${ff.color}20`,borderLeft:`4px solid ${ff.color}`,borderRadius:"0.625rem",padding:"0.75rem"}}>
                  <div style={{fontSize:"0.8rem",color:"#64748b",marginBottom:"0.25rem"}}>ইনপুট</div>
                  <div style={{fontWeight:700,color:ff.color,fontFamily:"monospace"}}>{ff.inputs}</div>
                </div>
                <div style={{background:"#f8fafc",border:`1.5px solid ${ff.color}20`,borderRadius:"0.625rem",padding:"0.75rem"}}>
                  <div style={{fontSize:"0.8rem",color:"#64748b",marginBottom:"0.25rem"}}>বিশেষত্ব</div>
                  <div style={{fontWeight:500,color:"#1e293b",fontSize:"0.8rem"}}>{ff.note}</div>
                </div>
              </div>
              <div style={{overflowX:"auto"}}>
                <table style={{borderCollapse:"collapse",width:"100%",minWidth:"300px"}}>
                  <thead><tr>
                    {ff.name==="D ফ্লিপ-ফ্লপ"||ff.name==="T ফ্লিপ-ফ্লপ"
                      ?<><th style={th}>{ff.inputs}</th><th style={{...th,color:ff.color}}>Q (পরবর্তী)</th><th style={{...th,color:ff.color}}>অবস্থা</th></>
                      :<>{ff.inputs.split(", ").map(i=><th key={i} style={th}>{i}</th>)}<th style={{...th,color:ff.color}}>Q</th><th style={{...th,color:ff.color}}>অবস্থা</th></>
                    }
                  </tr></thead>
                  <tbody>{ff.rows.map((r,i)=>(
                    <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                      {r.slice(0,-1).map((v,j)=><td key={j} style={{...td,fontFamily:"monospace",fontWeight:j===r.length-2?700:400,color:j===r.length-2?(v==="?"?"#dc2626":v==="Q'"||v==="1"?ff.color:"#374151"):"#374151"}}>{v}</td>)}
                      <td style={{...td,fontSize:"0.78rem",color:"#64748b",fontFamily:"system-ui"}}>{r[r.length-1]}</td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            </div>
          ))}
          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.1rem",lineHeight:2,color:"#1e293b",fontSize:"0.875rem"}}>
              <li>SR: Set=1→Q=1, Reset=1→Q=0, S=R=1 → Forbidden</li>
              <li>JK: J=K=1 → Toggle (SR-এর সমস্যা সমাধান)</li>
              <li>D: Q = D (Delay ফ্লিপ-ফ্লপ)</li>
              <li>T: T=1 → Toggle, T=0 → No Change</li>
              <li>ফ্লিপ-ফ্লপ = Sequential Circuit = মেমোরি সেল</li>
            </ul>
          </div>
        </div>
        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#7e22ce",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <FlipFlopQuiz/>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginTop:"2rem"}}>
          <Link href="/demo/chapter3/textbook-quiz" style={{textDecoration:"none"}}><div style={{background:"#0f172a",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}><div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>📝</div><div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ</div><div style={{color:"#94a3b8",fontSize:"0.78rem",marginTop:"0.2rem"}}>Chapter শেষের অনুশীলনী</div></div></Link>
          <Link href="/demo/chapter3" style={{textDecoration:"none"}}><div style={{background:"#1e3a5f",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}><div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>🗂️</div><div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>অধ্যায় ৩ সূচি</div><div style={{color:"#94a3b8",fontSize:"0.78rem",marginTop:"0.2rem"}}>সব বিষয় দেখুন</div></div></Link>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.5rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter3/encoder-decoder" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← এনকোডার ও ডিকোডার</Link>
          <Link href="/demo/chapter3/textbook-quiz" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ →</Link>
        </div>
      </div>
    </div>
  );
}
