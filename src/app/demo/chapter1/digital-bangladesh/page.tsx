import DigitalBangladeshQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "ই-সেবা ও ডিজিটাল বাংলাদেশ — HSC ICT অধ্যায় ১.৩ | EduSocial BD" };
const C="#16a34a",BG="#f0fdf4",BR="#bbf7d0";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151"};
export default function DigitalBangladeshPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter1" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ১</Link>
          <span style={{color:BR}}>|</span>
          <Link href="/demo/chapter1/recent-trends" style={{color:C,textDecoration:"none"}}>সাম্প্রতিক প্রবণতা</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>ডিজিটাল বাংলাদেশ</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ১.৩</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>ই-সেবা ও ডিজিটাল বাংলাদেশ</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>e-Governance, e-Commerce, Telemedicine, e-Learning — ICT দিয়ে বাংলাদেশ</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          <h3 style={h3s}>ডিজিটাল বাংলাদেশ রূপকল্প</h3>
          <div style={{background:"#1e293b",color:"#e2e8f0",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.5rem",lineHeight:1.8,fontSize:"0.875rem"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"}}>
              <div style={{background:"#0f172a",borderRadius:"0.5rem",padding:"0.75rem",borderLeft:"3px solid #16a34a"}}>
                <div style={{fontWeight:700,color:"#86efac",marginBottom:"0.25rem"}}>ডিজিটাল বাংলাদেশ ২০২১</div>
                <div style={{color:"#94a3b8",fontSize:"0.8rem"}}>স্বাধীনতার সুবর্ণজয়ন্তী লক্ষ্যমাত্রা: ICT অবকাঠামো, ডিজিটাল সেবা, দক্ষ মানবসম্পদ</div>
              </div>
              <div style={{background:"#0f172a",borderRadius:"0.5rem",padding:"0.75rem",borderLeft:"3px solid #60a5fa"}}>
                <div style={{fontWeight:700,color:"#93c5fd",marginBottom:"0.25rem"}}>স্মার্ট বাংলাদেশ ২০৪১</div>
                <div style={{color:"#94a3b8",fontSize:"0.8rem"}}>Smart Citizen, Smart Government, Smart Economy, Smart Society</div>
              </div>
            </div>
          </div>

          <h3 style={h3s}>ই-সেবার ধরন</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(175px,1fr))",gap:"0.75rem",margin:"0.75rem 0 1.5rem"}}>
            {[
              ["🏛","ই-গভর্ন্যান্স","e-Governance","ICT দিয়ে সরকারি সেবা — পাসপোর্ট, জন্মনিবন্ধন, ভর্তি","#0284c7"],
              ["🛒","ই-কমার্স","e-Commerce","অনলাইনে পণ্য ক্রয়-বিক্রয় — Daraz, Chaldal","#7c3aed"],
              ["🏥","টেলিমেডিসিন","Telemedicine","অনলাইনে ডাক্তারের পরামর্শ ও চিকিৎসা","#dc2626"],
              ["🎓","দূরশিক্ষণ","e-Learning","ঘরে বসে পড়াশোনা — MOOC, ভিডিও ক্লাস","#16a34a"],
              ["🏦","ই-ব্যাংকিং","e-Banking","অনলাইন ব্যাংকিং, মোবাইল ব্যাংকিং (bKash)","#0891b2"],
              ["📋","ই-স্বাস্থ্য","e-Health","ডিজিটাল স্বাস্থ্য রেকর্ড, অ্যাপয়েন্টমেন্ট","#ca8a04"],
            ].map(([ic,t,en,d,c])=>(
              <div key={t} style={{background:"#f8fafc",border:`1.5px solid ${c}30`,borderTop:`3px solid ${c}`,borderRadius:"0.625rem",padding:"0.75rem"}}>
                <div style={{fontSize:"1.25rem"}}>{ic}</div>
                <div style={{fontWeight:700,color:c,fontSize:"0.8rem",margin:"0.25rem 0"}}>{t}</div>
                <div style={{color:"#64748b",fontSize:"0.72rem",marginBottom:"0.25rem"}}>{en}</div>
                <div style={{color:"#475569",fontSize:"0.72rem",lineHeight:1.4}}>{d}</div>
              </div>
            ))}
          </div>

          <h3 style={h3s}>ইউনিয়ন ডিজিটাল সেন্টার (UDC)</h3>
          <div style={{background:"#f0fdf4",border:"1.5px solid #bbf7d0",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.5rem"}}>
            <p style={{color:"#475569",fontSize:"0.875rem",lineHeight:1.8,margin:0}}>
              বাংলাদেশের প্রতিটি ইউনিয়নে <strong>ইউনিয়ন ডিজিটাল সেন্টার (UDC)</strong> স্থাপিত হয়েছে।
              এখানে গ্রামের সাধারণ মানুষ ডিজিটাল সেবা পায়: জন্মনিবন্ধন, পরীক্ষার ফলাফল,
              ভিডিও কল, প্রিন্টিং, ইন্টারনেট ব্রাউজিং ইত্যাদি।
              একজন পুরুষ ও একজন মহিলা উদ্যোক্তা প্রতিটি UDC পরিচালনা করেন।
            </p>
          </div>

          <h3 style={h3s}>ই-গভর্ন্যান্স সেবার উদাহরণ</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"360px"}}>
              <thead><tr><th style={th}>সেবা</th><th style={th}>বিবরণ</th><th style={th}>ওয়েবসাইট/অ্যাপ</th></tr></thead>
              <tbody>
                {[
                  ["পাসপোর্ট আবেদন","অনলাইনে আবেদন ও ফি পরিশোধ","epassport.gov.bd"],
                  ["জন্মনিবন্ধন","অনলাইনে জন্ম সনদ নিবন্ধন ও যাচাই","bdris.gov.bd"],
                  ["বিশ্ববিদ্যালয় ভর্তি","কেন্দ্রীয় অনলাইন ভর্তি আবেদন","gstadmission.ac.bd"],
                  ["জমির তথ্য","অনলাইনে জমির রেকর্ড ও মালিকানা","land.gov.bd"],
                  ["বিদ্যুৎ বিল","মোবাইল ব্যাংকিংয়ে বিল পরিশোধ","bKash, Nagad, Rocket"],
                  ["NID সার্ভিস","জাতীয় পরিচয়পত্র যাচাই ও সংশোধন","nidw.gov.bd"],
                ].map((r,i)=>(
                  <tr key={r[0]} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    <td style={{...td,fontWeight:600,color:"#15803d"}}>{r[0]}</td>
                    <td style={td}>{r[1]}</td>
                    <td style={{...td,fontFamily:"monospace",fontSize:"0.8rem",color:"#0284c7"}}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={h3s}>ফ্রিল্যান্সিং ও বাংলাদেশ</h3>
          <div style={{background:"#fefce8",border:"1.5px solid #fef08a",borderRadius:"0.75rem",padding:"1rem 1.25rem",margin:"0.75rem 0 1.5rem"}}>
            <p style={{color:"#475569",fontSize:"0.875rem",lineHeight:1.8,margin:0}}>
              বাংলাদেশ বিশ্বের শীর্ষ ফ্রিল্যান্সিং দেশগুলোর মধ্যে একটি।
              Upwork, Fiverr, Freelancer.com-এ বাংলাদেশি তরুণরা ওয়েব ডেভেলপমেন্ট, গ্রাফিক ডিজাইন,
              ডেটা এন্ট্রি, ডিজিটাল মার্কেটিং-এ কাজ করছে।
              বিশ্বগ্রামের সুবাদে বাড়িতে বসেই বৈদেশিক মুদ্রা আয় সম্ভব।
            </p>
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 মনে রাখুন:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.1rem",lineHeight:2,color:"#1e293b",fontSize:"0.875rem"}}>
              <li>ডিজিটাল বাংলাদেশ ২০২১ → স্মার্ট বাংলাদেশ ২০৪১</li>
              <li>e-Governance = সরকারি সেবা অনলাইনে</li>
              <li>Telemedicine = অনলাইনে চিকিৎসা</li>
              <li>UDC = ইউনিয়ন ডিজিটাল সেন্টার (প্রতি ইউনিয়নে)</li>
              <li>e-Commerce: Daraz, Chaldal — বাংলাদেশে জনপ্রিয়</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#15803d",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <DigitalBangladeshQuiz />
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter1/recent-trends" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← সাম্প্রতিক প্রবণতা</Link>
          <Link href="/demo/chapter1/ethics-society" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>নৈতিকতা ও সামাজিক প্রভাব →</Link>
        </div>
      </div>
    </div>
  );
}
