import DataCommunicationQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "ডেটা কমিউনিকেশন — HSC ICT অধ্যায় ২.১ | EduSocial BD" };
const C="#0284c7",BG="#f0f9ff",BR="#bae6fd";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151"};
export default function DataCommPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter2" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ২</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>ডেটা কমিউনিকেশন</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ২.১</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>ডেটা কমিউনিকেশন</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>উপাদান, মোড এবং সংকেত — নেটওয়ার্কে ডেটা আদান-প্রদানের মূল ধারণা</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          <h3 style={h3s}>ডেটা কমিউনিকেশন কী?</h3>
          <p style={{color:"#475569",lineHeight:1.8,margin:"0 0 1.25rem",fontSize:"0.95rem"}}>
            ডেটা কমিউনিকেশন হলো দুটি বা ততোধিক ডিভাইসের মধ্যে কোনো মাধ্যম (transmission medium) ব্যবহার করে ডেটা আদান-প্রদানের প্রক্রিয়া।
            এই প্রক্রিয়ায় ৫টি মূল উপাদান অপরিহার্য।
          </p>

          <h3 style={h3s}>ডেটা কমিউনিকেশনের ৫টি উপাদান</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:"0.75rem",margin:"0.75rem 0 1.5rem"}}>
            {[
              ["📤","Sender","প্রেরক — যে ডিভাইস ডেটা পাঠায়","#0284c7"],
              ["📥","Receiver","প্রাপক — যে ডিভাইস ডেটা গ্রহণ করে","#7c3aed"],
              ["💬","Message","বার্তা — যে তথ্য পাঠানো হচ্ছে","#0891b2"],
              ["📡","Medium","মাধ্যম — ডেটা যে পথে যায়","#16a34a"],
              ["📋","Protocol","নিয়মকানুন — যোগাযোগের নিয়ম","#ca8a04"],
            ].map(([ic,t,d,c])=>(
              <div key={t} style={{background:"#f8fafc",border:`1.5px solid ${c}30`,borderTop:`3px solid ${c}`,borderRadius:"0.625rem",padding:"0.75rem",textAlign:"center"}}>
                <div style={{fontSize:"1.25rem"}}>{ic}</div>
                <div style={{fontWeight:700,color:c,fontSize:"0.8rem",margin:"0.25rem 0",fontFamily:"monospace"}}>{t}</div>
                <div style={{color:"#64748b",fontSize:"0.72rem",lineHeight:1.4}}>{d}</div>
              </div>
            ))}
          </div>

          <h3 style={h3s}>ডেটা ট্রান্সমিশন মোড</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"400px"}}>
              <thead><tr>
                <th style={th}>মোড</th><th style={th}>দিক</th><th style={th}>একই সময়ে?</th><th style={th}>উদাহরণ</th>
              </tr></thead>
              <tbody>
                {[
                  ["Simplex","একমুখী (A→B)","—","রেডিও, টেলিভিশন, Keyboard","#dc2626"],
                  ["Half-Duplex","দ্বিমুখী (A↔B)","না — পর্যায়ক্রমে","Walkie-Talkie, পুরনো ইন্টারনেট","#d97706"],
                  ["Full-Duplex","দ্বিমুখী (A↔B)","হ্যাঁ — একই সময়ে","টেলিফোন, ভিডিও কল","#16a34a"],
                ].map(([m,d,s,e,c])=>(
                  <tr key={m}>
                    <td style={{...td,fontWeight:700,color:c,fontFamily:"monospace"}}>{m}</td>
                    <td style={td}>{d}</td>
                    <td style={td}>{s}</td>
                    <td style={td}>{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Visual diagram */}
          <div style={{background:"#f8fafc",borderRadius:"0.75rem",padding:"1.25rem",marginBottom:"1.5rem"}}>
            <div style={{fontWeight:700,color:"#1e293b",marginBottom:"0.75rem",fontSize:"0.875rem"}}>📊 ট্রান্সমিশন মোড চিত্র</div>
            {[
              ["Simplex","Computer A","→","Computer B","#dc2626","শুধু একদিকে যায়"],
              ["Half-Duplex","Computer A","⇄","Computer B","#d97706","পর্যায়ক্রমে দুদিকে"],
              ["Full-Duplex","Computer A","⟺","Computer B","#16a34a","একই সময়ে দুদিকে"],
            ].map(([label,a,arr,b,c,note])=>(
              <div key={label} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.625rem 0.5rem",borderBottom:"1px solid #e2e8f0",flexWrap:"wrap"}}>
                <span style={{minWidth:"110px",fontFamily:"monospace",fontWeight:700,color:c,fontSize:"0.8rem"}}>{label}</span>
                <div style={{display:"flex",alignItems:"center",gap:"0.5rem",flex:1}}>
                  <span style={{background:"#e0f2fe",color:"#0284c7",borderRadius:"0.375rem",padding:"0.25rem 0.625rem",fontSize:"0.8rem",fontWeight:600}}>{a}</span>
                  <span style={{fontSize:"1.25rem",color:c,fontWeight:700}}>{arr}</span>
                  <span style={{background:"#e0f2fe",color:"#0284c7",borderRadius:"0.375rem",padding:"0.25rem 0.625rem",fontSize:"0.8rem",fontWeight:600}}>{b}</span>
                </div>
                <span style={{color:"#64748b",fontSize:"0.75rem"}}>{note}</span>
              </div>
            ))}
          </div>

          <h3 style={h3s}>Bandwidth (ব্যান্ডউইথ)</h3>
          <p style={{color:"#475569",lineHeight:1.8,margin:"0 0 0.75rem",fontSize:"0.9rem"}}>
            Bandwidth হলো একটি যোগাযোগ চ্যানেলে প্রতি সেকেন্ডে কতটুকু ডেটা পাঠানো যায় তার পরিমাপ।
            Bandwidth যত বেশি, ডেটা স্থানান্তর তত দ্রুত।
          </p>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"320px"}}>
              <thead><tr><th style={th}>একক</th><th style={th}>পূর্ণ নাম</th><th style={th}>মান</th></tr></thead>
              <tbody>
                {[
                  ["bps","Bit per second","ভিত্তি একক"],
                  ["Kbps","Kilobit per second","1,000 bps"],
                  ["Mbps","Megabit per second","1,000 Kbps = 10⁶ bps"],
                  ["Gbps","Gigabit per second","1,000 Mbps = 10⁹ bps"],
                  ["Tbps","Terabit per second","1,000 Gbps = 10¹² bps"],
                ].map(([u,f,v],i)=>(
                  <tr key={u} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    <td style={{...td,fontFamily:"monospace",fontWeight:700,color:C}}>{u}</td>
                    <td style={td}>{f}</td>
                    <td style={{...td,fontFamily:"monospace",color:"#16a34a"}}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={h3s}>Analog ও Digital সংকেত</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{background:"#fef2f2",border:"1.5px solid #fecaca",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#dc2626",marginBottom:"0.5rem"}}>📉 Analog Signal</div>
              <ul style={{margin:0,paddingLeft:"1.1rem",color:"#475569",fontSize:"0.82rem",lineHeight:1.8}}>
                <li>তরঙ্গাকার (Continuous)</li>
                <li>অসীম সংখ্যক মান থাকতে পারে</li>
                <li>শব্দ, আলো ইত্যাদি</li>
                <li>ফোনের পুরনো লাইন</li>
                <li>Noise-এ সহজে বিকৃত হয়</li>
              </ul>
            </div>
            <div style={{background:"#f0fdf4",border:"1.5px solid #bbf7d0",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#16a34a",marginBottom:"0.5rem"}}>📊 Digital Signal</div>
              <ul style={{margin:0,paddingLeft:"1.1rem",color:"#475569",fontSize:"0.82rem",lineHeight:1.8}}>
                <li>বিচ্ছিন্ন (Discrete)</li>
                <li>মাত্র দুটি মান: 0 বা 1</li>
                <li>কম্পিউটার ব্যবহার করে</li>
                <li>আধুনিক টেলিযোগাযোগ</li>
                <li>Noise-এ কম বিকৃত হয়</li>
              </ul>
            </div>
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 Modem:</strong>
            <span style={{color:"#1e293b",fontSize:"0.9rem",marginLeft:"0.5rem"}}>MOdulator + DEModulator। Digital → Analog (Modulation) এবং Analog → Digital (Demodulation) রূপান্তর করে। ইন্টারনেট সংযোগে ব্যবহৃত হয়।</span>
          </div>
        </div>

        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#0369a1",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <DataCommunicationQuiz />
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter2" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← অধ্যায় ২ সূচি</Link>
          <Link href="/demo/chapter2/communication-media" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>কমিউনিকেশন মাধ্যম →</Link>
        </div>
      </div>
    </div>
  );
}
