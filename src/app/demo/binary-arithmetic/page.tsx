import BinaryArithmeticQuiz from "./quiz";
import Link from "next/link";

export const metadata = { title: "বাইনারি গণিত — HSC ICT অধ্যায় ৩ | EduSocial BD" };

const card: React.CSSProperties = { background:"#ffffff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)" };
const h2s: React.CSSProperties = { fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0" };
const h3s: React.CSSProperties = { fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem" };
const para: React.CSSProperties = { color:"#475569",lineHeight:1.8,margin:0,fontSize:"0.95rem" };
const mono: React.CSSProperties = { fontFamily:"'Courier New', monospace" };

function Step({ a, b, result, carry, label }: { a:string,b:string,result:string,carry:string,label:string }) {
  return (
    <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:"0.625rem",padding:"1rem",fontFamily:"'Courier New', monospace",fontSize:"0.9rem",minWidth:"200px"}}>
      <div style={{color:"#64748b",fontSize:"0.75rem",marginBottom:"0.5rem"}}>{label}</div>
      <div style={{color:"#475569"}}>  {a}</div>
      <div style={{color:"#475569"}}>+ {b}</div>
      <div style={{borderTop:"1px solid #cbd5e1",margin:"0.25rem 0",paddingTop:"0.25rem",color:"#2563eb",fontWeight:700}}>= {result}</div>
      {carry && <div style={{color:"#dc2626",fontSize:"0.8rem"}}>carry: {carry}</div>}
    </div>
  );
}

export default function BinaryArithmeticPage() {
  return (
    <div style={{minHeight:"100vh",background:"#ecfeff",fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>

        {/* breadcrumb */}
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter3" style={{color:"#0891b2",textDecoration:"none",fontWeight:600}}>← অধ্যায় ৩</Link>
          <span style={{color:"#a5f3fc"}}>|</span>
          <Link href="/demo" style={{color:"#0891b2",textDecoration:"none"}}>সংখ্যা পদ্ধতি</Link>
          <span style={{color:"#a5f3fc"}}>|</span>
          <span style={{color:"#6b7280"}}>বাইনারি গণিত</span>
        </div>

        {/* header */}
        <div style={{marginBottom:"2rem"}}>
          <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.5rem"}}>
            <span style={{background:"#0891b2",color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600}}>HSC ICT · অধ্যায় ৩.২</span>
          </div>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>বাইনারি গণিত</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>Binary Arithmetic — বিষয়টি পড়ুন, তারপর কুইজ দিন</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          {/* Binary Addition */}
          <h3 style={h3s}>বাইনারি যোগ (Binary Addition)</h3>
          <p style={para}>বাইনারি যোগের মাত্র ৪টি নিয়ম:</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0.75rem",margin:"0.75rem 0 1.25rem"}}>
            {[["0+0","0","—"],["0+1","1","—"],["1+0","1","—"],["1+1","10","carry=1"]].map(([ex,res,note],i)=>(
              <div key={i} style={{background:i===3?"#fef2f2":"#f0fdf4",border:`1.5px solid ${i===3?"#fca5a5":"#86efac"}`,borderRadius:"0.75rem",padding:"0.875rem",textAlign:"center"}}>
                <div style={{...mono,fontSize:"1.1rem",fontWeight:700,color:i===3?"#dc2626":"#15803d"}}>{ex} = {res}</div>
                <div style={{fontSize:"0.75rem",color:"#6b7280",marginTop:"0.25rem"}}>{note}</div>
              </div>
            ))}
          </div>

          {/* worked example */}
          <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{fontSize:"0.85rem",color:"#64748b",marginBottom:"0.75rem"}}>উদাহরণ: 1011 + 0110 = ?</div>
            <div style={{...mono,lineHeight:2,color:"#1e293b"}}>
              <div style={{color:"#64748b",fontSize:"0.8rem"}}>  carry: 1 1 1 0</div>
              <div>{"  "}1 0 1 1</div>
              <div>+ 0 1 1 0</div>
              <div style={{borderTop:"1px solid #cbd5e1",paddingTop:"0.25rem",color:"#2563eb",fontWeight:700}}>= 1 0 0 0 1</div>
            </div>
            <p style={{...para,fontSize:"0.85rem",marginTop:"0.75rem"}}>
              দশমিকে: 11 + 6 = 17 = 10001 ✓
            </p>
          </div>

          {/* 1's Complement */}
          <h3 style={h3s}>১-এর পূরক (1's Complement)</h3>
          <p style={para}>প্রতিটি বিট উল্টে দাও: 0 → 1, এবং 1 → 0।</p>
          <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:"0.75rem",padding:"1rem 1.25rem",margin:"0.75rem 0 1.25rem"}}>
            <div style={{display:"flex",flexDirection:"column",gap:"0.5rem",...mono,fontSize:"0.9rem",color:"#1e293b"}}>
              <div>মূল সংখ্যা:      <strong>1 0 1 1 0 1</strong></div>
              <div>১-এর পূরক:  <strong style={{color:"#d97706"}}>0 1 0 0 1 0</strong> (প্রতিটি বিট উল্টানো)</div>
            </div>
          </div>

          {/* 2's Complement */}
          <h3 style={h3s}>২-এর পূরক (2's Complement)</h3>
          <p style={para}>২-এর পূরক = ১-এর পূরক + 1। এটি ঋণাত্মক সংখ্যা প্রকাশের মানক পদ্ধতি।</p>
          <div style={{background:"#f5f3ff",border:"1px solid #ddd6fe",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.25rem"}}>
            <div style={{fontWeight:700,color:"#7c3aed",marginBottom:"0.75rem",fontSize:"0.85rem"}}>ধাপে ধাপে: 1011 এর ২-এর পূরক</div>
            <div style={{display:"flex",flexDirection:"column",gap:"0.4rem",...mono,fontSize:"0.9rem",color:"#1e293b"}}>
              <div>ধাপ ১ — মূল সংখ্যা:    <strong>1011</strong></div>
              <div>ধাপ ২ — ১-এর পূরক:  <strong>0100</strong></div>
              <div>ধাপ ৩ — ১ যোগ করো:  <strong style={{color:"#7c3aed"}}>0101</strong> ← এটি ২-এর পূরক</div>
            </div>
          </div>

          {/* Alternative shortcut */}
          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"0.75rem",padding:"1rem 1.25rem",margin:"0.5rem 0 1.5rem"}}>
            <strong style={{color:"#15803d"}}>⚡ শর্টকাট:</strong>
            <p style={{...para,fontSize:"0.875rem",marginTop:"0.4rem"}}>
              ডানদিক থেকে প্রথম 1 পর্যন্ত অপরিবর্তিত রাখো, বাকি সব বিট উল্টাও।<br/>
              <span style={{...mono}}>1 0 1 <strong style={{color:"#dc2626"}}>1 0 0 0</strong></span> → ডানে প্রথম 1 পর্যন্ত: <span style={{...mono}}>_ _ _ 1 0 0 0</span>, বাকি উল্টাও: <span style={{...mono,color:"#7c3aed"}}>0 1 0 1 0 0 0</span>
            </p>
          </div>

          {/* Subtraction using 2's complement */}
          <h3 style={h3s}>২-এর পূরক দিয়ে বিয়োগ</h3>
          <p style={para}>
            A − B = A + (B এর ২-এর পূরক)। যোগের শেষে যদি Carry হয়, তা বাদ দিলেই সঠিক উত্তর।
          </p>
          <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{fontWeight:700,color:"#1d4ed8",marginBottom:"0.75rem",fontSize:"0.85rem"}}>উদাহরণ: 1101 − 0101 = ?</div>
            <div style={{display:"flex",flexDirection:"column",gap:"0.4rem",...mono,fontSize:"0.9rem",color:"#1e293b"}}>
              <div>ধাপ ১ — 0101 এর ২-এর পূরক: <strong>1011</strong></div>
              <div>ধাপ ২ — 1101 + 1011 = <strong>1|1000</strong></div>
              <div>ধাপ ৩ — Carry বাদ: <strong style={{color:"#2563eb"}}>1000</strong> (= দশমিকে 8)</div>
              <div style={{color:"#15803d",fontSize:"0.85rem",marginTop:"0.25rem"}}>যাচাই: 13 − 5 = 8 ✓</div>
            </div>
          </div>

          {/* Negative numbers in 2's complement */}
          <h3 style={h3s}>8-bit ২-এর পূরকে সীমা</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.875rem",minWidth:"360px"}}>
              <thead>
                <tr style={{background:"#f1f5f9"}}>
                  {["দশমিক মান","বাইনারি (8-bit)","ব্যাখ্যা"].map(h=><th key={h} style={{padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"center"}}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ["+127","0111 1111","সর্বোচ্চ ধনাত্মক"],
                  ["+1","0000 0001",""],
                  ["0","0000 0000",""],
                  ["-1","1111 1111",""],
                  ["-128","1000 0000","সর্বনিম্ন ঋণাত্মক"],
                ].map((row,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    {row.map((c,j)=><td key={j} style={{padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",textAlign:"center",...(j===1?{...mono}:{}),color:j===0&&c.startsWith("+")?"#15803d":j===0&&c.startsWith("-")?"#dc2626":"#374151",fontWeight:j===0?700:400}}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key points */}
          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার জন্য মনে রাখুন:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.25rem",lineHeight:2,color:"#1e293b",fontSize:"0.9rem"}}>
              <li>বাইনারিতে 1+1 = <strong>10</strong> (দুই নয়, "এক-শূন্য")</li>
              <li>১-এর পূরক = সব বিট উল্টানো</li>
              <li>২-এর পূরক = ১-এর পূরক + 1</li>
              <li>A−B করতে B-এর ২-এর পূরক A-এর সাথে যোগ করো</li>
              <li>কম্পিউটার ঋণাত্মক সংখ্যা সংরক্ষণে ২-এর পূরক ব্যবহার করে</li>
            </ul>
          </div>
        </div>

        {/* Quiz */}
        <div style={{background:"#ffffff",border:"2px solid #0891b2",borderRadius:"1rem",padding:"2rem",boxShadow:"0 4px 12px rgba(8,145,178,0.12)"}}>
          <h2 style={{...h2s,color:"#0e7490",borderBottomColor:"#a5f3fc"}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <BinaryArithmeticQuiz />
        </div>

        {/* nav */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo" style={{color:"#0891b2",fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← সংখ্যা পদ্ধতি</Link>
          <Link href="/demo/logic-gates" style={{color:"#0891b2",fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>লজিক গেট →</Link>
        </div>
      </div>
    </div>
  );
}
