import InternetProtocolQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "ইন্টারনেট ও প্রোটোকল — HSC ICT অধ্যায় ২.৫ | EduSocial BD" };
const C="#ca8a04",BG="#fefce8",BR="#fef08a";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151"};
const code:React.CSSProperties={fontFamily:"'Courier New',monospace",background:"#1e293b",color:"#e2e8f0",borderRadius:"0.625rem",padding:"1rem 1.25rem",display:"block",overflowX:"auto",fontSize:"0.85rem",lineHeight:1.9};
export default function InternetProtocolPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter2" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ২</Link>
          <span style={{color:BR}}>|</span>
          <Link href="/demo/chapter2/network-types" style={{color:C,textDecoration:"none"}}>নেটওয়ার্কের ধরন</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>ইন্টারনেট ও প্রোটোকল</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ২.৫</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>ইন্টারনেট ও প্রোটোকল</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>TCP/IP, IP Address, DNS, HTTP, FTP — ইন্টারনেটের মূল ধারণা</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          <h3 style={h3s}>TCP/IP প্রোটোকল</h3>
          <p style={{color:"#475569",lineHeight:1.8,margin:"0 0 1rem",fontSize:"0.9rem"}}>
            TCP/IP হলো ইন্টারনেটের মূল প্রোটোকল। এটি দুটি পৃথক প্রোটোকলের সমন্বয়:
          </p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",margin:"0 0 1.5rem"}}>
            <div style={{background:"#f0f9ff",border:"1.5px solid #bae6fd",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#0284c7",marginBottom:"0.375rem"}}>TCP</div>
              <div style={{fontSize:"0.8rem",color:"#475569",marginBottom:"0.375rem"}}>Transmission Control Protocol</div>
              <ul style={{margin:0,paddingLeft:"1rem",color:"#475569",fontSize:"0.8rem",lineHeight:1.8}}>
                <li>ডেটা প্যাকেটে ভাগ করে</li>
                <li>ডেটা সঠিকভাবে পৌঁছায় কিনা নিশ্চিত করে</li>
                <li>ত্রুটি পেলে পুনরায় পাঠায়</li>
              </ul>
            </div>
            <div style={{background:"#f0fdf4",border:"1.5px solid #bbf7d0",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#16a34a",marginBottom:"0.375rem"}}>IP</div>
              <div style={{fontSize:"0.8rem",color:"#475569",marginBottom:"0.375rem"}}>Internet Protocol</div>
              <ul style={{margin:0,paddingLeft:"1rem",color:"#475569",fontSize:"0.8rem",lineHeight:1.8}}>
                <li>প্রতিটি ডিভাইসকে Address দেয়</li>
                <li>সঠিক গন্তব্যে পাঠায়</li>
                <li>Router ব্যবহার করে পথ নির্ধারণ করে</li>
              </ul>
            </div>
          </div>

          <h3 style={h3s}>IP Address</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{background:"#fef2f2",border:"1.5px solid #fecaca",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#dc2626",marginBottom:"0.35rem"}}>IPv4</div>
              <div style={{fontFamily:"monospace",color:"#dc2626",fontSize:"0.9rem",marginBottom:"0.35rem"}}>192.168.1.100</div>
              <ul style={{margin:0,paddingLeft:"1rem",color:"#475569",fontSize:"0.8rem",lineHeight:1.8}}>
                <li>৩২ বিট</li>
                <li>৪টি অক্টেট (0-255)</li>
                <li>মোট: ~৪.৩ বিলিয়ন</li>
                <li>প্রায় শেষ হয়ে গেছে</li>
              </ul>
            </div>
            <div style={{background:"#f5f3ff",border:"1.5px solid #ddd6fe",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#7c3aed",marginBottom:"0.35rem"}}>IPv6</div>
              <div style={{fontFamily:"monospace",color:"#7c3aed",fontSize:"0.75rem",marginBottom:"0.35rem",wordBreak:"break-all"}}>2001:0db8:85a3::8a2e:0370:7334</div>
              <ul style={{margin:0,paddingLeft:"1rem",color:"#475569",fontSize:"0.8rem",lineHeight:1.8}}>
                <li>১২৮ বিট</li>
                <li>হেক্সাডেসিমেল</li>
                <li>মোট: ৩.৪ × ১০³⁸</li>
                <li>ভবিষ্যতের সমাধান</li>
              </ul>
            </div>
          </div>

          <h3 style={h3s}>গুরুত্বপূর্ণ প্রোটোকলসমূহ</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"420px"}}>
              <thead><tr>
                <th style={th}>প্রোটোকল</th><th style={th}>পূর্ণ নাম</th><th style={th}>Port</th><th style={th}>কাজ</th>
              </tr></thead>
              <tbody>
                {[
                  ["HTTP","HyperText Transfer Protocol","80","ওয়েব পেজ ব্রাউজিং","#0284c7"],
                  ["HTTPS","HTTP Secure","443","নিরাপদ ওয়েব ব্রাউজিং","#16a34a"],
                  ["FTP","File Transfer Protocol","21","ফাইল আপলোড/ডাউনলোড","#7c3aed"],
                  ["SMTP","Simple Mail Transfer Protocol","25","ইমেইল পাঠানো","#ca8a04"],
                  ["POP3","Post Office Protocol v3","110","ইমেইল ডাউনলোড","#0891b2"],
                  ["DNS","Domain Name System","53","Domain → IP রূপান্তর","#dc2626"],
                  ["SSH","Secure Shell","22","নিরাপদ রিমোট সংযোগ","#16a34a"],
                ].map((r,i)=>(
                  <tr key={r[0]} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    <td style={{...td,fontFamily:"monospace",fontWeight:700,color:r[4]}}>{r[0]}</td>
                    <td style={td}>{r[1]}</td>
                    <td style={{...td,fontFamily:"monospace",color:"#64748b"}}>{r[2]}</td>
                    <td style={td}>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={h3s}>DNS কীভাবে কাজ করে?</h3>
          <div style={{background:"#f8fafc",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{fontWeight:700,color:"#1e293b",marginBottom:"0.75rem",fontSize:"0.875rem"}}>উদাহরণ: google.com খুললে কী হয়?</div>
            <pre style={code}>{`ব্যবহারকারী টাইপ করে: google.com
  ↓
Browser → DNS Server-কে জিজ্ঞেস করে
  ↓
DNS Server → IP Address পাঠায়: 142.250.183.14
  ↓
Browser → সেই IP Address-এ যোগাযোগ করে
  ↓
Google-এর সার্ভার → ওয়েব পেজ পাঠায়
  ↓
ব্যবহারকারী → Google-এর হোম পেজ দেখে`}</pre>
          </div>

          <h3 style={h3s}>গুরুত্বপূর্ণ ডিভাইস</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:"0.75rem",margin:"0.75rem 0 1.5rem"}}>
            {[
              ["🔀","Router","বিভিন্ন নেটওয়ার্কের মধ্যে ডেটা পাঠায়, সর্বোত্তম পথ নির্বাচন করে","#0284c7"],
              ["🔁","Switch","LAN-এর মধ্যে ডিভাইস সংযুক্ত করে, MAC Address ব্যবহার করে","#7c3aed"],
              ["📡","Modem","Analog ↔ Digital রূপান্তর, ISP-র সাথে সংযোগ","#ca8a04"],
              ["🌐","Gateway","দুটি ভিন্ন নেটওয়ার্ক সংযুক্ত করে, প্রোটোকল রূপান্তর","#16a34a"],
            ].map(([ic,t,d,c])=>(
              <div key={t} style={{background:"#f8fafc",border:`1.5px solid ${c}30`,borderTop:`3px solid ${c}`,borderRadius:"0.625rem",padding:"0.75rem"}}>
                <div style={{fontSize:"1.25rem"}}>{ic}</div>
                <div style={{fontWeight:700,color:c,fontSize:"0.85rem",margin:"0.25rem 0"}}>{t}</div>
                <div style={{color:"#64748b",fontSize:"0.75rem",lineHeight:1.5}}>{d}</div>
              </div>
            ))}
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.1rem",lineHeight:2,color:"#1e293b",fontSize:"0.875rem"}}>
              <li>TCP/IP = ইন্টারনেটের মূল প্রোটোকল</li>
              <li>IPv4 = ৩২ বিট | IPv6 = ১২৮ বিট</li>
              <li>DNS = Domain → IP (ফোনবুকের মতো)</li>
              <li>HTTP (80) = ওয়েব | HTTPS (443) = নিরাপদ ওয়েব</li>
              <li>FTP = ফাইল | SMTP = ইমেইল পাঠানো</li>
              <li>Modem = Analog↔Digital | Router = পথ নির্ধারণ</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#92400e",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <InternetProtocolQuiz />
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginTop:"2rem"}}>
          <Link href="/demo/chapter2/textbook-quiz" style={{textDecoration:"none"}}>
            <div style={{background:"#0f172a",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}>
              <div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>📝</div>
              <div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ</div>
              <div style={{color:"#94a3b8",fontSize:"0.78rem",marginTop:"0.2rem"}}>Chapter শেষের অনুশীলনী</div>
            </div>
          </Link>
          <Link href="/demo/chapter2" style={{textDecoration:"none"}}>
            <div style={{background:"#1e3a5f",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}>
              <div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>🗂️</div>
              <div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>অধ্যায় ২ সূচি</div>
              <div style={{color:"#94a3b8",fontSize:"0.78rem",marginTop:"0.2rem"}}>সব বিষয় দেখুন</div>
            </div>
          </Link>
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.5rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter2/network-types" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← নেটওয়ার্কের ধরন</Link>
          <Link href="/demo/chapter2/textbook-quiz" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ →</Link>
        </div>
      </div>
    </div>
  );
}
