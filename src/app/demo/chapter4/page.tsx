import Link from "next/link";

export const metadata = {
  title: "অধ্যায় ৪: ওয়েব ডিজাইন পরিচিতি — HSC ICT | EduSocial BD",
};

/* ─────────── topic list ─────────── */
const topics = [
  {
    href: "/demo/chapter4/web-intro",
    num: "৪.১",
    title: "ওয়েব ডিজাইনের ধারণা",
    en: "Web Design Concepts",
    desc: "ওয়েব পেজ, ওয়েব সাইট, ওয়েব পোর্টাল, HTTP, URL, Domain Name, Static vs Dynamic",
    icon: "🌐",
    color: "#0284c7",
    bg: "#f0f9ff",
    border: "#bae6fd",
  },
  {
    href: "/demo/chapter4/html",
    num: "৪.২",
    title: "HTML",
    en: "HyperText Markup Language",
    desc: "DOCTYPE, html/head/body গঠন, heading, paragraph, list, table, form, link, image ট্যাগ",
    icon: "📄",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
  },
  {
    href: "/demo/chapter4/css",
    num: "৪.৩",
    title: "CSS",
    en: "Cascading Style Sheets",
    desc: "Selector, property, inline/internal/external CSS, color, font, margin, padding, border",
    icon: "🎨",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
  {
    href: "/demo/chapter4/javascript",
    num: "৪.৪",
    title: "JavaScript পরিচিতি",
    en: "Introduction to JavaScript",
    desc: "Variable, Data Type, Operator, Function, Event, DOM manipulation",
    icon: "⚙️",
    color: "#ca8a04",
    bg: "#fefce8",
    border: "#fef08a",
  },
];

/* ─────────── analysis sections ─────────── */
const analysis = [
  {
    num: "৪.১",
    title: "ওয়েব ডিজাইনের ধারণা",
    color: "#0284c7",
    bg: "#f0f9ff",
    border: "#bae6fd",
    points: [
      "ওয়েব পেজ: ইন্টারনেটে প্রদর্শিত একটি একক দলিল, সাধারণত HTML ফাইল",
      "ওয়েব সাইট: একাধিক সম্পর্কিত ওয়েব পেজের সমষ্টি",
      "ওয়েব পোর্টাল: একাধিক সেবা এক স্থান থেকে প্রদানকারী সাইট (যেমন: Yahoo, Google)",
      "URL (Uniform Resource Locator): ইন্টারনেটে কোনো রিসোর্সের ঠিকানা",
      "HTTP (HyperText Transfer Protocol): ওয়েব পেজ আদান-প্রদানের প্রোটোকল",
      "HTTPS: নিরাপদ HTTP — SSL/TLS দিয়ে এনক্রিপ্টেড",
      "Domain Name: সার্ভারের সহজে মনে রাখার মতো নাম (যেমন: google.com)",
      "Static page: কনটেন্ট পরিবর্তন হয় না; Dynamic page: সার্ভার/ব্যবহারকারীর উপর নির্ভরে পরিবর্তন হয়",
      "ওয়েব ব্রাউজার: Chrome, Firefox, Edge — HTML রেন্ডার করে ব্যবহারকারীকে দেখায়",
      "ওয়েব সার্ভার: পেজ সংরক্ষণ ও ক্লায়েন্টকে পাঠায় (Apache, Nginx)",
    ],
    keyTerms: ["URL","HTTP","HTTPS","Domain","Web Browser","Web Server","Static","Dynamic","Portal"],
  },
  {
    num: "৪.২",
    title: "HTML",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
    points: [
      "HTML = HyperText Markup Language — ওয়েব পেজ তৈরির মূল ভাষা",
      "HTML মার্কআপ ভাষা, প্রোগ্রামিং ভাষা নয়",
      "ট্যাগ দিয়ে কনটেন্ট চিহ্নিত করা হয়: <tagname> ... </tagname>",
      "মূল গঠন: <!DOCTYPE html> → <html> → <head> (মেটাডেটা) + <body> (দৃশ্যমান অংশ)",
      "Text ট্যাগ: <h1>–<h6>, <p>, <b>, <i>, <u>, <br>, <hr>",
      "List ট্যাগ: <ul> (Unordered), <ol> (Ordered), <li> (List Item)",
      "লিংক: <a href='url'>টেক্সট</a>",
      "ছবি: <img src='file.jpg' alt='বিবরণ' width='300'>",
      "টেবিল: <table>, <tr> (row), <th> (header cell), <td> (data cell)",
      "ফর্ম: <form>, <input>, <button>, <select>, <textarea>",
    ],
    keyTerms: ["DOCTYPE","html","head","body","h1-h6","p","a","img","table","form","ul","ol"],
  },
  {
    num: "৪.৩",
    title: "CSS",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
    points: [
      "CSS = Cascading Style Sheets — ওয়েব পেজের চেহারা ও বিন্যাস নিয়ন্ত্রণ করে",
      "CSS নিয়ম গঠন: selector { property: value; }",
      "Element Selector: p { color: red; } — সব p ট্যাগে প্রযোজ্য",
      "Class Selector: .myClass { } — ডটচিহ্ন দিয়ে",
      "ID Selector: #myId { } — হ্যাশচিহ্ন দিয়ে",
      "Inline CSS: style attribute সরাসরি ট্যাগে",
      "Internal CSS: <style> ট্যাগ <head> এর মধ্যে",
      "External CSS: আলাদা .css ফাইল, <link> দিয়ে সংযুক্ত",
      "গুরুত্বপূর্ণ Property: color, background-color, font-size, font-family, margin, padding, border, width, height",
      "Box Model: Content → Padding → Border → Margin",
    ],
    keyTerms: ["Selector","Property","Value","Class","ID","Inline","Internal","External","Box Model","Cascade"],
  },
  {
    num: "৪.৪",
    title: "JavaScript পরিচিতি",
    color: "#ca8a04",
    bg: "#fefce8",
    border: "#fef08a",
    points: [
      "JavaScript: ওয়েব পেজকে interactive করার scripting ভাষা",
      "HTML কাঠামো, CSS রূপ, JavaScript আচরণ — এই তিনটি মিলিয়ে ওয়েব পেজ",
      "Variable: var, let, const দিয়ে ডেটা সংরক্ষণ",
      "Data Types: Number, String, Boolean, Array, Object",
      "Operator: +, -, *, /, ==, ===, !=, &&, ||",
      "Conditional: if...else, switch",
      "Loop: for, while",
      "Function: function myFunc() { ... } — কোড পুনর্ব্যবহারযোগ্য ব্লক",
      "Event: onclick, onmouseover, onchange — ব্যবহারকারীর ক্রিয়ায় কোড চালানো",
      "DOM (Document Object Model): document.getElementById() দিয়ে HTML উপাদান নিয়ন্ত্রণ",
    ],
    keyTerms: ["var/let/const","String","Boolean","Array","Function","Event","DOM","onclick","getElementById"],
  },
];

export default function Chapter4Page() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Noto Sans Bengali',system-ui,sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>

        {/* breadcrumb */}
        <div style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1.25rem" }}>
          <Link href="/demo/chapter3" style={{ color: "#0284c7", textDecoration: "none" }}>← অধ্যায় ৩</Link>
          <span style={{ margin: "0 0.5rem", color: "#cbd5e1" }}>|</span>
          <span>অধ্যায় ৪</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "0.4rem" }}>HSC ICT · NCTB · Class 11-12</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.25rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 0.4rem" }}>অধ্যায় ৪</h1>
          <p style={{ fontSize: "1.15rem", fontWeight: 700, color: "#334155", margin: "0 0 0.4rem" }}>ওয়েব ডিজাইন পরিচিতি</p>
          <p style={{ color: "#64748b", fontSize: "0.95rem", margin: 0 }}>Web Design Introduction — ৪টি বিষয়, প্রতিটিতে ১০টি MCQ + পাঠ্যবইয়ের কুইজ আলাদা</p>
        </div>

        {/* ══════════ ANALYSIS / OVERVIEW ══════════ */}
        <div style={{ background: "#0f172a", color: "#e2e8f0", borderRadius: "1rem", padding: "2rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ fontSize: "1.5rem" }}>🔍</span>
            <div>
              <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#f1f5f9", margin: 0 }}>অধ্যায়ের বিশ্লেষণ</h2>
              <p style={{ color: "#94a3b8", fontSize: "0.85rem", margin: 0 }}>Chapter Overview — ৪.১ থেকে ৪.৪ পর্যন্ত সব বিষয়ের সংক্ষিপ্ত বিবরণ</p>
            </div>
          </div>

          {/* Why this chapter matters */}
          <div style={{ background: "#1e293b", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "1.5rem", borderLeft: "3px solid #0284c7" }}>
            <p style={{ color: "#cbd5e1", lineHeight: 1.8, margin: 0, fontSize: "0.9rem" }}>
              অধ্যায় ৪ পুরোপুরি ওয়েব প্রযুক্তির ওপর। ইন্টারনেট ও ওয়েবের মৌলিক ধারণা থেকে শুরু করে
              HTML দিয়ে কাঠামো, CSS দিয়ে সৌন্দর্য, এবং JavaScript দিয়ে প্রাণ দেওয়া পর্যন্ত একটি
              সম্পূর্ণ ওয়েব পেজ তৈরির পুরো প্রক্রিয়া এখানে আছে। HSC পরীক্ষায় এই অধ্যায় থেকে
              MCQ, সংক্ষিপ্ত এবং রচনামূলক প্রশ্ন তিনটিই আসে।
            </p>
          </div>

          {/* Per-topic analysis */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {analysis.map(sec => (
              <div key={sec.num} style={{ background: "#1e293b", borderRadius: "0.75rem", padding: "1.25rem", borderLeft: `3px solid ${sec.color}` }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.625rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                  <span style={{ background: sec.color, color: "#fff", borderRadius: "0.375rem", padding: "0.2rem 0.5rem", fontSize: "0.75rem", fontWeight: 700 }}>{sec.num}</span>
                  <span style={{ fontWeight: 700, color: "#f1f5f9", fontSize: "0.95rem" }}>{sec.title}</span>
                </div>
                <ul style={{ margin: "0 0 0.875rem", paddingLeft: "1.25rem", lineHeight: 1.9, color: "#94a3b8", fontSize: "0.85rem" }}>
                  {sec.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                  {sec.keyTerms.map(t => (
                    <span key={t} style={{ background: "#0f172a", border: `1px solid ${sec.color}40`, color: sec.color, borderRadius: "0.375rem", padding: "0.15rem 0.5rem", fontSize: "0.75rem", fontFamily: "monospace" }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Chapter summary box */}
          <div style={{ background: "#1e293b", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginTop: "1.5rem", borderLeft: "3px solid #22c55e" }}>
            <div style={{ fontWeight: 700, color: "#86efac", marginBottom: "0.5rem", fontSize: "0.875rem" }}>📊 পরীক্ষার দৃষ্টিকোণ থেকে গুরুত্ব</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.625rem" }}>
              {[
                ["৪.১ ওয়েব ধারণা","★★★","URL, HTTP, Static/Dynamic"],
                ["৪.২ HTML","★★★★★","ট্যাগ, ফর্ম, টেবিল"],
                ["৪.৩ CSS","★★★★","Selector, Box Model"],
                ["৪.৪ JavaScript","★★★","Variable, Function, DOM"],
              ].map(([topic, stars, note]) => (
                <div key={topic} style={{ background: "#0f172a", borderRadius: "0.5rem", padding: "0.625rem" }}>
                  <div style={{ fontSize: "0.78rem", color: "#cbd5e1", fontWeight: 600 }}>{topic}</div>
                  <div style={{ color: "#fbbf24", fontSize: "0.85rem", margin: "0.2rem 0" }}>{stars}</div>
                  <div style={{ fontSize: "0.72rem", color: "#64748b" }}>{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════ TOPIC LINKS ══════════ */}
        <div style={{ background: "#f0f9ff", border: "1px solid #bae6fd", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "1.5rem", fontSize: "0.875rem", color: "#0369a1" }}>
          💡 প্রতিটি বিষয় পড়ুন → কুইজ দিন → পরের বিষয়ে যান। শেষে পাঠ্যবইয়ের কুইজ দিন।
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2rem" }}>
          {topics.map(t => (
            <Link key={t.href} href={t.href} style={{ textDecoration: "none" }}>
              <div style={{ background: "#fff", border: `1.5px solid ${t.border}`, borderLeft: `4px solid ${t.color}`, borderRadius: "0.875rem", padding: "1.1rem 1.5rem", display: "flex", alignItems: "flex-start", gap: "1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", cursor: "pointer" }}>
                <div style={{ fontSize: "1.75rem", flexShrink: 0, lineHeight: 1 }}>{t.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: t.color, background: t.bg, border: `1px solid ${t.border}`, borderRadius: "0.375rem", padding: "0.15rem 0.45rem" }}>{t.num}</span>
                    <span style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.95rem" }}>{t.title}</span>
                    <span style={{ color: "#94a3b8", fontSize: "0.78rem" }}>{t.en}</span>
                  </div>
                  <p style={{ color: "#475569", fontSize: "0.83rem", margin: "0.3rem 0 0", lineHeight: 1.5 }}>{t.desc}</p>
                </div>
                <div style={{ color: t.color, fontSize: "1.25rem", flexShrink: 0 }}>→</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Textbook quiz card */}
        <Link href="/demo/chapter4/textbook-quiz" style={{ textDecoration: "none" }}>
          <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", borderRadius: "0.875rem", padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", marginBottom: "2rem" }}>
            <div style={{ fontSize: "2rem" }}>📝</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, color: "#f1f5f9", fontSize: "1rem" }}>পাঠ্যবইয়ের অনুশীলনী কুইজ</div>
              <div style={{ color: "#94a3b8", fontSize: "0.85rem", marginTop: "0.25rem" }}>NCTB বইয়ের Chapter 4 অনুশীলনী থেকে MCQ প্রশ্ন</div>
            </div>
            <div style={{ color: "#60a5fa", fontSize: "1.5rem" }}>→</div>
          </div>
        </Link>

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <Link href="/demo/chapter3" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#0f172a", color: "#f1f5f9", borderRadius: "0.625rem", padding: "0.625rem 1.25rem", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}>
            ← পূর্ববর্তী: অধ্যায় ৩ — ডিজিটাল ডিভাইস
          </Link>
          <p style={{ color: "#94a3b8", fontSize: "0.8rem", margin: 0 }}>EduSocial BD · HSC ICT অধ্যায় ৪</p>
          <Link href="/demo/chapter5" style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", background:"#0f172a", color:"#f1f5f9", borderRadius:"0.625rem", padding:"0.625rem 1.25rem", fontWeight:600, fontSize:"0.875rem", textDecoration:"none" }}>
            পরবর্তী: অধ্যায় ৫ — প্রোগ্রামিং ভাষা →
          </Link>
        </div>
      </div>
    </div>
  );
}
