import DatabaseModelsQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "ডেটাবেজ মডেল — HSC ICT অধ্যায় ৬.২ | EduSocial BD" };
const C="#7c3aed",BG="#f5f3ff",BR="#ddd6fe";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const para:React.CSSProperties={color:"#475569",lineHeight:1.8,margin:0,fontSize:"0.95rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem"};
export default function DatabaseModelsPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter6" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৬</Link>
          <span style={{color:BR}}>|</span>
          <Link href="/demo/chapter6/database-concepts" style={{color:C,textDecoration:"none"}}>ডেটাবেজের ধারণা</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>ডেটাবেজ মডেল</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৬.২</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>ডেটাবেজ মডেল</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>Hierarchical, Network ও Relational — তিনটি প্রধান ডেটাবেজ মডেল</p>
        </div>
        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          {/* Three models */}
          <div style={{display:"flex",flexDirection:"column",gap:"1.25rem",margin:"0.75rem 0 1.5rem"}}>

            {/* Hierarchical */}
            <div style={{background:"#fef2f2",border:"1.5px solid #fecaca",borderRadius:"0.875rem",padding:"1.25rem"}}>
              <div style={{fontWeight:700,color:"#b91c1c",fontSize:"1rem",marginBottom:"0.5rem"}}>🌳 হায়ারার্কিক্যাল মডেল (Hierarchical Model)</div>
              <p style={{color:"#475569",fontSize:"0.875rem",lineHeight:1.7,margin:"0 0 0.75rem"}}>ডেটা গাছের মতো কাঠামোতে সাজানো থাকে। প্রতিটি Node-এর মাত্র একটি Parent থাকে।</p>
              <div style={{background:"#fff",borderRadius:"0.625rem",padding:"1rem",marginBottom:"0.75rem",fontFamily:"monospace",fontSize:"0.82rem",color:"#1e293b",textAlign:"center"}}>
                <div style={{fontWeight:700,color:"#b91c1c"}}>স্কুল (Root)</div>
                <div style={{color:"#94a3b8"}}>├──</div>
                <div style={{display:"flex",justifyContent:"center",gap:"3rem"}}>
                  <div><div style={{color:"#dc2626"}}>শ্রেণি XI</div><div style={{color:"#94a3b8"}}>├──</div><div style={{color:"#374151"}}>বিজ্ঞান</div><div style={{color:"#374151"}}>বাণিজ্য</div></div>
                  <div><div style={{color:"#dc2626"}}>শ্রেণি XII</div><div style={{color:"#94a3b8"}}>├──</div><div style={{color:"#374151"}}>মানবিক</div><div style={{color:"#374151"}}>বিজ্ঞান</div></div>
                </div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem",fontSize:"0.78rem"}}>
                <div style={{background:"#fef9c3",borderRadius:"0.375rem",padding:"0.5rem"}}><strong>সুবিধা:</strong> সহজ কাঠামো, দ্রুত ডেটা খোঁজা</div>
                <div style={{background:"#fef2f2",borderRadius:"0.375rem",padding:"0.5rem"}}><strong>অসুবিধা:</strong> M:N সম্পর্ক প্রকাশ করা যায় না</div>
              </div>
            </div>

            {/* Network */}
            <div style={{background:"#fffbeb",border:"1.5px solid #fde68a",borderRadius:"0.875rem",padding:"1.25rem"}}>
              <div style={{fontWeight:700,color:"#b45309",fontSize:"1rem",marginBottom:"0.5rem"}}>🕸️ নেটওয়ার্ক মডেল (Network Model)</div>
              <p style={{color:"#475569",fontSize:"0.875rem",lineHeight:1.7,margin:"0 0 0.75rem"}}>জালের মতো কাঠামো। একটি Child-এর একাধিক Parent থাকতে পারে — M:N সম্পর্ক প্রকাশ করা সম্ভব।</p>
              <div style={{background:"#fff",borderRadius:"0.625rem",padding:"1rem",marginBottom:"0.75rem",textAlign:"center",fontSize:"0.82rem"}}>
                <div style={{display:"flex",justifyContent:"space-around",marginBottom:"0.5rem"}}>
                  <span style={{background:"#fde68a",borderRadius:"0.375rem",padding:"0.25rem 0.75rem",fontWeight:700,color:"#92400e"}}>শিক্ষক ক</span>
                  <span style={{background:"#fde68a",borderRadius:"0.375rem",padding:"0.25rem 0.75rem",fontWeight:700,color:"#92400e"}}>শিক্ষক খ</span>
                </div>
                <div style={{color:"#94a3b8",fontSize:"0.9rem"}}>↘↙</div>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                  <span style={{background:"#f0f9ff",border:"1px solid #bae6fd",borderRadius:"0.375rem",padding:"0.25rem 0.75rem",color:"#0369a1"}}>বিষয়: গণিত</span>
                  <span style={{background:"#f0f9ff",border:"1px solid #bae6fd",borderRadius:"0.375rem",padding:"0.25rem 0.75rem",color:"#0369a1"}}>বিষয়: পদার্থ</span>
                </div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem",fontSize:"0.78rem"}}>
                <div style={{background:"#fef9c3",borderRadius:"0.375rem",padding:"0.5rem"}}><strong>সুবিধা:</strong> M:N সম্পর্ক প্রকাশ করা যায়</div>
                <div style={{background:"#fef2f2",borderRadius:"0.375rem",padding:"0.5rem"}}><strong>অসুবিধা:</strong> জটিল কাঠামো, পরিচালনা কঠিন</div>
              </div>
            </div>

            {/* Relational */}
            <div style={{background:"#f0fdf4",border:"1.5px solid #bbf7d0",borderRadius:"0.875rem",padding:"1.25rem"}}>
              <div style={{fontWeight:700,color:"#15803d",fontSize:"1rem",marginBottom:"0.5rem"}}>📋 রিলেশনাল মডেল (Relational Model) ✅ সবচেয়ে জনপ্রিয়</div>
              <p style={{color:"#475569",fontSize:"0.875rem",lineHeight:1.7,margin:"0 0 0.75rem"}}>ডেটা দ্বিমাত্রিক টেবিলে সংরক্ষিত (Row = Record, Column = Field)। টেবিলগুলো Key দিয়ে সংযুক্ত।</p>
              <div style={{overflowX:"auto",marginBottom:"0.75rem"}}>
                <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.8rem"}}>
                  <thead><tr style={{background:"#dcfce7"}}><th style={{...th,background:"#dcfce7",color:"#15803d",padding:"0.4rem 0.625rem"}}>StudentID (PK)</th><th style={{...th,background:"#dcfce7",color:"#15803d",padding:"0.4rem 0.625rem"}}>Name</th><th style={{...th,background:"#dcfce7",color:"#15803d",padding:"0.4rem 0.625rem"}}>Class</th></tr></thead>
                  <tbody>
                    {[["101","রাফিয়া","XI"],["102","আরিফ","XI"],["103","তানিয়া","XII"]].map((r,i)=><tr key={i} style={{background:i%2===0?"#fff":"#f0fdf4"}}>{r.map((c,j)=><td key={j} style={{...td,padding:"0.35rem 0.625rem",fontFamily:j===0?"monospace":"inherit",fontWeight:j===0?700:400}}>{c}</td>)}</tr>)}
                  </tbody>
                </table>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem",fontSize:"0.78rem"}}>
                <div style={{background:"#dcfce7",borderRadius:"0.375rem",padding:"0.5rem"}}><strong>সুবিধা:</strong> সহজ, নমনীয়, SQL সাপোর্ট, সবচেয়ে জনপ্রিয়</div>
                <div style={{background:"#fef9c3",borderRadius:"0.375rem",padding:"0.5rem"}}><strong>অসুবিধা:</strong> জটিল query-তে performance কমতে পারে</div>
              </div>
            </div>
          </div>

          <h3 style={h3s}>তিন মডেলের তুলনা</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"420px"}}>
              <thead><tr><th style={th}>বৈশিষ্ট্য</th><th style={th}>Hierarchical</th><th style={th}>Network</th><th style={th}>Relational</th></tr></thead>
              <tbody>
                {[
                  ["কাঠামো","গাছ","জাল","টেবিল"],
                  ["Parent সংখ্যা","মাত্র একটি","একাধিক","N/A"],
                  ["M:N সম্পর্ক","সম্ভব নয়","সম্ভব","সম্ভব"],
                  ["ব্যবহারের সহজতা","মধ্যম","কঠিন","সহজ ✅"],
                  ["জনপ্রিয়তা","কম","কম","সর্বাধিক ✅"],
                  ["উদাহরণ","IMS (IBM)","IDMS","MySQL, Oracle"],
                ].map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>{r.map((c,j)=><td key={j} style={{...td,fontWeight:j===0?600:400,color:j===0?C:j===3?"#16a34a":"#374151"}}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={h3s}>Entity, Attribute ও Relationship</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.75rem",margin:"0.75rem 0 1.5rem",fontSize:"0.8rem"}}>
            {[
              {t:"Entity",bn:"সত্তা",desc:"বাস্তব বস্তু",eg:"ছাত্র, শিক্ষক, বই",color:"#7c3aed"},
              {t:"Attribute",bn:"বৈশিষ্ট্য",desc:"Entity-র গুণ",eg:"নাম, রোল, বয়স",color:"#0891b2"},
              {t:"Relationship",bn:"সম্পর্ক",desc:"Entity-গুলোর মধ্যে যোগসূত্র",eg:"ছাত্র পড়ে বিষয়",color:"#16a34a"},
            ].map(s=>(
              <div key={s.t} style={{background:"#fff",border:`2px solid ${s.color}30`,borderTop:`3px solid ${s.color}`,borderRadius:"0.625rem",padding:"0.75rem",textAlign:"center"}}>
                <div style={{fontWeight:700,color:s.color,fontFamily:"monospace"}}>{s.t}</div>
                <div style={{color:"#475569",fontSize:"0.75rem",margin:"0.2rem 0"}}>{s.bn}</div>
                <div style={{color:"#94a3b8",fontSize:"0.72rem",lineHeight:1.5}}>{s.desc}</div>
                <div style={{color:"#1e293b",fontSize:"0.72rem",marginTop:"0.4rem",fontWeight:600}}>{s.eg}</div>
              </div>
            ))}
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.25rem",lineHeight:2,color:"#1e293b",fontSize:"0.9rem"}}>
              <li>Hierarchical = গাছ | Network = জাল | Relational = টেবিল</li>
              <li>Hierarchical-এ M:N সম্পর্ক সম্ভব নয়</li>
              <li>Relational Model সবচেয়ে জনপ্রিয় (MySQL, Oracle)</li>
              <li>1:1, 1:N, M:N — তিন ধরনের Relationship</li>
              <li>E-R Diagram = Entity-Relationship Diagram</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#6d28d9",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <DatabaseModelsQuiz />
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter6/database-concepts" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← ডেটাবেজের ধারণা</Link>
          <Link href="/demo/chapter6/sql" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>SQL ও রিলেশনাল DB →</Link>
        </div>
      </div>
    </div>
  );
}
