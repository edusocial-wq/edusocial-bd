import BooleanAlgebraQuiz from "./quiz";
import Link from "next/link";

export const metadata = { title: "বুলিয়ান অ্যালজেব্রা — HSC ICT অধ্যায় ৩ | EduSocial BD" };

const card: React.CSSProperties = {background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s: React.CSSProperties = {fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s: React.CSSProperties = {fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const para: React.CSSProperties = {color:"#475569",lineHeight:1.8,margin:0,fontSize:"0.95rem"};

function LawRow({name, expr, example}: {name:string,expr:string,example:string}) {
  return (
    <tr>
      <td style={{padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:600,color:"#1e293b",fontSize:"0.875rem"}}>{name}</td>
      <td style={{padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontFamily:"monospace",color:"#7c3aed",fontSize:"0.9rem",fontWeight:700}}>{expr}</td>
      <td style={{padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontFamily:"monospace",color:"#475569",fontSize:"0.85rem"}}>{example}</td>
    </tr>
  );
}

export default function BooleanAlgebraPage() {
  return (
    <div style={{minHeight:"100vh",background:"#f0fdf4",fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>

        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter3" style={{color:"#059669",textDecoration:"none",fontWeight:600}}>← অধ্যায় ৩</Link>
          <span style={{color:"#bbf7d0"}}>|</span>
          <Link href="/demo/logic-gates" style={{color:"#059669",textDecoration:"none"}}>লজিক গেট</Link>
          <span style={{color:"#bbf7d0"}}>|</span>
          <span style={{color:"#6b7280"}}>বুলিয়ান অ্যালজেব্রা</span>
        </div>

        <div style={{marginBottom:"2rem"}}>
          <span style={{background:"#059669",color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৩.৪</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>বুলিয়ান অ্যালজেব্রা</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>Boolean Algebra — লজিক সার্কিটের গাণিতিক ভিত্তি</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          <h3 style={h3s}>বুলিয়ান অ্যালজেব্রা কী?</h3>
          <p style={para}>
            বুলিয়ান অ্যালজেব্রা হলো একটি গণিত যেখানে চলরাশি (variable) শুধু দুটি মান নিতে পারে: 0 (মিথ্যা) অথবা 1 (সত্য)।
            জর্জ বুল (George Boole) ১৮৪৭ সালে এটি প্রবর্তন করেন। এটি দিয়ে লজিক সার্কিট ডিজাইন ও সরলীকরণ করা হয়।
          </p>

          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"0.75rem",padding:"1rem 1.25rem",margin:"1rem 0 1.5rem"}}>
            <strong style={{color:"#15803d"}}>তিনটি মূল অপারেশন:</strong>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.75rem",marginTop:"0.75rem"}}>
              {[["AND (·)", "A·B", "গুণের মতো","#2563eb"],["OR (+)", "A+B","যোগের মতো","#16a34a"],["NOT (')", "A'","পূরক","#dc2626"]].map(([op,sym,desc,c])=>(
                <div key={op} style={{background:"#fff",border:`1.5px solid ${c}30`,borderRadius:"0.5rem",padding:"0.75rem",textAlign:"center"}}>
                  <div style={{fontWeight:700,color:c,fontSize:"0.9rem"}}>{op}</div>
                  <div style={{fontFamily:"monospace",fontSize:"1.1rem",color:"#1e293b",margin:"0.25rem 0"}}>{sym}</div>
                  <div style={{fontSize:"0.75rem",color:"#6b7280"}}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Laws table */}
          <h3 style={h3s}>বুলিয়ান সূত্রাবলী (Boolean Laws)</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.875rem",minWidth:"400px"}}>
              <thead>
                <tr style={{background:"#f1f5f9"}}>
                  {["সূত্রের নাম","এক্সপ্রেশন","উদাহরণ"].map(h=><th key={h} style={{padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left"}}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                <LawRow name="Identity Law (OR)" expr="A + 0 = A" example="1+0=1, 0+0=0" />
                <LawRow name="Identity Law (AND)" expr="A · 1 = A" example="1·1=1, 0·1=0" />
                <LawRow name="Null Law (OR)" expr="A + 1 = 1" example="যেকোনো মান+1=1" />
                <LawRow name="Null Law (AND)" expr="A · 0 = 0" example="যেকোনো মান·0=0" />
                <LawRow name="Idempotent (OR)" expr="A + A = A" example="1+1=1, 0+0=0" />
                <LawRow name="Idempotent (AND)" expr="A · A = A" example="1·1=1, 0·0=0" />
                <LawRow name="Complement (OR)" expr="A + A' = 1" example="সবসময় 1" />
                <LawRow name="Complement (AND)" expr="A · A' = 0" example="সবসময় 0" />
                <LawRow name="Double Complement" expr="(A')' = A" example="NOT(NOT A) = A" />
                <LawRow name="Commutative (OR)" expr="A + B = B + A" example="ক্রম বদলে মান বদলায় না" />
                <LawRow name="Commutative (AND)" expr="A · B = B · A" example="ক্রম বদলে মান বদলায় না" />
                <LawRow name="Absorption" expr="A + AB = A" example="B-এর কোনো প্রভাব নেই" />
                <LawRow name="Distributive" expr="A(B+C) = AB+AC" example="সাধারণ বীজগণিতের মতো" />
              </tbody>
            </table>
          </div>

          {/* De Morgan's Theorem */}
          <h3 style={h3s}>De Morgan's Theorem</h3>
          <p style={para}>De Morgan's Theorem পরীক্ষায় সবচেয়ে বেশি আসে। দুটি অংশ:</p>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"1rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{background:"#eff6ff",border:"2px solid #bfdbfe",borderRadius:"0.875rem",padding:"1.25rem"}}>
              <div style={{fontWeight:700,color:"#1d4ed8",marginBottom:"0.75rem"}}>১ম Theorem</div>
              <div style={{fontFamily:"monospace",fontSize:"1.25rem",fontWeight:700,color:"#1e293b",textAlign:"center",padding:"0.75rem",background:"#fff",borderRadius:"0.5rem",marginBottom:"0.75rem"}}>
                (A + B)' = A' · B'
              </div>
              <p style={{...para,fontSize:"0.875rem"}}>
                দুটি মানের OR-এর NOT করা = দুটি মানের আলাদা NOT করে AND করা।
              </p>
              <div style={{fontFamily:"monospace",fontSize:"0.85rem",color:"#475569",marginTop:"0.5rem"}}>
                NOR গেট = A'·B'
              </div>
            </div>
            <div style={{background:"#fef2f2",border:"2px solid #fecaca",borderRadius:"0.875rem",padding:"1.25rem"}}>
              <div style={{fontWeight:700,color:"#b91c1c",marginBottom:"0.75rem"}}>২য় Theorem</div>
              <div style={{fontFamily:"monospace",fontSize:"1.25rem",fontWeight:700,color:"#1e293b",textAlign:"center",padding:"0.75rem",background:"#fff",borderRadius:"0.5rem",marginBottom:"0.75rem"}}>
                (A · B)' = A' + B'
              </div>
              <p style={{...para,fontSize:"0.875rem"}}>
                দুটি মানের AND-এর NOT করা = দুটি মানের আলাদা NOT করে OR করা।
              </p>
              <div style={{fontFamily:"monospace",fontSize:"0.85rem",color:"#475569",marginTop:"0.5rem"}}>
                NAND গেট = A'+B'
              </div>
            </div>
          </div>

          {/* Simplification example */}
          <h3 style={h3s}>বুলিয়ান এক্সপ্রেশন সরলীকরণ</h3>
          <div style={{background:"#f5f3ff",border:"1px solid #ddd6fe",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{fontWeight:700,color:"#7c3aed",marginBottom:"0.75rem",fontSize:"0.85rem"}}>উদাহরণ: AB + AB' সরল করো</div>
            <div style={{fontFamily:"monospace",lineHeight:2.2,fontSize:"0.9rem",color:"#1e293b"}}>
              <div>= AB + AB'</div>
              <div>= A(B + B') <span style={{color:"#6b7280",fontSize:"0.8rem",fontFamily:"sans-serif"}}>[Distributive Law]</span></div>
              <div>= A · 1 <span style={{color:"#6b7280",fontSize:"0.8rem",fontFamily:"sans-serif"}}>[Complement Law: B+B'=1]</span></div>
              <div style={{color:"#7c3aed",fontWeight:700}}>= A <span style={{color:"#6b7280",fontSize:"0.8rem",fontFamily:"sans-serif"}}>[Identity Law: A·1=A]</span></div>
            </div>
          </div>

          <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{fontWeight:700,color:"#92400e",marginBottom:"0.75rem",fontSize:"0.85rem"}}>উদাহরণ: A + A'B সরল করো</div>
            <div style={{fontFamily:"monospace",lineHeight:2.2,fontSize:"0.9rem",color:"#1e293b"}}>
              <div>= A + A'B</div>
              <div>= (A + A')(A + B) <span style={{color:"#6b7280",fontSize:"0.8rem",fontFamily:"sans-serif"}}>[Distributive]</span></div>
              <div>= 1 · (A + B) <span style={{color:"#6b7280",fontSize:"0.8rem",fontFamily:"sans-serif"}}>[A+A'=1]</span></div>
              <div style={{color:"#d97706",fontWeight:700}}>= A + B</div>
            </div>
          </div>

          {/* SOP/POS brief */}
          <h3 style={h3s}>SOP এবং POS ফর্ম</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"1rem",margin:"0.75rem 0 1.25rem"}}>
            <div style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#0f172a",marginBottom:"0.35rem"}}>SOP (Sum of Products)</div>
              <div style={{fontFamily:"monospace",color:"#2563eb",fontSize:"0.95rem",margin:"0.35rem 0"}}>F = AB + A'C + BC'</div>
              <p style={{...para,fontSize:"0.8rem"}}>AND টার্মগুলো OR দিয়ে যোগ করা। প্রতিটি term-এ সব ভেরিয়েবল থাকে।</p>
            </div>
            <div style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#0f172a",marginBottom:"0.35rem"}}>POS (Product of Sums)</div>
              <div style={{fontFamily:"monospace",color:"#059669",fontSize:"0.95rem",margin:"0.35rem 0"}}>F = (A+B)(A'+C)</div>
              <p style={{...para,fontSize:"0.8rem"}}>OR টার্মগুলো AND দিয়ে গুণ করা।</p>
            </div>
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem",marginTop:"0.5rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.25rem",lineHeight:2,color:"#1e293b",fontSize:"0.9rem"}}>
              <li>De Morgan's: NOT-AND → NOT OR, NOT-OR → NOT AND ("bubble pushing")</li>
              <li>Absorption: A + AB = A (B বাদ পড়ে যায়)</li>
              <li>A·A' = 0 এবং A+A' = 1 — এই দুটি সবচেয়ে গুরুত্বপূর্ণ</li>
              <li>NAND = AND + NOT → De Morgan দিয়ে: A' + B'</li>
            </ul>
          </div>
        </div>

        {/* Quiz */}
        <div style={{background:"#fff",border:"2px solid #059669",borderRadius:"1rem",padding:"2rem",boxShadow:"0 4px 12px rgba(5,150,105,0.12)"}}>
          <h2 style={{...h2s,color:"#047857",borderBottomColor:"#bbf7d0"}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <BooleanAlgebraQuiz />
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/logic-gates" style={{color:"#059669",fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← লজিক গেট</Link>
          <Link href="/demo/half-full-adder" style={{color:"#059669",fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>হাফ অ্যাডার →</Link>
        </div>
      </div>
    </div>
  );
}
