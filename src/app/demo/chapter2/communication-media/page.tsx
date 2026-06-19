import CommunicationMediaQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "কমিউনিকেশন মাধ্যম — HSC ICT অধ্যায় ২.২ | EduSocial BD" };
const C="#7c3aed",BG="#f5f3ff",BR="#ddd6fe";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151"};
export default function CommMediaPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter2" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ২</Link>
          <span style={{color:BR}}>|</span>
          <Link href="/demo/chapter2/data-communication" style={{color:C,textDecoration:"none"}}>ডেটা কমিউনিকেশন</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>কমিউনিকেশন মাধ্যম</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ২.২</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>কমিউনিকেশন মাধ্যম</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>তারযুক্ত ও তারবিহীন মাধ্যম — ডেটা পরিবহনের পথ</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          {/* Guided Media */}
          <h3 style={h3s}>তারযুক্ত মাধ্যম (Guided Media)</h3>
          <div style={{display:"flex",flexDirection:"column",gap:"0.875rem",margin:"0.75rem 0 1.5rem"}}>
            {[
              {
                name:"Twisted Pair Cable",en:"Twisted Pair",icon:"🔵",color:"#0284c7",
                points:["দুটি তার একসাথে পাকানো","সবচেয়ে সস্তা ও সহজলভ্য","LAN-এ ব্যাপকভাবে ব্যবহৃত","UTP (Unshielded) ও STP (Shielded) দুই ধরনের","ব্যান্ডউইথ তুলনামূলক কম"],
              },
              {
                name:"Coaxial Cable",en:"Coaxial",icon:"🟡",color:"#ca8a04",
                points:["কেন্দ্রীয় তার Metallic Shield দ্বারা ঘেরা","Cable TV ও পুরনো Ethernet নেটওয়ার্কে ব্যবহৃত","Twisted Pair-এর চেয়ে বেশি ব্যান্ডউইথ","বাহ্যিক Noise কম প্রভাবিত করে","CCTV ক্যামেরায় ব্যবহৃত"],
              },
              {
                name:"Fiber Optic Cable",en:"Fiber Optic",icon:"🟢",color:"#16a34a",
                points:["আলোক তরঙ্গে ডেটা পরিবহন","সবচেয়ে দ্রুত — Gbps/Tbps ব্যান্ডউইথ","দীর্ঘ দূরত্বে কোনো সংকেত দুর্বলতা নেই","বৈদ্যুতিক Interference নেই","দাম বেশি, স্থাপনা জটিল"],
              },
            ].map(m=>(
              <div key={m.name} style={{background:"#f8fafc",border:`1.5px solid ${m.color}30`,borderLeft:`4px solid ${m.color}`,borderRadius:"0.75rem",padding:"1rem"}}>
                <div style={{fontWeight:700,color:m.color,marginBottom:"0.5rem",fontSize:"0.9rem"}}>{m.icon} {m.name} ({m.en})</div>
                <ul style={{margin:0,paddingLeft:"1.1rem",display:"flex",flexDirection:"column",gap:"0.2rem"}}>
                  {m.points.map(p=><li key={p} style={{color:"#475569",fontSize:"0.82rem",lineHeight:1.6}}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Unguided Media */}
          <h3 style={h3s}>তারবিহীন মাধ্যম (Unguided Media)</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"400px"}}>
              <thead><tr>
                <th style={th}>মাধ্যম</th><th style={th}>ফ্রিকোয়েন্সি</th><th style={th}>পরিসর</th><th style={th}>ব্যবহার</th>
              </tr></thead>
              <tbody>
                {[
                  ["📻 Radio Wave","3 KHz – 300 MHz","কয়েক কিমি","AM/FM রেডিও, Wi-Fi, Bluetooth"],
                  ["📡 Microwave","300 MHz – 300 GHz","৩০-৫০ কিমি (LOS)","টেলিফোন, TV সম্প্রচার, ৫G"],
                  ["🛰 Satellite","1 GHz – 40 GHz","বৈশ্বিক","GPS, Satellite TV, ইন্টারনেট"],
                  ["🌡 Infrared","300 GHz – 400 THz","<১ মিটার (LOS)","রিমোট কন্ট্রোল, IrDA"],
                  ["📶 Bluetooth","2.4 GHz","<১০ মিটার","ইয়ারফোন, কীবোর্ড, মাউস"],
                  ["📡 Wi-Fi","2.4 / 5 GHz","<১০০ মিটার","WLAN, হোম ইন্টারনেট"],
                ].map((r,i)=>(
                  <tr key={r[0]} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    {r.map((c,j)=><td key={j} style={{...td,fontWeight:j===0?600:400,fontSize:"0.82rem"}}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Comparison */}
          <h3 style={h3s}>তারযুক্ত বনাম তারবিহীন মাধ্যম — তুলনা</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"340px"}}>
              <thead><tr><th style={th}>বৈশিষ্ট্য</th><th style={{...th,color:"#0284c7"}}>তারযুক্ত (Guided)</th><th style={{...th,color:"#7c3aed"}}>তারবিহীন (Unguided)</th></tr></thead>
              <tbody>
                {[
                  ["গতি","বেশি (বিশেষত Fiber Optic)","তুলনামূলক কম"],
                  ["নিরাপত্তা","বেশি নিরাপদ","কম নিরাপদ (Interception সহজ)"],
                  ["স্থাপনা","কঠিন ও ব্যয়বহুল","সহজ ও কম খরচ"],
                  ["গতিশীলতা","নেই (স্থির সংযোগ)","আছে (Mobile)"],
                  ["পরিসর","সীমিত (তারের দৈর্ঘ্য)","বিশাল (Satellite: বৈশ্বিক)"],
                  ["Noise","কম","বেশি (বায়ুমণ্ডলীয়)"],
                ].map((r,i)=>(
                  <tr key={r[0]} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    <td style={{...td,fontWeight:600,color:"#1e293b"}}>{r[0]}</td>
                    <td style={{...td,color:"#0284c7"}}>{r[1]}</td>
                    <td style={{...td,color:"#7c3aed"}}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem",marginTop:"1.5rem"}}>
            <strong style={{color:"#854d0e"}}>💡 মনে রাখুন:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.1rem",lineHeight:2,color:"#1e293b",fontSize:"0.875rem"}}>
              <li>দ্রুততম: Fiber Optic &gt; Coaxial &gt; Twisted Pair</li>
              <li>সবচেয়ে সস্তা: Twisted Pair</li>
              <li>সবচেয়ে দূরত্বে কার্যকর: Satellite</li>
              <li>LOS (Line of Sight) প্রয়োজন: Microwave, Infrared</li>
              <li>Fiber Optic-এ আলো ব্যবহার হয় — বৈদ্যুতিক নয়</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#6d28d9",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <CommunicationMediaQuiz />
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter2/data-communication" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← ডেটা কমিউনিকেশন</Link>
          <Link href="/demo/chapter2/network-topology" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>নেটওয়ার্ক টপোলজি →</Link>
        </div>
      </div>
    </div>
  );
}
