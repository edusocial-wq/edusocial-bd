import GlobalVillageQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "বিশ্বগ্রাম — HSC ICT অধ্যায় ১.১ | EduSocial BD" };
const C="#0284c7",BG="#f0f9ff",BR="#bae6fd";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151"};
export default function GlobalVillagePage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter1" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ১</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>বিশ্বগ্রাম</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ১.১</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>বিশ্বগ্রাম</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>Global Village — ICT-র কারণে পৃথিবী একটি ছোট গ্রাম</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          <h3 style={h3s}>বিশ্বগ্রাম কী?</h3>
          <div style={{background:"#1e293b",color:"#e2e8f0",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.25rem",lineHeight:1.8,fontSize:"0.9rem"}}>
            <span style={{color:"#60a5fa",fontWeight:700}}>Marshall McLuhan</span> (কানাডিয়ান দার্শনিক) ১৯৬০-এর দশকে বিশ্বগ্রাম ধারণা প্রবর্তন করেন।
            তাঁর মতে, টেলিযোগাযোগ ও তথ্য প্রযুক্তির কারণে পৃথিবী একটি ছোট গ্রামের মতো হয়ে গেছে —
            যেখানে সবাই পরস্পরের সাথে সংযুক্ত, যেন পাশের বাড়ির প্রতিবেশী।
          </div>

          <h3 style={h3s}>বিশ্বগ্রামের উপাদানসমূহ</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:"0.75rem",margin:"0.75rem 0 1.5rem"}}>
            {[
              ["📡","যোগাযোগ","ই-মেইল, ভিডিও কল, সোশ্যাল মিডিয়া","#0284c7"],
              ["💼","কর্মসংস্থান","ফ্রিল্যান্সিং, অনলাইন কাজ","#7c3aed"],
              ["🎓","শিক্ষা","ই-লার্নিং, MOOC, দূরশিক্ষণ","#16a34a"],
              ["🏥","চিকিৎসা","টেলিমেডিসিন, অনলাইন পরামর্শ","#dc2626"],
              ["🔬","গবেষণা","তথ্য ভাগাভাগি, অনলাইন জার্নাল","#0891b2"],
              ["🎭","সংস্কৃতি ও বিনোদন","স্ট্রিমিং, সোশ্যাল মিডিয়া","#ca8a04"],
            ].map(([ic,t,d,c])=>(
              <div key={t} style={{background:"#f8fafc",border:`1.5px solid ${c}30`,borderTop:`3px solid ${c}`,borderRadius:"0.625rem",padding:"0.75rem",textAlign:"center"}}>
                <div style={{fontSize:"1.25rem"}}>{ic}</div>
                <div style={{fontWeight:700,color:c,fontSize:"0.8rem",margin:"0.25rem 0"}}>{t}</div>
                <div style={{color:"#64748b",fontSize:"0.72rem",lineHeight:1.4}}>{d}</div>
              </div>
            ))}
          </div>

          <h3 style={h3s}>যোগাযোগের ধরন</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"380px"}}>
              <thead><tr><th style={th}>ধরন</th><th style={th}>বৈশিষ্ট্য</th><th style={th}>উদাহরণ</th></tr></thead>
              <tbody>
                {[
                  ["Synchronous (সমকালীন)","একই সময়ে যোগাযোগ","ভিডিও কল, ফোন, লাইভ চ্যাট","#16a34a"],
                  ["Asynchronous (অসমকালীন)","ভিন্ন সময়ে যোগাযোগ","ই-মেইল, SMS, ফোরাম","#0284c7"],
                  ["One-to-One","দুজনের মধ্যে","ফোন কল, ডিরেক্ট মেসেজ","#7c3aed"],
                  ["One-to-Many","একজন থেকে অনেকে","সম্প্রচার, ব্লগ, YouTube","#ca8a04"],
                  ["Many-to-Many","অনেকের মধ্যে","সোশ্যাল মিডিয়া, ফোরাম","#0891b2"],
                ].map(([t,d,e,c],i)=>(
                  <tr key={t} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    <td style={{...td,fontWeight:700,color:c,fontSize:"0.8rem"}}>{t}</td>
                    <td style={td}>{d}</td>
                    <td style={td}>{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={h3s}>বিশ্বগ্রামের সুবিধা ও অসুবিধা</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{background:"#f0fdf4",border:"1.5px solid #bbf7d0",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#16a34a",marginBottom:"0.5rem"}}>✅ সুবিধা</div>
              <ul style={{margin:0,paddingLeft:"1.1rem",color:"#475569",fontSize:"0.82rem",lineHeight:1.9}}>
                <li>তাৎক্ষণিক বৈশ্বিক যোগাযোগ</li>
                <li>জ্ঞান ও তথ্যের সহজলভ্যতা</li>
                <li>দূর থেকে কাজ (Remote Work)</li>
                <li>অনলাইন শিক্ষা ও প্রশিক্ষণ</li>
                <li>ই-কমার্স ও ব্যবসার প্রসার</li>
                <li>জরুরি চিকিৎসা সেবা</li>
              </ul>
            </div>
            <div style={{background:"#fef2f2",border:"1.5px solid #fecaca",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#dc2626",marginBottom:"0.5rem"}}>❌ অসুবিধা</div>
              <ul style={{margin:0,paddingLeft:"1.1rem",color:"#475569",fontSize:"0.82rem",lineHeight:1.9}}>
                <li>গোপনীয়তা লঙ্ঘন</li>
                <li>সাইবার অপরাধ বৃদ্ধি</li>
                <li>সাংস্কৃতিক আগ্রাসন</li>
                <li>ডিজিটাল আসক্তি</li>
                <li>ভুয়া তথ্য ছড়ানো (Misinformation)</li>
                <li>ডিজিটাল বিভাজন</li>
              </ul>
            </div>
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 মনে রাখুন:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.1rem",lineHeight:2,color:"#1e293b",fontSize:"0.875rem"}}>
              <li>Marshall McLuhan → বিশ্বগ্রাম ধারণার প্রবর্তক</li>
              <li>বিশ্বগ্রাম = ICT-র কারণে পৃথিবী একটি ছোট গ্রাম</li>
              <li>৬টি উপাদান: যোগাযোগ, কর্মসংস্থান, শিক্ষা, চিকিৎসা, গবেষণা, সংস্কৃতি</li>
              <li>Synchronous = একই সময়ে | Asynchronous = ভিন্ন সময়ে</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#0369a1",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <GlobalVillageQuiz />
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter1" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← অধ্যায় ১ সূচি</Link>
          <Link href="/demo/chapter1/recent-trends" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>সাম্প্রতিক প্রবণতা →</Link>
        </div>
      </div>
    </div>
  );
}
