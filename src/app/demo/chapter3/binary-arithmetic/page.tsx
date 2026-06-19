import BinaryArithmeticQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "বাইনারি গণিত — HSC ICT অধ্যায় ৩.২ | EduSocial BD" };
const C="#0891b2",BG="#ecfeff",BR="#a5f3fc";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151",fontFamily:"monospace"};
export default function BinaryArithmeticPage(){return(
  <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
    <div style={{maxWidth:"740px",margin:"0 auto"}}>
      <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
        <Link href="/demo/chapter3" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৩</Link>
        <span style={{color:BR}}>|</span>
        <Link href="/demo/chapter3/number-systems" style={{color:C,textDecoration:"none"}}>সংখ্যা পদ্ধতি</Link>
        <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>বাইনারি গণিত</span>
      </div>
      <div style={{marginBottom:"2rem"}}>
        <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৩.২</span>
        <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>বাইনারি গণিত</h1>
        <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>বাইনারি যোগ, ১-এর পূরক, ২-এর পূরক ও বিয়োগ</p>
      </div>
      <div style={card}>
        <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>
        <h3 style={h3s}>বাইনারি যোগের নিয়ম</h3>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0.75rem",margin:"0.75rem 0 1.5rem"}}>
          {[["0+0","0","Carry=0"],["0+1","1","Carry=0"],["1+0","1","Carry=0"],["1+1","0","Carry=1"]].map(([e,r,c])=>(
            <div key={e} style={{background:"#f0f9ff",border:"1.5px solid #a5f3fc",borderRadius:"0.625rem",padding:"0.75rem",textAlign:"center"}}>
              <div style={{fontFamily:"monospace",fontWeight:700,fontSize:"1rem",color:"#0f172a"}}>{e} = {r}</div>
              <div style={{fontSize:"0.72rem",color:"#0891b2",marginTop:"0.2rem"}}>{c}</div>
            </div>
          ))}
        </div>
        <h3 style={h3s}>উদাহরণ: বাইনারি যোগ</h3>
        <div style={{background:"#0f172a",color:"#e2e8f0",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.5rem",fontFamily:"monospace",fontSize:"0.9rem",lineHeight:2}}>
          <div style={{color:"#94a3b8"}}>{"// 1011 + 0110 = ?"}</div>
          <div>&nbsp;&nbsp;1011</div>
          <div>+ 0110</div>
          <div style={{borderTop:"1px solid #334155",paddingTop:"0.5rem",color:"#86efac"}}>= 10001 &nbsp;<span style={{color:"#fbbf24",fontSize:"0.8rem"}}>(দশমিকে: 11+6=17)</span></div>
        </div>
        <h3 style={h3s}>১-এর পূরক (1's Complement)</h3>
        <div style={{background:"#f8fafc",border:"1.5px solid #e2e8f0",borderLeft:"4px solid #0891b2",borderRadius:"0.75rem",padding:"1rem 1.25rem",margin:"0.75rem 0 1.5rem"}}>
          <p style={{color:"#475569",fontSize:"0.875rem",lineHeight:1.8,margin:"0 0 0.5rem"}}>প্রতিটি বিট উল্টে দিন — 0 হলে 1, 1 হলে 0।</p>
          <div style={{fontFamily:"monospace",fontSize:"0.9rem",color:"#0f172a"}}>
            1011 → <strong style={{color:"#0891b2"}}>0100</strong> &nbsp;|&nbsp; 1100 → <strong style={{color:"#0891b2"}}>0011</strong>
          </div>
        </div>
        <h3 style={h3s}>২-এর পূরক (2's Complement)</h3>
        <div style={{background:"#0f172a",color:"#e2e8f0",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.5rem",fontFamily:"monospace",fontSize:"0.875rem",lineHeight:1.9}}>
          <div style={{color:"#94a3b8"}}>{"// ধাপ: ১-এর পূরক + 1"}</div>
          <div>সংখ্যা: &nbsp;&nbsp;<span style={{color:"#fbbf24"}}>1010</span></div>
          <div>১-এর পূরক: <span style={{color:"#60a5fa"}}>0101</span></div>
          <div>+1 যোগ: &nbsp;&nbsp;<span style={{color:"#86efac"}}>0110</span> ← ২-এর পূরক</div>
        </div>
        <h3 style={h3s}>২-এর পূরক দিয়ে বিয়োগ</h3>
        <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
          <table style={{width:"100%",borderCollapse:"collapse"}}>
            <thead><tr><th style={th}>ধাপ</th><th style={th}>বিবরণ</th><th style={th}>উদাহরণ (8-5)</th></tr></thead>
            <tbody>
              {[["১","A সরাসরি রাখুন","8 = 1000"],["২","B-এর ২-এর পূরক নিন","5=0101 → পূরক: 1011"],["৩","A + (B-এর ২-এর পূরক) যোগ করুন","1000 + 1011 = 10011"],["৪","Overflow বিট বাদ দিন","10011 → 0011 = 3"],].map((r,i)=>(
                <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                  <td style={{...td,fontWeight:700,color:"#0891b2"}}>{r[0]}</td>
                  <td style={{...td,fontFamily:"system-ui"}}>{r[1]}</td>
                  <td style={td}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
          <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
          <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.1rem",lineHeight:2,color:"#1e293b",fontSize:"0.875rem"}}>
            <li>1+1=10 (বাইনারি) — Carry=1, Sum=0</li>
            <li>১-এর পূরক: সব বিট উল্টাও</li>
            <li>২-এর পূরক: ১-এর পূরক + 1</li>
            <li>বিয়োগ = বিয়োজকের ২-এর পূরক যোগ করা</li>
            <li>8-bit range: -128 থেকে +127</li>
          </ul>
        </div>
      </div>
      <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
        <h2 style={{...h2s,color:"#0e7490",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
        <BinaryArithmeticQuiz/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginTop:"2rem"}}>
        <Link href="/demo/chapter3/textbook-quiz" style={{textDecoration:"none"}}><div style={{background:"#0f172a",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}><div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>📝</div><div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ</div></div></Link>
        <Link href="/demo/chapter3" style={{textDecoration:"none"}}><div style={{background:"#1e3a5f",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}><div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>🗂️</div><div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>অধ্যায় ৩ সূচি</div></div></Link>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.5rem",flexWrap:"wrap",gap:"1rem"}}>
        <Link href="/demo/chapter3/number-systems" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← সংখ্যা পদ্ধতি</Link>
        <Link href="/demo/chapter3/logic-gates" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>লজিক গেট →</Link>
      </div>
    </div>
  </div>
);}
