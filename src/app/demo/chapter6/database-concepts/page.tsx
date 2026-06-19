import DatabaseConceptsQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "ডেটাবেজের ধারণা — HSC ICT অধ্যায় ৬.১ | EduSocial BD" };
const C="#0284c7",BG="#f0f9ff",BR="#bae6fd";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const para:React.CSSProperties={color:"#475569",lineHeight:1.8,margin:0,fontSize:"0.95rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem"};
export default function DatabaseConceptsPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter6" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৬</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>ডেটাবেজের ধারণা</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৬.১</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>ডেটাবেজের ধারণা</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>Data, Information, Database ও DBMS — মূল ধারণা ও সুবিধা</p>
        </div>
        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          <h3 style={h3s}>ডেটা ও তথ্য</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{background:"#fef2f2",border:"1.5px solid #fecaca",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#b91c1c",marginBottom:"0.5rem",fontSize:"0.9rem"}}>📥 ডেটা (Data)</div>
              <p style={{color:"#475569",fontSize:"0.825rem",lineHeight:1.7,margin:"0 0 0.5rem"}}>কাঁচা, অপ্রক্রিয়াকৃত তথ্য যা এককভাবে অর্থহীন।</p>
              <div style={{background:"#fff",borderRadius:"0.375rem",padding:"0.5rem",fontSize:"0.78rem",fontFamily:"monospace",color:"#374151"}}>
                উদাহরণ:<br/>85, রাফিয়া, 12-06-2025
              </div>
            </div>
            <div style={{background:"#f0fdf4",border:"1.5px solid #bbf7d0",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#15803d",marginBottom:"0.5rem",fontSize:"0.9rem"}}>📤 তথ্য (Information)</div>
              <p style={{color:"#475569",fontSize:"0.825rem",lineHeight:1.7,margin:"0 0 0.5rem"}}>প্রক্রিয়াকৃত, অর্থবহ ডেটা যা সিদ্ধান্ত নিতে সাহায্য করে।</p>
              <div style={{background:"#fff",borderRadius:"0.375rem",padding:"0.5rem",fontSize:"0.78rem",color:"#374151"}}>
                উদাহরণ:<br/>রাফিয়া ১২ জুন পরীক্ষায় ৮৫ পেয়ে A পেয়েছে
              </div>
            </div>
          </div>

          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",margin:"0 0 1.5rem",flexWrap:"wrap",fontSize:"0.875rem"}}>
            <div style={{background:"#fef2f2",border:"1px solid #fca5a5",borderRadius:"0.5rem",padding:"0.5rem 1rem",fontWeight:600,color:"#b91c1c"}}>ডেটা</div>
            <div style={{color:"#64748b"}}>→ <strong>প্রক্রিয়াকরণ</strong> →</div>
            <div style={{background:"#f0fdf4",border:"1px solid #86efac",borderRadius:"0.5rem",padding:"0.5rem 1rem",fontWeight:600,color:"#15803d"}}>তথ্য</div>
          </div>

          <h3 style={h3s}>ডেটাবেজ (Database)</h3>
          <p style={para}>সুশৃঙ্খলভাবে সংরক্ষিত পরস্পর সম্পর্কযুক্ত ডেটার সমষ্টিকে ডেটাবেজ বলে। যেমন: একটি স্কুলের ছাত্রছাত্রীদের নাম, রোল, পরীক্ষার ফলাফল — এই সংগঠিত সংগ্রহই ডেটাবেজ।</p>

          <h3 style={h3s}>DBMS (Database Management System)</h3>
          <p style={{...para,marginBottom:"0.75rem"}}>ডেটাবেজ তৈরি, সংরক্ষণ, আপডেট, মুছে ফেলা এবং রিপোর্ট তৈরির সুবিধা দেয় এমন সফটওয়্যারকে DBMS বলে।</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginBottom:"1.5rem"}}>
            {[["MySQL","#f97316"],["Oracle","#dc2626"],["MS Access","#2563eb"],["SQL Server","#7c3aed"],["PostgreSQL","#0284c7"],["MongoDB","#16a34a"]].map(([name,color])=>(
              <span key={name} style={{background:`${color}15`,border:`1.5px solid ${color}40`,color,borderRadius:"0.5rem",padding:"0.3rem 0.75rem",fontSize:"0.8rem",fontWeight:600}}>{name}</span>
            ))}
          </div>

          <h3 style={h3s}>ডেটাবেজের সুবিধা</h3>
          <div style={{display:"flex",flexDirection:"column",gap:"0.5rem",margin:"0.75rem 0 1.5rem"}}>
            {[
              ["Data Redundancy হ্রাস","একই ডেটা বারবার সংরক্ষণ প্রয়োজন হয় না","#0284c7"],
              ["Data Integrity","ডেটার সঠিকতা ও সামঞ্জস্য নিশ্চিত হয়","#16a34a"],
              ["Data Security","অনুমোদিত ব্যবহারকারীই শুধু অ্যাক্সেস পায়","#7c3aed"],
              ["Data Sharing","একই সময়ে একাধিক ব্যবহারকারী ব্যবহার করতে পারে","#0891b2"],
              ["Data Independence","প্রোগ্রাম পরিবর্তন না করে ডেটা কাঠামো পরিবর্তন সম্ভব","#ca8a04"],
              ["Backup & Recovery","ডেটা হারিয়ে গেলে পুনরুদ্ধার করা যায়","#dc2626"],
            ].map(([t,d,c])=>(
              <div key={t} style={{display:"flex",gap:"0.75rem",padding:"0.75rem",background:"#f8fafc",borderRadius:"0.5rem",border:"1px solid #e2e8f0",alignItems:"flex-start"}}>
                <span style={{display:"inline-block",width:"8px",height:"8px",borderRadius:"50%",background:c,flexShrink:0,marginTop:"6px"}}/>
                <div>
                  <div style={{fontWeight:600,color:"#1e293b",fontSize:"0.875rem"}}>{t}</div>
                  <div style={{color:"#64748b",fontSize:"0.8rem",marginTop:"0.15rem"}}>{d}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={h3s}>DBA (Database Administrator)</h3>
          <p style={para}>DBA হলেন সেই ব্যক্তি যিনি ডেটাবেজ ডিজাইন করেন, রক্ষণাবেক্ষণ করেন, ব্যবহারকারীর অনুমতি পরিচালনা করেন এবং ডেটাবেজের নিরাপত্তা ও কর্মক্ষমতা নিশ্চিত করেন।</p>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem",marginTop:"1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.25rem",lineHeight:2,color:"#1e293b",fontSize:"0.9rem"}}>
              <li>Data + প্রক্রিয়াকরণ = Information</li>
              <li>DBMS = Database Management System</li>
              <li>MySQL, Oracle, MS Access — DBMS-এর উদাহরণ</li>
              <li>DBA = Database Administrator</li>
              <li>Data Redundancy = অপ্রয়োজনীয় নকল (ডেটাবেজে হ্রাস পায়)</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#0369a1",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <DatabaseConceptsQuiz />
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter6" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← অধ্যায় ৬ সূচি</Link>
          <Link href="/demo/chapter6/database-models" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>ডেটাবেজ মডেল →</Link>
        </div>
      </div>
    </div>
  );
}
