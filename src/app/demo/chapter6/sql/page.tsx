import SQLQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "SQL ও রিলেশনাল ডেটাবেজ — HSC ICT অধ্যায় ৬.৩ | EduSocial BD" };
const C="#16a34a",BG="#f0fdf4",BR="#bbf7d0";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const para:React.CSSProperties={color:"#475569",lineHeight:1.8,margin:0,fontSize:"0.95rem"};
const code:React.CSSProperties={fontFamily:"'Courier New',monospace",background:"#1e293b",color:"#e2e8f0",borderRadius:"0.625rem",padding:"1rem 1.25rem",display:"block",overflowX:"auto",fontSize:"0.85rem",lineHeight:1.9};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem"};
export default function SQLPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter6" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৬</Link>
          <span style={{color:BR}}>|</span>
          <Link href="/demo/chapter6/database-models" style={{color:C,textDecoration:"none"}}>ডেটাবেজ মডেল</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>SQL</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৬.৩</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>SQL ও রিলেশনাল ডেটাবেজ</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>Table, Key, এবং SQL কমান্ড — ডেটাবেজ পরিচালনার ভাষা</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          <h3 style={h3s}>রিলেশনাল ডেটাবেজের মূল উপাদান</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:"0.75rem",margin:"0.75rem 0 1.5rem"}}>
            {[
              ["📋","Table","সারণি — ডেটা সংরক্ষণের মূল কাঠামো","#0284c7"],
              ["➡️","Record / Row","একটি সম্পূর্ণ তথ্য-সারি","#7c3aed"],
              ["⬇️","Field / Column","একটি নির্দিষ্ট বৈশিষ্ট্যের কলাম","#0891b2"],
              ["🔑","Primary Key","অদ্বিতীয় পরিচয়কারী Field","#b91c1c"],
              ["🔗","Foreign Key","অন্য টেবিলের PK-এর রেফারেন্স","#ca8a04"],
            ].map(([ic,t,d,c])=>(
              <div key={t} style={{background:"#f8fafc",border:`1.5px solid ${c}30`,borderTop:`3px solid ${c}`,borderRadius:"0.625rem",padding:"0.75rem",textAlign:"center"}}>
                <div style={{fontSize:"1.25rem"}}>{ic}</div>
                <div style={{fontWeight:700,color:c,fontSize:"0.8rem",margin:"0.25rem 0",fontFamily:"monospace"}}>{t}</div>
                <div style={{color:"#64748b",fontSize:"0.72rem",lineHeight:1.4}}>{d}</div>
              </div>
            ))}
          </div>

          {/* Sample tables */}
          <div style={{background:"#f8fafc",borderRadius:"0.75rem",padding:"1.25rem",marginBottom:"1.5rem"}}>
            <div style={{fontWeight:700,color:"#1e293b",marginBottom:"0.75rem",fontSize:"0.875rem"}}>📊 উদাহরণ: Student টেবিল</div>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.82rem"}}>
                <thead><tr style={{background:"#dcfce7"}}>
                  <th style={{...th,background:"#dcfce7",color:"#15803d",padding:"0.4rem 0.625rem"}}>StudentID 🔑</th>
                  <th style={{...th,background:"#dcfce7",color:"#15803d",padding:"0.4rem 0.625rem"}}>Name</th>
                  <th style={{...th,background:"#dcfce7",color:"#15803d",padding:"0.4rem 0.625rem"}}>Class</th>
                  <th style={{...th,background:"#dcfce7",color:"#15803d",padding:"0.4rem 0.625rem"}}>Marks</th>
                </tr></thead>
                <tbody>
                  {[["101","রাফিয়া","XI","85"],["102","আরিফ","XI","72"],["103","তানিয়া","XII","90"],["104","সাকিব","XII","68"]].map((r,i)=>(
                    <tr key={i} style={{background:i%2===0?"#fff":"#f0fdf4"}}>{r.map((c,j)=><td key={j} style={{...td,padding:"0.35rem 0.625rem",fontFamily:j===0?"monospace":"inherit",fontWeight:j===0?700:400,color:j===0?"#15803d":"#374151"}}>{c}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{fontSize:"0.75rem",color:"#64748b",marginTop:"0.5rem"}}>StudentID = Primary Key (অদ্বিতীয়, Null হয় না)</div>
          </div>

          <h3 style={h3s}>SQL কমান্ডের শ্রেণিবিভাগ</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{background:"#eff6ff",border:"1.5px solid #bfdbfe",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#1d4ed8",marginBottom:"0.5rem",fontSize:"0.875rem"}}>DDL — Data Definition Language</div>
              <div style={{fontSize:"0.8rem",color:"#475569",marginBottom:"0.5rem"}}>(কাঠামো তৈরি ও পরিবর্তন)</div>
              <div style={{display:"flex",flexDirection:"column",gap:"0.35rem"}}>
                {[["CREATE","নতুন টেবিল তৈরি"],["DROP","টেবিল মুছে ফেলা"],["ALTER","টেবিল পরিবর্তন"]].map(([c,d])=>(
                  <div key={c} style={{display:"flex",gap:"0.5rem",alignItems:"center"}}>
                    <span style={{fontFamily:"monospace",fontWeight:700,color:"#1d4ed8",fontSize:"0.8rem",minWidth:"55px"}}>{c}</span>
                    <span style={{color:"#64748b",fontSize:"0.75rem"}}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{background:"#f0fdf4",border:"1.5px solid #bbf7d0",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#15803d",marginBottom:"0.5rem",fontSize:"0.875rem"}}>DML — Data Manipulation Language</div>
              <div style={{fontSize:"0.8rem",color:"#475569",marginBottom:"0.5rem"}}>(ডেটা পরিচালনা)</div>
              <div style={{display:"flex",flexDirection:"column",gap:"0.35rem"}}>
                {[["SELECT","ডেটা বের করা"],["INSERT","ডেটা যোগ করা"],["UPDATE","ডেটা পরিবর্তন"],["DELETE","ডেটা মুছা"]].map(([c,d])=>(
                  <div key={c} style={{display:"flex",gap:"0.5rem",alignItems:"center"}}>
                    <span style={{fontFamily:"monospace",fontWeight:700,color:"#15803d",fontSize:"0.8rem",minWidth:"55px"}}>{c}</span>
                    <span style={{color:"#64748b",fontSize:"0.75rem"}}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 style={h3s}>SQL কমান্ডের উদাহরণ</h3>
          <pre style={code}>{`-- টেবিল তৈরি
CREATE TABLE Student (
    StudentID INT PRIMARY KEY,
    Name      VARCHAR(50),
    Class     VARCHAR(10),
    Marks     INT
);

-- ডেটা যোগ করা
INSERT INTO Student VALUES (101, 'রাফিয়া', 'XI', 85);
INSERT INTO Student VALUES (102, 'আরিফ', 'XI', 72);

-- সব ডেটা দেখা
SELECT * FROM Student;

-- শর্তযুক্ত ডেটা দেখা
SELECT Name, Marks FROM Student WHERE Class = 'XI';

-- ডেটা আপডেট করা
UPDATE Student SET Marks = 90 WHERE StudentID = 101;

-- ডেটা মুছে ফেলা
DELETE FROM Student WHERE StudentID = 104;

-- মার্কস ৮০-র বেশি যাদের নাম বের করা
SELECT Name FROM Student WHERE Marks > 80;`}</pre>

          <h3 style={h3s}>Primary Key ও Foreign Key</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"380px"}}>
              <thead><tr><th style={th}>বৈশিষ্ট্য</th><th style={th}>Primary Key</th><th style={th}>Foreign Key</th></tr></thead>
              <tbody>
                {[
                  ["সংজ্ঞা","Record-কে অদ্বিতীয়ভাবে চিহ্নিত করে","অন্য টেবিলের PK-কে রেফার করে"],
                  ["Null মান","হতে পারে না","হতে পারে"],
                  ["Duplicate","হতে পারে না","হতে পারে"],
                  ["একটি টেবিলে সংখ্যা","মাত্র একটি","একাধিক হতে পারে"],
                  ["উদ্দেশ্য","Record চেনানো","টেবিল সংযুক্ত করা"],
                ].map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>{r.map((c,j)=><td key={j} style={{...td,fontWeight:j===0?600:400,color:j===0?"#1e293b":j===1?"#dc2626":"#ca8a04"}}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem",marginTop:"0.5rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.25rem",lineHeight:2,color:"#1e293b",fontSize:"0.9rem"}}>
              <li>SQL = Structured Query Language</li>
              <li>SELECT = দেখা | INSERT = যোগ | UPDATE = পরিবর্তন | DELETE = মুছা</li>
              <li>DDL: CREATE, DROP, ALTER | DML: SELECT, INSERT, UPDATE, DELETE</li>
              <li>Primary Key: Null নয়, Duplicate নয়</li>
              <li>Foreign Key: অন্য টেবিলের PK-র রেফারেন্স</li>
              <li>SELECT * = সব কলাম | WHERE = শর্ত</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#15803d",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <SQLQuiz />
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginTop:"2rem"}}>
          <Link href="/demo/chapter6/textbook-quiz" style={{textDecoration:"none"}}>
            <div style={{background:"#0f172a",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}>
              <div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>📝</div>
              <div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ</div>
              <div style={{color:"#94a3b8",fontSize:"0.78rem",marginTop:"0.2rem"}}>Chapter শেষের অনুশীলনী</div>
            </div>
          </Link>
          <Link href="/demo/chapter6" style={{textDecoration:"none"}}>
            <div style={{background:"#1e3a5f",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}>
              <div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>🗂️</div>
              <div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>অধ্যায় ৬ সূচি</div>
              <div style={{color:"#94a3b8",fontSize:"0.78rem",marginTop:"0.2rem"}}>সব বিষয় দেখুন</div>
            </div>
          </Link>
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.5rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter6/database-models" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← ডেটাবেজ মডেল</Link>
          <Link href="/demo/chapter6/textbook-quiz" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ →</Link>
        </div>
      </div>
    </div>
  );
}
