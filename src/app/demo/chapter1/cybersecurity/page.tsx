import CybersecurityQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "সাইবার নিরাপত্তা — HSC ICT অধ্যায় ১.৫ | EduSocial BD" };
const C="#ca8a04",BG="#fefce8",BR="#fef08a";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151"};
export default function CybersecurityPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter1" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ১</Link>
          <span style={{color:BR}}>|</span>
          <Link href="/demo/chapter1/ethics-society" style={{color:C,textDecoration:"none"}}>নৈতিকতা</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>সাইবার নিরাপত্তা</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ১.৫</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>সাইবার নিরাপত্তা</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>Hacking, Malware, Phishing, Firewall, Encryption — সাইবার অপরাধ ও সুরক্ষা</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          <h3 style={h3s}>হ্যাকার (Hacker) ও হ্যাকিং</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:"0.75rem",margin:"0.75rem 0 1.5rem"}}>
            {[
              ["⚪","White Hat","নৈতিক হ্যাকার — অনুমতি নিয়ে নিরাপত্তা পরীক্ষা করে, দুর্বলতা ঠিক করে","#16a34a"],
              ["⚫","Black Hat","অপরাধী হ্যাকার — ক্ষতি করে, তথ্য চুরি করে, সিস্টেম নষ্ট করে","#1e293b"],
              ["🔘","Grey Hat","মাঝামাঝি — কখনো নৈতিক, কখনো অনৈতিক","#64748b"],
            ].map(([ic,t,d,c])=>(
              <div key={t} style={{background:"#f8fafc",border:`1.5px solid ${c}30`,borderTop:`3px solid ${c}`,borderRadius:"0.625rem",padding:"0.875rem",textAlign:"center"}}>
                <div style={{fontSize:"1.5rem"}}>{ic}</div>
                <div style={{fontWeight:700,color:c,fontSize:"0.85rem",margin:"0.25rem 0"}}>{t} Hacker</div>
                <div style={{color:"#64748b",fontSize:"0.75rem",lineHeight:1.5}}>{d}</div>
              </div>
            ))}
          </div>

          <h3 style={h3s}>Malware-এর ধরন</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"400px"}}>
              <thead><tr><th style={th}>ধরন</th><th style={th}>কীভাবে ছড়ায়</th><th style={th}>ক্ষতি</th></tr></thead>
              <tbody>
                {[
                  ["🦠 Virus","অন্য প্রোগ্রামে সংযুক্ত","ফাইল নষ্ট করে","#dc2626"],
                  ["🪱 Worm","নিজে নিজে নেটওয়ার্কে","ব্যান্ডউইথ নষ্ট করে","#d97706"],
                  ["🐴 Trojan","বৈধ সফটওয়্যার ভেবে ইনস্টল","পেছন দরজা খোলে","#7c3aed"],
                  ["🕵 Spyware","গোপনে ইনস্টল","তথ্য গোপনে পাচার করে","#0891b2"],
                  ["💰 Ransomware","ফিশিং, ইনফেক্টেড ফাইল","ফাইল লক করে মুক্তিপণ চায়","#dc2626"],
                  ["📢 Adware","ফ্রি সফটওয়্যারের সাথে","বিজ্ঞাপন দেখায়","#64748b"],
                ].map(([t,s,d,c],i)=>(
                  <tr key={t} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    <td style={{...td,fontWeight:700,color:c,fontSize:"0.82rem"}}>{t}</td>
                    <td style={td}>{s}</td>
                    <td style={td}>{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={h3s}>সাইবার আক্রমণের পদ্ধতি</h3>
          <div style={{display:"flex",flexDirection:"column",gap:"0.75rem",margin:"0.75rem 0 1.5rem"}}>
            {[
              {t:"Phishing",icon:"🎣",color:"#dc2626",desc:"ভুয়া ই-মেইল বা ওয়েবসাইট দিয়ে পাসওয়ার্ড ও ব্যাংক তথ্য চুরি।",ex:"ব্যাংক থেকে ভুয়া ই-মেইল পাঠানো হয় — 'আপনার অ্যাকাউন্ট ব্লক হয়ে যাবে, এখানে লগইন করুন'"},
              {t:"Spam",icon:"📧",color:"#d97706",desc:"অবাঞ্ছিত বিজ্ঞাপন বা প্রতারণামূলক বার্তা যা বহু মানুষকে পাঠানো হয়।",ex:"'আপনি পুরস্কার জিতেছেন!' — এই ধরনের ই-মেইল"},
              {t:"DDoS Attack",icon:"💥",color:"#7c3aed",desc:"Distributed Denial of Service — সার্ভারে একসাথে লক্ষ লক্ষ অনুরোধ পাঠিয়ে অচল করে।",ex:"ব্যাংকের ওয়েবসাইট বন্ধ করে দেওয়া"},
              {t:"SQL Injection",icon:"💉",color:"#0284c7",desc:"ডেটাবেজ কুয়েরিতে ক্ষতিকর কোড ঢুকিয়ে ডেটা চুরি বা পরিবর্তন।",ex:"লগইন ফর্মে বিশেষ SQL কোড লিখলে যাচাই ছাড়া প্রবেশ"},
            ].map(a=>(
              <div key={a.t} style={{background:"#f8fafc",border:`1.5px solid ${a.color}20`,borderLeft:`4px solid ${a.color}`,borderRadius:"0.75rem",padding:"1rem"}}>
                <div style={{fontWeight:700,color:a.color,marginBottom:"0.35rem"}}>{a.icon} {a.t}</div>
                <p style={{color:"#475569",fontSize:"0.875rem",margin:"0 0 0.35rem",lineHeight:1.6}}>{a.desc}</p>
                <div style={{fontSize:"0.78rem",color:"#64748b",fontStyle:"italic"}}>উদাহরণ: {a.ex}</div>
              </div>
            ))}
          </div>

          <h3 style={h3s}>সাইবার সুরক্ষার উপায়</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:"0.75rem",margin:"0.75rem 0 1.5rem"}}>
            {[
              ["🛡","Firewall","অননুমোদিত নেটওয়ার্ক ট্র্যাফিক ব্লক করে","#0284c7"],
              ["🔒","Encryption","ডেটা কোডে রূপান্তর — অপঠনযোগ্য করে","#7c3aed"],
              ["🦺","Antivirus","Malware সনাক্ত ও অপসারণ করে","#16a34a"],
              ["🔑","Strong Password","দীর্ঘ ও জটিল পাসওয়ার্ড ব্যবহার","#dc2626"],
              ["📲","2FA","দ্বিতীয় যাচাই স্তর — OTP, Authenticator","#ca8a04"],
              ["🔄","Backup","নিয়মিত ডেটা ব্যাকআপ রাখা","#0891b2"],
            ].map(([ic,t,d,c])=>(
              <div key={t} style={{background:"#f8fafc",border:`1.5px solid ${c}30`,borderTop:`3px solid ${c}`,borderRadius:"0.625rem",padding:"0.75rem",textAlign:"center"}}>
                <div style={{fontSize:"1.25rem"}}>{ic}</div>
                <div style={{fontWeight:700,color:c,fontSize:"0.8rem",margin:"0.25rem 0"}}>{t}</div>
                <div style={{color:"#64748b",fontSize:"0.72rem",lineHeight:1.4}}>{d}</div>
              </div>
            ))}
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.1rem",lineHeight:2,color:"#1e293b",fontSize:"0.875rem"}}>
              <li>White Hat = নৈতিক | Black Hat = অপরাধী হ্যাকার</li>
              <li>Virus ≠ Worm: Virus হোস্ট প্রোগ্রাম চায়; Worm নিজেই ছড়ায়</li>
              <li>Phishing = ভুয়া ই-মেইল/ওয়েবসাইটে তথ্য চুরি</li>
              <li>Ransomware = ফাইল লক + মুক্তিপণ দাবি</li>
              <li>Firewall = নেটওয়ার্ক সুরক্ষা | Antivirus = Malware সরানো</li>
              <li>Encryption = ডেটা কোডে রূপান্তর (HTTPS ব্যবহার করে)</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#92400e",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <CybersecurityQuiz />
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginTop:"2rem"}}>
          <Link href="/demo/chapter1/textbook-quiz" style={{textDecoration:"none"}}>
            <div style={{background:"#0f172a",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}>
              <div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>📝</div>
              <div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ</div>
              <div style={{color:"#94a3b8",fontSize:"0.78rem",marginTop:"0.2rem"}}>Chapter শেষের অনুশীলনী</div>
            </div>
          </Link>
          <Link href="/demo/chapter1" style={{textDecoration:"none"}}>
            <div style={{background:"#1e3a5f",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}>
              <div style={{fontSize:"1.5rem",marginBottom:"0.4rem"}}>🗂️</div>
              <div style={{fontWeight:700,color:"#f1f5f9",fontSize:"0.9rem"}}>অধ্যায় ১ সূচি</div>
              <div style={{color:"#94a3b8",fontSize:"0.78rem",marginTop:"0.2rem"}}>সব বিষয় দেখুন</div>
            </div>
          </Link>
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.5rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter1/ethics-society" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← নৈতিকতা ও সামাজিক প্রভাব</Link>
          <Link href="/demo/chapter1/textbook-quiz" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>পাঠ্যবইয়ের কুইজ →</Link>
        </div>
      </div>
    </div>
  );
}
