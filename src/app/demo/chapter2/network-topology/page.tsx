import NetworkTopologyQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "নেটওয়ার্ক টপোলজি — HSC ICT অধ্যায় ২.৩ | EduSocial BD" };
const C="#0891b2",BG="#ecfeff",BR="#a5f3fc";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151"};

const topos = [
  {
    name:"Bus Topology",icon:"🚌",color:"#dc2626",bg:"#fef2f2",border:"#fecaca",
    desc:"সব কম্পিউটার একটি মূল ক্যাবলের (Bus) সাথে সংযুক্ত।",
    visual:["💻","💻","💻","💻"],
    pros:["স্থাপনা সহজ","ক্যাবল কম লাগে","খরচ কম"],
    cons:["মূল ক্যাবল নষ্ট হলে সব বন্ধ","ট্র্যাফিক বেশি হলে ধীর হয়","সমস্যা খুঁজে বের করা কঠিন"],
    use:"পুরনো Ethernet (10BASE2, 10BASE5)",
  },
  {
    name:"Star Topology",icon:"⭐",color:"#0284c7",bg:"#f0f9ff",border:"#bae6fd",
    desc:"সব কম্পিউটার কেন্দ্রীয় Hub বা Switch-এর সাথে আলাদাভাবে সংযুক্ত।",
    visual:["💻","💻","🔵 Hub","💻","💻"],
    pros:["একটি নষ্ট হলে বাকি চলে","সমস্যা সহজে চিহ্নিত করা যায়","সবচেয়ে জনপ্রিয়"],
    cons:["Hub নষ্ট হলে সব বন্ধ","ক্যাবল বেশি লাগে","Hub/Switch দাম"],
    use:"আধুনিক Ethernet, বেশিরভাগ অফিস/বাড়ির LAN",
  },
  {
    name:"Ring Topology",icon:"💍",color:"#7c3aed",bg:"#f5f3ff",border:"#ddd6fe",
    desc:"সব কম্পিউটার বৃত্তাকারে সংযুক্ত — ডেটা Token Passing পদ্ধতিতে একদিকে যায়।",
    visual:["💻→","→💻","↓","💻←","←💻"],
    pros:["সমান সুযোগ (Token)","কোনো Collision নেই","দীর্ঘ দূরত্বে কার্যকর"],
    cons:["একটি নষ্ট হলে পুরো নেটওয়ার্ক বিঘ্নিত","নতুন ডিভাইস যোগ করা কঠিন","ডেটা সব কম্পিউটার হয়ে যায়"],
    use:"পুরনো Token Ring Network, SONET",
  },
  {
    name:"Mesh Topology",icon:"🕸",color:"#16a34a",bg:"#f0fdf4",border:"#bbf7d0",
    desc:"প্রতিটি ডিভাইস অন্য সব ডিভাইসের সাথে সরাসরি সংযুক্ত।",
    visual:["Full","Mesh","n(n-1)/2","সংযোগ"],
    pros:["সর্বোচ্চ নির্ভরযোগ্যতা","বিকল্প পথে ডেটা যেতে পারে","নিরাপদ ও দ্রুত"],
    cons:["অনেক বেশি ক্যাবল","স্থাপনা জটিল","ব্যয়বহুল"],
    use:"Military নেটওয়ার্ক, ইন্টারনেটের মূল কাঠামো (ISP backbone)",
  },
  {
    name:"Tree Topology",icon:"🌳",color:"#ca8a04",bg:"#fefce8",border:"#fef08a",
    desc:"Bus + Star-এর সমন্বয় — কেন্দ্রীয় Bus-এ একাধিক Star সংযুক্ত। Hierarchical কাঠামো।",
    visual:["Root","Hub","Hub","PC PC","PC PC"],
    pros:["Hierarchical কাঠামো","সহজে প্রসারণযোগ্য","বড় নেটওয়ার্কের জন্য উপযুক্ত"],
    cons:["মূল Root নষ্ট হলে সব বন্ধ","জটিল কাঠামো","বেশি ক্যাবল"],
    use:"বিশ্ববিদ্যালয়, বড় অফিস নেটওয়ার্ক",
  },
];

export default function NetworkTopologyPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter2" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ২</Link>
          <span style={{color:BR}}>|</span>
          <Link href="/demo/chapter2/communication-media" style={{color:C,textDecoration:"none"}}>কমিউনিকেশন মাধ্যম</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>নেটওয়ার্ক টপোলজি</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ২.৩</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>নেটওয়ার্ক টপোলজি</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>Bus, Star, Ring, Mesh ও Tree — নেটওয়ার্কের ভৌত বিন্যাস</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>
          <p style={{color:"#475569",lineHeight:1.8,margin:"0 0 1.5rem",fontSize:"0.9rem"}}>
            Topology হলো নেটওয়ার্কে ডিভাইসগুলো কীভাবে পরস্পরের সাথে সংযুক্ত তার ভৌত বা যৌক্তিক বিন্যাস।
            প্রতিটি Topology-র নিজস্ব সুবিধা, অসুবিধা ও ব্যবহারক্ষেত্র আছে।
          </p>

          {topos.map(t=>(
            <div key={t.name} style={{background:t.bg,border:`1.5px solid ${t.border}`,borderLeft:`4px solid ${t.color}`,borderRadius:"0.875rem",padding:"1.25rem",marginBottom:"1rem"}}>
              <div style={{fontWeight:800,color:t.color,fontSize:"1rem",marginBottom:"0.375rem"}}>{t.icon} {t.name}</div>
              <p style={{color:"#475569",fontSize:"0.875rem",margin:"0 0 0.75rem",lineHeight:1.6}}>{t.desc}</p>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"}}>
                <div>
                  <div style={{fontWeight:700,color:"#16a34a",fontSize:"0.78rem",marginBottom:"0.35rem"}}>✅ সুবিধা</div>
                  <ul style={{margin:0,paddingLeft:"1rem",display:"flex",flexDirection:"column",gap:"0.15rem"}}>
                    {t.pros.map(p=><li key={p} style={{color:"#374151",fontSize:"0.78rem",lineHeight:1.5}}>{p}</li>)}
                  </ul>
                </div>
                <div>
                  <div style={{fontWeight:700,color:"#dc2626",fontSize:"0.78rem",marginBottom:"0.35rem"}}>❌ অসুবিধা</div>
                  <ul style={{margin:0,paddingLeft:"1rem",display:"flex",flexDirection:"column",gap:"0.15rem"}}>
                    {t.cons.map(c=><li key={c} style={{color:"#374151",fontSize:"0.78rem",lineHeight:1.5}}>{c}</li>)}
                  </ul>
                </div>
              </div>
              <div style={{marginTop:"0.625rem",fontSize:"0.78rem",color:"#64748b"}}><strong>ব্যবহার:</strong> {t.use}</div>
            </div>
          ))}

          <h3 style={h3s}>তুলনামূলক সারণি</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"500px"}}>
              <thead><tr>
                <th style={th}>টপোলজি</th><th style={th}>কেন্দ্র</th><th style={th}>একটি নষ্ট হলে</th><th style={th}>ক্যাবল</th><th style={th}>জনপ্রিয়তা</th>
              </tr></thead>
              <tbody>
                {[
                  ["🚌 Bus","একটি Bus","বাকি চলে (Bus নষ্ট হলে সব বন্ধ)","কম","কম (পুরনো)"],
                  ["⭐ Star","Hub/Switch","বাকি চলে (Hub নষ্ট = সব বন্ধ)","মাঝারি","সর্বোচ্চ"],
                  ["💍 Ring","নেই (বৃত্তাকার)","নেটওয়ার্ক বিঘ্নিত","মাঝারি","মাঝারি"],
                  ["🕸 Mesh","নেই (সব সংযুক্ত)","বাকি পথে চলে","সর্বোচ্চ","কম (ISP)"],
                  ["🌳 Tree","Root Hub","Root নষ্ট = সব বন্ধ","বেশি","মাঝারি"],
                ].map((r,i)=>(
                  <tr key={r[0]} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    {r.map((c,j)=><td key={j} style={{...td,fontWeight:j===0?600:400}}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem",marginTop:"1.5rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.1rem",lineHeight:2,color:"#1e293b",fontSize:"0.875rem"}}>
              <li>Star = সবচেয়ে জনপ্রিয়, Hub/Switch কেন্দ্রে</li>
              <li>Mesh = সবচেয়ে নির্ভরযোগ্য, n(n-1)/2 সংযোগ</li>
              <li>Bus = সহজ, মূল তার নষ্ট হলে সব বন্ধ</li>
              <li>Ring = Token Passing, বৃত্তাকার</li>
              <li>Tree = Bus + Star, Hierarchical</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#0e7490",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <NetworkTopologyQuiz />
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter2/communication-media" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← কমিউনিকেশন মাধ্যম</Link>
          <Link href="/demo/chapter2/network-types" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>নেটওয়ার্কের ধরন →</Link>
        </div>
      </div>
    </div>
  );
}
