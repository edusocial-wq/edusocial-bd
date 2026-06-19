import EthicsSocietyQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "নৈতিকতা ও সামাজিক প্রভাব — HSC ICT অধ্যায় ১.৪ | EduSocial BD" };
const C="#0891b2",BG="#ecfeff",BR="#a5f3fc";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151"};
export default function EthicsSocietyPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter1" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ১</Link>
          <span style={{color:BR}}>|</span>
          <Link href="/demo/chapter1/digital-bangladesh" style={{color:C,textDecoration:"none"}}>ডিজিটাল বাংলাদেশ</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>নৈতিকতা ও সামাজিক প্রভাব</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ১.৪</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>নৈতিকতা ও সামাজিক প্রভাব</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>ICT-র ইতিবাচক-নেতিবাচক প্রভাব, Digital Divide, IPR, নৈতিক ব্যবহার</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          <h3 style={h3s}>ICT-র সামাজিক প্রভাব</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{background:"#f0fdf4",border:"1.5px solid #bbf7d0",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#16a34a",marginBottom:"0.5rem"}}>✅ ইতিবাচক প্রভাব</div>
              <ul style={{margin:0,paddingLeft:"1.1rem",color:"#475569",fontSize:"0.8rem",lineHeight:1.9}}>
                <li>যোগাযোগ সহজ ও দ্রুত</li>
                <li>শিক্ষার সুযোগ বৃদ্ধি</li>
                <li>নতুন কর্মসংস্থান সৃষ্টি</li>
                <li>স্বাস্থ্যসেবার উন্নতি</li>
                <li>তথ্যের সহজলভ্যতা</li>
                <li>ব্যবসার প্রসার</li>
                <li>সরকারি সেবা সহজলভ্য</li>
              </ul>
            </div>
            <div style={{background:"#fef2f2",border:"1.5px solid #fecaca",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#dc2626",marginBottom:"0.5rem"}}>❌ নেতিবাচক প্রভাব</div>
              <ul style={{margin:0,paddingLeft:"1.1rem",color:"#475569",fontSize:"0.8rem",lineHeight:1.9}}>
                <li>গোপনীয়তা লঙ্ঘন</li>
                <li>সাইবার অপরাধ বৃদ্ধি</li>
                <li>ডিজিটাল আসক্তি</li>
                <li>সাংস্কৃতিক আগ্রাসন</li>
                <li>ভুয়া তথ্য ছড়ানো</li>
                <li>অটোমেশনে বেকারত্ব</li>
                <li>ডিজিটাল বিভাজন</li>
              </ul>
            </div>
          </div>

          <h3 style={h3s}>ডিজিটাল বিভাজন (Digital Divide)</h3>
          <div style={{background:"#f8fafc",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.5rem"}}>
            <p style={{color:"#475569",fontSize:"0.875rem",lineHeight:1.8,margin:"0 0 0.75rem"}}>
              Digital Divide হলো প্রযুক্তিতে প্রবেশাধিকারের বৈষম্য। যারা ICT ব্যবহার করতে পারে
              তারা এগিয়ে যাচ্ছে, আর যারা পারে না তারা পিছিয়ে পড়ছে।
            </p>
            <div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
              {[
                ["ধনী vs দরিদ্র","সম্পদশালীরা উন্নত প্রযুক্তি পায়","#dc2626"],
                ["শহর vs গ্রাম","শহরে দ্রুত ইন্টারনেট, গ্রামে ধীর","#d97706"],
                ["শিক্ষিত vs অশিক্ষিত","শিক্ষিতরা প্রযুক্তি বোঝে বেশি","#7c3aed"],
                ["উন্নত vs উন্নয়নশীল দেশ","উন্নত দেশে প্রযুক্তি এগিয়ে","#0284c7"],
              ].map(([t,d,c])=>(
                <div key={t} style={{display:"flex",gap:"0.75rem",alignItems:"center",padding:"0.5rem 0.75rem",background:"#fff",borderRadius:"0.5rem",border:`1px solid ${c}20`,borderLeft:`3px solid ${c}`}}>
                  <span style={{fontWeight:700,color:c,fontSize:"0.82rem",minWidth:"130px"}}>{t}</span>
                  <span style={{color:"#475569",fontSize:"0.82rem"}}>{d}</span>
                </div>
              ))}
            </div>
          </div>

          <h3 style={h3s}>Intellectual Property Rights (IPR)</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"360px"}}>
              <thead><tr><th style={th}>ধরন</th><th style={th}>সুরক্ষা দেয়</th><th style={th}>উদাহরণ</th></tr></thead>
              <tbody>
                {[
                  ["Copyright","সৃজনশীল কাজ (বই, সিনেমা, সফটওয়্যার)","Windows OS, বই","#0284c7"],
                  ["Patent","নতুন উদ্ভাবন ও আবিষ্কার","ওষুধ, যন্ত্রপাতি","#7c3aed"],
                  ["Trademark","ব্র্যান্ডের নাম, লোগো, চিহ্ন","Apple লোগো, Coca-Cola","#16a34a"],
                  ["Trade Secret","ব্যবসায়িক গোপন তথ্য","কোকাকোলার ফর্মুলা","#dc2626"],
                ].map(([t,d,e,c],i)=>(
                  <tr key={t} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    <td style={{...td,fontWeight:700,color:c}}>{t}</td>
                    <td style={td}>{d}</td>
                    <td style={td}>{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={h3s}>নৈতিক ICT ব্যবহারের নির্দেশনা</h3>
          <div style={{background:"#ecfeff",border:"1.5px solid #a5f3fc",borderRadius:"0.75rem",padding:"1.25rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{display:"flex",flexDirection:"column",gap:"0.625rem"}}>
              {[
                ["✅","অন্যের গোপনীয়তা রক্ষা করুন"],
                ["✅","Copyright ও IPR মেনে চলুন"],
                ["✅","সত্য তথ্য শেয়ার করুন, ভুয়া তথ্য ছড়াবেন না"],
                ["✅","সাইবার বুলিং থেকে বিরত থাকুন"],
                ["✅","অপরিচিতদের ব্যক্তিগত তথ্য দেবেন না"],
                ["❌","অনুমতি ছাড়া সফটওয়্যার কপি করবেন না (Piracy)"],
                ["❌","হ্যাকিং বা অননুমোদিত প্রবেশ করবেন না"],
                ["❌","অন্যের পাসওয়ার্ড বা অ্যাকাউন্ট ব্যবহার করবেন না"],
              ].map(([ic,t])=>(
                <div key={t} style={{display:"flex",gap:"0.75rem",alignItems:"center",fontSize:"0.875rem",color:"#1e293b"}}>
                  <span style={{fontSize:"1rem",flexShrink:0}}>{ic}</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 মনে রাখুন:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.1rem",lineHeight:2,color:"#1e293b",fontSize:"0.875rem"}}>
              <li>Digital Divide = প্রযুক্তিতে সমান সুযোগ না পাওয়া</li>
              <li>IPR = মেধাসৃষ্টির আইনি সুরক্ষা</li>
              <li>Copyright = সৃজনশীল কাজ | Patent = উদ্ভাবন | Trademark = ব্র্যান্ড</li>
              <li>Plagiarism = অন্যের কাজ নিজের বলে চালানো</li>
              <li>Piracy = অননুমোদিত সফটওয়্যার/মিডিয়া কপি</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#0e7490",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <EthicsSocietyQuiz />
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter1/digital-bangladesh" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← ডিজিটাল বাংলাদেশ</Link>
          <Link href="/demo/chapter1/cybersecurity" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>সাইবার নিরাপত্তা →</Link>
        </div>
      </div>
    </div>
  );
}
