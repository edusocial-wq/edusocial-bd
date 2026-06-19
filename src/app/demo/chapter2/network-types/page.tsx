import NetworkTypesQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "নেটওয়ার্কের ধরন — HSC ICT অধ্যায় ২.৪ | EduSocial BD" };
const C="#16a34a",BG="#f0fdf4",BR="#bbf7d0";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151"};

const netTypes = [
  {
    abbr:"PAN",full:"Personal Area Network",bn:"ব্যক্তিগত এলাকা নেটওয়ার্ক",
    icon:"📱",color:"#7c3aed",bg:"#f5f3ff",border:"#ddd6fe",
    range:"১০ মিটার",speed:"কম (Bluetooth: ~3 Mbps)",tech:"Bluetooth, Infrared, USB",
    examples:["Bluetooth earphone","Wireless keyboard/mouse","Smartwatch ← Phone","নিজের ডিভাইসের মধ্যে ফাইল শেয়ার"],
  },
  {
    abbr:"LAN",full:"Local Area Network",bn:"স্থানীয় এলাকা নেটওয়ার্ক",
    icon:"🏫",color:"#0284c7",bg:"#f0f9ff",border:"#bae6fd",
    range:"১ কিমি পর্যন্ত",speed:"বেশি (Gbps পর্যন্ত)",tech:"Ethernet, Wi-Fi (IEEE 802.11)",
    examples:["স্কুল/কলেজের কম্পিউটার ল্যাব","অফিস নেটওয়ার্ক","বাড়ির Wi-Fi নেটওয়ার্ক","ডরমিটরি নেটওয়ার্ক"],
  },
  {
    abbr:"MAN",full:"Metropolitan Area Network",bn:"শহর এলাকা নেটওয়ার্ক",
    icon:"🏙",color:"#0891b2",bg:"#ecfeff",border:"#a5f3fc",
    range:"১০০ কিমি পর্যন্ত",speed:"মাঝারি (Gbps)",tech:"Fiber Optic, Microwave, Coaxial",
    examples:["শহরের Cable TV নেটওয়ার্ক","শহরব্যাপী ISP নেটওয়ার্ক","শহরের CCTV নেটওয়ার্ক","বিভিন্ন শাখা অফিস সংযোগ"],
  },
  {
    abbr:"WAN",full:"Wide Area Network",bn:"বিস্তৃত এলাকা নেটওয়ার্ক",
    icon:"🌏",color:"#16a34a",bg:"#f0fdf4",border:"#bbf7d0",
    range:"সীমাহীন (দেশ/মহাদেশ)",speed:"তুলনামূলক কম (কিন্তু বিশাল কভারেজ)",tech:"Fiber Optic, Satellite, Leased Line",
    examples:["ইন্টারনেট (বৃহত্তম WAN)","ব্যাংকের দেশব্যাপী নেটওয়ার্ক","Submarine Cable নেটওয়ার্ক","ATM নেটওয়ার্ক"],
  },
];

export default function NetworkTypesPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter2" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ২</Link>
          <span style={{color:BR}}>|</span>
          <Link href="/demo/chapter2/network-topology" style={{color:C,textDecoration:"none"}}>নেটওয়ার্ক টপোলজি</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>নেটওয়ার্কের ধরন</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ২.৪</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>নেটওয়ার্কের ধরন</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>PAN, LAN, MAN ও WAN — পরিসর ও বৈশিষ্ট্য অনুযায়ী শ্রেণিবিভাগ</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          {/* Visual scale */}
          <div style={{background:"#f8fafc",borderRadius:"0.75rem",padding:"1.25rem",marginBottom:"1.5rem",overflowX:"auto"}}>
            <div style={{fontWeight:700,color:"#1e293b",marginBottom:"0.75rem",fontSize:"0.875rem"}}>📐 পরিসর অনুযায়ী ক্রম</div>
            <div style={{display:"flex",alignItems:"center",gap:"0",minWidth:"360px"}}>
              {[
                {abbr:"PAN",range:"১০ মিটার",color:"#7c3aed",w:"60px"},
                {abbr:"LAN",range:"১ কিমি",color:"#0284c7",w:"120px"},
                {abbr:"MAN",range:"১০০ কিমি",color:"#0891b2",w:"180px"},
                {abbr:"WAN",range:"∞",color:"#16a34a",w:"240px"},
              ].map(n=>(
                <div key={n.abbr} style={{flex:1,textAlign:"center"}}>
                  <div style={{background:n.color,color:"#fff",borderRadius:"0.375rem",padding:"0.375rem 0.25rem",marginBottom:"0.375rem",fontSize:"0.75rem",fontWeight:700}}>{n.abbr}</div>
                  <div style={{fontSize:"0.7rem",color:"#64748b"}}>{n.range}</div>
                </div>
              ))}
            </div>
            <div style={{height:"4px",background:"linear-gradient(to right, #7c3aed, #0284c7, #0891b2, #16a34a)",borderRadius:"99px",marginTop:"0.375rem"}}/>
            <div style={{fontSize:"0.72rem",color:"#94a3b8",marginTop:"0.375rem",textAlign:"right"}}>পরিসর বৃদ্ধি →</div>
          </div>

          {netTypes.map(n=>(
            <div key={n.abbr} style={{background:n.bg,border:`1.5px solid ${n.border}`,borderLeft:`4px solid ${n.color}`,borderRadius:"0.875rem",padding:"1.25rem",marginBottom:"1rem"}}>
              <div style={{display:"flex",alignItems:"baseline",gap:"0.75rem",marginBottom:"0.5rem",flexWrap:"wrap"}}>
                <span style={{fontSize:"1.5rem"}}>{n.icon}</span>
                <span style={{fontWeight:800,color:n.color,fontSize:"1.1rem",fontFamily:"monospace"}}>{n.abbr}</span>
                <span style={{fontWeight:600,color:"#1e293b",fontSize:"0.9rem"}}>{n.full}</span>
                <span style={{color:"#64748b",fontSize:"0.8rem"}}>({n.bn})</span>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem 1rem",marginBottom:"0.75rem"}}>
                <div style={{fontSize:"0.82rem",color:"#475569"}}><strong>পরিসর:</strong> {n.range}</div>
                <div style={{fontSize:"0.82rem",color:"#475569"}}><strong>গতি:</strong> {n.speed}</div>
                <div style={{fontSize:"0.82rem",color:"#475569",gridColumn:"1/-1"}}><strong>মাধ্যম:</strong> {n.tech}</div>
              </div>
              <div style={{fontSize:"0.78rem",color:"#374151"}}>
                <strong>উদাহরণ:</strong>
                <div style={{display:"flex",flexWrap:"wrap",gap:"0.375rem",marginTop:"0.35rem"}}>
                  {n.examples.map(ex=>(
                    <span key={ex} style={{background:"#fff",border:`1px solid ${n.border}`,borderRadius:"0.375rem",padding:"0.15rem 0.5rem",fontSize:"0.75rem",color:"#374151"}}>{ex}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <h3 style={h3s}>তুলনামূলক সারণি</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"460px"}}>
              <thead><tr>
                <th style={th}>বৈশিষ্ট্য</th>
                <th style={{...th,color:"#7c3aed"}}>PAN</th>
                <th style={{...th,color:"#0284c7"}}>LAN</th>
                <th style={{...th,color:"#0891b2"}}>MAN</th>
                <th style={{...th,color:"#16a34a"}}>WAN</th>
              </tr></thead>
              <tbody>
                {[
                  ["পরিসর","১০ মি","১ কিমি","১০০ কিমি","সীমাহীন"],
                  ["গতি","কম","সর্বোচ্চ","মাঝারি","তুলনামূলক কম"],
                  ["মালিকানা","ব্যক্তিগত","প্রতিষ্ঠান","শহর/ISP","সরকার/ISP"],
                  ["খরচ","কম","মাঝারি","বেশি","সর্বোচ্চ"],
                  ["প্রযুক্তি","Bluetooth","Ethernet/Wi-Fi","Fiber/MW","Satellite/Fiber"],
                  ["নিরাপত্তা","বেশি","বেশি","মাঝারি","কম"],
                ].map((r,i)=>(
                  <tr key={r[0]} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    <td style={{...td,fontWeight:700,color:"#1e293b"}}>{r[0]}</td>
                    {r.slice(1).map((c,j)=><td key={j} style={td}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem",marginTop:"1.5rem"}}>
            <strong style={{color:"#854d0e"}}>💡 সহজে মনে রাখুন:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.1rem",lineHeight:2,color:"#1e293b",fontSize:"0.875rem"}}>
              <li>P (Personal) → PAN: ব্যক্তিগত, Bluetooth</li>
              <li>L (Local) → LAN: স্থানীয়, ক্যাম্পাস/অফিস</li>
              <li>M (Metropolitan) → MAN: শহর, ISP</li>
              <li>W (Wide) → WAN: বিস্তৃত, ইন্টারনেট</li>
              <li>ইন্টারনেট = পৃথিবীর বৃহত্তম WAN</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#15803d",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <NetworkTypesQuiz />
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter2/network-topology" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← নেটওয়ার্ক টপোলজি</Link>
          <Link href="/demo/chapter2/internet-protocol" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>ইন্টারনেট ও প্রোটোকল →</Link>
        </div>
      </div>
    </div>
  );
}
