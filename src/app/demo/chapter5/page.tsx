import Link from "next/link";

export const metadata = {
  title: "অধ্যায় ৫: প্রোগ্রামিং ভাষা — HSC ICT | EduSocial BD",
};

const topics = [
  {
    href: "/demo/chapter5/programming-concepts",
    num: "৫.১",
    title: "প্রোগ্রামিং ভাষার ধারণা",
    en: "Programming Language Concepts",
    desc: "মেশিন, অ্যাসেম্বলি ও উচ্চস্তরের ভাষা, কম্পাইলার, ইন্টারপ্রেটার, অ্যাসেম্বলার",
    icon: "💡",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
  {
    href: "/demo/chapter5/program-design",
    num: "৫.২",
    title: "প্রোগ্রাম ডিজাইন টুলস",
    en: "Program Design Tools",
    desc: "অ্যালগরিদম, ফ্লোচার্ট, সিউডোকোড — সমস্যা সমাধানের ধাপ ও চিহ্ন",
    icon: "📐",
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#a5f3fc",
  },
  {
    href: "/demo/chapter5/c-programming",
    num: "৫.৩",
    title: "C প্রোগ্রামিং",
    en: "C Programming",
    desc: "চলক, ডেটা টাইপ, অপারেটর, শর্ত, লুপ, ফাংশন — C ভাষার মূল ধারণা",
    icon: "💻",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
];

const analysis = [
  {
    num: "৫.১",
    title: "প্রোগ্রামিং ভাষার ধারণা ও বৈশিষ্ট্য",
    color: "#7c3aed",
    importance: "★★★",
    points: [
      "প্রজন্ম অনুযায়ী ভাষার বিভাজন: 1GL থেকে 5GL",
      "মেশিন ভাষা: 0 ও 1 দিয়ে — সরাসরি CPU বোঝে",
      "অ্যাসেম্বলি ভাষা: mnemonics ব্যবহার (ADD, MOV, SUB)",
      "উচ্চস্তরের ভাষা: মানুষের ভাষার কাছাকাছি (C, Python, Java)",
      "ট্রান্সলেটর: Compiler vs Interpreter vs Assembler পার্থক্য",
      "Source code → Object code → Executable file প্রক্রিয়া",
    ],
    keyTerms: ["Machine Language","Assembly Language","High-Level Language","Compiler","Interpreter","Assembler","1GL","5GL"],
  },
  {
    num: "৫.২",
    title: "প্রোগ্রাম ডিজাইন টুলস",
    color: "#0891b2",
    importance: "★★★★",
    points: [
      "অ্যালগরিদম: সমস্যা সমাধানের ধাপে ধাপে নির্দেশিকা",
      "অ্যালগরিদমের বৈশিষ্ট্য: Input, Output, Definiteness, Finiteness, Effectiveness",
      "ফ্লোচার্ট: চিহ্নের মাধ্যমে প্রোগ্রামের চিত্রিত উপস্থাপনা",
      "ফ্লোচার্ট চিহ্ন: Terminal (ডিম্বাকার), Process (আয়তক্ষেত্র), Decision (হীরা), I/O (সমান্তরালবাহু)",
      "সিউডোকোড: প্রাকৃতিক ভাষায় প্রোগ্রামের খসড়া",
      "Sequential, Selection (if-else), Iteration (loop) — তিন ধরনের নিয়ন্ত্রণ কাঠামো",
    ],
    keyTerms: ["Algorithm","Flowchart","Pseudocode","Terminal","Process","Decision","Connector","Sequence","Selection","Iteration"],
  },
  {
    num: "৫.৩",
    title: "C প্রোগ্রামিং",
    color: "#16a34a",
    importance: "★★★★★",
    points: [
      "C ভাষার ইতিহাস: Dennis Ritchie, ১৯৭২ সাল, Bell Labs",
      "C প্রোগ্রামের কাঠামো: #include, main(), ঘোষণা, নির্দেশাবলী",
      "ডেটা টাইপ: int, float, char, double — আকার ও পরিসীমা",
      "অপারেটর: Arithmetic, Relational, Logical, Assignment",
      "শর্ত: if, if-else, if-else if-else, switch-case",
      "লুপ: for, while, do-while — পার্থক্য ও ব্যবহার",
      "ফাংশন: ঘোষণা, সংজ্ঞা, কল, রিটার্ন মান, পরামিতি",
      "Array: একমাত্রিক ও দ্বিমাত্রিক, সূচক শুরু হয় 0 থেকে",
    ],
    keyTerms: ["#include","stdio.h","main()","int","float","char","printf","scanf","if-else","for","while","function","array","pointer"],
  },
];

export default function Chapter5Page() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Noto Sans Bengali',system-ui,sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>

        {/* breadcrumb */}
        <div style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1.25rem" }}>
          <Link href="/demo/chapter4" style={{ color: "#7c3aed", textDecoration: "none" }}>← অধ্যায় ৪</Link>
          <span style={{ margin: "0 0.5rem", color: "#cbd5e1" }}>|</span>
          <span>অধ্যায় ৫</span>
        </div>

        {/* header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "0.4rem" }}>HSC ICT · NCTB · Class 11-12</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.25rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 0.4rem" }}>অধ্যায় ৫</h1>
          <p style={{ fontSize: "1.1rem", color: "#475569", margin: 0, fontWeight: 500 }}>প্রোগ্রামিং ভাষা · Programming Language</p>
        </div>

        {/* dark analysis block */}
        <div style={{ background: "#0f172a", color: "#e2e8f0", borderRadius: "1rem", padding: "2rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ fontSize: "1.75rem" }}>💻</span>
            <div>
              <div style={{ fontWeight: 800, color: "#f1f5f9", fontSize: "1.1rem" }}>অধ্যায় বিশ্লেষণ</div>
              <div style={{ fontSize: "0.8rem", color: "#64748b" }}>পরীক্ষার কৌশলগত দৃষ্টিভঙ্গি</div>
            </div>
          </div>

          <div style={{ background: "#1e293b", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "1.5rem", borderLeft: "3px solid #7c3aed" }}>
            <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.8, margin: 0 }}>
              এই অধ্যায়টি HSC ICT পরীক্ষায় সর্বোচ্চ নম্বর বহনকারী অধ্যায়গুলোর একটি।
              C প্রোগ্রামিং থেকে সবচেয়ে বেশি MCQ ও সৃজনশীল প্রশ্ন আসে। ফ্লোচার্ট এঁকে সমাধান দেওয়ার
              দক্ষতা সৃজনশীলে বিশেষ গুরুত্বপূর্ণ। ৩টি বিষয় ভালোভাবে আয়ত্ত করলে এই অধ্যায় থেকে পূর্ণ নম্বর পাওয়া সম্ভব।
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {analysis.map(sec => (
              <div key={sec.num} style={{ background: "#1e293b", borderRadius: "0.75rem", padding: "1.25rem", borderLeft: `3px solid ${sec.color}` }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.625rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: sec.color, background: `${sec.color}20`, borderRadius: "0.375rem", padding: "0.15rem 0.5rem" }}>{sec.num}</span>
                  <span style={{ fontWeight: 700, color: "#f1f5f9", fontSize: "0.95rem" }}>{sec.title}</span>
                  <span style={{ marginLeft: "auto", color: "#f59e0b", fontSize: "0.8rem" }}>{sec.importance}</span>
                </div>
                <ul style={{ margin: "0 0 0.75rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  {sec.points.map(p => <li key={p} style={{ color: "#94a3b8", fontSize: "0.8rem", lineHeight: 1.6 }}>{p}</li>)}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                  {sec.keyTerms.map(k => (
                    <span key={k} style={{ fontSize: "0.7rem", background: "#0f172a", color: "#64748b", borderRadius: "0.25rem", padding: "0.15rem 0.5rem", fontFamily: "monospace" }}>{k}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "#1e293b", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginTop: "1.5rem", borderLeft: "3px solid #22c55e" }}>
            <div style={{ fontWeight: 700, color: "#86efac", marginBottom: "0.5rem", fontSize: "0.875rem" }}>📊 পরীক্ষার দৃষ্টিকোণ থেকে গুরুত্ব</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {[
                ["C প্রোগ্রামিং (৫.৩)","★★★★★","সর্বাধিক — লুপ, ফাংশন, আউটপুট ট্রেস"],
                ["প্রোগ্রাম ডিজাইন (৫.২)","★★★★","ফ্লোচার্ট ও অ্যালগরিদম লেখা"],
                ["ভাষার ধারণা (৫.১)","★★★","Compiler/Interpreter পার্থক্য"],
              ].map(([t,s,d])=>(
                <div key={t} style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                  <span style={{ color: "#f59e0b", fontSize: "0.8rem", minWidth: "70px" }}>{s}</span>
                  <span style={{ color: "#f1f5f9", fontSize: "0.8rem", fontWeight: 600 }}>{t}</span>
                  <span style={{ color: "#64748b", fontSize: "0.75rem" }}>— {d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* topic cards */}
        <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", marginBottom: "1rem" }}>বিষয়সমূহ</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
          {topics.map(t => (
            <Link key={t.href} href={t.href} style={{ textDecoration: "none" }}>
              <div style={{ background: "#ffffff", border: `1.5px solid ${t.border}`, borderLeft: `4px solid ${t.color}`, borderRadius: "0.875rem", padding: "1.25rem 1.5rem", display: "flex", alignItems: "flex-start", gap: "1.25rem", cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: "2rem", flexShrink: 0, lineHeight: 1 }}>{t.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.625rem", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: t.color, background: t.bg, border: `1px solid ${t.border}`, borderRadius: "0.375rem", padding: "0.15rem 0.5rem" }}>{t.num}</span>
                    <span style={{ fontWeight: 700, color: "#0f172a", fontSize: "1rem" }}>{t.title}</span>
                    <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>{t.en}</span>
                  </div>
                  <p style={{ color: "#475569", fontSize: "0.875rem", margin: "0.35rem 0 0", lineHeight: 1.5 }}>{t.desc}</p>
                </div>
                <div style={{ flexShrink: 0, textAlign: "right" }}>
                  <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>১০ প্রশ্ন</div>
                  <div style={{ color: t.color, fontSize: "1.25rem", marginTop: "0.25rem" }}>→</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* textbook quiz card */}
        <Link href="/demo/chapter5/textbook-quiz" style={{ textDecoration: "none" }}>
          <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", borderRadius: "0.875rem", padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", marginBottom: "2rem" }}>
            <div style={{ fontSize: "2rem" }}>📝</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, color: "#f1f5f9", fontSize: "1rem" }}>পাঠ্যবইয়ের অনুশীলনী কুইজ</div>
              <div style={{ color: "#94a3b8", fontSize: "0.85rem", marginTop: "0.25rem" }}>NCTB বইয়ের Chapter 5 অনুশীলনী থেকে MCQ প্রশ্ন</div>
            </div>
            <div style={{ color: "#60a5fa", fontSize: "1.5rem" }}>→</div>
          </div>
        </Link>

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <Link href="/demo/chapter4" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#0f172a", color: "#f1f5f9", borderRadius: "0.625rem", padding: "0.625rem 1.25rem", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}>
            ← পূর্ববর্তী: অধ্যায় ৪ — ওয়েব ডিজাইন
          </Link>
          <p style={{ color: "#94a3b8", fontSize: "0.8rem", margin: 0 }}>EduSocial BD · HSC ICT অধ্যায় ৫</p>
          <Link href="/demo/chapter6" style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", background:"#0f172a", color:"#f1f5f9", borderRadius:"0.625rem", padding:"0.625rem 1.25rem", fontWeight:600, fontSize:"0.875rem", textDecoration:"none" }}>
            পরবর্তী: অধ্যায় ৬ — ডেটাবেজ ম্যানেজমেন্ট →
          </Link>
        </div>
      </div>
    </div>
  );
}
