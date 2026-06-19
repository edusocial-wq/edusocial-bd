import ProgrammingConceptsQuiz from "./quiz";
import Link from "next/link";
export const metadata = { title: "প্রোগ্রামিং ভাষার ধারণা — HSC ICT অধ্যায় ৫.১ | EduSocial BD" };
const C="#7c3aed",BG="#f5f3ff",BR="#ddd6fe";
const card:React.CSSProperties={background:"#fff",border:"1px solid #e2e8f0",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"};
const h2s:React.CSSProperties={fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"2px solid #e2e8f0"};
const h3s:React.CSSProperties={fontSize:"1rem",fontWeight:700,color:"#1e293b",margin:"1.5rem 0 0.4rem"};
const para:React.CSSProperties={color:"#475569",lineHeight:1.8,margin:0,fontSize:"0.95rem"};
const th:React.CSSProperties={padding:"0.5rem 0.75rem",border:"1px solid #e2e8f0",fontWeight:700,color:"#475569",textAlign:"left",background:"#f1f5f9"};
const td:React.CSSProperties={padding:"0.45rem 0.75rem",border:"1px solid #e2e8f0",fontSize:"0.875rem"};
export default function ProgrammingConceptsPage(){
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:"'Noto Sans Bengali',system-ui,sans-serif",padding:"2rem 1rem"}}>
      <div style={{maxWidth:"740px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <Link href="/demo/chapter5" style={{color:C,textDecoration:"none",fontWeight:600}}>← অধ্যায় ৫</Link>
          <span style={{color:BR}}>|</span><span style={{color:"#6b7280"}}>প্রোগ্রামিং ভাষার ধারণা</span>
        </div>
        <div style={{marginBottom:"2rem"}}>
          <span style={{background:C,color:"#fff",borderRadius:"0.5rem",padding:"0.35rem 0.75rem",fontSize:"0.8rem",fontWeight:600,display:"inline-block",marginBottom:"0.5rem"}}>HSC ICT · অধ্যায় ৫.১</span>
          <h1 style={{fontSize:"clamp(1.6rem,4vw,2.25rem)",fontWeight:800,color:"#0f172a",margin:"0 0 0.5rem"}}>প্রোগ্রামিং ভাষার ধারণা</h1>
          <p style={{color:"#64748b",fontSize:"1rem",margin:0}}>মেশিন থেকে উচ্চস্তর — প্রোগ্রামিং ভাষার বিকাশ ও শ্রেণিবিভাগ</p>
        </div>
        <div style={card}>
          <h2 style={h2s}>📖 বিষয় ব্যাখ্যা</h2>

          <h3 style={h3s}>প্রোগ্রামিং ভাষা কী?</h3>
          <p style={para}>কম্পিউটারকে নির্দেশ দেওয়ার জন্য ব্যবহৃত বিশেষ ভাষাকে প্রোগ্রামিং ভাষা বলে। এই ভাষায় লেখা নির্দেশের সমষ্টিকে প্রোগ্রাম বলে। প্রতিটি ভাষার নিজস্ব Syntax (গঠন) ও Semantics (অর্থ) আছে।</p>

          <h3 style={h3s}>প্রজন্ম অনুযায়ী শ্রেণিবিভাগ</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"420px"}}>
              <thead><tr><th style={th}>প্রজন্ম</th><th style={th}>নাম</th><th style={th}>উদাহরণ</th><th style={th}>বৈশিষ্ট্য</th></tr></thead>
              <tbody>
                {[
                  ["1GL","Machine Language","0101 1010","CPU সরাসরি বোঝে, দ্রুততম"],
                  ["2GL","Assembly Language","ADD, MOV, SUB","Mnemonic কোড, Assembler দরকার"],
                  ["3GL","High-Level Language","C, FORTRAN, COBOL","মানুষের ভাষার কাছাকাছি"],
                  ["4GL","Very High-Level","SQL, MATLAB","কম কোডে বেশি কাজ"],
                  ["5GL","AI/Natural Language","Prolog, LISP","সমস্যা বর্ণনা করলে সমাধান খোঁজে"],
                ].map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>{r.map((c,j)=><td key={j} style={{...td,fontWeight:j===0?700:400,color:j===0?C:"#374151",fontFamily:j<=2?"monospace":"inherit"}}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={h3s}>নিম্নস্তরের ভাষা (Low-Level Language)</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{background:"#fef2f2",border:"1.5px solid #fecaca",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#b91c1c",marginBottom:"0.5rem",fontSize:"0.9rem"}}>🔴 মেশিন ভাষা (1GL)</div>
              <ul style={{margin:0,paddingLeft:"1.25rem",color:"#475569",fontSize:"0.825rem",lineHeight:1.8}}>
                <li>শুধু 0 ও 1 ব্যবহার</li>
                <li>CPU সরাসরি বোঝে</li>
                <li>ট্রান্সলেটর দরকার নেই</li>
                <li>মেশিন-নির্ভর (portable নয়)</li>
                <li>লেখা ও বোঝা কঠিন</li>
              </ul>
            </div>
            <div style={{background:"#fffbeb",border:"1.5px solid #fde68a",borderRadius:"0.75rem",padding:"1rem"}}>
              <div style={{fontWeight:700,color:"#b45309",marginBottom:"0.5rem",fontSize:"0.9rem"}}>🟡 অ্যাসেম্বলি ভাষা (2GL)</div>
              <ul style={{margin:0,paddingLeft:"1.25rem",color:"#475569",fontSize:"0.825rem",lineHeight:1.8}}>
                <li>Mnemonic কোড: ADD, SUB, MOV</li>
                <li>Assembler দিয়ে রূপান্তর</li>
                <li>মেশিন-নির্ভর</li>
                <li>হার্ডওয়্যার নিয়ন্ত্রণ সম্ভব</li>
                <li>Machine ভাষার চেয়ে সহজ</li>
              </ul>
            </div>
          </div>

          <h3 style={h3s}>উচ্চস্তরের ভাষা (High-Level Language)</h3>
          <div style={{background:"#f0fdf4",border:"1.5px solid #bbf7d0",borderRadius:"0.75rem",padding:"1rem",margin:"0.75rem 0 1.5rem"}}>
            <ul style={{margin:0,paddingLeft:"1.25rem",color:"#1e293b",fontSize:"0.875rem",lineHeight:1.9}}>
              <li>মানুষের ভাষার কাছাকাছি — পড়তে ও লিখতে সহজ</li>
              <li>Machine-independent — Compiler/Interpreter দরকার</li>
              <li>Portable — বিভিন্ন কম্পিউটারে চলে</li>
              <li>উদাহরণ: C, C++, Java, Python, PHP, JavaScript</li>
            </ul>
          </div>

          <h3 style={h3s}>ট্রান্সলেটর — Compiler, Interpreter, Assembler</h3>
          <div style={{overflowX:"auto",margin:"0.75rem 0 1.5rem"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:"400px"}}>
              <thead><tr><th style={th}>ট্রান্সলেটর</th><th style={th}>কাজ</th><th style={th}>অনুবাদ পদ্ধতি</th><th style={th}>উদাহরণ</th></tr></thead>
              <tbody>
                {[
                  ["Compiler","উচ্চস্তরের → মেশিন কোড","পুরো প্রোগ্রাম একসাথে","GCC (C কম্পাইলার)"],
                  ["Interpreter","উচ্চস্তরের → মেশিন কোড","লাইন ধরে ধরে","Python Interpreter"],
                  ["Assembler","অ্যাসেম্বলি → মেশিন কোড","Mnemonic → Binary","MASM, NASM"],
                ].map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc"}}>{r.map((c,j)=><td key={j} style={{...td,fontWeight:j===0?700:400,color:j===0?C:"#374151"}}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{background:"#e0e7ff",border:"1px solid #a5b4fc",borderRadius:"0.75rem",padding:"1rem 1.25rem",margin:"0.75rem 0 1.5rem"}}>
            <div style={{fontWeight:700,color:"#3730a3",marginBottom:"0.75rem",fontSize:"0.875rem"}}>⚡ Compiler বনাম Interpreter তুলনা</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem",fontSize:"0.825rem"}}>
              <div><div style={{fontWeight:700,color:"#4f46e5",marginBottom:"0.4rem"}}>Compiler</div><ul style={{margin:0,paddingLeft:"1rem",color:"#374151",lineHeight:1.8}}><li>পুরো প্রোগ্রাম অনুবাদ করে</li><li>Object file তৈরি হয়</li><li>দ্রুততর execution</li><li>error সব শেষে দেখায়</li></ul></div>
              <div><div style={{fontWeight:700,color:"#7c3aed",marginBottom:"0.4rem"}}>Interpreter</div><ul style={{margin:0,paddingLeft:"1rem",color:"#374151",lineHeight:1.8}}><li>লাইন ধরে ধরে অনুবাদ</li><li>Object file তৈরি হয় না</li><li>ধীর execution</li><li>error তাৎক্ষণিক দেখায়</li></ul></div>
            </div>
          </div>

          <div style={{background:"#fef9c3",border:"1px solid #fde047",borderRadius:"0.75rem",padding:"1rem 1.25rem"}}>
            <strong style={{color:"#854d0e"}}>💡 পরীক্ষার টিপস:</strong>
            <ul style={{margin:"0.5rem 0 0",paddingLeft:"1.25rem",lineHeight:2,color:"#1e293b",fontSize:"0.9rem"}}>
              <li>1GL = Machine, 2GL = Assembly, 3GL = C/Java/Python</li>
              <li>Assembler → Assembly ভাষার ট্রান্সলেটর</li>
              <li>Compiler = পুরো একসাথে | Interpreter = লাইন ধরে</li>
              <li>Interpreter-এ error তাৎক্ষণিক ধরা যায়</li>
              <li>Compiler-এ Object file তৈরি হয়</li>
            </ul>
          </div>
        </div>

        <div style={{background:"#fff",border:`2px solid ${C}`,borderRadius:"1rem",padding:"2rem",boxShadow:`0 4px 12px ${C}20`}}>
          <h2 style={{...h2s,color:"#6d28d9",borderBottomColor:BR}}>✏️ কুইজ — ১০টি MCQ প্রশ্ন</h2>
          <ProgrammingConceptsQuiz />
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <Link href="/demo/chapter5" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>← অধ্যায় ৫ সূচি</Link>
          <Link href="/demo/chapter5/program-design" style={{color:C,fontWeight:600,textDecoration:"none",fontSize:"0.9rem"}}>প্রোগ্রাম ডিজাইন টুলস →</Link>
        </div>
      </div>
    </div>
  );
}
