import NumberSystemsQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "সংখ্যা পদ্ধতি — HSC ICT অধ্যায় ৩.১ | EduSocial BD" };
const C="#2563eb",BG="#eff6ff",BR="#bfdbfe";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151",fontFamily:"monospace"};
export default function NumberSystemsPage(){return(
  <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
    <div style={{maxWidth:"740px",margin:"0 auto"}}>
      <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
        <Link href="/demo/chapter3" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৩</Link>
        <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>সংখ্যা পদ্ধতি</span>
      </div>
      <div style={{marginBottom:"2rem"}}>
        <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৩.১</span>
        <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>সংখ্যা পদ্ধতি</h1>
        <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>Binary, Octal, Decimal, Hexadecimal — রূপান্তর ও BCD</p>
      </div>
      <div style={card}>
        <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>
        <h3 style={h3s}>চারটি সংখ্যা পদ্ধতি</h3>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:"0.75rem",margin:"0.75rem 0 1.5rem"}}>
          {[["🔢","দশমিক","Decimal","Base 10","0-9","মানুষের জন্য","#0f172a"],
            ["💻","বাইনারি","Binary","Base 2","0 ও 1","কম্পিউটারের ভাষা","#2563eb"],
            ["🔷","অক্টাল","Octal","Base 8","0-7","Unix permission","#059669"],
            ["🔶","হেক্সাডেসিমেল","Hex","Base 16","0-9, A-F","রঙ কোড, মেমোরি","#d97706"],
          ].map(([ic,bn,en,base,sym,use,c])=>(
            <div key={bn} style={{background:"#f8fafc",borderTop:`3px solid ${c}`,borderRadius:"0.625rem",padding:"0.75rem",textAlign:"center"}}>
              <div style={{fontSize:"1.25rem"}}>{ic}</div>
              <div style={{fontWeight:700,color:c,fontSize:"0.85rem",margin:"0.25rem 0"}}>{bn}</div>
              <div style={{color:"#64748b",fontSize:"0.72rem"}}>{en} · {base}</div>
              <div style={{color:"#475569",fontSize:"0.72rem",marginTop:"0.2rem"}}>প্রতীক: {sym}</div>
              <div style={{color:"#94a3b8",fontSize:"0.7rem",marginTop:"0.2rem"}}>{use}</div>
            </div>
          ))}
        </div>
        <h3 style={h3s}>রূপান্তর — দশমিক → বাইনারি (ভাগ পদ্ধতি)</h3>
        <div style={{background:"#0f172a",color:"#e2e8f0",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.5rem",fontFamily:"monospace",fontSize:"0.875rem",lineHeight:2}}>
          <div style={{color:"#94a3b8",marginBottom:"0.5rem"}}>{"// দশমিক 13 → বাইনারি:"}</div>
          <div>13 ÷ 2 = <span style={{color:"#60a5fa"}}>6</span> ভাগশেষ <span style={{color:"#fbbf24"}}>1</span></div>
          <div> 6 ÷ 2 = <span style={{color:"#60a5fa"}}>3</span> ভাগশেষ <span style={{color:"#fbbf24"}}>0</span></div>
          <div> 3 ÷ 2 = <span style={{color:"#60a5fa"}}>1</span> ভাগশেষ <span style={{color:"#fbbf24"}}>1</span></div>
          <div> 1 ÷ 2 = <span style={{color:"#60a5fa"}}>0</span> ভাগশেষ <span style={{color:"#fbbf24"}}>1</span></div>
          <div style={{color:"#86efac",marginTop:"0.5rem"}}>পেছন থেকে পড়ুন: <strong>1101</strong></div>
        </div>
        <h3 style={h3s}>রূপান্তর — বাইনারি → দশমিক (মান গুণ পদ্ধতি)</h3>
        <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:"0.75rem",padding:"1rem 1.25rem",margin:"0.75rem 0 1.5rem",fontFamily:"monospace",fontSize:"0.9rem"}}>
          (1101)₂ = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8+4+0+1 = <strong style={{color:"#2563eb"}}>13</strong>
        </div>
        <h3 style={h3s}>সংখ্যা পদ্ধতির তুলনামূলক সারণি</h3>
        <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
          <table style={{width:"100%",borderCollapse:"collapse",minWidth:"400px"}}>
            <thead><tr><th style={th}>দশমিক</th><th style={th}>বাইনারি</th><th style={th}>অক্টাল</th><th style={th}>হেক্স</th></tr></thead>
            <tbody>
              {[["0","0000","0","0"],["1","0001","1","1"],["2","0010","2","2"],["3","0011","3","3"],
                ["4","0100","4","4"],["5","0101","5","5"],["6","0110","6","6"],["7","0111","7","7"],
                ["8","1000","10","8"],["9","1001","11","9"],["10","1010","12","A"],["15","1111","17","F"],
                ["16","10000","20","10"],["255","11111111","377","FF"],
              ].map((r,i)=>(
                <tr key={r[0]} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                  {r.map((c,j)=><td key={j} style={td}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 style={h3s}>BCD (Binary Coded Decimal)</h3>
        <div style={{background:"#f8fafc",border:"1.5px solid #e2e8f0",borderLeft:"4px solid #2563eb",borderRadius:"0.75rem",padding:"1rem 1.25rem",margin:"0.75rem 0 1.5rem"}}>
          <p style={{color:"#475569",fontSize:"0.875rem",lineHeight:1.8,margin:"0 0 0.5rem"}}>
            BCD-তে প্রতিটি দশমিক সংখ্যাকে আলাদাভাবে 4-bit বাইনারিতে প্রকাশ করা হয়।
          </p>
          <div style={{fontFamily:"monospace",fontSize:"0.875rem",color:"#0f172a"}}>
            দশমিক 29 = BCD: <strong>0010 1001</strong> &nbsp;(2→0010, 9→1001)
          </div>
        </div>
        <h3 style={h3s}>ASCII কোড</h3>
        <div style={{display:"flex",gap:"0.75rem",flexWrap:"wrap",margin:"0.75rem 0 1.5rem"}}>
          {[["A","65","01000001"],["a","97","01100001"],["0","48","00110000"],["Space","32","00100000"]].map(([c,d,b])=>(
            <div key={c} style={{background:"#f1f5f9",borderRadius:"0.625rem",padding:"0.75rem 1rem",textAlign:"center",minWidth:"80px"}}>
              <div style={{fontSize:"1.5rem",fontWeight:800,color:"#2563eb",fontFamily:"monospace"}}>{c}</div>
              <div style={{fontSize:"0.75rem",color:"#64748b"}}>দশমিক: {d}</div>
              <div style={{fontSize:"0.7rem",color:"#94a3b8",fontFamily:"monospace"}}>{b}</div>
            </div>
          ))}
        </div>
        <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
          <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
          <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.1rem",lineHeight:2,color:"#1e293b",fontSize:"0.875rem"}}>
            <li>Binary (2), Octal (8), Decimal (10), Hex (16) — ভিত্তি মুখস্থ রাখুন</li>
            <li>(FF)₁₆ = 255, (10)₈ = 8, (1010)₂ = 10 — গুরুত্বপূর্ণ মান</li>
            <li>Hex-এ A=10, B=11, C=12, D=13, E=14, F=15</li>
            <li>BCD: প্রতিটি digit → আলাদা 4-bit। ASCII: 'A'=65, 'a'=97</li>
          </ul>
        </div>
      </div>
      <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
        <h2 style={{...h2s,color:"#1d4ed8",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
        <NumberSystemsQuiz/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginTop:"2rem"}}>
        <Link href="/demo/chapter3/textbook-quiz" style={{textDecoration:"none"}}><div style={{background:"#0f172a",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}><div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>📝</div><div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ</div><div style={{color:"#94a3b8",fontSize:"0.78rem",marginTop:"0.2rem"}}>Chapter শেষের অনুশীলনী</div></div></Link>
        <Link href="/demo/chapter3" style={{textDecoration:"none"}}><div style={{background:"#1e3a5f",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}><div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>🗂️</div><div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>অধ্যায় ৩ সূচি</div><div style={{color:"#94a3b8",fontSize:"0.78rem",marginTop:"0.2rem"}}>সব বিষয় দেখুন</div></div></Link>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.5rem",flexWrap:"wrap",gap:"1rem"}}>
        <Link href="/demo/chapter3" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← অধ্যায় ৩ সূচি</Link>
        <Link href="/demo/chapter3/binary-arithmetic" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>বাইনারি গণিত →</Link>
      </div>
    </div>
  </div>
);}
