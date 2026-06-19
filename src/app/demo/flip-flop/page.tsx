import FlipFlopQuiz from "./quiz";
import Link from "next/link";

export const metadata = { title: "ফ্লিপ-ফ্লপ — HSC ICT অধ্যায় ৩ | EduSocial BD" };

const card: React.CSSProperties = {background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s: React.CSSProperties = {fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s: React.CSSProperties = {fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const para: React.CSSProperties = {color:"#475569",lineHeight:1.8,margin:0,fontSize:"0.95rem"};
const th: React.CSSProperties = {padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"center",background:"#f1f5f9"};
const td: React.CSSProperties = {padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",textAlign:"center",fontFamily:"monospace",fontSize:"0.9rem"};

function FlipTable({ title, headers, rows, color }: { title:string,headers:string[],rows:string[][],color:string }) {
  return (
    <div>
      <div style={{fontWeight:700,color,marginBottom:"0.5rem",fontSize:"0.875rem"}}>{title}</div>
      <div style={{overflowX:"auto"}}>
        <table style={{borderCollapse:"collapse",fontSize:"0.875rem",minWidth:"280px"}}>
          <thead><tr>{headers.map(h=><th key={h} style={th}>{h}</th>)}</tr></thead>
          <tbody>
            {rows.map((row,i)=>(
              <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                {row.map((c,j)=>{
                  const isAction = j===headers.length-1;
                  const actionColor = c.includes("Set")?"#15803d":c.includes("Reset")?"#dc2626":c.includes("Toggle")?"#7c3aed":c.includes("No")?"#6b7280":c.includes("নিষিদ্ধ")?"#dc2626":c==="1"?"#15803d":c==="0"?"#374151":"#374151";
                  return <td key={j} style={{...td,fontWeight:isAction||c==="1"?700:400,color:isAction?actionColor:c==="1"?"#15803d":"#374151"}}>{c}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function FlipFlopPage() {
  return (
    <div style={{minHeight:"100vh",background:"#fdf4ff",fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>

        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter3" style={{color:"#9333ea",textDecoration:"none",fontWeight:600}}>← অধ্যায় ৩</Link>
          <span style={{color:"#e9d5ff"}}>|</span>
          <Link href="/demo/encoder-decoder" style={{color:"#9333ea",textDecoration:"none"}}>এনকোডার ও ডিকোডার</Link>
          <span style={{color:"#e9d5ff"}}>|</span>
          <span style={{color:"#6b7280"}}>ফ্লিপ-ফ্লপ</span>
        </div>

        <div style={{marginBottom:"2rem"}}>
          <span style={{background:"#9333ea",color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৩.৭</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>ফ্লিপ-ফ্লপ</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>Flip-Flop — ডিজিটাল মেমোরির মূল উপাদান</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          <h3 style={h3s}>ফ্লিপ-ফ্লপ কী?</h3>
          <p style={para}>
            ফ্লিপ-ফ্লপ একটি bistable multivibrator — এটি দুটি অবস্থায় (0 বা 1) থাকতে পারে এবং
            ক্লক পালসে অবস্থা পরিবর্তন হয়। এটি sequential logic circuit এবং এক বিট ডেটা সংরক্ষণ করতে পারে।
            কম্পিউটারের RAM, রেজিস্টার ও কাউন্টার ফ্লিপ-ফ্লপ দিয়ে তৈরি।
          </p>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem",margin:"0.75rem 0 1.5rem"}}>
            {[["SR","Set-Reset","নিষিদ্ধ অবস্থা আছে","#dc2626"],["JK","Jack Kilby","SR-এর উন্নত রূপ","#2563eb"],["D","Data/Delay","ইনপুট এক ক্লক বিলম্বে","#16a34a"],["T","Toggle","ক্লকে Toggle হয়","#7c3aed"]].map(([name,full,desc,c])=>(
              <div key={name} style={{background:"#fff",border:`2px solid ${c}30`,borderRadius:"0.75rem",padding:"1rem",textAlign:"center"}}>
                <div style={{fontSize:"1.5rem",fontWeight:800,color:c,fontFamily:"monospace"}}>{name}</div>
                <div style={{fontWeight:700,color:"#0f172a",fontSize:"0.875rem",margin:"0.25rem 0"}}>{full}</div>
                <div style={{fontSize:"0.78rem",color:"#6b7280"}}>{desc}</div>
              </div>
            ))}
          </div>

          {/* SR Flip-Flop */}
          <h3 style={h3s}>SR ফ্লিপ-ফ্লপ (Set-Reset)</h3>
          <p style={para}>দুটি ইনপুট: S (Set) ও R (Reset)। S=1 → Q=1 (Set), R=1 → Q=0 (Reset)।</p>
          <div style={{margin:"0.75rem 0 1.5rem"}}>
            <FlipTable
              title="SR ফ্লিপ-ফ্লপ Truth Table"
              headers={["S","R","Q (পরবর্তী)","অবস্থা"]}
              rows={[["0","0","Q (অপরিবর্তিত)","No Change"],["0","1","0","Reset"],["1","0","1","Set"],["1","1","?","নিষিদ্ধ!"]]}
              color="#dc2626"
            />
          </div>
          <div style={{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:"0.625rem",padding:"0.875rem",margin:"-1rem 0 1.5rem",fontSize:"0.875rem",color:"#b91c1c"}}>
            ⚠️ <strong>S=R=1 অবস্থা নিষিদ্ধ</strong> — এটি SR ফ্লিপ-ফ্লপের প্রধান সীমাবদ্ধতা।
          </div>

          {/* JK Flip-Flop */}
          <h3 style={h3s}>JK ফ্লিপ-ফ্লপ</h3>
          <p style={para}>SR-এর উন্নত রূপ। J=K=1 হলে forbidden state-এর বদলে Toggle হয়।</p>
          <div style={{margin:"0.75rem 0 1.5rem"}}>
            <FlipTable
              title="JK ফ্লিপ-ফ্লপ Truth Table"
              headers={["J","K","Q (পরবর্তী)","অবস্থা"]}
              rows={[["0","0","Q (অপরিবর্তিত)","No Change"],["0","1","0","Reset"],["1","0","1","Set"],["1","1","Q' (বিপরীত)","Toggle ✓"]]}
              color="#2563eb"
            />
          </div>

          {/* D Flip-Flop */}
          <h3 style={h3s}>D ফ্লিপ-ফ্লপ (Data / Delay)</h3>
          <p style={para}>
            মাত্র একটি ইনপুট D। ক্লক পালসে Q = D। ইনপুটকে এক ক্লক পিছিয়ে আউটপুটে দেখায়।
            ডেটা সংরক্ষণে সবচেয়ে বেশি ব্যবহৃত।
          </p>
          <div style={{margin:"0.75rem 0 1.5rem"}}>
            <FlipTable
              title="D ফ্লিপ-ফ্লপ Truth Table"
              headers={["D","Q (পরবর্তী)","অবস্থা"]}
              rows={[["0","0","Reset"],["1","1","Set"]]}
              color="#16a34a"
            />
          </div>
          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"0.625rem",padding:"0.875rem",margin:"-1rem 0 1.5rem",fontSize:"0.875rem",color:"#15803d"}}>
            <strong>সূত্র:</strong> Q(next) = D — SR ফ্লিপ-ফ্লপে S=D, R=D' সংযোগ দিলে D ফ্লিপ-ফ্লপ পাওয়া যায়।
          </div>

          {/* T Flip-Flop */}
          <h3 style={h3s}>T ফ্লিপ-ফ্লপ (Toggle)</h3>
          <p style={para}>T=1 হলে প্রতিটি ক্লক পালসে আউটপুট toggle হয়। T=0 হলে অপরিবর্তিত। ফ্রিকোয়েন্সি ডিভাইডার ও কাউন্টারে ব্যবহার।</p>
          <div style={{margin:"0.75rem 0 1.5rem"}}>
            <FlipTable
              title="T ফ্লিপ-ফ্লপ Truth Table"
              headers={["T","Q (পরবর্তী)","অবস্থা"]}
              rows={[["0","Q (অপরিবর্তিত)","No Change"],["1","Q' (বিপরীত)","Toggle"]]}
              color="#7c3aed"
            />
          </div>

          {/* Comparison */}
          <h3 style={h3s}>তুলনামূলক সারণি</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.25rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.875rem",minWidth:"480px"}}>
              <thead><tr style={{background:"#f1f5f9"}}>{["ফ্লিপ-ফ্লপ","ইনপুট","J=K=1 / S=R=1","বৈশিষ্ট্য","ব্যবহার"].map(h=><th key={h} style={{...th,textAlign:"left"}}>{h}</th>)}</tr></thead>
              <tbody>
                {[["SR","S, R","নিষিদ্ধ ⚠️","মৌলিক ফ্লিপ-ফ্লপ","সরল latching"],
                  ["JK","J, K","Toggle ✓","SR-এর উন্নত","কাউন্টার, রেজিস্টার"],
                  ["D","D","–","Q = D","ডেটা স্টোরেজ, শিফট রেজিস্টার"],
                  ["T","T","–","Q' (toggle)","ফ্রিকোয়েন্সি ডিভাইডার"],
                ].map((row,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    {row.map((c,j)=><td key={j} style={{padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:j===0?700:400,color:j===0?["#dc2626","#2563eb","#16a34a","#7c3aed"][i]:c.includes("⚠️")?"#b91c1c":c.includes("✓")?"#15803d":"#374151"}}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Clock concept */}
          <h3 style={h3s}>ক্লক (Clock) এর ভূমিকা</h3>
          <div style={{background:"#f5f3ff",border:"1px solid #ddd6fe",borderRadius:"0.75rem",padding:"1rem 1.25rem",margin:"0.75rem 0 1.25rem"}}>
            <p style={{...para,fontSize:"0.9rem"}}>
              ফ্লিপ-ফ্লপে ক্লক সিগন্যাল নিয়ন্ত্রণ করে কখন ইনপুট পড়বে। দুটি পদ্ধতি:
            </p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem",marginTop:"0.75rem"}}>
              <div style={{background:"#fff",borderRadius:"0.5rem",padding:"0.75rem",border:"1px solid #ddd6fe"}}>
                <div style={{fontWeight:700,color:"#7c3aed",fontSize:"0.875rem"}}>Level-triggered</div>
                <div style={{fontSize:"0.8rem",color:"#475569",marginTop:"0.25rem"}}>ক্লক হাই বা লো থাকা পর্যন্ত ইনপুট পড়ে</div>
              </div>
              <div style={{background:"#fff",borderRadius:"0.5rem",padding:"0.75rem",border:"1px solid #ddd6fe"}}>
                <div style={{fontWeight:700,color:"#7c3aed",fontSize:"0.875rem"}}>Edge-triggered</div>
                <div style={{fontSize:"0.8rem",color:"#475569",marginTop:"0.25rem"}}>শুধুমাত্র ক্লকের rising/falling edge-এ ইনপুট পড়ে</div>
              </div>
            </div>
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.25rem",lineHeight:2,color:"#1e293b",fontSize:"0.9rem"}}>
              <li>SR: <strong>S=R=1 নিষিদ্ধ</strong> — এটি সবচেয়ে গুরুত্বপূর্ণ</li>
              <li>JK: J=K=1 → <strong>Toggle</strong> (SR-এর সমস্যা নেই)</li>
              <li>D: Q(next) = D — "Delay" কারণ এক ক্লক বিলম্ব</li>
              <li>T: T=1 → Toggle, T=0 → No change</li>
              <li>ফ্লিপ-ফ্লপ = Sequential, লজিক গেট = Combinational</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:"2px solid #9333ea",borderRadius:"1rem",padding:"2rem",boxShadow:"0 4px 12px rgba(147,51,234,0.12)"}}>
          <h2 style={{...h2s,color:"#7e22ce",borderBottomColor:"#e9d5ff"}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <FlipFlopQuiz />
        </div>

        {/* Completion banner */}
        <div style={{background:"linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",borderRadius:"1rem",padding:"2rem",textAlign:"center",marginTop:"2rem",color:"#fff"}}>
          <div style={{fontSize:"2.5rem",marginBottom:"0.5rem"}}>🎓</div>
          <h2 style={{fontWeight:800,fontSize:"1.4rem",margin:"0 0 0.5rem"}}>অধ্যায় ৩ সম্পূর্ণ!</h2>
          <p style={{opacity:0.9,fontSize:"0.95rem",margin:"0 0 1.25rem"}}>
            সংখ্যা পদ্ধতি থেকে ফ্লিপ-ফ্লপ — Chapter 3-এর সব বিষয় শেষ করেছেন
          </p>
          <Link href="/demo/chapter3" style={{display:"inline-block",background:"rgba(255,255,255,0.2)",color:"#fff",borderRadius:"0.5rem",padding:"0.625rem 1.5rem",fontWeight:700,textDecoration:"none",fontSize:"0.95rem",border:"1px solid rgba(255,255,255,0.4)"}}>
            অধ্যায় ৩ সূচি দেখুন →
          </Link>
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/encoder-decoder" style={{color:"#9333ea",fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← এনকোডার ও ডিকোডার</Link>
          <Link href="/demo/chapter3" style={{color:"#9333ea",fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>অধ্যায় ৩ সূচি →</Link>
        </div>
      </div>
    </div>
  );
}
