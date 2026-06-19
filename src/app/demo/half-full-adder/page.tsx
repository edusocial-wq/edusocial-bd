import HalfFullAdderQuiz from "./quiz";
import Link from "next/link";

export const metadata = { title: "হাফ অ্যাডার ও ফুল অ্যাডার — HSC ICT অধ্যায় ৩ | EduSocial BD" };

const card: React.CSSProperties = {background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s: React.CSSProperties = {fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s: React.CSSProperties = {fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const para: React.CSSProperties = {color:"#475569",lineHeight:1.8,margin:0,fontSize:"0.95rem"};
const th: React.CSSProperties = {padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"center",background:"#f1f5f9"};
const td: React.CSSProperties = {padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",textAlign:"center",fontFamily:"monospace",fontSize:"0.95rem"};

export default function HalfFullAdderPage() {
  return (
    <div style={{minHeight:"100vh",background:"#fffbeb",fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>

        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter3" style={{color:"#d97706",textDecoration:"none",fontWeight:600}}>← অধ্যায় ৩</Link>
          <span style={{color:"#fde68a"}}>|</span>
          <Link href="/demo/boolean-algebra" style={{color:"#d97706",textDecoration:"none"}}>বুলিয়ান অ্যালজেব্রা</Link>
          <span style={{color:"#fde68a"}}>|</span>
          <span style={{color:"#6b7280"}}>হাফ ও ফুল অ্যাডার</span>
        </div>

        <div style={{marginBottom:"2rem"}}>
          <span style={{background:"#d97706",color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৩.৫</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>হাফ অ্যাডার ও ফুল অ্যাডার</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>Half Adder &amp; Full Adder — বাইনারি যোগকারী সার্কিট</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          <h3 style={h3s}>হাফ অ্যাডার (Half Adder)</h3>
          <p style={para}>
            হাফ অ্যাডার দুটি এক-বিট বাইনারি সংখ্যা যোগ করে দুটি আউটপুট দেয়: Sum (যোগফল) ও Carry (বহন)।
            এটিকে "হাফ" বলা হয় কারণ এটি আগের বিট থেকে আসা Carry ইনপুট নিতে পারে না।
          </p>

          {/* Half Adder expressions */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"1rem",margin:"0.75rem 0 1.25rem"}}>
            <div style={{background:"#f5f3ff",border:"1.5px solid #ddd6fe",borderRadius:"0.75rem",padding:"1rem",textAlign:"center"}}>
              <div style={{fontSize:"0.8rem",color:"#6b7280",marginBottom:"0.35rem"}}>Sum আউটপুট</div>
              <div style={{fontFamily:"monospace",fontSize:"1.3rem",fontWeight:800,color:"#7c3aed"}}>S = A ⊕ B</div>
              <div style={{fontSize:"0.8rem",color:"#6b7280",marginTop:"0.35rem"}}>XOR গেট</div>
            </div>
            <div style={{background:"#eff6ff",border:"1.5px solid #bfdbfe",borderRadius:"0.75rem",padding:"1rem",textAlign:"center"}}>
              <div style={{fontSize:"0.8rem",color:"#6b7280",marginBottom:"0.35rem"}}>Carry আউটপুট</div>
              <div style={{fontFamily:"monospace",fontSize:"1.3rem",fontWeight:800,color:"#2563eb"}}>C = A · B</div>
              <div style={{fontSize:"0.8rem",color:"#6b7280",marginTop:"0.35rem"}}>AND গেট</div>
            </div>
          </div>

          {/* Half Adder truth table */}
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <div style={{fontWeight:700,color:"#0f172a",marginBottom:"0.5rem",fontSize:"0.875rem"}}>হাফ অ্যাডার Truth Table</div>
            <table style={{borderCollapse:"collapse",fontSize:"0.875rem",minWidth:"300px"}}>
              <thead>
                <tr><th style={th}>A</th><th style={th}>B</th><th style={{...th,color:"#7c3aed"}}>Sum (S)</th><th style={{...th,color:"#2563eb"}}>Carry (C)</th></tr>
              </thead>
              <tbody>
                {[["0","0","0","0"],["0","1","1","0"],["1","0","1","0"],["1","1","0","1"]].map((row,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    <td style={td}>{row[0]}</td>
                    <td style={td}>{row[1]}</td>
                    <td style={{...td,color:"#7c3aed",fontWeight:700}}>{row[2]}</td>
                    <td style={{...td,color:row[3]==="1"?"#dc2626":"#374151",fontWeight:row[3]==="1"?700:400}}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Half Adder circuit */}
          <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.5rem 0 1.5rem"}}>
            <div style={{fontSize:"0.85rem",color:"#64748b",marginBottom:"0.75rem",fontWeight:600}}>হাফ অ্যাডার সার্কিট:</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:"1rem",alignItems:"center",fontFamily:"monospace",fontSize:"0.9rem",color:"#1e293b"}}>
              <div style={{display:"flex",flexDirection:"column",gap:"0.25rem"}}>
                <div>A ─┬────────── XOR ── S (Sum)</div>
                <div>B ─┤</div>
                <div>{"  "}└────────── AND ── C (Carry)</div>
              </div>
            </div>
            <p style={{...para,fontSize:"0.8rem",marginTop:"0.75rem",color:"#64748b"}}>
              একটি XOR গেট + একটি AND গেট = হাফ অ্যাডার
            </p>
          </div>

          {/* Full Adder */}
          <h3 style={h3s}>ফুল অ্যাডার (Full Adder)</h3>
          <p style={para}>
            ফুল অ্যাডার তিনটি ইনপুট নেয়: A, B, এবং Carry-in (Cin)। এটি multi-bit বাইনারি যোগের জন্য ব্যবহৃত হয়।
          </p>

          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"1rem",margin:"0.75rem 0 1.25rem"}}>
            <div style={{background:"#f5f3ff",border:"1.5px solid #ddd6fe",borderRadius:"0.75rem",padding:"1rem",textAlign:"center"}}>
              <div style={{fontSize:"0.8rem",color:"#6b7280",marginBottom:"0.35rem"}}>Sum আউটপুট</div>
              <div style={{fontFamily:"monospace",fontSize:"1.1rem",fontWeight:800,color:"#7c3aed"}}>S = A⊕B⊕Cin</div>
              <div style={{fontSize:"0.8rem",color:"#6b7280",marginTop:"0.35rem"}}>দুটি XOR গেট</div>
            </div>
            <div style={{background:"#eff6ff",border:"1.5px solid #bfdbfe",borderRadius:"0.75rem",padding:"1rem",textAlign:"center"}}>
              <div style={{fontSize:"0.8rem",color:"#6b7280",marginBottom:"0.35rem"}}>Carry-out আউটপুট</div>
              <div style={{fontFamily:"monospace",fontSize:"1rem",fontWeight:800,color:"#2563eb"}}>Cout = AB+BCin+ACin</div>
              <div style={{fontSize:"0.8rem",color:"#6b7280",marginTop:"0.35rem"}}>AND + OR গেট</div>
            </div>
          </div>

          {/* Full Adder truth table */}
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <div style={{fontWeight:700,color:"#0f172a",marginBottom:"0.5rem",fontSize:"0.875rem"}}>ফুল অ্যাডার Truth Table</div>
            <table style={{borderCollapse:"collapse",fontSize:"0.875rem",minWidth:"380px"}}>
              <thead>
                <tr><th style={th}>A</th><th style={th}>B</th><th style={th}>Cin</th><th style={{...th,color:"#7c3aed"}}>Sum</th><th style={{...th,color:"#2563eb"}}>Cout</th></tr>
              </thead>
              <tbody>
                {[["0","0","0","0","0"],["0","0","1","1","0"],["0","1","0","1","0"],["0","1","1","0","1"],
                  ["1","0","0","1","0"],["1","0","1","0","1"],["1","1","0","0","1"],["1","1","1","1","1"]].map((row,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    {row.map((c,j)=><td key={j} style={{...td,color:j===3?"#7c3aed":j===4&&c==="1"?"#dc2626":"#374151",fontWeight:j>=3?700:400}}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Full adder from half adders */}
          <h3 style={h3s}>হাফ অ্যাডার দিয়ে ফুল অ্যাডার</h3>
          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{fontWeight:700,color:"#15803d",marginBottom:"0.75rem",fontSize:"0.875rem"}}>
              ফুল অ্যাডার = ২টি হাফ অ্যাডার + ১টি OR গেট
            </div>
            <div style={{fontFamily:"monospace",fontSize:"0.85rem",color:"#1e293b",lineHeight:2}}>
              <div>HA1: S1 = A⊕B,  C1 = A·B</div>
              <div>HA2: Sum = S1⊕Cin, C2 = S1·Cin</div>
              <div>OR:  Cout = C1 + C2</div>
            </div>
          </div>

          {/* Comparison */}
          <h3 style={h3s}>তুলনা সারণি</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.25rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.875rem",minWidth:"400px"}}>
              <thead><tr style={{background:"#f1f5f9"}}>{["বৈশিষ্ট্য","হাফ অ্যাডার","ফুল অ্যাডার"].map(h=><th key={h} style={{...th,textAlign:"left"}}>{h}</th>)}</tr></thead>
              <tbody>
                {[["ইনপুট সংখ্যা","২ (A, B)","৩ (A, B, Cin)"],
                  ["আউটপুট","Sum, Carry","Sum, Cout"],
                  ["Carry-in","নেই","আছে"],
                  ["গেট","XOR + AND","XOR×2 + AND×2 + OR"],
                  ["ব্যবহার","একক বিট যোগ","Multi-bit যোগ"],
                ].map((row,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    {row.map((c,j)=><td key={j} style={{padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:j===0?600:400,color:j===0?"#0f172a":"#374151"}}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 মনে রাখার সূত্র:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.25rem",lineHeight:2,color:"#1e293b",fontSize:"0.9rem"}}>
              <li>হাফ অ্যাডার: <strong>S = A⊕B, C = AB</strong></li>
              <li>ফুল অ্যাডার: <strong>S = A⊕B⊕Cin, Cout = AB+BCin+ACin</strong></li>
              <li>ফুল অ্যাডার = ২ হাফ অ্যাডার + ১ OR গেট</li>
              <li>n-bit যোগে n টি ফুল অ্যাডার লাগে</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:"2px solid #d97706",borderRadius:"1rem",padding:"2rem",boxShadow:"0 4px 12px rgba(217,119,6,0.12)"}}>
          <h2 style={{...h2s,color:"#b45309",borderBottomColor:"#fde68a"}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <HalfFullAdderQuiz />
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/boolean-algebra" style={{color:"#d97706",fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← বুলিয়ান অ্যালজেব্রা</Link>
          <Link href="/demo/encoder-decoder" style={{color:"#d97706",fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>এনকোডার ও ডিকোডার →</Link>
        </div>
      </div>
    </div>
  );
}
