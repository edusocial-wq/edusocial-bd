import LogicGatesQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "লজিক গেট — HSC ICT অধ্যায় ৩.৩ | EduSocial BD" };
const C="#7c3aed",BG="#f5f3ff",BR="#ddd6fe";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"center",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151",textAlign:"center",fontFamily:"monospace"};
export default function LogicGatesPage(){
  const gates=[
    {name:"AND",sym:"A · B",expr:"Y=A·B",tt:[["0","0","0"],["0","1","0"],["1","0","0"],["1","1","1"]],rule:"সব ইনপুট 1 → আউটপুট 1",color:"#2563eb"},
    {name:"OR",sym:"A + B",expr:"Y=A+B",tt:[["0","0","0"],["0","1","1"],["1","0","1"],["1","1","1"]],rule:"যেকোনো একটি 1 → আউটপুট 1",color:"#059669"},
    {name:"NOT",sym:"Ā",expr:"Y=A'",tt:[["0","1"],["1","0"]],rule:"ইনপুট উল্টে দেয়",color:"#dc2626"},
    {name:"NAND",sym:"(A·B)'",expr:"Y=(A·B)'",tt:[["0","0","1"],["0","1","1"],["1","0","1"],["1","1","0"]],rule:"AND-এর বিপরীত",color:"#d97706"},
    {name:"NOR",sym:"(A+B)'",expr:"Y=(A+B)'",tt:[["0","0","1"],["0","1","0"],["1","0","0"],["1","1","0"]],rule:"OR-এর বিপরীত",color:"#0891b2"},
    {name:"XOR",sym:"A⊕B",expr:"Y=A⊕B",tt:[["0","0","0"],["0","1","1"],["1","0","1"],["1","1","0"]],rule:"ইনপুট ভিন্ন → আউটপুট 1",color:"#9333ea"},
  ];
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter3" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৩</Link>
          <span style={{color:BR}}>|</span>
          <Link href="/demo/chapter3/binary-arithmetic" style={{color:C,textDecoration:"none"}}>বাইনারি গণিত</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>লজিক গেট</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৩.৩</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>লজিক গেট</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>AND, OR, NOT, NAND, NOR, XOR — Truth Table ও Boolean Expression</p>
        </div>
        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>
          <div style={{display:"flex",flex:"column",flexDirection:"column",gap:"1.25rem",margin:"0.75rem 0 1.5rem"}}>
            {gates.map(g=>(
              <div key={g.name} style={{background:"#f8fafc",border:`1.5px solid ${g.color}20`,borderLeft:`4px solid ${g.color}`,borderRadius:"0.75rem",padding:"1rem"}}>
                <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.75rem",flexWrap:"wrap"}}>
                  <span style={{fontWeight:800,color:g.color,fontSize:"1rem"}}>{g.name}</span>
                  <code style={{background:"#0f172a",color:"#86efac",padding:"0.2rem 0.5rem",borderRadius:"0.375rem",fontSize:"0.85rem"}}>{g.expr}</code>
                  <span style={{fontSize:"0.8rem",color:"#64748b"}}>{g.rule}</span>
                </div>
                <div style={{overflowX:"auto"}}>
                  <table style={{borderCollapse:"collapse",fontSize:"0.82rem"}}>
                    <thead><tr>
                      <th style={{...th,minWidth:"50px"}}>A</th>
                      {g.name!=="NOT"&&<th style={{...th,minWidth:"50px"}}>B</th>}
                      <th style={{...th,minWidth:"60px",color:g.color}}>Y ({g.name})</th>
                    </tr></thead>
                    <tbody>{g.tt.map((r,i)=>(
                      <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                        {r.slice(0,-1).map((v,j)=><td key={j} style={td}>{v}</td>)}
                        <td style={{...td,fontWeight:700,color:r[r.length-1]==="1"?g.color:"#64748b"}}>{r[r.length-1]}</td>
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          <div style={{background:"#1e293b",color:"#e2e8f0",borderRadius:"0.75rem",padding:"1.25rem",marginBottom:"1.5rem"}}>
            <div style={{fontWeight:700,color:"#fbbf24",marginBottom:"0.75rem"}}>🌐 Universal Gate</div>
            <p style={{color:"#94a3b8",fontSize:"0.875rem",lineHeight:1.8,margin:0}}>
              <strong style={{color:"#f1f5f9"}}>NAND</strong> ও <strong style={{color:"#f1f5f9"}}>NOR</strong> গেটকে Universal Gate বলা হয় কারণ এই দুটি গেট ব্যবহার করে AND, OR, NOT সহ যেকোনো লজিক সার্কিট তৈরি করা যায়।
            </p>
          </div>
          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 মনে রাখুন:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.1rem",lineHeight:2,color:"#1e293b",fontSize:"0.875rem"}}>
              <li>AND: সব 1 → 1 &nbsp;|&nbsp; OR: যেকোনো 1 → 1</li>
              <li>NOT: উল্টো &nbsp;|&nbsp; NAND=NOT AND &nbsp;|&nbsp; NOR=NOT OR</li>
              <li>XOR: ভিন্ন ইনপুট → 1; একই ইনপুট → 0</li>
              <li>NAND ও NOR = Universal Gate</li>
            </ul>
          </div>
        </div>
        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#6d28d9",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <LogicGatesQuiz/>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginTop:"2rem"}}>
          <Link href="/demo/chapter3/textbook-quiz" style={{textDecoration:"none"}}><div style={{background:"#0f172a",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}><div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>📝</div><div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ</div></div></Link>
          <Link href="/demo/chapter3" style={{textDecoration:"none"}}><div style={{background:"#1e3a5f",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}><div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>🗂️</div><div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>অধ্যায় ৩ সূচি</div></div></Link>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.5rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter3/binary-arithmetic" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← বাইনারি গণিত</Link>
          <Link href="/demo/chapter3/boolean-algebra" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>বুলিয়ান অ্যালজেব্রা →</Link>
        </div>
      </div>
    </div>
  );
}
