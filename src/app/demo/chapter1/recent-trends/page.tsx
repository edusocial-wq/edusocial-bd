import RecentTrendsQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "তথ্য প্রযুক্তির সাম্প্রতিক প্রবণতা — HSC ICT অধ্যায় ১.২ | EduSocial BD" };
const C="#7c3aed",BG="#f5f3ff",BR="#ddd6fe";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem",color:"#374151"};

const trends = [
  {
    name:"Artificial Intelligence (AI)",short:"AI",icon:"🤖",color:"#7c3aed",
    def:"মানুষের বুদ্ধিমত্তার অনুকরণে যন্ত্রে কৃত্রিম বুদ্ধিমত্তা তৈরির বিজ্ঞান।",
    points:["Machine Learning: অভিজ্ঞতা থেকে নিজে শেখে","Natural Language Processing: ভাষা বোঝে","Computer Vision: ছবি ও ভিডিও বিশ্লেষণ","ChatGPT, Claude, Google Bard — AI চ্যাটবট"],
    use:"চিকিৎসা রোগ নির্ণয়, স্বায়ত্তশাসিত গাড়ি, ভাষা অনুবাদ, সুপারিশ ব্যবস্থা",
  },
  {
    name:"Robotics (রোবোটিক্স)",short:"Robotics",icon:"🦾",color:"#0284c7",
    def:"স্বয়ংক্রিয় যন্ত্র (Robot) তৈরি, প্রোগ্রামিং ও পরিচালনার বিজ্ঞান।",
    points:["Sensor দিয়ে পরিবেশ পর্যবেক্ষণ করে","Actuator দিয়ে কাজ সম্পাদন করে","AI সংযুক্ত Robot নিজে সিদ্ধান্ত নেয়","Industrial, Medical, Military — বিভিন্ন ধরন"],
    use:"গাড়ি কারখানা, হৃদরোগের অপারেশন, বোমা নিষ্ক্রিয়, মঙ্গলগ্রহ অনুসন্ধান",
  },
  {
    name:"Virtual Reality (VR)",short:"VR",icon:"🥽",color:"#0891b2",
    def:"কম্পিউটার প্রযুক্তিতে তৈরি কৃত্রিম পরিবেশে বাস্তবের মতো অনুভূতি।",
    points:["VR Headset পরে পুরোপুরি কৃত্রিম জগতে প্রবেশ","360° দৃশ্য ও শব্দ সিমুলেশন","Augmented Reality (AR): বাস্তবের সাথে কৃত্রিম মিশ্রণ","Mixed Reality (MR): VR + AR"],
    use:"পাইলট প্রশিক্ষণ, সার্জারি অনুশীলন, ভার্চুয়াল পর্যটন, গেমিং",
  },
  {
    name:"Cryosurgery (ক্রায়োসার্জারি)",short:"Cryosurgery",icon:"🧊",color:"#dc2626",
    def:"তীব্র শীতল তাপমাত্রা (-196°C) ব্যবহার করে রোগাক্রান্ত টিস্যু ধ্বংসের চিকিৎসা পদ্ধতি।",
    points:["তরল নাইট্রোজেন বা Argon গ্যাস ব্যবহার","ক্যান্সার, ত্বকের রোগ চিকিৎসায় কার্যকর","পার্শ্বপ্রতিক্রিয়া কম","ন্যূনতম আক্রমণাত্মক পদ্ধতি"],
    use:"ত্বকের ক্যান্সার, জরায়ু ক্যান্সার, প্রোস্টেট ক্যান্সার চিকিৎসা",
  },
  {
    name:"Bioinformatics (বায়োইনফরম্যাটিক্স)",short:"Bioinformatics",icon:"🧬",color:"#16a34a",
    def:"জীববিজ্ঞান + তথ্য প্রযুক্তির সমন্বয়ে জৈবিক ডেটা বিশ্লেষণের বিজ্ঞান।",
    points:["DNA সিকোয়েন্স বিশ্লেষণ","প্রোটিন গঠন নির্ধারণ","জিনোম ম্যাপিং (Human Genome Project)","রোগের জিনগত কারণ খোঁজা"],
    use:"ওষুধ আবিষ্কার, জিনগত রোগ নির্ণয়, ফরেনসিক বিজ্ঞান",
  },
  {
    name:"Nanotechnology (ন্যানোটেকনোলজি)",short:"Nano",icon:"⚛️",color:"#ca8a04",
    def:"1-100 ন্যানোমিটার স্কেলে পদার্থ তৈরি, পরিচালনা ও ব্যবহারের প্রযুক্তি। 1nm = 10⁻⁹ m।",
    points:["চুলের চেয়ে ৮০,০০০ গুণ পাতলা","Nano particles ওষুধ সরাসরি রোগাক্রান্ত কোষে পৌঁছে দেয়","Carbon Nanotube — অসাধারণ শক্তিশালী","আরও ছোট CPU চিপ তৈরি সম্ভব"],
    use:"ক্যান্সার চিকিৎসা, সৌরকোষ, ন্যানো ইলেকট্রনিক্স, উন্নত উপকরণ",
  },
  {
    name:"Genetic Engineering (জেনেটিক ইঞ্জিনিয়ারিং)",short:"GE",icon:"🔬",color:"#dc2626",
    def:"জীবের DNA পরিবর্তন, মুছে ফেলা বা নতুন জিন সংযোজনের প্রযুক্তি।",
    points:["Recombinant DNA Technology ব্যবহার","GMO (Genetically Modified Organism) ফসল","CRISPR-Cas9 — আধুনিক জিন সম্পাদনা","জেনেটিক রোগ নিরাময়ের সম্ভাবনা"],
    use:"ইনসুলিন উৎপাদন, রোগ-প্রতিরোধী ফসল, থেরাপি, ভ্যাকসিন তৈরি",
  },
];

export default function RecentTrendsPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter1" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ১</Link>
          <span style={{color:BR}}>|</span>
          <Link href="/demo/chapter1/global-village" style={{color:C,textDecoration:"none"}}>বিশ্বগ্রাম</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>সাম্প্রতিক প্রবণতা</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ১.২</span>
          <h1 style={{fontSize:"clamp(1.4rem,4vw,2rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>তথ্য প্রযুক্তির সাম্প্রতিক প্রবণতা</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>AI, Robotics, VR, Cryosurgery, Bioinformatics, Nanotechnology, Genetic Engineering</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>
          {trends.map(t=>(
            <div key={t.name} style={{background:"#f8fafc",border:`1.5px solid ${t.color}30`,borderLeft:`4px solid ${t.color}`,borderRadius:"0.875rem",padding:"1.25rem",marginBottom:"1rem"}}>
              <div style={{display:"flex",alignItems:"baseline",gap:"0.625rem",marginBottom:"0.5rem",flexWrap:"wrap"}}>
                <span style={{fontSize:"1.5rem"}}>{t.icon}</span>
                <span style={{fontWeight:800,color:t.color,fontSize:"1rem"}}>{t.name}</span>
              </div>
              <p style={{color:"#475569",fontSize:"0.875rem",margin:"0 0 0.75rem",lineHeight:1.6,background:"#fff",padding:"0.625rem",borderRadius:"0.5rem",border:`1px solid ${t.color}20`}}>
                {t.def}
              </p>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem 1rem"}}>
                <div>
                  <div style={{fontWeight:700,color:"#1e293b",fontSize:"0.78rem",marginBottom:"0.35rem"}}>মূল বৈশিষ্ট্য:</div>
                  <ul style={{margin:0,paddingLeft:"1rem",display:"flex",flexDirection:"column",gap:"0.15rem"}}>
                    {t.points.map(p=><li key={p} style={{color:"#475569",fontSize:"0.78rem",lineHeight:1.5}}>{p}</li>)}
                  </ul>
                </div>
                <div>
                  <div style={{fontWeight:700,color:"#1e293b",fontSize:"0.78rem",marginBottom:"0.35rem"}}>ব্যবহার:</div>
                  <p style={{color:"#64748b",fontSize:"0.78rem",lineHeight:1.5,margin:0}}>{t.use}</p>
                </div>
              </div>
            </div>
          ))}

          <h3 style={h3s}>তুলনামূলক সারণি</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"440px"}}>
              <thead><tr><th style={th}>প্রযুক্তি</th><th style={th}>মূল ধারণা</th><th style={th}>গুরুত্বপূর্ণ তথ্য</th></tr></thead>
              <tbody>
                {[
                  ["AI","মানুষের মতো বুদ্ধিমত্তা","Machine Learning, Neural Network"],
                  ["Robotics","স্বয়ংক্রিয় যন্ত্র","Sensor + Actuator + AI"],
                  ["VR","কৃত্রিম পরিবেশ","VR Headset, 360° অনুভূতি"],
                  ["Cryosurgery","শীতল তাপমাত্রায় চিকিৎসা","-196°C, তরল নাইট্রোজেন"],
                  ["Bioinformatics","জীববিজ্ঞান + ICT","DNA বিশ্লেষণ, জিনোম"],
                  ["Nanotechnology","ন্যানো স্কেল প্রযুক্তি","1nm = 10⁻⁹ m"],
                  ["Genetic Engineering","জিন পরিবর্তন","DNA, CRISPR, GMO"],
                ].map((r,i)=>(
                  <tr key={r[0]} style={{background:i%2===0?"#fff":"#f8fafc"}}>
                    {r.map((c,j)=><td key={j} style={{...td,fontWeight:j===0?700:400,fontFamily:j===2?"monospace":"inherit",fontSize:j===2?"0.8rem":"0.875rem"}}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem",marginTop:"1.5rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.1rem",lineHeight:2,color:"#1e293b",fontSize:"0.875rem"}}>
              <li>AI = কৃত্রিম বুদ্ধিমত্তা — Machine Learning এর উপরের স্তর</li>
              <li>VR = সম্পূর্ণ কৃত্রিম | AR = বাস্তবের সাথে কৃত্রিম মিশ্রণ</li>
              <li>Cryosurgery = তরল নাইট্রোজেন (-196°C) দিয়ে চিকিৎসা</li>
              <li>Bioinformatics = Biology + IT = DNA বিশ্লেষণ</li>
              <li>1 nm = 10⁻⁹ মিটার (Nanotechnology-র একক)</li>
              <li>Genetic Engineering = CRISPR, GMO, ইনসুলিন</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#6d28d9",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <RecentTrendsQuiz />
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter1/global-village" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← বিশ্বগ্রাম</Link>
          <Link href="/demo/chapter1/digital-bangladesh" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>ডিজিটাল বাংলাদেশ →</Link>
        </div>
      </div>
    </div>
  );
}
