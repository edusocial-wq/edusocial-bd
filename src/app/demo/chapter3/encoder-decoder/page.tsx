import EncoderDecoderQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "এনকোডার ও ডিকোডার — HSC ICT অধ্যায় ৩.৬ | EduSocial BD" };
const C="#dc2626",BG="#fef2f2",BR="#fecaca";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"center",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151",textAlign:"center",fontFamily:"monospace"};
export default function EncoderDecoderPage(){return(
  <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
    <div style={{maxWidth:"740px",margin:"0 auto"}}>
      <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
        <Link href="/demo/chapter3" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৩</Link>
        <span style={{color:BR}}>|</span>
        <Link href="/demo/chapter3/half-full-adder" style={{color:C,textDecoration:"none"}}>হাফ অ্যাডার</Link>
        <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>এনকোডার ও ডিকোডার</span>
      </div>
      <div style={{marginBottom:"2rem"}}>
        <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৩.৬</span>
        <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>এনকোডার ও ডিকোডার</h1>
        <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>2-to-4 Decoder, 4-to-2 Encoder, BCD, ৭-সেগমেন্ট ডিসপ্লে</p>
      </div>
      <div style={card}>
        <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",margin:"0.75rem 0 1.5rem"}}>
          <div style={{background:"#fef2f2",border:"1.5px solid #fecaca",borderTop:"3px solid #dc2626",borderRadius:"0.75rem",padding:"1.25rem"}}>
            <div style={{fontWeight:800,color:"#dc2626",marginBottom:"0.5rem"}}>📡 ডিকোডার (Decoder)</div>
            <p style={{color:"#475569",fontSize:"0.875rem",lineHeight:1.7,margin:"0 0 0.75rem"}}>n ইনপুট থেকে সর্বোচ্চ 2ⁿ আউটপুট তৈরি করে।</p>
            <code style={{display:"block",background:"#0f172a",color:"#86efac",padding:"0.5rem",borderRadius:"0.375rem",fontSize:"0.8rem"}}>2-to-4: ২ input → ৪ output</code>
          </div>
          <div style={{background:"#eff6ff",border:"1.5px solid #bfdbfe",borderTop:"3px solid #2563eb",borderRadius:"0.75rem",padding:"1.25rem"}}>
            <div style={{fontWeight:800,color:"#2563eb",marginBottom:"0.5rem"}}>🔧 এনকোডার (Encoder)</div>
            <p style={{color:"#475569",fontSize:"0.875rem",lineHeight:1.7,margin:"0 0 0.75rem"}}>2ⁿ ইনপুট থেকে n বিট আউটপুট তৈরি করে।</p>
            <code style={{display:"block",background:"#0f172a",color:"#86efac",padding:"0.5rem",borderRadius:"0.375rem",fontSize:"0.8rem"}}>4-to-2: ৪ input → ২ output</code>
          </div>
        </div>
        <h3 style={h3s}>2-to-4 ডিকোডার — Truth Table</h3>
        <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
          <table style={{borderCollapse:"collapse",width:"100%",minWidth:"360px"}}>
            <thead><tr><th style={th}>A</th><th style={th}>B</th><th style={{...th,color:"#dc2626"}}>D0</th><th style={{...th,color:"#dc2626"}}>D1</th><th style={{...th,color:"#dc2626"}}>D2</th><th style={{...th,color:"#dc2626"}}>D3</th></tr></thead>
            <tbody>
              {[["0","0","1","0","0","0"],["0","1","0","1","0","0"],["1","0","0","0","1","0"],["1","1","0","0","0","1"]].map((r,i)=>(
                <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                  {r.map((v,j)=><td key={j} style={{...td,fontWeight:j>=2&&v==="1"?700:400,color:j>=2&&v==="1"?"#dc2626":"#374151"}}>{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 style={h3s}>৭-সেগমেন্ট ডিসপ্লে</h3>
        <div style={{background:"#f8fafc",border:"1.5px solid #e2e8f0",borderLeft:"4px solid #dc2626",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.5rem"}}>
          <p style={{color:"#475569",fontSize:"0.875rem",lineHeight:1.8,margin:"0 0 0.75rem"}}>
            ৭-সেগমেন্ট ডিসপ্লেতে a, b, c, d, e, f, g — মোট ৭টি LED সেগমেন্ট থাকে। বিভিন্ন সমন্বয়ে 0-9 সংখ্যা দেখানো হয়।
          </p>
          <div style={{display:"flex",gap:"0.5rem",flexWrap:"wrap"}}>
            {[["0","abcdef"],["1","bc"],["2","abdeg"],["3","abcdg"],["4","bcfg"],["5","acdfg"],["8","abcdefg"],["9","abcdfg"]].map(([n,s])=>(
              <div key={n} style={{background:"#0f172a",color:"#fbbf24",borderRadius:"0.5rem",padding:"0.5rem 0.75rem",textAlign:"center",minWidth:"50px"}}>
                <div style={{fontSize:"1.25rem",fontWeight:800,fontFamily:"monospace"}}>{n}</div>
                <div style={{fontSize:"0.65rem",color:"#64748b"}}>{s}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
          <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
          <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.1rem",lineHeight:2,color:"#1e293b",fontSize:"0.875rem"}}>
            <li>Decoder: n ইনপুট → 2ⁿ আউটপুট (বড় দিকে যায়)</li>
            <li>Encoder: 2ⁿ ইনপুট → n আউটপুট (ছোট দিকে যায়)</li>
            <li>2-to-4: AB=00→D0, 01→D1, 10→D2, 11→D3</li>
            <li>৭-সেগমেন্টে ৭টি সেগমেন্ট (a-g)</li>
            <li>Enable pin 0 হলে সব আউটপুট 0</li>
          </ul>
        </div>
      </div>
      <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
        <h2 style={{...h2s,color:"#b91c1c",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
        <EncoderDecoderQuiz/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginTop:"2rem"}}>
        <Link href="/demo/chapter3/textbook-quiz" style={{textDecoration:"none"}}><div style={{background:"#0f172a",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}><div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>📝</div><div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ</div></div></Link>
        <Link href="/demo/chapter3" style={{textDecoration:"none"}}><div style={{background:"#1e3a5f",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}><div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>🗂️</div><div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>অধ্যায় ৩ সূচি</div></div></Link>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.5rem",flexWrap:"wrap",gap:"1rem"}}>
        <Link href="/demo/chapter3/half-full-adder" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← হাফ ও ফুল অ্যাডার</Link>
        <Link href="/demo/chapter3/flip-flop" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>ফ্লিপ-ফ্লপ →</Link>
      </div>
    </div>
  </div>
);}
