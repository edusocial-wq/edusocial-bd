import HalfFullAdderQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "হাফ ও ফুল অ্যাডার — HSC ICT অধ্যায় ৩.৫ | EduSocial BD" };
const C="#d97706",BG="#fffbeb",BR="#fde68a";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"center",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151",textAlign:"center",fontFamily:"monospace"};
export default function HalfFullAdderPage(){return(
  <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
    <div style={{maxWidth:"740px",margin:"0 auto"}}>
      <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
        <Link href="/demo/chapter3" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৩</Link>
        <span style={{color:BR}}>|</span>
        <Link href="/demo/chapter3/boolean-algebra" style={{color:C,textDecoration:"none"}}>বুলিয়ান অ্যালজেব্রা</Link>
        <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>হাফ ও ফুল অ্যাডার</span>
      </div>
      <div style={{marginBottom:"2rem"}}>
        <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৩.৫</span>
        <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>হাফ অ্যাডার ও ফুল অ্যাডার</h1>
        <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>বাইনারি যোগকারী সার্কিট — Sum ও Carry আউটপুট</p>
      </div>
      <div style={card}>
        <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>
        <h3 style={h3s}>হাফ অ্যাডার (Half Adder)</h3>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",margin:"0.75rem 0"}}>
          <div style={{background:"#fffbeb",border:"1.5px solid #fde68a",borderRadius:"0.75rem",padding:"1rem"}}>
            <div style={{fontWeight:700,color:"#d97706",marginBottom:"0.5rem"}}>📐 সমীকরণ</div>
            <code style={{display:"block",fontSize:"0.9rem",color:"#0f172a",marginBottom:"0.25rem"}}>Sum = A ⊕ B</code>
            <code style={{display:"block",fontSize:"0.9rem",color:"#0f172a"}}>Carry = A · B</code>
            <p style={{color:"#64748b",fontSize:"0.75rem",margin:"0.5rem 0 0"}}>ইনপুট: A, B &nbsp;|&nbsp; আউটপুট: Sum, Carry</p>
          </div>
          <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:"0.75rem",padding:"1rem"}}>
            <div style={{fontWeight:700,color:"#64748b",marginBottom:"0.5rem"}}>Truth Table</div>
            <table style={{borderCollapse:"collapse",width:"100%"}}>
              <thead><tr><th style={th}>A</th><th style={th}>B</th><th style={th}>Sum</th><th style={th}>Carry</th></tr></thead>
              <tbody>
                {[["0","0","0","0"],["0","1","1","0"],["1","0","1","0"],["1","1","0","1"]].map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    {r.map((v,j)=><td key={j} style={{...td,fontWeight:j>=2?700:400,color:j>=2&&v==="1"?C:"#374151"}}>{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div style={{background:"#1e293b",color:"#e2e8f0",borderRadius:"0.75rem",padding:"1rem 1.25rem",margin:"0.75rem 0 1.5rem",fontSize:"0.875rem"}}>
          <strong style={{color:"#fbbf24"}}>গেট:</strong> Sum-এ XOR গেট, Carry-তে AND গেট ব্যবহার হয়।
        </div>
        <h3 style={h3s}>ফুল অ্যাডার (Full Adder)</h3>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",margin:"0.75rem 0"}}>
          <div style={{background:"#fffbeb",border:"1.5px solid #fde68a",borderRadius:"0.75rem",padding:"1rem"}}>
            <div style={{fontWeight:700,color:"#d97706",marginBottom:"0.5rem"}}>📐 সমীকরণ</div>
            <code style={{display:"block",fontSize:"0.875rem",color:"#0f172a",marginBottom:"0.25rem"}}>Sum = A ⊕ B ⊕ Cin</code>
            <code style={{display:"block",fontSize:"0.875rem",color:"#0f172a"}}>Cout = AB+BCin+ACin</code>
            <p style={{color:"#64748b",fontSize:"0.75rem",margin:"0.5rem 0 0"}}>ইনপুট: A, B, Cin &nbsp;|&nbsp; আউটপুট: Sum, Cout</p>
          </div>
          <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:"0.75rem",padding:"1rem"}}>
            <div style={{fontWeight:700,color:"#64748b",marginBottom:"0.5rem"}}>Truth Table (সংক্ষিপ্ত)</div>
            <table style={{borderCollapse:"collapse",width:"100%"}}>
              <thead><tr><th style={{...th,fontSize:"0.75rem"}}>A</th><th style={{...th,fontSize:"0.75rem"}}>B</th><th style={{...th,fontSize:"0.75rem"}}>Cin</th><th style={{...th,fontSize:"0.75rem"}}>Sum</th><th style={{...th,fontSize:"0.75rem"}}>Cout</th></tr></thead>
              <tbody>
                {[["0","0","0","0","0"],["0","1","1","0","1"],["1","0","1","0","1"],["1","1","0","1","1"],["1","1","1","1","1"]].map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    {r.map((v,j)=><td key={j} style={{...td,fontSize:"0.8rem",fontWeight:j>=3?700:400,color:j>=3&&v==="1"?C:"#374151"}}>{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div style={{background:"#f0fdf4",border:"1.5px solid #bbf7d0",borderRadius:"0.75rem",padding:"1rem 1.25rem",margin:"0.75rem 0 1.5rem"}}>
          <strong style={{color:"#15803d"}}>ফুল অ্যাডার = ২টি হাফ অ্যাডার + ১টি OR গেট</strong>
          <p style={{color:"#475569",fontSize:"0.875rem",margin:"0.5rem 0 0"}}>ফুল অ্যাডারে পূর্ববর্তী বিটের Carry-in (Cin) নেওয়ার সুবিধা আছে যা হাফ অ্যাডারে নেই।</p>
        </div>
        <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
          <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
          <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.1rem",lineHeight:2,color:"#1e293b",fontSize:"0.875rem"}}>
            <li>হাফ অ্যাডার: ২ ইনপুট, Sum=XOR, Carry=AND</li>
            <li>ফুল অ্যাডার: ৩ ইনপুট (A,B,Cin), Sum=A⊕B⊕Cin</li>
            <li>ফুল অ্যাডার = ২ হাফ অ্যাডার + ১ OR গেট</li>
            <li>n-bit যোগে n টি ফুল অ্যাডার লাগে</li>
          </ul>
        </div>
      </div>
      <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
        <h2 style={{...h2s,color:"#92400e",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
        <HalfFullAdderQuiz/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginTop:"2rem"}}>
        <Link href="/demo/chapter3/textbook-quiz" style={{textDecoration:"none"}}><div style={{background:"#0f172a",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}><div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>📝</div><div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ</div></div></Link>
        <Link href="/demo/chapter3" style={{textDecoration:"none"}}><div style={{background:"#1e3a5f",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}><div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>🗂️</div><div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>অধ্যায় ৩ সূচি</div></div></Link>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.5rem",flexWrap:"wrap",gap:"1rem"}}>
        <Link href="/demo/chapter3/boolean-algebra" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← বুলিয়ান অ্যালজেব্রা</Link>
        <Link href="/demo/chapter3/encoder-decoder" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>এনকোডার ও ডিকোডার →</Link>
      </div>
    </div>
  </div>
);}
