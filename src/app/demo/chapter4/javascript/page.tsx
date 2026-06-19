import JavaScriptQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "JavaScript পরিচিতি — HSC ICT অধ্যায় ৪.৪ | EduSocial BD" };
const C="#ca8a04",BG="#fefce8",BR="#fef08a";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const para:React.CSSProperties={color:"#475569",lineHeight:1.8,margin:0,fontSize:"0.95rem"};
const code:React.CSSProperties={fontFamily:"'Courier New',monospace",background:"#1e293b",color:"#e2e8f0",borderRadius:"0.625rem",padding:"1rem 1.25rem",display:"block",overflowX:"auto",fontSize:"0.85rem",lineHeight:1.9};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem"};
export default function JavaScriptPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter4" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৪</Link>
          <span style={{color:BR}}>|</span><Link href="/demo/chapter4/css" style={{color:C,textDecoration:"none"}}>CSS</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>JavaScript</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৪.৪</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>JavaScript পরিচিতি</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>ওয়েব পেজকে interactive করার scripting ভাষা</p>
        </div>
        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          <div style={{background:"#f0f9ff",border:"1px solid #bae6fd",borderRadius:"0.75rem",padding:"1rem 1.25rem",marginBottom:"1.25rem"}}>
            <p style={{...para,fontSize:"0.9rem",margin:0}}>
              <strong>HTML</strong> দেয় কাঠামো → <strong>CSS</strong> দেয় সৌন্দর্য → <strong>JavaScript</strong> দেয় প্রাণ।
              JavaScript দিয়ে পেজে গণনা, ভ্যালিডেশন, অ্যানিমেশন, ব্যবহারকারীর ইনপুটে সাড়া দেওয়া সহ অনেক কিছু করা যায়।
            </p>
          </div>

          <h3 style={h3s}>Variable ও Data Types</h3>
          <pre style={code}>{`// ভেরিয়েবল ঘোষণা
var name = "রাফিয়া";      // পুরনো পদ্ধতি
let age = 17;              // পরিবর্তনযোগ্য
const school = "ঢাকা কলেজ"; // পরিবর্তন হবে না

// Data Types
let num = 42;          // Number
let text = "হ্যালো";   // String
let flag = true;       // Boolean
let arr = [1, 2, 3];   // Array
let obj = {           // Object
  name: "রাফিয়া",
  age: 17
};`}</pre>

          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"360px"}}>
              <thead><tr><th style={th}>Data Type</th><th style={th}>উদাহরণ</th><th style={th}>বিবরণ</th></tr></thead>
              <tbody>
                {[["Number","42, 3.14","সংখ্যা (পূর্ণ বা দশমিক)"],["String","'হ্যালো'","টেক্সট (উদ্ধৃতিচিহ্নে)"],["Boolean","true / false","সত্য বা মিথ্যা"],["Array","[1, 2, 3]","একাধিক মানের তালিকা"],["Object","{name: 'x'}","key-value জোড়া"],["undefined","let x;","মান দেওয়া হয়নি"],["null","let x = null;","ইচ্ছাকৃতভাবে খালি"]].map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>{r.map((c,j)=><td key={j} style={{...td,fontFamily:j<=1?"monospace":"inherit",fontWeight:j===0?600:400,color:j===0?"#ca8a04":"#374151"}}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={h3s}>Operators</h3>
          <pre style={code}>{`let a = 10, b = 3;

// Arithmetic (গাণিতিক)
a + b  // 13   | a - b  // 7
a * b  // 30   | a / b  // 3.33
a % b  // 1    (ভাগশেষ)

// Comparison (তুলনা)
a == b   // false  | a != b  // true
a > b    // true   | a < b   // false
a === b  // false  (value + type উভয় চেক)

// Logical (লজিক্যাল)
true && false  // false (AND)
true || false  // true  (OR)
!true          // false (NOT)`}</pre>

          <h3 style={h3s}>Conditional Statement</h3>
          <pre style={code}>{`let marks = 75;

if (marks >= 80) {
  document.write("A+");
} else if (marks >= 70) {
  document.write("A");    // এটি চলবে
} else if (marks >= 60) {
  document.write("A-");
} else {
  document.write("B বা নিচে");
}`}</pre>

          <h3 style={h3s}>Loop</h3>
          <pre style={code}>{`// for loop
for (let i = 1; i <= 5; i++) {
  document.write(i + " ");  // 1 2 3 4 5
}

// while loop
let i = 1;
while (i <= 3) {
  document.write("ধাপ " + i + " ");
  i++;
}`}</pre>

          <h3 style={h3s}>Function</h3>
          <pre style={code}>{`// ফাংশন তৈরি
function greet(name) {
  return "স্বাগতম, " + name + "!";
}

// ফাংশন কল
let msg = greet("আরিফ");
document.write(msg);  // স্বাগতম, আরিফ!`}</pre>

          <h3 style={h3s}>Events ও DOM</h3>
          <pre style={code}>{`<!-- HTML -->
<button onclick="changeColor()">রঙ বদলাও</button>
<p id="myPara">এটি একটি অনুচ্ছেদ।</p>

<!-- JavaScript -->
<script>
function changeColor() {
  // DOM থেকে উপাদান খুঁজে বের করা
  let para = document.getElementById("myPara");

  // স্টাইল পরিবর্তন
  para.style.color = "red";
  para.innerHTML = "রঙ বদলে গেছে!";
}
</script>`}</pre>

          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <div style={{fontWeight:700,color:"#0f172a",marginBottom:"0.5rem",fontSize:"0.875rem"}}>গুরুত্বপূর্ণ Events:</div>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"380px"}}>
              <thead><tr><th style={th}>Event</th><th style={th}>কখন ঘটে</th><th style={th}>HTML উদাহরণ</th></tr></thead>
              <tbody>
                {[["onclick","ক্লিক করলে","<button onclick='f()'>"],["onmouseover","মাউস উপরে গেলে","<div onmouseover='f()'>"],["onmouseout","মাউস সরলে","<div onmouseout='f()'>"],["onchange","মান পরিবর্তন হলে","<input onchange='f()'>"],["onload","পেজ লোড হলে","<body onload='f()'>"],["onkeypress","কী চাপলে","<input onkeypress='f()'>"]].map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>{r.map((c,j)=><td key={j} style={{...td,fontFamily:j!==1?"monospace":"inherit",fontWeight:j===0?600:400,color:j===0?"#ca8a04":"#374151"}}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.25rem",lineHeight:2,color:"#1e293b",fontSize:"0.9rem"}}>
              <li>var (global), let (block), const (পরিবর্তন অসম্ভব)</li>
              <li>DOM = Document Object Model</li>
              <li>document.getElementById('id') — ID দিয়ে উপাদান খোঁজে</li>
              <li>onclick, onmouseover — প্রধান Event</li>
              <li>JavaScript &lt;script&gt; ট্যাগে লেখা হয়</li>
            </ul>
          </div>
        </div>
        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#a16207",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <JavaScriptQuiz />
        </div>

        {/* completion + textbook quiz nudge */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginTop:"2rem"}}>
          <Link href="/demo/chapter4/textbook-quiz" style={{textDecoration:"none"}}>
            <div style={{background:"#0f172a",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center",cursor:"pointer"}}>
              <div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>📝</div>
              <div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ</div>
              <div style={{color:"#94a3b8",fontSize:"0.78rem",marginTop:"0.2rem"}}>Chapter শেষের অনুশীলনী</div>
            </div>
          </Link>
          <Link href="/demo/chapter4" style={{textDecoration:"none"}}>
            <div style={{background:"#1e3a5f",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center",cursor:"pointer"}}>
              <div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>🗂️</div>
              <div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>অধ্যায় ৪ সূচি</div>
              <div style={{color:"#94a3b8",fontSize:"0.78rem",marginTop:"0.2rem"}}>সব বিষয় দেখুন</div>
            </div>
          </Link>
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.5rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter4/css" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← CSS</Link>
          <Link href="/demo/chapter4/textbook-quiz" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ →</Link>
        </div>
      </div>
    </div>
  );
}
