"use client";
import { useState } from "react";
import Link from "next/link";

const questions = [
  { q: "ডেটা কমিউনিকেশনের কয়টি উপাদান আছে?", options: ["৫টি","৩টি","৪টি","৬টি"], answer: 0, ref: "২.১ ডেটা কমিউনিকেশন", explanation: "ডেটা কমিউনিকেশনের ৫টি উপাদান: Sender, Receiver, Message, Medium, Protocol।" },
  { q: "Half-Duplex ট্রান্সমিশনের উদাহরণ কোনটি?", options: ["টেলিফোন","রেডিও সম্প্রচার","Walkie-Talkie","ভিডিও কল"], answer: 2, ref: "২.১ ডেটা কমিউনিকেশন", explanation: "Half-Duplex: দুদিকে কিন্তু একই সময়ে নয়। Walkie-Talkie-তে একজন কথা বললে অপরজন শোনে।" },
  { q: "কোন মাধ্যম আলোক তরঙ্গ ব্যবহার করে?", options: ["Twisted Pair","Fiber Optic Cable","Coaxial Cable","Radio Wave"], answer: 1, ref: "২.২ কমিউনিকেশন মাধ্যম", explanation: "Fiber Optic Cable আলোক তরঙ্গ (Light Pulse) ব্যবহার করে। সবচেয়ে দ্রুত ও নিরাপদ মাধ্যম।" },
  { q: "Star Topology-তে কেন্দ্রীয় ডিভাইস কোনটি?", options: ["Router","Modem","Repeater","Hub বা Switch"], answer: 3, ref: "২.৩ নেটওয়ার্ক টপোলজি", explanation: "Star Topology-তে সব কম্পিউটার কেন্দ্রীয় Hub বা Switch-এর সাথে সংযুক্ত।" },
  { q: "LAN-এর পরিসর কত?", options: ["১০০ কিমি পর্যন্ত","১০ কিমি পর্যন্ত","১ কিমি পর্যন্ত","সীমাহীন"], answer: 2, ref: "২.৪ নেটওয়ার্কের ধরন", explanation: "LAN (Local Area Network) সাধারণত ১ কিমি পর্যন্ত বিস্তৃত — একটি ভবন বা ক্যাম্পাস।" },
  { q: "IPv4 Address কত বিটের?", options: ["৩২ বিটের","৬৪ বিটের","১২৮ বিটের","১৬ বিটের"], answer: 0, ref: "২.৫ ইন্টারনেট ও প্রোটোকল", explanation: "IPv4 = ৩২ বিট। চারটি অক্টেটে লেখা হয় (যেমন: 192.168.1.1)।" },
  { q: "DNS-এর কাজ কী?", options: ["ডেটা এনক্রিপ্ট করা","ফাইল ট্রান্সফার","ইমেইল পাঠানো","Domain Name → IP Address রূপান্তর"], answer: 3, ref: "২.৫ ইন্টারনেট ও প্রোটোকল", explanation: "DNS (Domain Name System) Domain Name (google.com) কে IP Address (142.250.x.x)-এ রূপান্তর করে।" },
  { q: "Mesh Topology-তে n টি ডিভাইসে কতটি সংযোগ লাগে?", options: ["n×2","n(n-1)/2","n-1","n²"], answer: 1, ref: "২.৩ নেটওয়ার্ক টপোলজি", explanation: "Mesh Topology-তে Full Mesh-এ n(n-1)/2 সংযোগ লাগে। ৪টি ডিভাইস = 4×3/2 = 6 সংযোগ।" },
  { q: "ইমেইল পাঠাতে কোন প্রোটোকল ব্যবহার হয়?", options: ["SMTP","HTTP","FTP","DNS"], answer: 0, ref: "২.৫ ইন্টারনেট ও প্রোটোকল", explanation: "SMTP (Simple Mail Transfer Protocol) ইমেইল পাঠাতে ব্যবহৃত হয়। Port 25।" },
  { q: "কোনটি Unguided (তারবিহীন) মাধ্যম নয়?", options: ["Radio Wave","Microwave","Bluetooth","Fiber Optic Cable"], answer: 3, ref: "২.২ কমিউনিকেশন মাধ্যম", explanation: "Fiber Optic Cable হলো Guided (তারযুক্ত) মাধ্যম — আলো তারের মধ্য দিয়ে যায়।" },
  { q: "PAN কোন প্রযুক্তি ব্যবহার করে?", options: ["Ethernet","Fiber Optic","Bluetooth","Satellite"], answer: 2, ref: "২.৪ নেটওয়ার্কের ধরন", explanation: "PAN (Personal Area Network) Bluetooth বা Infrared ব্যবহার করে। ব্যক্তিগত ডিভাইসের মধ্যে সংযোগ।" },
  { q: "Bus Topology-তে মূল ক্যাবল নষ্ট হলে কী হয়?", options: ["শুধু একটি কম্পিউটার বন্ধ","পুরো নেটওয়ার্ক বন্ধ হয়","কিছুই হয় না","নেটওয়ার্ক ধীর হয়"], answer: 1, ref: "২.৩ নেটওয়ার্ক টপোলজি", explanation: "Bus Topology-তে মূল ক্যাবল (Bus) নষ্ট হলে পুরো নেটওয়ার্ক বন্ধ হয় — এটি এর প্রধান দুর্বলতা।" },
  { q: "Bandwidth-এর একক কোনটি?", options: ["Byte","bps (bit per second)","Hz","Watt"], answer: 1, ref: "২.১ ডেটা কমিউনিকেশন", explanation: "Bandwidth-এর একক bps (bit per second), Kbps, Mbps, Gbps। এটি ডেটা পরিবহনের ক্ষমতা পরিমাপ করে।" },
  { q: "ইন্টারনেট কোন ধরনের নেটওয়ার্ক?", options: ["LAN","MAN","PAN","WAN (Wide Area Network)"], answer: 3, ref: "২.৪ নেটওয়ার্কের ধরন", explanation: "ইন্টারনেট বিশ্বের বৃহত্তম WAN — লক্ষ লক্ষ ছোট নেটওয়ার্ককে একত্রে সংযুক্ত করে।" },
  { q: "HTTP প্রোটোকল কোন Port ব্যবহার করে?", options: ["Port 80","Port 443","Port 21","Port 25"], answer: 0, ref: "২.৫ ইন্টারনেট ও প্রোটোকল", explanation: "HTTP = Port 80, HTTPS = Port 443, FTP = Port 21, SMTP = Port 25।" },
];

const TOTAL = questions.length;

export default function Chapter2TextbookQuiz() {
  const [phase, setPhase] = useState<"idle"|"quiz"|"result">("idle");
  const [cur, setCur] = useState(0);
  const [sel, setSel] = useState<number|null>(null);
  const [ans, setAns] = useState<(number|null)[]>(Array(TOTAL).fill(null));
  const score = ans.filter((a, i) => a === questions[i].answer).length;
  function start() { setAns(Array(TOTAL).fill(null)); setCur(0); setSel(null); setPhase("quiz"); }
  function pick(i: number) { if (sel !== null) return; setSel(i); const u = [...ans]; u[cur] = i; setAns(u); }
  function next() { if (cur === TOTAL-1) setPhase("result"); else { setCur(c => c+1); setSel(null); } }
  const q = questions[cur];
  const isCorrect = sel === q?.answer;
  const grade = score >= 14 ? "A+" : score >= 12 ? "A" : score >= 11 ? "A-" : score >= 9 ? "B" : score >= 6 ? "C" : "F";
  const gc = score >= 11 ? "#16a34a" : score >= 9 ? "#d97706" : "#dc2626";
  const btn: React.CSSProperties = { background:"#0f172a",color:"#fff",border:"none",borderRadius:"0.625rem",padding:"0.75rem 1.75rem",fontSize:"1rem",fontWeight:600,cursor:"pointer" };

  if (phase === "idle") return (
    <div style={{ minHeight:"100vh", background:"#f8fafc", fontFamily:"'Noto Sans Bengali',system-ui,sans-serif", padding:"2rem 1rem" }}>
      <div style={{ maxWidth:"680px", margin:"0 auto" }}>
        <div style={{ fontSize:"0.85rem", marginBottom:"1.5rem" }}>
          <Link href="/demo/chapter2" style={{ color:"#0f172a", textDecoration:"none", fontWeight:600 }}>← অধ্যায় ২ সূচি</Link>
        </div>
        <div style={{ background:"#0f172a", color:"#e2e8f0", borderRadius:"1rem", padding:"2.5rem", textAlign:"center" }}>
          <div style={{ fontSize:"3rem", marginBottom:"0.75rem" }}>📝</div>
          <h1 style={{ fontSize:"1.5rem", fontWeight:800, color:"#f1f5f9", margin:"0 0 0.5rem" }}>পাঠ্যবইয়ের অনুশীলনী কুইজ</h1>
          <p style={{ color:"#94a3b8", fontSize:"0.95rem", margin:"0 0 0.5rem" }}>অধ্যায় ২: কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং</p>
          <p style={{ color:"#64748b", fontSize:"0.85rem", margin:"0 0 2rem" }}>NCTB HSC ICT পাঠ্যবইয়ের Chapter শেষের অনুশীলনী প্রশ্ন</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"0.75rem", marginBottom:"2rem" }}>
            {[["📊",`${TOTAL} প্রশ্ন`,"অনুশীলনী MCQ"],["📖","৫টি বিষয়","২.১ থেকে ২.৫"],["🎯","A+ পেতে","১৪/১৫ দরকার"]].map(([i,t,d])=>(
              <div key={t} style={{ background:"#1e293b", borderRadius:"0.75rem", padding:"1rem" }}>
                <div style={{ fontSize:"1.5rem" }}>{i}</div>
                <div style={{ fontWeight:700, color:"#f1f5f9", fontSize:"0.9rem", margin:"0.25rem 0" }}>{t}</div>
                <div style={{ fontSize:"0.75rem", color:"#64748b" }}>{d}</div>
              </div>
            ))}
          </div>
          <button onClick={start} style={btn}>কুইজ শুরু করুন →</button>
        </div>
      </div>
    </div>
  );

  if (phase === "result") return (
    <div style={{ minHeight:"100vh", background:"#f8fafc", fontFamily:"'Noto Sans Bengali',system-ui,sans-serif", padding:"2rem 1rem" }}>
      <div style={{ maxWidth:"680px", margin:"0 auto" }}>
        <div style={{ background:"#0f172a", borderRadius:"1rem", padding:"2rem", textAlign:"center", marginBottom:"2rem" }}>
          <div style={{ fontSize:"4rem", marginBottom:"0.5rem" }}>{score>=11?"🎉":score>=9?"👍":"📚"}</div>
          <div style={{ fontSize:"3.5rem", fontWeight:800, color:gc }}>{grade}</div>
          <div style={{ fontSize:"1.75rem", fontWeight:700, color:"#f1f5f9", margin:"0.5rem 0" }}>{score} / {TOTAL} সঠিক</div>
          <p style={{ color:"#94a3b8", margin:"0 0 1.5rem" }}>{score===TOTAL?"অসাধারণ! সব সঠিক!":score>=11?"খুব ভালো!":"আরও অনুশীলন করুন।"}</p>
          <button onClick={start} style={btn}>আবার চেষ্টা করুন</button>
        </div>
        <h2 style={{ fontSize:"1.1rem", fontWeight:700, color:"#0f172a", marginBottom:"1rem" }}>প্রশ্নওয়ারী ফলাফল</h2>
        {questions.map((qq, i) => {
          const correct = ans[i] === qq.answer;
          return (
            <div key={i} style={{ background:"#fff", border:`1px solid ${correct?"#bbf7d0":"#fecaca"}`, borderLeft:`4px solid ${correct?"#16a34a":"#dc2626"}`, borderRadius:"0.75rem", padding:"1rem", marginBottom:"0.75rem" }}>
              <div style={{ display:"flex", gap:"0.5rem", alignItems:"flex-start" }}>
                <span style={{ flexShrink:0 }}>{correct?"✅":"❌"}</span>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", gap:"0.5rem", flexWrap:"wrap" }}>
                    <div style={{ fontWeight:600, color:"#1f2937", fontSize:"0.875rem" }}>{i+1}. {qq.q}</div>
                    <span style={{ fontSize:"0.72rem", background:"#f1f5f9", color:"#64748b", borderRadius:"0.375rem", padding:"0.1rem 0.4rem", whiteSpace:"nowrap", flexShrink:0 }}>📖 {qq.ref}</span>
                  </div>
                  {!correct && <div style={{ fontSize:"0.8rem", color:"#16a34a", marginTop:"0.35rem" }}>✓ সঠিক: <strong>{qq.options[qq.answer]}</strong></div>}
                  <div style={{ fontSize:"0.8rem", color:"#64748b", marginTop:"0.35rem" }}>{qq.explanation}</div>
                </div>
              </div>
            </div>
          );
        })}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem", marginTop:"1rem" }}>
          <Link href="/demo/chapter2" style={{ color:"#0f172a", fontWeight:600, textDecoration:"none", fontSize:"0.9rem" }}>← অধ্যায় ২ সূচি</Link>
          <button onClick={start} style={{...btn, fontSize:"0.9rem", padding:"0.625rem 1.25rem"}}>আবার দিন</button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight:"100vh", background:"#f8fafc", fontFamily:"'Noto Sans Bengali',system-ui,sans-serif", padding:"2rem 1rem" }}>
      <div style={{ maxWidth:"680px", margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.25rem", flexWrap:"wrap", gap:"0.5rem" }}>
          <Link href="/demo/chapter2" style={{ color:"#0f172a", textDecoration:"none", fontSize:"0.85rem", fontWeight:600 }}>← অধ্যায় ২</Link>
          <span style={{ fontSize:"0.85rem", color:"#64748b" }}>প্রশ্ন {cur+1} / {TOTAL}</span>
        </div>
        <div style={{ height:"6px", background:"#e5e7eb", borderRadius:"99px", marginBottom:"1.5rem" }}>
          <div style={{ height:"100%", width:`${((cur+1)/TOTAL)*100}%`, background:"#0f172a", borderRadius:"99px", transition:"width 0.3s" }}/>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.75rem" }}>
          <span style={{ fontSize:"0.72rem", background:"#1e293b", color:"#94a3b8", borderRadius:"0.375rem", padding:"0.2rem 0.5rem" }}>📖 {q.ref}</span>
          <span style={{ fontSize:"0.72rem", color:"#94a3b8" }}>পাঠ্যবইয়ের অনুশীলনী</span>
        </div>
        <div style={{ background:"#1e293b", color:"#f1f5f9", borderRadius:"0.875rem", padding:"1.5rem", marginBottom:"1.25rem", fontWeight:600, fontSize:"1.05rem", lineHeight:1.7 }}>
          {cur+1}. {q.q}
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:"0.625rem", marginBottom:"1.25rem" }}>
          {q.options.map((opt, i) => {
            let bg="#fff", border="#e2e8f0", color="#374151";
            if (sel !== null) {
              if (i === q.answer) { bg="#f0fdf4"; border="#86efac"; color="#15803d"; }
              else if (i === sel && i !== q.answer) { bg="#fef2f2"; border="#fca5a5"; color="#b91c1c"; }
              else { bg="#f9fafb"; color="#9ca3af"; }
            }
            return (
              <button key={i} onClick={() => pick(i)} disabled={sel !== null}
                style={{ display:"flex", alignItems:"center", gap:"0.75rem", padding:"0.875rem 1rem", borderRadius:"0.75rem", border:`2px solid ${border}`, background:bg, color, textAlign:"left", cursor:sel!==null?"default":"pointer", fontSize:"0.95rem", fontWeight:500 }}>
                <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:"1.75rem", height:"1.75rem", borderRadius:"50%", background:i===q.answer&&sel!==null?"#16a34a":sel===i&&i!==q.answer?"#dc2626":"#1e293b", color:"#f1f5f9", fontSize:"0.8rem", fontWeight:700, flexShrink:0 }}>
                  {["ক","খ","গ","ঘ"][i]}
                </span>
                {opt}
                {sel!==null && i===q.answer && <span style={{ marginLeft:"auto" }}>✓</span>}
                {sel!==null && i===sel && i!==q.answer && <span style={{ marginLeft:"auto" }}>✗</span>}
              </button>
            );
          })}
        </div>
        {sel !== null && (
          <div style={{ padding:"1rem", borderRadius:"0.75rem", background:isCorrect?"#f0fdf4":"#fef9c3", border:`1px solid ${isCorrect?"#86efac":"#fde68a"}`, marginBottom:"1.25rem", fontSize:"0.9rem", color:"#1e293b" }}>
            <strong>{isCorrect ? "✅ সঠিক!" : "❌ ভুল।"}</strong> {q.explanation}
          </div>
        )}
        {sel !== null && <button onClick={next} style={btn}>{cur === TOTAL-1 ? "ফলাফল দেখুন →" : "পরের প্রশ্ন →"}</button>}
      </div>
    </div>
  );
}
