import Link from "next/link";

export const metadata = {
  title: "অধ্যায় ৬: ডেটাবেজ ম্যানেজমেন্ট সিস্টেম — HSC ICT | EduSocial BD",
};

const topics = [
  {
    href: "/demo/chapter6/database-concepts",
    num: "৬.১",
    title: "ডেটাবেজের ধারণা",
    en: "Database Concepts",
    desc: "ডেটা, তথ্য, ডেটাবেজ, DBMS, ডেটাবেজের সুবিধা ও বৈশিষ্ট্য",
    icon: "🗄️",
    color: "#0284c7",
    bg: "#f0f9ff",
    border: "#bae6fd",
  },
  {
    href: "/demo/chapter6/database-models",
    num: "৬.২",
    title: "ডেটাবেজ মডেল",
    en: "Database Models",
    desc: "Hierarchical, Network ও Relational মডেল — গঠন, সুবিধা ও অসুবিধা",
    icon: "🌳",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
  {
    href: "/demo/chapter6/sql",
    num: "৬.৩",
    title: "SQL ও রিলেশনাল ডেটাবেজ",
    en: "SQL & Relational Database",
    desc: "Table, Record, Field, Primary Key, Foreign Key এবং SQL কমান্ড",
    icon: "📋",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
];

const analysis = [
  {
    num: "৬.১",
    title: "ডেটাবেজের ধারণা ও বৈশিষ্ট্য",
    color: "#0284c7",
    importance: "★★★",
    points: [
      "ডেটা বনাম তথ্য (Data vs Information) পার্থক্য",
      "ডেটাবেজ: সুশৃঙ্খলভাবে সংরক্ষিত সম্পর্কযুক্ত ডেটার সমষ্টি",
      "DBMS: ডেটাবেজ তৈরি ও পরিচালনার সফটওয়্যার",
      "DBMS উদাহরণ: MySQL, Oracle, SQL Server, MS Access",
      "ডেটাবেজের সুবিধা: Data Redundancy হ্রাস, Security, Sharing",
      "DBA (Database Administrator) — ডেটাবেজ পরিচালনাকারী",
    ],
    keyTerms: ["Data","Information","Database","DBMS","DBA","Redundancy","Integrity","Security"],
  },
  {
    num: "৬.২",
    title: "ডেটাবেজ মডেল",
    color: "#7c3aed",
    importance: "★★★★",
    points: [
      "Hierarchical Model: গাছের মতো কাঠামো, Parent-Child সম্পর্ক",
      "Network Model: জাল-আকৃতি, একাধিক Parent-Child সম্পর্ক",
      "Relational Model: টেবিলে ডেটা সংরক্ষণ — বর্তমানে সবচেয়ে জনপ্রিয়",
      "Entity: বাস্তব জগতের বস্তু যার সম্পর্কে ডেটা রাখা হয়",
      "Attribute: Entity-র বৈশিষ্ট্য (যেমন: ছাত্রের নাম, রোল নম্বর)",
      "Relationship: সত্তাগুলোর মধ্যে সম্পর্ক (1:1, 1:N, M:N)",
    ],
    keyTerms: ["Hierarchical","Network","Relational","Entity","Attribute","Relationship","1:1","1:N","M:N","E-R Diagram"],
  },
  {
    num: "৬.৩",
    title: "SQL ও রিলেশনাল ডেটাবেজ",
    color: "#16a34a",
    importance: "★★★★★",
    points: [
      "Table: Row (Record) ও Column (Field)-এর সমষ্টি",
      "Primary Key: প্রতিটি Record-কে অদ্বিতীয়ভাবে চিহ্নিত করার Field",
      "Foreign Key: অন্য টেবিলের Primary Key-র রেফারেন্স",
      "SQL: Structured Query Language — ডেটাবেজ পরিচালনার ভাষা",
      "DDL কমান্ড: CREATE, DROP, ALTER — কাঠামো তৈরি",
      "DML কমান্ড: SELECT, INSERT, UPDATE, DELETE — ডেটা পরিচালনা",
      "SELECT ... FROM ... WHERE — সবচেয়ে বেশি ব্যবহৃত কমান্ড",
    ],
    keyTerms: ["Table","Record","Field","Primary Key","Foreign Key","SQL","SELECT","INSERT","UPDATE","DELETE","CREATE","WHERE","JOIN"],
  },
];

export default function Chapter6Page() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Noto Sans Bengali',system-ui,sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>

        {/* breadcrumb */}
        <div style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1.25rem" }}>
          <Link href="/demo/chapter5" style={{ color: "#0284c7", textDecoration: "none" }}>← অধ্যায় ৫</Link>
          <span style={{ margin: "0 0.5rem", color: "#cbd5e1" }}>|</span>
          <span>অধ্যায় ৬</span>
        </div>

        {/* header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "0.4rem" }}>HSC ICT · NCTB · Class 11-12</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.25rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 0.4rem" }}>অধ্যায় ৬</h1>
          <p style={{ fontSize: "1.1rem", color: "#475569", margin: 0, fontWeight: 500 }}>ডেটাবেজ ম্যানেজমেন্ট সিস্টেম · Database Management System</p>
        </div>

        {/* dark analysis block */}
        <div style={{ background: "#0f172a", color: "#e2e8f0", borderRadius: "1rem", padding: "2rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ fontSize: "1.75rem" }}>🗄️</span>
            <div>
              <div style={{ fontWeight: 800, color: "#f1f5f9", fontSize: "1.1rem" }}>অধ্যায় বিশ্লেষণ</div>
              <div style={{ fontSize: "0.8rem", color: "#64748b" }}>পরীক্ষার কৌশলগত দৃষ্টিভঙ্গি</div>
            </div>
          </div>

          <div style={{ background: "#1e293b", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "1.5rem", borderLeft: "3px solid #0284c7" }}>
            <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.8, margin: 0 }}>
              এই অধ্যায়টি HSC ICT পরীক্ষায় সৃজনশীল ও MCQ উভয় অংশে গুরুত্বপূর্ণ।
              SQL কমান্ড (SELECT, INSERT, UPDATE, DELETE) থেকে প্রতি বছর প্রশ্ন আসে।
              Primary Key ও Foreign Key-র ধারণা এবং E-R Diagram পরীক্ষায় বিশেষভাবে গুরুত্বপূর্ণ।
              তিনটি বিষয় ভালোভাবে রপ্ত করলে এই অধ্যায় থেকে পূর্ণ নম্বর পাওয়া সম্ভব।
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
                ["SQL ও Relational DB (৬.৩)","★★★★★","SQL কমান্ড, Key, Table অপারেশন"],
                ["ডেটাবেজ মডেল (৬.২)","★★★★","Relational vs Hierarchical পার্থক্য"],
                ["ডেটাবেজ ধারণা (৬.১)","★★★","Data vs Information, DBMS সুবিধা"],
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
        <Link href="/demo/chapter6/textbook-quiz" style={{ textDecoration: "none" }}>
          <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", borderRadius: "0.875rem", padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", marginBottom: "2rem" }}>
            <div style={{ fontSize: "2rem" }}>📝</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, color: "#f1f5f9", fontSize: "1rem" }}>পাঠ্যবইয়ের অনুশীলনী কুইজ</div>
              <div style={{ color: "#94a3b8", fontSize: "0.85rem", marginTop: "0.25rem" }}>NCTB বইয়ের Chapter 6 অনুশীলনী থেকে MCQ প্রশ্ন</div>
            </div>
            <div style={{ color: "#60a5fa", fontSize: "1.5rem" }}>→</div>
          </div>
        </Link>

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <Link href="/demo/chapter5" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#0f172a", color: "#f1f5f9", borderRadius: "0.625rem", padding: "0.625rem 1.25rem", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}>
            ← পূর্ববর্তী: অধ্যায় ৫ — প্রোগ্রামিং ভাষা
          </Link>
          <p style={{ color: "#94a3b8", fontSize: "0.8rem", margin: 0 }}>EduSocial BD · HSC ICT অধ্যায় ৬</p>
        </div>
      </div>
    </div>
  );
}
