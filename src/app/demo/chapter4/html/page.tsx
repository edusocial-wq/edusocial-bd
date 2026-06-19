import HTMLQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "HTML — HSC ICT অধ্যায় ৪.২ | EduSocial BD" };
const C="#d97706",BG="#fffbeb",BR="#fde68a";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const para:React.CSSProperties={color:"#475569",lineHeight:1.8,margin:0,fontSize:"0.95rem"};
const code:React.CSSProperties={fontFamily:"'Courier New',monospace",background:"#1e293b",color:"#e2e8f0",borderRadius:"0.625rem",padding:"1rem 1.25rem",display:"block",overflowX:"auto",fontSize:"0.85rem",lineHeight:1.9};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem"};
function Tag({t,desc}:{t:string,desc:string}){return <tr><td style={{...td,fontFamily:"monospace",color:"#d97706",fontWeight:700}}>{t}</td><td style={td}>{desc}</td></tr>;}
export default function HTMLPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter4" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৪</Link>
          <span style={{color:BR}}>|</span><Link href="/demo/chapter4/web-intro" style={{color:C,textDecoration:"none"}}>ওয়েব ধারণা</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>HTML</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৪.২</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>HTML</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>HyperText Markup Language — ওয়েব পেজ তৈরির মূল ভাষা</p>
        </div>
        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>
          <h3 style={h3s}>HTML কী?</h3>
          <p style={para}>HTML = HyperText Markup Language। এটি একটি মার্কআপ ভাষা (প্রোগ্রামিং ভাষা নয়)। ট্যাগ ব্যবহার করে ওয়েব পেজের কনটেন্ট চিহ্নিত করা হয়। ব্রাউজার এই ট্যাগগুলো পড়ে পেজ প্রদর্শন করে।</p>

          <h3 style={h3s}>HTML-এর মূল গঠন</h3>
          <pre style={code}>{`<!DOCTYPE html>
<html lang="bn">
  <head>
    <meta charset="UTF-8">
    <title>পেজের শিরোনাম</title>
  </head>
  <body>
    <h1>স্বাগতম!</h1>
    <p>এটি একটি অনুচ্ছেদ।</p>
  </body>
</html>`}</pre>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:"0.625rem",margin:"0.75rem 0 1.5rem",fontSize:"0.8rem"}}>
            {[["<!DOCTYPE html>","HTML5 ডকুমেন্ট ঘোষণা","#dc2626"],["<html>","পুরো পেজ ধারণ করে","#2563eb"],["<head>","মেটাডেটা (দৃশ্যমান নয়)","#7c3aed"],["<body>","দৃশ্যমান কনটেন্ট","#16a34a"]].map(([t,d,c])=>(<div key={t} style={{background:"#f8fafc",border:`1.5px solid ${c}30`,borderRadius:"0.5rem",padding:"0.625rem"}}><div style={{fontFamily:"monospace",fontWeight:700,color:c,fontSize:"0.85rem"}}>{t}</div><div style={{color:"#475569",marginTop:"0.25rem"}}>{d}</div></div>))}
          </div>

          <h3 style={h3s}>টেক্সট ও ফরম্যাটিং ট্যাগ</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"360px"}}>
              <thead><tr><th style={th}>ট্যাগ</th><th style={th}>কাজ</th></tr></thead>
              <tbody>
                <Tag t="<h1>–<h6>" desc="শিরোনাম, h1 সবচেয়ে বড়" />
                <Tag t="<p>" desc="অনুচ্ছেদ (paragraph)" />
                <Tag t="<b> বা <strong>" desc="বোল্ড (গুরুত্বপূর্ণ) টেক্সট" />
                <Tag t="<i> বা <em>" desc="ইটালিক টেক্সট" />
                <Tag t="<u>" desc="আন্ডারলাইন টেক্সট" />
                <Tag t="<br>" desc="লাইন ব্রেক (self-closing)" />
                <Tag t="<hr>" desc="অনুভূমিক রেখা (self-closing)" />
                <Tag t="<span>" desc="ইনলাইন কনটেইনার" />
                <Tag t="<div>" desc="ব্লক কনটেইনার" />
              </tbody>
            </table>
          </div>

          <h3 style={h3s}>লিস্ট</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",margin:"0.75rem 0 1.5rem"}}>
            <div>
              <div style={{fontWeight:700,color:"#d97706",marginBottom:"0.4rem",fontSize:"0.875rem"}}>Unordered List (বুলেট)</div>
              <pre style={{...code,fontSize:"0.8rem",padding:"0.75rem"}}>{`<ul>
  <li>বাংলাদেশ</li>
  <li>ভারত</li>
  <li>নেপাল</li>
</ul>`}</pre>
            </div>
            <div>
              <div style={{fontWeight:700,color:"#2563eb",marginBottom:"0.4rem",fontSize:"0.875rem"}}>Ordered List (নম্বর)</div>
              <pre style={{...code,fontSize:"0.8rem",padding:"0.75rem"}}>{`<ol>
  <li>প্রথম ধাপ</li>
  <li>দ্বিতীয় ধাপ</li>
  <li>তৃতীয় ধাপ</li>
</ol>`}</pre>
            </div>
          </div>

          <h3 style={h3s}>লিংক ও ছবি</h3>
          <pre style={code}>{`<!-- হাইপারলিংক -->
<a href="https://www.google.com">গুগলে যান</a>

<!-- নতুন ট্যাবে খুলতে -->
<a href="https://www.google.com" target="_blank">নতুন ট্যাবে</a>

<!-- ছবি -->
<img src="photo.jpg" alt="আমার ছবি" width="300" height="200">`}</pre>

          <h3 style={h3s}>টেবিল</h3>
          <pre style={{...code,margin:"0.75rem 0 0.5rem"}}>{`<table border="1">
  <tr>
    <th>নাম</th>     <!-- হেডার সেল (বোল্ড) -->
    <th>বয়স</th>
  </tr>
  <tr>
    <td>আরিফ</td>   <!-- ডেটা সেল -->
    <td>১৭</td>
  </tr>
</table>`}</pre>
          <div style={{display:"flex",justifyContent:"center",margin:"0.75rem 0 1.5rem"}}>
            <table style={{borderCollapse:"collapse",fontSize:"0.875rem"}}>
              <tr><th style={{padding:"0.4rem 1rem",border:"1px solid #e2e8f0",background:"#f1f5f9",fontWeight:700}}>নাম</th><th style={{padding:"0.4rem 1rem",border:"1px solid #e2e8f0",background:"#f1f5f9",fontWeight:700}}>বয়স</th></tr>
              <tr><td style={{padding:"0.4rem 1rem",border:"1px solid #e2e8f0"}}>আরিফ</td><td style={{padding:"0.4rem 1rem",border:"1px solid #e2e8f0"}}>১৭</td></tr>
            </table>
          </div>

          <h3 style={h3s}>ফর্ম</h3>
          <pre style={code}>{`<form action="submit.php" method="post">
  <label>নাম:</label>
  <input type="text" name="name" placeholder="আপনার নাম">

  <label>ইমেইল:</label>
  <input type="email" name="email">

  <label>পাসওয়ার্ড:</label>
  <input type="password" name="pass">

  <button type="submit">জমা দিন</button>
</form>`}</pre>

          <h3 style={{...h3s,marginTop:"1.5rem"}}>গুরুত্বপূর্ণ Attribute সমূহ</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.25rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"380px"}}>
              <thead><tr><th style={th}>Attribute</th><th style={th}>ব্যবহার</th><th style={th}>উদাহরণ</th></tr></thead>
              <tbody>
                {[["href","লিংকের URL","<a href='url'>"],["src","ছবির সোর্স","<img src='pic.jpg'>"],["alt","ছবির বিকল্প টেক্সট","<img alt='বিবরণ'>"],["width/height","আকার নির্ধারণ","<img width='300'>"],["action","ফর্ম কোথায় যাবে","<form action='url'>"],["method","ফর্ম পাঠানোর পদ্ধতি","<form method='post'>"],["type","ইনপুটের ধরন","<input type='email'>"],["class/id","CSS/JS নির্বাচক","<div class='box'>"]].map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>{r.map((c,j)=><td key={j} style={{...td,fontFamily:j>=1?"monospace":"inherit",fontWeight:j===0?600:400,color:j===0?"#d97706":"#374151"}}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.25rem",lineHeight:2,color:"#1e293b",fontSize:"0.9rem"}}>
              <li>HTML = HyperText <strong>Markup</strong> Language (Programming Language নয়)</li>
              <li>লিংক: <code style={{background:"#fef3c7",padding:"0.1rem 0.3rem",borderRadius:"0.25rem",fontFamily:"monospace"}}>&lt;a href=""&gt;</code> | ছবি: <code style={{background:"#fef3c7",padding:"0.1rem 0.3rem",borderRadius:"0.25rem",fontFamily:"monospace"}}>&lt;img src=""&gt;</code></li>
              <li>tr = row, td = data cell, th = header cell</li>
              <li>ul = unordered, ol = ordered, li = list item</li>
              <li>br ও img self-closing tag (কোনো closing tag নেই)</li>
            </ul>
          </div>
        </div>
        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#b45309",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <HTMLQuiz />
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter4/web-intro" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← ওয়েব ডিজাইনের ধারণা</Link>
          <Link href="/demo/chapter4/css" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>CSS →</Link>
        </div>
      </div>
    </div>
  );
}
