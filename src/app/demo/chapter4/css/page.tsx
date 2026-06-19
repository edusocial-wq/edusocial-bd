import CSSQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "CSS — HSC ICT অধ্যায় ৪.৩ | EduSocial BD" };
const C="#7c3aed",BG="#f5f3ff",BR="#ddd6fe";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const para:React.CSSProperties={color:"#475569",lineHeight:1.8,margin:0,fontSize:"0.95rem"};
const code:React.CSSProperties={fontFamily:"'Courier New',monospace",background:"#1e293b",color:"#e2e8f0",borderRadius:"0.625rem",padding:"1rem 1.25rem",display:"block",overflowX:"auto",fontSize:"0.85rem",lineHeight:1.9};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem"};
export default function CSSPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter4" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৪</Link>
          <span style={{color:BR}}>|</span><Link href="/demo/chapter4/html" style={{color:C,textDecoration:"none"}}>HTML</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>CSS</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৪.৩</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>CSS</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>Cascading Style Sheets — ওয়েব পেজকে সুন্দর করার ভাষা</p>
        </div>
        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>
          <h3 style={h3s}>CSS কী?</h3>
          <p style={para}>CSS = Cascading Style Sheets। HTML যদি ওয়েব পেজের কঙ্কাল হয়, CSS হলো তার পোশাক ও সাজসজ্জা। CSS দিয়ে রঙ, ফন্ট, আকার, মার্জিন, সীমানা সহ পেজের সম্পূর্ণ চেহারা নিয়ন্ত্রণ করা হয়।</p>

          <h3 style={h3s}>CSS Syntax (গঠন)</h3>
          <pre style={code}>{`selector {
    property: value;
    property: value;
}`}</pre>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.75rem",margin:"0.75rem 0 1.5rem",fontSize:"0.8rem"}}>
            {[["Selector","কোন উপাদানে?","p, .class, #id","#dc2626"],["Property","কোন বৈশিষ্ট্য?","color, font-size","#2563eb"],["Value","কী মান?","red, 16px","#16a34a"]].map(([t,d,e,c])=>(<div key={t} style={{background:"#f8fafc",border:`1.5px solid ${c}30`,borderRadius:"0.5rem",padding:"0.75rem",textAlign:"center"}}><div style={{fontWeight:700,color:c}}>{t}</div><div style={{color:"#475569",fontSize:"0.78rem",margin:"0.2rem 0"}}>{d}</div><div style={{fontFamily:"monospace",fontSize:"0.78rem",color:"#64748b"}}>{e}</div></div>))}
          </div>

          <h3 style={h3s}>CSS Selectors</h3>
          <pre style={code}>{`/* Element Selector — সব <p> ট্যাগ */
p { color: blue; }

/* Class Selector — ডট দিয়ে */
.highlight { background-color: yellow; }

/* ID Selector — হ্যাশ দিয়ে */
#header { font-size: 24px; }

/* Universal Selector — সব উপাদান */
* { margin: 0; padding: 0; }

/* Group Selector — কমা দিয়ে */
h1, h2, h3 { font-family: Arial; }`}</pre>

          <h3 style={h3s}>তিন ধরনের CSS</h3>
          <div style={{display:"flex",flexDirection:"column",gap:"1rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{background:"#fef2f2",border:"1.5px solid #fecaca",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#b91c1c",marginBottom:"0.5rem"}}>1. Inline CSS</div>
              <pre style={{...code,margin:0,fontSize:"0.8rem",padding:"0.625rem"}}>{`<p style="color: red; font-size: 18px;">লাল লেখা</p>`}</pre>
              <div style={{fontSize:"0.8rem",color:"#6b7280",marginTop:"0.4rem"}}>সর্বোচ্চ Priority • শুধু সেই উপাদানে প্রযোজ্য</div>
            </div>
            <div style={{background:"#fffbeb",border:"1.5px solid #fde68a",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#b45309",marginBottom:"0.5rem"}}>2. Internal CSS</div>
              <pre style={{...code,margin:0,fontSize:"0.8rem",padding:"0.625rem"}}>{`<head>
  <style>
    p { color: green; }
    .box { border: 1px solid black; }
  </style>
</head>`}</pre>
              <div style={{fontSize:"0.8rem",color:"#6b7280",marginTop:"0.4rem"}}>মধ্যম Priority • ঐ HTML ফাইলেই সীমাবদ্ধ</div>
            </div>
            <div style={{background:"#f0fdf4",border:"1.5px solid #bbf7d0",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#15803d",marginBottom:"0.5rem"}}>3. External CSS</div>
              <pre style={{...code,margin:0,fontSize:"0.8rem",padding:"0.625rem"}}>{`<!-- HTML ফাইলে -->
<link rel="stylesheet" href="style.css">

/* style.css ফাইলে */
body { font-family: Arial; }
h1 { color: navy; }`}</pre>
              <div style={{fontSize:"0.8rem",color:"#6b7280",marginTop:"0.4rem"}}>সর্বনিম্ন Priority • সব পেজে শেয়ার করা যায় ✅</div>
            </div>
          </div>

          <h3 style={h3s}>গুরুত্বপূর্ণ CSS Properties</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"400px"}}>
              <thead><tr><th style={th}>Property</th><th style={th}>কাজ</th><th style={th}>উদাহরণ</th></tr></thead>
              <tbody>
                {[["color","টেক্সটের রঙ","color: red;"],["background-color","পটভূমির রঙ","background-color: #f0f0f0;"],["font-size","ফন্টের আকার","font-size: 16px;"],["font-family","ফন্টের ধরন","font-family: Arial;"],["font-weight","ফন্টের ভার","font-weight: bold;"],["margin","বাইরের ফাঁকা","margin: 10px;"],["padding","ভেতরের ফাঁকা","padding: 15px;"],["border","সীমানা","border: 1px solid black;"],["width/height","আকার","width: 300px;"],["text-align","টেক্সট সারিবদ্ধতা","text-align: center;"]].map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>{r.map((c,j)=><td key={j} style={{...td,fontFamily:j>=1?"monospace":"inherit",fontWeight:j===0?600:400,color:j===0?"#7c3aed":"#374151"}}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={h3s}>CSS Box Model</h3>
          <div style={{display:"flex",justifyContent:"center",margin:"0.75rem 0 1.5rem"}}>
            <div style={{position:"relative",background:"#f3f4f6",border:"2px dashed #94a3b8",padding:"1rem",borderRadius:"0.5rem",textAlign:"center",minWidth:"300px"}}>
              <div style={{fontSize:"0.75rem",color:"#64748b",position:"absolute",top:"0.25rem",left:"0.5rem"}}>Margin</div>
              <div style={{background:"#e0e7ff",border:"2px solid #6366f1",padding:"1rem",borderRadius:"0.375rem"}}>
                <div style={{fontSize:"0.75rem",color:"#4f46e5",marginBottom:"0.5rem"}}>Border</div>
                <div style={{background:"#dbeafe",padding:"0.75rem",borderRadius:"0.25rem"}}>
                  <div style={{fontSize:"0.75rem",color:"#1d4ed8",marginBottom:"0.5rem"}}>Padding</div>
                  <div style={{background:"#fff",border:"1px solid #93c5fd",padding:"0.5rem",borderRadius:"0.25rem",fontWeight:700,color:"#1e293b",fontSize:"0.875rem"}}>Content</div>
                </div>
              </div>
            </div>
          </div>
          <p style={{...para,fontSize:"0.875rem",marginBottom:"1.25rem"}}>
            <strong>Content</strong> → <strong>Padding</strong> (ভেতরের ফাঁকা) → <strong>Border</strong> (সীমানা রেখা) → <strong>Margin</strong> (বাইরের ফাঁকা)
          </p>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.25rem",lineHeight:2,color:"#1e293b",fontSize:"0.9rem"}}>
              <li>Class = . (ডট), ID = # (হ্যাশ)</li>
              <li>Priority: Inline {">"}  Internal {">"} External</li>
              <li>Box Model: Margin → Border → Padding → Content</li>
              <li>External CSS সবচেয়ে ভালো অনুশীলন (reusable)</li>
              <li>* = Universal Selector (সব উপাদান)</li>
            </ul>
          </div>
        </div>
        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#6d28d9",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <CSSQuiz />
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter4/html" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← HTML</Link>
          <Link href="/demo/chapter4/javascript" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>JavaScript →</Link>
        </div>
      </div>
    </div>
  );
}
