import ProgramDesignQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "প্রোগ্রাম ডিজাইন টুলস — HSC ICT অধ্যায় ৫.২ | EduSocial BD" };
const C="#0891b2",BG="#ecfeff",BR="#a5f3fc";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const para:React.CSSProperties={color:"#475569",lineHeight:1.8,margin:0,fontSize:"0.95rem"};
const code:React.CSSProperties={fontFamily:"'Courier New',monospace",background:"#1e293b",color:"#e2e8f0",borderRadius:"0.625rem",padding:"1rem 1.25rem",display:"block",overflowX:"auto",fontSize:"0.85rem",lineHeight:1.9};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem"};
export default function ProgramDesignPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter5" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৫</Link>
          <span style={{color:BR}}>|</span>
          <Link href="/demo/chapter5/programming-concepts" style={{color:C,textDecoration:"none"}}>ভাষার ধারণা</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>ডিজাইন টুলস</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৫.২</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>প্রোগ্রাম ডিজাইন টুলস</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>অ্যালগরিদম, ফ্লোচার্ট ও সিউডোকোড — সমস্যা সমাধানের পদ্ধতি</p>
        </div>
        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          <h3 style={h3s}>অ্যালগরিদম (Algorithm)</h3>
          <p style={para}>কোনো সমস্যা সমাধানের জন্য ধাপে ধাপে সুনির্দিষ্ট নির্দেশের সমষ্টিকে অ্যালগরিদম বলে।</p>
          <div style={{background:"#f0f9ff",border:"1px solid #bae6fd",borderRadius:"0.75rem",padding:"1rem 1.25rem",margin:"0.75rem 0 1rem"}}>
            <div style={{fontWeight:700,color:"#0369a1",marginBottom:"0.5rem",fontSize:"0.875rem"}}>অ্যালগরিদমের ৫টি বৈশিষ্ট্য (FIDIE)</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:"0.5rem"}}>
              {[["Finiteness","নির্দিষ্ট ধাপে শেষ হয়"],["Input","শূন্য বা তার বেশি ইনপুট"],["Definiteness","প্রতিটি ধাপ স্পষ্ট"],["Output","কমপক্ষে একটি আউটপুট"],["Effectiveness","প্রতিটি ধাপ কার্যকর"]].map(([t,d])=>(
                <div key={t} style={{background:"#fff",border:"1px solid #bae6fd",borderRadius:"0.5rem",padding:"0.5rem 0.75rem"}}>
                  <div style={{fontWeight:700,color:C,fontSize:"0.8rem"}}>{t}</div>
                  <div style={{color:"#475569",fontSize:"0.75rem",marginTop:"0.15rem"}}>{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{background:"#f8fafc",borderRadius:"0.75rem",padding:"1rem",marginBottom:"1.5rem"}}>
            <div style={{fontWeight:700,color:"#1e293b",marginBottom:"0.5rem",fontSize:"0.875rem"}}>📝 উদাহরণ: দুটি সংখ্যার মধ্যে বড়টি বের করার অ্যালগরিদম</div>
            <pre style={{...code,margin:0}}>{`ধাপ ১: শুরু করো
ধাপ ২: দুটি সংখ্যা A ও B ইনপুট নাও
ধাপ ৩: যদি A > B হয়
          তাহলে প্রিন্ট করো "A বড়"
        অন্যথায়
          প্রিন্ট করো "B বড় বা সমান"
ধাপ ৪: শেষ করো`}</pre>
          </div>

          <h3 style={h3s}>ফ্লোচার্ট (Flowchart)</h3>
          <p style={para}>বিভিন্ন জ্যামিতিক চিহ্নের মাধ্যমে প্রোগ্রামের প্রবাহ চিত্রের আকারে উপস্থাপন করাকে ফ্লোচার্ট বলে।</p>

          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"380px"}}>
              <thead><tr><th style={th}>চিহ্ন</th><th style={th}>নাম</th><th style={th}>কাজ</th></tr></thead>
              <tbody>
                {[
                  ["⬭","Terminal (Oval)","Start / End — শুরু ও শেষ"],
                  ["▭","Process (Rectangle)","গণনা বা কার্যক্রম: sum = a + b"],
                  ["◇","Decision (Diamond)","শর্ত: Yes / No প্রশ্ন"],
                  ["▱","Input/Output (Parallelogram)","ডেটা ইনপুট বা আউটপুট"],
                  ["○","Connector (Circle)","ফ্লোচার্টের অংশ যোগসূত্র"],
                  ["→","Arrow (Flow line)","প্রবাহের দিক নির্দেশ"],
                ].map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>{r.map((c,j)=><td key={j} style={{...td,fontSize:j===0?"1.2rem":"0.875rem",fontWeight:j===1?700:400,color:j===1?C:"#374151",textAlign:j===0?"center":"left"}}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* visual flowchart example */}
          <div style={{background:"#f8fafc",borderRadius:"0.75rem",padding:"1.25rem",marginBottom:"1.5rem"}}>
            <div style={{fontWeight:700,color:"#1e293b",marginBottom:"1rem",fontSize:"0.875rem"}}>📊 উদাহরণ: একটি সংখ্যা জোড় না বেজোড় ফ্লোচার্ট</div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"0",fontFamily:"monospace",fontSize:"0.8rem"}}>
              {[
                {shape:"oval",label:"Start",bg:"#0891b2",color:"#fff"},
                {shape:"arrow",label:""},
                {shape:"para",label:"n ইনপুট নাও",bg:"#dbeafe"},
                {shape:"arrow",label:""},
                {shape:"diamond",label:"n % 2 == 0?",bg:"#fef9c3"},
                {shape:"branches",yes:"জোড় (Even)",no:"বেজোড় (Odd)"},
                {shape:"arrow2",label:""},
                {shape:"oval",label:"End",bg:"#0891b2",color:"#fff"},
              ].map((s,i)=>{
                if(s.shape==="arrow") return <div key={i} style={{width:2,height:20,background:"#94a3b8",margin:"0 auto"}}/>
                if(s.shape==="arrow2") return <div key={i} style={{width:2,height:20,background:"#94a3b8",margin:"0 auto"}}/>
                if(s.shape==="oval") return <div key={i} style={{background:s.bg,color:s.color,borderRadius:"50px",padding:"0.4rem 1.5rem",textAlign:"center",fontWeight:700,fontSize:"0.85rem",border:"2px solid #0891b2"}}>{s.label}</div>
                if(s.shape==="para") return <div key={i} style={{background:s.bg,border:"2px solid #93c5fd",padding:"0.4rem 1.25rem",textAlign:"center",transform:"skewX(-10deg)",display:"inline-block"}}><span style={{display:"inline-block",transform:"skewX(10deg)"}}>{s.label}</span></div>
                if(s.shape==="diamond") return <div key={i} style={{background:s.bg,border:"2px solid #fde047",width:"160px",height:"50px",transform:"rotate(45deg)",display:"flex",alignItems:"center",justifyContent:"center",margin:"10px auto"}}><span style={{transform:"rotate(-45deg)",fontSize:"0.7rem",fontWeight:700,color:"#854d0e",textAlign:"center",lineHeight:1.2}}>{s.label}</span></div>
                if(s.shape==="branches") return <div key={i} style={{display:"flex",gap:"3rem",justifyContent:"center",marginTop:"0.5rem"}}><div style={{textAlign:"center"}}><div style={{fontSize:"0.7rem",color:"#16a34a",marginBottom:"0.25rem"}}>✓ Yes</div><div style={{background:"#f0fdf4",border:"2px solid #86efac",borderRadius:"0.375rem",padding:"0.35rem 0.75rem",fontSize:"0.75rem",color:"#15803d",fontWeight:700}}>{s.yes}</div></div><div style={{textAlign:"center"}}><div style={{fontSize:"0.7rem",color:"#dc2626",marginBottom:"0.25rem"}}>✗ No</div><div style={{background:"#fef2f2",border:"2px solid #fca5a5",borderRadius:"0.375rem",padding:"0.35rem 0.75rem",fontSize:"0.75rem",color:"#b91c1c",fontWeight:700}}>{s.no}</div></div></div>
                return null;
              })}
            </div>
          </div>

          <h3 style={h3s}>সিউডোকোড (Pseudocode)</h3>
          <p style={{...para,marginBottom:"0.75rem"}}>সিউডোকোড হলো প্রোগ্রামের কাঠামো সাধারণ (ইংরেজি বা মিশ্র) ভাষায় লেখা খসড়া। নির্দিষ্ট কোনো প্রোগ্রামিং ভাষার Syntax মানতে হয় না।</p>
          <pre style={code}>{`BEGIN
  INPUT a, b
  IF a > b THEN
    PRINT "a বড়"
  ELSE
    PRINT "b বড় বা সমান"
  END IF
END`}</pre>

          <h3 style={h3s}>তিন ধরনের নিয়ন্ত্রণ কাঠামো</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.75rem",margin:"0.75rem 0 1.5rem",fontSize:"0.8rem"}}>
            {[
              {t:"Sequence",bn:"ধারাবাহিক",desc:"ধাপ একটির পর একটি চলে",color:"#0891b2",eg:"A→B→C"},
              {t:"Selection",bn:"শর্তমূলক",desc:"শর্ত অনুযায়ী ভিন্ন পথে যায়",color:"#7c3aed",eg:"if-else"},
              {t:"Iteration",bn:"পুনরাবৃত্তি",desc:"শর্ত পূরণ না হওয়া পর্যন্ত বারবার চলে",color:"#16a34a",eg:"for/while"},
            ].map(s=>(
              <div key={s.t} style={{background:"#fff",border:`2px solid ${s.color}30`,borderTop:`3px solid ${s.color}`,borderRadius:"0.625rem",padding:"0.75rem",textAlign:"center"}}>
                <div style={{fontWeight:700,color:s.color}}>{s.t}</div>
                <div style={{color:"#475569",fontSize:"0.75rem",margin:"0.2rem 0"}}>{s.bn}</div>
                <div style={{color:"#94a3b8",fontSize:"0.72rem",lineHeight:1.5}}>{s.desc}</div>
                <div style={{fontFamily:"monospace",fontSize:"0.78rem",color:"#1e293b",marginTop:"0.4rem",fontWeight:600}}>{s.eg}</div>
              </div>
            ))}
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.25rem",lineHeight:2,color:"#1e293b",fontSize:"0.9rem"}}>
              <li>Oval = Start/End | Rectangle = Process | Diamond = Decision | Parallelogram = I/O</li>
              <li>অ্যালগরিদমের ৫ বৈশিষ্ট্য: Finiteness, Input, Definiteness, Output, Effectiveness</li>
              <li>Pseudocode-এ কোনো নির্দিষ্ট Syntax নেই</li>
              <li>নিয়ন্ত্রণ কাঠামো ৩টি: Sequence, Selection, Iteration</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#0e7490",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <ProgramDesignQuiz />
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter5/programming-concepts" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← ভাষার ধারণা</Link>
          <Link href="/demo/chapter5/c-programming" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>C প্রোগ্রামিং →</Link>
        </div>
      </div>
    </div>
  );
}
