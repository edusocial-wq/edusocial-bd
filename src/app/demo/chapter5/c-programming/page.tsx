import CProgrammingQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "C প্রোগ্রামিং — HSC ICT অধ্যায় ৫.৩ | EduSocial BD" };
const C="#16a34a",BG="#f0fdf4",BR="#bbf7d0";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const para:React.CSSProperties={color:"#475569",lineHeight:1.8,margin:0,fontSize:"0.95rem"};
const code:React.CSSProperties={fontFamily:"'Courier New',monospace",background:"#1e293b",color:"#e2e8f0",borderRadius:"0.625rem",padding:"1rem 1.25rem",display:"block",overflowX:"auto",fontSize:"0.85rem",lineHeight:1.9};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem"};
export default function CProgrammingPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter5" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৫</Link>
          <span style={{color:BR}}>|</span>
          <Link href="/demo/chapter5/program-design" style={{color:C,textDecoration:"none"}}>ডিজাইন টুলস</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>C প্রোগ্রামিং</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৫.৩</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>C প্রোগ্রামিং</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>Dennis Ritchie রচিত শক্তিশালী উচ্চস্তরের প্রোগ্রামিং ভাষা</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          <div style={{background:"#f0f9ff",border:"1px solid #bae6fd",borderRadius:"0.75rem",padding:"1rem 1.25rem",marginBottom:"1.25rem"}}>
            <p style={{...para,margin:0,fontSize:"0.9rem"}}>
              C ভাষা ১৯৭২ সালে <strong>Dennis Ritchie</strong> Bell Labs-এ তৈরি করেন।
              এটি System Programming-এর জন্য বিখ্যাত — UNIX OS এই ভাষায় লেখা হয়েছিল।
              C-কে "Mother Language" বলা হয় কারণ C++, Java, Python সহ অনেক ভাষা C থেকে অনুপ্রাণিত।
            </p>
          </div>

          <h3 style={h3s}>C প্রোগ্রামের মূল কাঠামো</h3>
          <pre style={code}>{`#include <stdio.h>   /* হেডার ফাইল — printf/scanf এখানে */

int main() {          /* প্রোগ্রামের শুরু main() থেকে */
    int a, b, sum;    /* ভেরিয়েবল ঘোষণা */

    printf("দুটি সংখ্যা দিন: ");
    scanf("%d %d", &a, &b);  /* ইনপুট নেওয়া */

    sum = a + b;      /* গণনা */
    printf("যোগফল = %d\\n", sum);  /* আউটপুট */

    return 0;         /* main শেষ */
}`}</pre>

          <h3 style={h3s}>ডেটা টাইপ</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"380px"}}>
              <thead><tr><th style={th}>Data Type</th><th style={th}>কাজ</th><th style={th}>আকার</th><th style={th}>উদাহরণ</th></tr></thead>
              <tbody>
                {[
                  ["int","পূর্ণসংখ্যা","4 byte","int age = 17;"],
                  ["float","দশমিক সংখ্যা","4 byte","float pi = 3.14;"],
                  ["double","বড় দশমিক","8 byte","double x = 3.14159;"],
                  ["char","একটি অক্ষর","1 byte","char grade = 'A';"],
                  ["void","কোনো মান নেই","0","void show() { }"],
                ].map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>{r.map((c,j)=><td key={j} style={{...td,fontFamily:j===0||j===3?"monospace":"inherit",fontWeight:j===0?700:400,color:j===0?C:"#374151"}}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={h3s}>Format Specifier</h3>
          <div style={{display:"flex",flexWrap:"wrap",gap:"0.5rem",margin:"0.75rem 0 1.5rem"}}>
            {[["%d","int"],  ["%f","float"], ["%lf","double"], ["%c","char"], ["%s","string"], ["%ld","long int"]].map(([sp,t])=>(
              <div key={sp} style={{background:"#1e293b",color:"#e2e8f0",borderRadius:"0.5rem",padding:"0.4rem 0.75rem",fontFamily:"monospace",fontSize:"0.85rem",display:"flex",gap:"0.5rem",alignItems:"center"}}>
                <span style={{color:"#4ade80",fontWeight:700}}>{sp}</span>
                <span style={{color:"#94a3b8",fontSize:"0.75rem"}}>→ {t}</span>
              </div>
            ))}
          </div>

          <h3 style={h3s}>অপারেটর (Operators)</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"360px"}}>
              <thead><tr><th style={th}>ধরন</th><th style={th}>চিহ্ন</th><th style={th}>উদাহরণ</th></tr></thead>
              <tbody>
                {[
                  ["Arithmetic","+ - * / %","a + b, a % b"],
                  ["Relational","== != > < >= <=","a == b, a > b"],
                  ["Logical","&& || !","(a>0) && (b>0)"],
                  ["Assignment","= += -= *= /=","a = 5, a += 3"],
                  ["Increment/Decrement","++ --","a++, --b"],
                ].map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>{r.map((c,j)=><td key={j} style={{...td,fontFamily:j===1||j===2?"monospace":"inherit",fontWeight:j===0?600:400,color:j===0?C:"#374151"}}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={h3s}>শর্তমূলক বিবৃতি (Conditional)</h3>
          <pre style={code}>{`/* if-else */
if (marks >= 80) {
    printf("A+");
} else if (marks >= 70) {
    printf("A");
} else {
    printf("B বা নিচে");
}

/* switch-case */
switch (day) {
    case 1: printf("শনিবার"); break;
    case 2: printf("রবিবার"); break;
    default: printf("অন্য দিন");
}`}</pre>

          <h3 style={h3s}>লুপ (Loop)</h3>
          <pre style={code}>{`/* for loop — সংখ্যা নির্দিষ্ট হলে */
for (int i = 1; i <= 5; i++) {
    printf("%d ", i);   /* আউটপুট: 1 2 3 4 5 */
}

/* while loop — শর্ত নির্ভর */
int i = 1;
while (i <= 3) {
    printf("ধাপ %d\\n", i);
    i++;
}

/* do-while — কমপক্ষে ১ বার চলবে */
do {
    printf("একবার হলেও চলবে");
} while (0);`}</pre>

          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"360px"}}>
              <thead><tr><th style={th}>লুপ</th><th style={th}>কখন ব্যবহার</th><th style={th}>বৈশিষ্ট্য</th></tr></thead>
              <tbody>
                {[
                  ["for","পুনরাবৃত্তি সংখ্যা জানা","init, condition, update এক লাইনে"],
                  ["while","শর্ত নির্ভর","শুরুতে শর্ত চেক — 0 বার চলতে পারে"],
                  ["do-while","কমপক্ষে ১ বার চাই","শেষে শর্ত চেক — অন্তত ১ বার চলে"],
                ].map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>{r.map((c,j)=><td key={j} style={{...td,fontFamily:j===0?"monospace":"inherit",fontWeight:j===0?700:400,color:j===0?C:"#374151"}}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={h3s}>ফাংশন (Function)</h3>
          <pre style={code}>{`/* ফাংশন সংজ্ঞা */
int add(int a, int b) {
    return a + b;   /* মান ফেরত দেওয়া */
}

int main() {
    int result = add(5, 3);  /* ফাংশন কল */
    printf("যোগফল = %d", result);  /* যোগফল = 8 */
    return 0;
}`}</pre>

          <h3 style={h3s}>Array</h3>
          <pre style={code}>{`/* একমাত্রিক Array */
int marks[5] = {85, 72, 90, 68, 75};
printf("%d", marks[0]);   /* 85 — সূচক শুরু 0 থেকে */
printf("%d", marks[4]);   /* 75 — শেষ উপাদান */

/* দ্বিমাত্রিক Array (2D) */
int matrix[2][3] = {{1,2,3},{4,5,6}};
printf("%d", matrix[1][2]);  /* 6 */`}</pre>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem",marginTop:"1rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.25rem",lineHeight:2,color:"#1e293b",fontSize:"0.9rem"}}>
              <li>C প্রোগ্রাম শুরু: #include &lt;stdio.h&gt; → main()</li>
              <li>printf = আউটপুট | scanf = ইনপুট (& চিহ্ন দিতে হয়)</li>
              <li>%d=int, %f=float, %c=char</li>
              <li>Array-এর সূচক (index) শুরু হয় 0 থেকে</li>
              <li>for লুপ: for(init; condition; update)</li>
              <li>do-while কমপক্ষে একবার চলে</li>
              <li>C-র জনক: Dennis Ritchie, ১৯৭২, Bell Labs</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#15803d",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <CProgrammingQuiz />
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginTop:"2rem"}}>
          <Link href="/demo/chapter5/textbook-quiz" style={{textDecoration:"none"}}>
            <div style={{background:"#0f172a",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}>
              <div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>📝</div>
              <div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ</div>
              <div style={{color:"#94a3b8",fontSize:"0.78rem",marginTop:"0.2rem"}}>Chapter শেষের অনুশীলনী</div>
            </div>
          </Link>
          <Link href="/demo/chapter5" style={{textDecoration:"none"}}>
            <div style={{background:"#1e3a5f",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}>
              <div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>🗂️</div>
              <div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>অধ্যায় ৫ সূচি</div>
              <div style={{color:"#94a3b8",fontSize:"0.78rem",marginTop:"0.2rem"}}>সব বিষয় দেখুন</div>
            </div>
          </Link>
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.5rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter5/program-design" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← প্রোগ্রাম ডিজাইন</Link>
          <Link href="/demo/chapter5/textbook-quiz" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ →</Link>
        </div>
      </div>
    </div>
  );
}
