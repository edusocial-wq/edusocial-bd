import WebIntroQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "ওয়েব ডিজাইনের ধারণা — HSC ICT অধ্যায় ৪ | EduSocial BD" };
const C="#0284c7", BG="#f0f9ff", BR="#bae6fd";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const para:React.CSSProperties={color:"#475569",lineHeight:1.8,margin:0,fontSize:"0.95rem"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem"};
export default function WebIntroPage() {
  return (
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter4" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৪</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>ওয়েব ডিজাইনের ধারণা</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৪.১</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>ওয়েব ডিজাইনের ধারণা</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>Web Design Concepts — ইন্টারনেট ও ওয়েবের মূল ধারণা</p>
        </div>
        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>
          <h3 style={h3s}>ওয়েব পেজ, ওয়েব সাইট ও ওয়েব পোর্টাল</h3>
          <p style={para}>ইন্টারনেটে প্রকাশিত প্রতিটি HTML ডকুমেন্টকে ওয়েব পেজ বলে। একাধিক সম্পর্কিত ওয়েব পেজ মিলে তৈরি হয় ওয়েব সাইট। ওয়েব পোর্টাল হলো এমন একটি বিশেষ সাইট যেখান থেকে বিভিন্ন ধরনের সেবা পাওয়া যায়।</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.75rem",margin:"0.75rem 0 1.5rem"}}>
            {[["🌐","ওয়েব পেজ","একটি একক HTML ডকুমেন্ট","#2563eb"],["🏠","ওয়েব সাইট","পরস্পর সংযুক্ত অনেক পেজ","#16a34a"],["🏛️","ওয়েব পোর্টাল","বিভিন্ন সেবার গেটওয়ে","#7c3aed"]].map(([i,n,d,c])=>(
              <div key={n} style={{background:"#f8fafc",border:`1.5px solid ${c}30`,borderRadius:"0.75rem",padding:"0.875rem",textAlign:"center"}}>
                <div style={{fontSize:"1.5rem"}}>{i}</div>
                <div style={{fontWeight:700,color:c,fontSize:"0.875rem",margin:"0.25rem 0"}}>{n}</div>
                <div style={{fontSize:"0.75rem",color:"#6b7280"}}>{d}</div>
              </div>
            ))}
          </div>

          <h3 style={h3s}>URL (Uniform Resource Locator)</h3>
          <p style={para}>URL হলো ইন্টারনেটে কোনো রিসোর্সের সম্পূর্ণ ঠিকানা। একটি URL-এর অংশগুলো:</p>
          <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 0.5rem",fontFamily:"monospace",fontSize:"0.9rem",overflowX:"auto"}}>
            <div style={{color:"#1e293b",lineHeight:2}}>
              <span style={{color:"#dc2626",fontWeight:700}}>https</span><span style={{color:"#6b7280"}}>://</span><span style={{color:"#2563eb",fontWeight:700}}>www.example.com</span><span style={{color:"#7c3aed",fontWeight:700}}>/path/page</span><span style={{color:"#d97706",fontWeight:700}}>?query=value</span>
            </div>
          </div>
          <div style={{overflowX:"auto",margin:"0.5rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.85rem",minWidth:"380px"}}>
              <thead><tr style={{background:"#f1f5f9"}}>{["অংশ","উদাহরণ","বিবরণ"].map(h=><th key={h} style={{...td,fontWeight:700,color:"#475569",textAlign:"left"}}>{h}</th>)}</tr></thead>
              <tbody>
                {[["Protocol","https://","ডেটা আদান-প্রদানের নিয়ম"],["Domain Name","www.example.com","সার্ভারের নাম"],["Path","/path/page","সার্ভারে ফাইলের অবস্থান"],["Query String","?query=value","অতিরিক্ত তথ্য পাঠানো"]].map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>{r.map((c,j)=><td key={j} style={{...td,fontFamily:j===1?"monospace":"inherit",fontWeight:j===0?600:400}}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={h3s}>HTTP ও HTTPS</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{background:"#fef2f2",border:"1.5px solid #fecaca",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#dc2626",marginBottom:"0.5rem"}}>HTTP</div>
              <p style={{...para,fontSize:"0.875rem"}}>HyperText Transfer Protocol। ওয়েব পেজ আদান-প্রদানের মানক প্রোটোকল। ডেটা এনক্রিপ্টেড নয়।</p>
            </div>
            <div style={{background:"#f0fdf4",border:"1.5px solid #bbf7d0",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#15803d",marginBottom:"0.5rem"}}>HTTPS 🔒</div>
              <p style={{...para,fontSize:"0.875rem"}}>HTTP Secure। SSL/TLS দিয়ে ডেটা এনক্রিপ্টেড। ব্যাংক, শপিং সাইটে ব্যবহার হয়।</p>
            </div>
          </div>

          <h3 style={h3s}>Domain Name ও DNS</h3>
          <p style={para}>সার্ভারের IP Address (যেমন: 142.250.80.14) মনে রাখা কঠিন। তাই সহজ নাম Domain Name (google.com) ব্যবহার হয়। DNS (Domain Name System) এই নামকে IP Address-এ রূপান্তর করে।</p>
          <div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:"0.75rem",padding:"1rem 1.25rem",margin:"0.75rem 0 1.5rem",fontFamily:"monospace",fontSize:"0.875rem",color:"#1e293b",lineHeight:2.2}}>
            <div>Browser → DNS: "google.com এর IP কী?"</div>
            <div>DNS → Browser: "142.250.80.14"</div>
            <div>Browser → Server (142.250.80.14): "HTTP GET /"</div>
            <div>Server → Browser: HTML ফাইল পাঠায়</div>
          </div>

          <h3 style={h3s}>Static vs Dynamic ওয়েব পেজ</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.25rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.875rem",minWidth:"380px"}}>
              <thead><tr style={{background:"#f1f5f9"}}>{["বৈশিষ্ট্য","Static","Dynamic"].map(h=><th key={h} style={{...td,fontWeight:700,color:"#475569"}}>{h}</th>)}</tr></thead>
              <tbody>
                {[["কনটেন্ট","সবার কাছে একই","ব্যবহারকারীভেদে আলাদা"],["ভাষা","HTML, CSS","PHP, Python, JS + Database"],["উদাহরণ","পোর্টফোলিও","Facebook, Gmail"],["সার্ভার লোড","কম","বেশি"]].map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>{r.map((c,j)=><td key={j} style={{...td,fontWeight:j===0?600:400,color:j===1?"#0369a1":j===2?"#059669":"#374151"}}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={h3s}>ওয়েব ব্রাউজার ও ওয়েব সার্ভার</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",margin:"0.75rem 0 1.25rem"}}>
            <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#0f172a",marginBottom:"0.4rem"}}>🌐 Web Browser</div>
              <p style={{...para,fontSize:"0.8rem",marginBottom:"0.5rem"}}>HTML পড়ে ব্যবহারকারীকে দেখায়</p>
              <div style={{fontSize:"0.78rem",color:"#6b7280"}}>Chrome · Firefox · Edge · Safari</div>
            </div>
            <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#0f172a",marginBottom:"0.4rem"}}>🖥️ Web Server</div>
              <p style={{...para,fontSize:"0.8rem",marginBottom:"0.5rem"}}>ফাইল সংরক্ষণ ও request-এ পাঠায়</p>
              <div style={{fontSize:"0.78rem",color:"#6b7280"}}>Apache · Nginx · IIS · Node.js</div>
            </div>
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.25rem",lineHeight:2,color:"#1e293b",fontSize:"0.9rem"}}>
              <li>URL = Uniform Resource Locator</li>
              <li>HTTP = HyperText Transfer Protocol</li>
              <li>HTTPS-এ S = Secure (SSL/TLS এনক্রিপশন)</li>
              <li>DNS Domain Name → IP রূপান্তর করে</li>
              <li>Static = একই কনটেন্ট; Dynamic = পরিবর্তনশীল</li>
            </ul>
          </div>
        </div>
        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#0369a1",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <WebIntroQuiz />
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter4" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← অধ্যায় ৪ সূচি</Link>
          <Link href="/demo/chapter4/html" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>HTML →</Link>
        </div>
      </div>
    </div>
  );
}
