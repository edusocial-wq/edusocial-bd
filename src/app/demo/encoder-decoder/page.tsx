import EncoderDecoderQuiz from "./quiz";
import Link from "next/link";

export const metadata = { title: "এনকোডার ও ডিকোডার — HSC ICT অধ্যায় ৩ | EduSocial BD" };

const card: React.CSSProperties = {background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s: React.CSSProperties = {fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s: React.CSSProperties = {fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const para: React.CSSProperties = {color:"#475569",lineHeight:1.8,margin:0,fontSize:"0.95rem"};
const th: React.CSSProperties = {padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"center",background:"#f1f5f9"};
const td: React.CSSProperties = {padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",textAlign:"center",fontFamily:"monospace",fontSize:"0.95rem"};

export default function EncoderDecoderPage() {
  return (
    <div style={{minHeight:"100vh",background:"#fef2f2",fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>

        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter3" style={{color:"#dc2626",textDecoration:"none",fontWeight:600}}>← অধ্যায় ৩</Link>
          <span style={{color:"#fecaca"}}>|</span>
          <Link href="/demo/half-full-adder" style={{color:"#dc2626",textDecoration:"none"}}>হাফ ও ফুল অ্যাডার</Link>
          <span style={{color:"#fecaca"}}>|</span>
          <span style={{color:"#6b7280"}}>এনকোডার ও ডিকোডার</span>
        </div>

        <div style={{marginBottom:"2rem"}}>
          <span style={{background:"#dc2626",color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৩.৬</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>এনকোডার ও ডিকোডার</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>Encoder &amp; Decoder — কোড রূপান্তরকারী সার্কিট</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          {/* Overview cards */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"1rem",margin:"0.5rem 0 1.5rem"}}>
            <div style={{background:"#eff6ff",border:"2px solid #bfdbfe",borderRadius:"0.875rem",padding:"1.25rem"}}>
              <div style={{fontSize:"1.5rem",marginBottom:"0.5rem"}}>📡</div>
              <div style={{fontWeight:700,color:"#1d4ed8",fontSize:"1rem",marginBottom:"0.35rem"}}>ডিকোডার (Decoder)</div>
              <div style={{fontFamily:"monospace",color:"#1e293b",fontSize:"0.9rem",marginBottom:"0.5rem"}}>n ইনপুট → 2ⁿ আউটপুট</div>
              <p style={{...para,fontSize:"0.85rem"}}>কম্প্রেসড কোডকে বিস্তারিত সংকেতে রূপান্তর করে। মেমোরি অ্যাড্রেস ডিকোডিংয়ে ব্যবহার।</p>
            </div>
            <div style={{background:"#fef2f2",border:"2px solid #fecaca",borderRadius:"0.875rem",padding:"1.25rem"}}>
              <div style={{fontSize:"1.5rem",marginBottom:"0.5rem"}}>📻</div>
              <div style={{fontWeight:700,color:"#b91c1c",fontSize:"1rem",marginBottom:"0.35rem"}}>এনকোডার (Encoder)</div>
              <div style={{fontFamily:"monospace",color:"#1e293b",fontSize:"0.9rem",marginBottom:"0.5rem"}}>2ⁿ ইনপুট → n আউটপুট</div>
              <p style={{...para,fontSize:"0.85rem"}}>ডিকোডারের বিপরীত। বিস্তারিত সংকেতকে কম্প্যাক্ট কোডে রূপান্তর করে।</p>
            </div>
          </div>

          {/* 2-to-4 Decoder */}
          <h3 style={h3s}>2-to-4 ডিকোডার</h3>
          <p style={para}>২টি ইনপুট (A, B) ও ৪টি আউটপুট (D0–D3)। যেকোনো সময় শুধুমাত্র একটি আউটপুট সক্রিয় (1) থাকে।</p>

          <div style={{overflowX:"auto",margin:"0.75rem 0 0.5rem"}}>
            <table style={{borderCollapse:"collapse",fontSize:"0.875rem",minWidth:"400px"}}>
              <thead>
                <tr>
                  <th style={th}>A</th><th style={th}>B</th>
                  <th style={{...th,color:"#15803d"}}>D0</th><th style={{...th,color:"#2563eb"}}>D1</th>
                  <th style={{...th,color:"#7c3aed"}}>D2</th><th style={{...th,color:"#dc2626"}}>D3</th>
                </tr>
              </thead>
              <tbody>
                {[["0","0","1","0","0","0"],["0","1","0","1","0","0"],["1","0","0","0","1","0"],["1","1","0","0","0","1"]].map((row,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    {row.map((c,j)=><td key={j} style={{...td,fontWeight:j>=2&&c==="1"?700:400,color:j>=2&&c==="1"?["#15803d","#2563eb","#7c3aed","#dc2626"][j-2]:"#374151"}}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{...para,fontSize:"0.8rem",color:"#6b7280",marginTop:"0.35rem",marginBottom:"1.25rem"}}>
            AB=00→D0, AB=01→D1, AB=10→D2, AB=11→D3 সক্রিয়
          </p>

          {/* Boolean expressions for decoder */}
          <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.5rem 0 1.5rem"}}>
            <div style={{fontWeight:700,color:"#0f172a",marginBottom:"0.75rem",fontSize:"0.875rem"}}>2-to-4 ডিকোডারের বুলিয়ান এক্সপ্রেশন:</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem",color:"#1e293b"}}>
              <div style={{padding:"0.4rem 0.6rem",background:"#f0fdf4",borderRadius:"0.375rem",color:"#15803d"}}>D0 = A'B'</div>
              <div style={{padding:"0.4rem 0.6rem",background:"#eff6ff",borderRadius:"0.375rem",color:"#2563eb"}}>D1 = A'B</div>
              <div style={{padding:"0.4rem 0.6rem",background:"#f5f3ff",borderRadius:"0.375rem",color:"#7c3aed"}}>D2 = AB'</div>
              <div style={{padding:"0.4rem 0.6rem",background:"#fef2f2",borderRadius:"0.375rem",color:"#dc2626"}}>D3 = AB</div>
            </div>
          </div>

          {/* 4-to-2 Encoder */}
          <h3 style={h3s}>4-to-2 এনকোডার</h3>
          <p style={para}>৪টি ইনপুট (D0–D3) ও ২টি আউটপুট (B1, B0)। একসময় মাত্র একটি ইনপুট সক্রিয় থাকে।</p>

          <div style={{overflowX:"auto",margin:"0.75rem 0 1.25rem"}}>
            <table style={{borderCollapse:"collapse",fontSize:"0.875rem",minWidth:"380px"}}>
              <thead>
                <tr>
                  <th style={th}>D3</th><th style={th}>D2</th><th style={th}>D1</th><th style={th}>D0</th>
                  <th style={{...th,color:"#2563eb"}}>B1</th><th style={{...th,color:"#7c3aed"}}>B0</th>
                </tr>
              </thead>
              <tbody>
                {[["0","0","0","1","0","0"],["0","0","1","0","0","1"],["0","1","0","0","1","0"],["1","0","0","0","1","1"]].map((row,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    {row.map((c,j)=><td key={j} style={{...td,fontWeight:j>=4?700:j<4&&c==="1"?600:400,color:j===4?"#2563eb":j===5?"#7c3aed":j<4&&c==="1"?"#0f172a":"#9ca3af"}}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{fontFamily:"monospace",fontSize:"0.875rem",color:"#1e293b",background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:"0.625rem",padding:"0.75rem",marginBottom:"1.5rem"}}>
            <div style={{color:"#2563eb"}}>B1 = D3 + D2</div>
            <div style={{color:"#7c3aed",marginTop:"0.25rem"}}>B0 = D3 + D1</div>
          </div>

          {/* 7-Segment Display */}
          <h3 style={h3s}>৭-সেগমেন্ট ডিসপ্লে ও BCD ডিকোডার</h3>
          <p style={para}>
            ৭-সেগমেন্ট ডিসপ্লেতে ৭টি LED সেগমেন্ট (a–g) আছে। BCD-to-7-Segment ডিকোডার 4-bit BCD ইনপুট নিয়ে
            সঠিক সেগমেন্টগুলো জ্বালিয়ে 0–9 দেখায়।
          </p>

          <div style={{display:"flex",flexWrap:"wrap",gap:"1rem",margin:"0.75rem 0 1.5rem"}}>
            {/* Segment diagram */}
            <div style={{background:"#1e293b",borderRadius:"0.75rem",padding:"1.25rem 1.5rem",color:"#fff"}}>
              <div style={{fontFamily:"monospace",fontSize:"0.9rem",lineHeight:1.8,letterSpacing:"0.05em"}}>
                <div style={{color:"#fbbf24"}}> _</div>
                <div><span style={{color:"#34d399"}}>|</span><span style={{color:"#fbbf24"}}>_</span><span style={{color:"#60a5fa"}}>|</span></div>
                <div><span style={{color:"#a78bfa"}}>|</span><span style={{color:"#f87171"}}>_</span><span style={{color:"#fb923c"}}>|</span></div>
              </div>
              <div style={{marginTop:"0.75rem",fontSize:"0.75rem",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.25rem"}}>
                <span style={{color:"#fbbf24"}}>a = উপরে</span>
                <span style={{color:"#34d399"}}>f = উপর-বাম</span>
                <span style={{color:"#60a5fa"}}>b = উপর-ডান</span>
                <span style={{color:"#fbbf24"}}>g = মাঝে</span>
                <span style={{color:"#a78bfa"}}>e = নিচ-বাম</span>
                <span style={{color:"#fb923c"}}>c = নিচ-ডান</span>
                <span style={{color:"#f87171"}}>d = নিচে</span>
              </div>
            </div>

            {/* BCD table */}
            <div style={{overflowX:"auto"}}>
              <table style={{borderCollapse:"collapse",fontSize:"0.8rem"}}>
                <thead><tr style={{background:"#f1f5f9"}}><th style={{...th,fontSize:"0.75rem"}}>সংখ্যা</th><th style={{...th,fontSize:"0.75rem"}}>BCD</th><th style={{...th,fontSize:"0.75rem"}}>a</th><th style={{...th,fontSize:"0.75rem"}}>b</th><th style={{...th,fontSize:"0.75rem"}}>c</th><th style={{...th,fontSize:"0.75rem"}}>d</th><th style={{...th,fontSize:"0.75rem"}}>e</th><th style={{...th,fontSize:"0.75rem"}}>f</th><th style={{...th,fontSize:"0.75rem"}}>g</th></tr></thead>
                <tbody>
                  {[["0","0000","1","1","1","1","1","1","0"],["1","0001","0","1","1","0","0","0","0"],["2","0010","1","1","0","1","1","0","1"],["3","0011","1","1","1","1","0","0","1"],["4","0100","0","1","1","0","0","1","1"],["5","0101","1","0","1","1","0","1","1"],["8","1000","1","1","1","1","1","1","1"],["9","1001","1","1","1","1","0","1","1"]].map((row,i)=>(
                    <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                      {row.map((c,j)=><td key={j} style={{padding:"0.3rem 0.4rem",border:"1px solid #e2e8f0",textAlign:"center",fontFamily:j>0?"monospace":"inherit",fontWeight:j===0?700:400,color:j>1&&c==="1"?"#15803d":"#374151"}}>{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Applications */}
          <h3 style={h3s}>ব্যবহার</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem",margin:"0.75rem 0 1.25rem"}}>
            {[["🖥️","মেমোরি অ্যাড্রেস","RAM/ROM chip select"],["⌚","ডিজিটাল ঘড়ি","BCD to 7-seg ডিকোডার"],["📺","মাল্টিপ্লেক্সার","ডেটা রুটিং"],["⌨️","কীবোর্ড","Key encoder"]].map(([icon,title,desc])=>(
              <div key={title} style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:"0.75rem",padding:"0.875rem",textAlign:"center"}}>
                <div style={{fontSize:"1.5rem"}}>{icon}</div>
                <div style={{fontWeight:700,color:"#0f172a",fontSize:"0.875rem",margin:"0.25rem 0"}}>{title}</div>
                <div style={{fontSize:"0.75rem",color:"#6b7280"}}>{desc}</div>
              </div>
            ))}
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.25rem",lineHeight:2,color:"#1e293b",fontSize:"0.9rem"}}>
              <li><strong>ডিকোডার:</strong> n ইনপুট → 2ⁿ আউটপুট (একটি সক্রিয়)</li>
              <li><strong>এনকোডার:</strong> 2ⁿ ইনপুট → n আউটপুট (কম্প্যাক্ট)</li>
              <li>2-to-4 ডিকোডার: AB=00→D0, 01→D1, 10→D2, 11→D3</li>
              <li>৭-সেগমেন্টে ৭টি সেগমেন্ট (a-g), BCD ডিকোডার দিয়ে চালিত</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:"2px solid #dc2626",borderRadius:"1rem",padding:"2rem",boxShadow:"0 4px 12px rgba(220,38,38,0.12)"}}>
          <h2 style={{...h2s,color:"#b91c1c",borderBottomColor:"#fecaca"}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <EncoderDecoderQuiz />
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/half-full-adder" style={{color:"#dc2626",fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← হাফ ও ফুল অ্যাডার</Link>
          <Link href="/demo/flip-flop" style={{color:"#dc2626",fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>ফ্লিপ-ফ্লপ →</Link>
        </div>
      </div>
    </div>
  );
}
