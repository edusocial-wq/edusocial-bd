import BooleanAlgebraQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "বুলিয়ান অ্যালজেব্রা — HSC ICT অধ্যায় ৩.৪ | EduSocial BD" };
const C="#059669",BG="#f0fdf4",BR="#bbf7d0";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151"};
export default function BooleanAlgebraPage(){
  const laws=[
    {name:"Identity Law",rules:["A + 0 = A","A · 1 = A"],color:"#2563eb"},
    {name:"Null Law",rules:["A + 1 = 1","A · 0 = 0"],color:"#dc2626"},
    {name:"Idempotent Law",rules:["A + A = A","A · A = A"],color:"#d97706"},
    {name:"Complement Law",rules:["A + A' = 1","A · A' = 0"],color:"#9333ea"},
    {name:"Double Complement",rules:["(A')' = A"],color:"#0891b2"},
    {name:"Absorption Law",rules:["A + AB = A","A(A+B) = A"],color:"#059669"},
    {name:"Distributive Law",rules:["A(B+C) = AB+AC","A+BC = (A+B)(A+C)"],color:"#0f172a"},
    {name:"De Morgan's Theorem",rules:["(A+B)' = A'·B'","(A·B)' = A'+B'"],color:"#e11d48"},
  ];
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter3" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৩</Link>
          <span style={{color:BR}}>|</span>
          <Link href="/demo/chapter3/logic-gates" style={{color:C,textDecoration:"none"}}>লজিক গেট</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>বুলিয়ান অ্যালজেব্রা</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৩.৪</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>বুলিয়ান অ্যালজেব্রা</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>বুলিয়ান সূত্র, De Morgan's Theorem ও সরলীকরণ</p>
        </div>
        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>
          <h3 style={h3s}>বুলিয়ান অ্যালজেব্রার সূত্রাবলি</h3>
          <div style={{display:"flex",flexDirection:"column",gap:"0.75rem",margin:"0.75rem 0 1.5rem"}}>
            {laws.map(l=>(
              <div key={l.name} style={{background:"#f8fafc",border:`1.5px solid ${l.color}20`,borderLeft:`4px solid ${l.color}`,borderRadius:"0.625rem",padding:"0.875rem 1rem",display:"flex",alignItems:"center",gap:"1rem",flexWrap:"wrap"}}>
                <div style={{fontWeight:700,color:l.color,fontSize:"0.85rem",minWidth:"160px"}}>{l.name}</div>
                <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
                  {l.rules.map(r=><code key={r} style={{background:"#0f172a",color:"#86efac",padding:"0.2rem 0.6rem",borderRadius:"0.375rem",fontSize:"0.875rem"}}>{r}</code>)}
                </div>
              </div>
            ))}
          </div>
          <h3 style={h3s}>De Morgan's Theorem — বিস্তারিত</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{background:"#fef2f2",border:"1.5px solid #fecaca",borderRadius:"0.75rem",padding:"1rem",textAlign:"center"}}>
              <div style={{fontWeight:700,color:"#dc2626",marginBottom:"0.5rem"}}>১ম Theorem</div>
              <code style={{fontSize:"1rem",color:"#0f172a",display:"block",margin:"0.5rem 0"}}>(A + B)' = A' · B'</code>
              <p style={{color:"#64748b",fontSize:"0.8rem",margin:0}}>OR-এর NOT = NOT গুলোর AND</p>
            </div>
            <div style={{background:"#eff6ff",border:"1.5px solid #bfdbfe",borderRadius:"0.75rem",padding:"1rem",textAlign:"center"}}>
              <div style={{fontWeight:700,color:"#2563eb",marginBottom:"0.5rem"}}>২য় Theorem</div>
              <code style={{fontSize:"1rem",color:"#0f172a",display:"block",margin:"0.5rem 0"}}>(A · B)' = A' + B'</code>
              <p style={{color:"#64748b",fontSize:"0.8rem",margin:0}}>AND-এর NOT = NOT গুলোর OR</p>
            </div>
          </div>
          <h3 style={h3s}>সরলীকরণের উদাহরণ</h3>
          <div style={{background:"#0f172a",color:"#e2e8f0",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.5rem",fontFamily:"monospace",fontSize:"0.875rem",lineHeight:2}}>
            <div style={{color:"#94a3b8"}}>{"// AB + A'B সরল করুন:"}</div>
            <div>= B(A + A') &nbsp;<span style={{color:"#fbbf24"}}>← B দিয়ে factor</span></div>
            <div>= B · 1 &nbsp;&nbsp;&nbsp;<span style={{color:"#fbbf24"}}>← A+A'=1</span></div>
            <div style={{color:"#86efac"}}>= B</div>
          </div>
          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 মনে রাখুন:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.1rem",lineHeight:2,color:"#1e293b",fontSize:"0.875rem"}}>
              <li>De Morgan: OR → AND, AND → OR, NOT লাগান উভয় দিকে</li>
              <li>A+AB = A (Absorption), A·A = A (Idempotent)</li>
              <li>(A')' = A (Double Complement)</li>
              <li>A+A' = 1, A·A' = 0 (Complement)</li>
            </ul>
          </div>
        </div>
        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#15803d",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <BooleanAlgebraQuiz/>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginTop:"2rem"}}>
          <Link href="/demo/chapter3/textbook-quiz" style={{textDecoration:"none"}}><div style={{background:"#0f172a",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}><div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>📝</div><div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ</div></div></Link>
          <Link href="/demo/chapter3" style={{textDecoration:"none"}}><div style={{background:"#1e3a5f",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}><div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>🗂️</div><div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>অধ্যায় ৩ সূচি</div></div></Link>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.5rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter3/logic-gates" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← লজিক গেট</Link>
          <Link href="/demo/chapter3/half-full-adder" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>হাফ ও ফুল অ্যাডার →</Link>
        </div>
      </div>
    </div>
  );
}
