import Link from "next/link";
export const metadata = { title: "অধ্যায় ৩: ডিজিটাল ডিভাইস — HSC ICT | EduSocial BD" };
export default function Chapter3Index(){
  const topics=[
    {slug:"number-systems",title:"সংখ্যা পদ্ধতি",en:"Number Systems",desc:"Binary, Octal, Decimal, Hex, BCD, ASCII",stars:5,color:"#2563eb",bg:"#eff6ff",section:"৩.১"},
    {slug:"binary-arithmetic",title:"বাইনারি গণিত",en:"Binary Arithmetic",desc:"১-এর পূরক, ২-এর পূরক, বাইনারি যোগ-বিয়োগ",stars:5,color:"#0891b2",bg:"#ecfeff",section:"৩.২"},
    {slug:"logic-gates",title:"লজিক গেট",en:"Logic Gates",desc:"AND, OR, NOT, NAND, NOR, XOR — Truth Table",stars:5,color:"#7c3aed",bg:"#f5f3ff",section:"৩.৩"},
    {slug:"boolean-algebra",title:"বুলিয়ান অ্যালজেব্রা",en:"Boolean Algebra",desc:"De Morgan's Theorem, সরলীকরণ, সূত্রাবলি",stars:4,color:"#059669",bg:"#f0fdf4",section:"৩.৪"},
    {slug:"half-full-adder",title:"হাফ ও ফুল অ্যাডার",en:"Half & Full Adder",desc:"Sum, Carry — XOR ও AND গেট দিয়ে সার্কিট",stars:4,color:"#d97706",bg:"#fffbeb",section:"৩.৫"},
    {slug:"encoder-decoder",title:"এনকোডার ও ডিকোডার",en:"Encoder & Decoder",desc:"2-to-4 Decoder, 4-to-2 Encoder, 7-segment",stars:3,color:"#dc2626",bg:"#fef2f2",section:"৩.৬"},
    {slug:"flip-flop",title:"ফ্লিপ-ফ্লপ",en:"Flip-Flop",desc:"SR, JK, D, T ফ্লিপ-ফ্লপ — Sequential Circuit",stars:4,color:"#9333ea",bg:"#fdf4ff",section:"৩.৭"},
  ];
  return(
    <div style={{minHeight:"100vh",background:"#f8fafc",fontFamily:"'Noto Sans Bengali',system-ui,sans-serif"}}>
      <div style={{background:"#0f172a",padding:"3rem 1rem 2.5rem"}}>
        <div style={{maxWidth:"760px",margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem",flexWrap:"wrap"}}>
            <Link href="/demo" style={{color:"#94a3b8",textDecoration:"none",fontSize:"0.875rem"}}>← ডেমো হোম</Link>
            <span style={{color:"#334155"}}>|</span>
            <Link href="/demo/chapter2" style={{color:"#94a3b8",textDecoration:"none",fontSize:"0.875rem"}}>অধ্যায় ২</Link>
            <span style={{color:"#334155"}}>|</span>
            <span style={{color:"#64748b",fontSize:"0.875rem"}}>অধ্যায় ৩</span>
          </div>
          <div style={{display:"flex",gap:"0.75rem",flexWrap:"wrap",marginBottom:"1rem"}}>
            <span style={{background:"#1e40af",color:"#bfdbfe",borderRadius:"0.5rem",padding:"0.3rem 0.7rem",fontSize:"0.78rem",fontWeight:600}}>HSC ICT</span>
            <span style={{background:"#374151",color:"#d1d5db",borderRadius:"0.5rem",padding:"0.3rem 0.7rem",fontSize:"0.78rem"}}>NCTB পাঠ্যক্রম</span>
          </div>
          <h1 style={{fontSize:"clamp(1.5rem,4vw,2.5rem)",fontWeight:800,color:"#f1f5f9",margin:"0 0 0.75rem",lineHeight:1.2}}>
            অধ্যায় ৩<br/><span style={{color:"#7dd3fc"}}>ডিজিটাল ডিভাইস</span>
          </h1>
          <p style={{color:"#94a3b8",fontSize:"1rem",margin:"0 0 2rem",lineHeight:1.7}}>
            সংখ্যা পদ্ধতি থেকে ফ্লিপ-ফ্লপ পর্যন্ত — ডিজিটাল লজিক ও সার্কিটের পূর্ণ বিশ্লেষণ
          </p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1rem"}}>
            {[["৭","বিষয়"],["৭০","MCQ"],["১৫","পাঠ্যবইয়ের প্রশ্ন"]].map(([n,l])=>(
              <div key={l} style={{background:"#1e293b",borderRadius:"0.875rem",padding:"1.25rem",textAlign:"center"}}>
                <div style={{fontSize:"1.75rem",fontWeight:800,color:"#38bdf8"}}>{n}</div>
                <div style={{color:"#94a3b8",fontSize:"0.8rem",marginTop:"0.25rem"}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:"#1e293b",padding:"1.5rem 1rem"}}>
        <div style={{maxWidth:"760px",margin:"0 auto"}}>
          <h2 style={{color:"#f1f5f9",fontWeight:700,fontSize:"1rem",marginBottom:"1rem"}}>📊 বিষয়ভিত্তিক গুরুত্ব বিশ্লেষণ</h2>
          <div style={{display:"flex",flexDirection:"column",gap:"0.625rem"}}>
            {topics.map(t=>(
              <div key={t.slug} style={{display:"flex",alignItems:"center",gap:"0.75rem",flexWrap:"wrap"}}>
                <span style={{color:"#64748b",fontSize:"0.78rem",minWidth:"30px"}}>{t.section}</span>
                <span style={{color:"#e2e8f0",fontSize:"0.875rem",minWidth:"150px"}}>{t.title}</span>
                <div style={{display:"flex",gap:"0.2rem"}}>{Array.from({length:5},(_,i)=><span key={i} style={{color:i<t.stars?"#fbbf24":"#334155",fontSize:"0.875rem"}}>★</span>)}</div>
                <span style={{color:"#94a3b8",fontSize:"0.75rem"}}>{t.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{padding:"2rem 1rem"}}>
        <div style={{maxWidth:"760px",margin:"0 auto"}}>
          <h2 style={{fontSize:"1.1rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem"}}>📚 বিষয়সমূহ</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:"1rem",marginBottom:"1.5rem"}}>
            {topics.map(t=>(
              <Link key={t.slug} href={`/demo/chapter3/${t.slug}`} style={{textDecoration:"none"}}>
                <div style={{background:"#fff",border:"1px solid #e2e8f0",borderTop:`3px solid ${t.color}`,borderRadius:"0.875rem",padding:"1.25rem",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.5rem"}}>
                    <div>
                      <span style={{fontSize:"0.75rem",color:t.color,fontWeight:600}}>{t.section}</span>
                      <h3 style={{fontSize:"1rem",fontWeight:700,color:"#0f172a",margin:"0.2rem 0 0"}}>{t.title}</h3>
                      <div style={{fontSize:"0.78rem",color:"#94a3b8"}}>{t.en}</div>
                    </div>
                    <div style={{background:t.bg,color:t.color,borderRadius:"0.5rem",padding:"0.35rem 0.6rem",fontSize:"0.75rem",fontWeight:600,whiteSpace:"nowrap"}}>১০ MCQ</div>
                  </div>
                  <p style={{color:"#64748b",fontSize:"0.82rem",margin:"0.5rem 0 0",lineHeight:1.6}}>{t.desc}</p>
                  <div style={{display:"flex",gap:"0.2rem",marginTop:"0.75rem"}}>{Array.from({length:5},(_,i)=><span key={i} style={{color:i<t.stars?"#fbbf24":"#e2e8f0",fontSize:"0.8rem"}}>★</span>)}</div>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/demo/chapter3/textbook-quiz" style={{textDecoration:"none",display:"block"}}>
            <div style={{background:"linear-gradient(135deg,#1e293b 0%,#0f172a 100%)",borderRadius:"0.875rem",padding:"1.5rem 2rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"}}>
              <div>
                <div style={{color:"#7dd3fc",fontWeight:700,fontSize:"1rem",marginBottom:"0.25rem"}}>📝 পাঠ্যবইয়ের কুইজ</div>
                <div style={{color:"#94a3b8",fontSize:"0.875rem"}}>NCTB অনুশীলনী — ১৫টি MCQ (৩.১ – ৩.৭)</div>
              </div>
              <div style={{background:"#1d4ed8",color:"#fff",borderRadius:"0.625rem",padding:"0.6rem 1.25rem",fontSize:"0.875rem",fontWeight:600}}>শুরু করুন →</div>
            </div>
          </Link>
        </div>
      </div>
      <div style={{borderTop:"1px solid #e2e8f0",padding:"1.5rem 1rem"}}>
        <div style={{maxWidth:"760px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter2" style={{color:"#2563eb",fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← পূর্ববর্তী: অধ্যায় ২</Link>
          <Link href="/demo/chapter4" style={{color:"#2563eb",fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>পরবর্তী: অধ্যায় ৪ →</Link>
        </div>
      </div>
    </div>
  );
}
