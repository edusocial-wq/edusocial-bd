import Link from "next/link";

export const metadata = {
  title: "অধ্যায় ১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত — HSC ICT | EduSocial BD",
};

const topics = [
  {
    href: "/demo/chapter1/global-village",
    num: "১.১",
    title: "বিশ্বগ্রাম",
    en: "Global Village",
    desc: "ম্যাকলুহানের বিশ্বগ্রাম ধারণা, ICT-র উপাদান, সংযোগের প্রভাব",
    icon: "🌍",
    color: "#0284c7",
    bg: "#f0f9ff",
    border: "#bae6fd",
  },
  {
    href: "/demo/chapter1/recent-trends",
    num: "১.২",
    title: "তথ্য প্রযুক্তির সাম্প্রতিক প্রবণতা",
    en: "Recent Trends in IT",
    desc: "AI, Robotics, Virtual Reality, Cryosurgery, Bioinformatics, Nanotechnology, Genetic Engineering",
    icon: "🤖",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
  {
    href: "/demo/chapter1/digital-bangladesh",
    num: "১.৩",
    title: "ই-সেবা ও ডিজিটাল বাংলাদেশ",
    en: "e-Services & Digital Bangladesh",
    desc: "ই-গভর্ন্যান্স, ই-কমার্স, টেলিমেডিসিন, দূরশিক্ষণ, স্মার্ট বাংলাদেশ রূপকল্প",
    icon: "🇧🇩",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    href: "/demo/chapter1/ethics-society",
    num: "১.৪",
    title: "নৈতিকতা ও সামাজিক প্রভাব",
    en: "Ethics & Social Impact",
    desc: "তথ্য প্রযুক্তির নৈতিক ব্যবহার, সামাজিক প্রভাব, ডিজিটাল বিভাজন",
    icon: "⚖️",
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#a5f3fc",
  },
  {
    href: "/demo/chapter1/cybersecurity",
    num: "১.৫",
    title: "সাইবার নিরাপত্তা",
    en: "Cybersecurity",
    desc: "Hacking, Virus, Phishing, Spam, Firewall, Encryption — সাইবার অপরাধ ও সুরক্ষা",
    icon: "🔒",
    color: "#ca8a04",
    bg: "#fefce8",
    border: "#fef08a",
  },
];

const analysis = [
  {
    num: "১.১",
    title: "বিশ্বগ্রাম",
    color: "#0284c7",
    importance: "★★★★",
    points: [
      "Marshall McLuhan-এর বিশ্বগ্রাম (Global Village) ধারণা — ১৯৬০-এর দশক",
      "ICT-র কারণে পৃথিবী একটি ছোট গ্রামের মতো সংযুক্ত",
      "বিশ্বগ্রামের উপাদান: যোগাযোগ, কর্মসংস্থান, শিক্ষা, চিকিৎসা, গবেষণা, সংস্কৃতি",
      "E-mail, Social Media, Video Call — সংযোগের মাধ্যম",
      "সুবিধা ও অসুবিধা উভয়ই গুরুত্বপূর্ণ",
    ],
    keyTerms: ["Global Village","McLuhan","ICT","E-mail","Internet","Video Call","Social Media"],
  },
  {
    num: "১.২",
    title: "তথ্য প্রযুক্তির সাম্প্রতিক প্রবণতা",
    color: "#7c3aed",
    importance: "★★★★★",
    points: [
      "Artificial Intelligence (AI): মানুষের মতো চিন্তা করতে পারে এমন যন্ত্র",
      "Robotics: স্বয়ংক্রিয় যন্ত্র — শিল্প, চিকিৎসা, গবেষণায়",
      "Virtual Reality (VR): কৃত্রিম পরিবেশে বাস্তবের অনুভূতি",
      "Bioinformatics: জীববিজ্ঞান + ICT — DNA বিশ্লেষণ",
      "Nanotechnology: ন্যানোমিটার স্কেলে প্রযুক্তি (1nm = 10⁻⁹ m)",
      "Cryosurgery: তীব্র শীতল তাপমাত্রায় চিকিৎসা",
      "Genetic Engineering: জিন পরিবর্তন",
    ],
    keyTerms: ["AI","Robotics","VR","Bioinformatics","Nanotechnology","Cryosurgery","Genetic Engineering","Augmented Reality"],
  },
  {
    num: "১.৩",
    title: "ই-সেবা ও ডিজিটাল বাংলাদেশ",
    color: "#16a34a",
    importance: "★★★★",
    points: [
      "ই-গভর্ন্যান্স: অনলাইনে সরকারি সেবা প্রদান",
      "ই-কমার্স: অনলাইনে পণ্য ও সেবা ক্রয়-বিক্রয়",
      "টেলিমেডিসিন: অনলাইনে চিকিৎসা সেবা",
      "দূরশিক্ষণ (E-learning): ঘরে বসে পড়াশোনা",
      "ডিজিটাল বাংলাদেশ রূপকল্প ২০২১ → স্মার্ট বাংলাদেশ ২০৪১",
      "ইউনিয়ন ডিজিটাল সেন্টার",
    ],
    keyTerms: ["e-Governance","e-Commerce","Telemedicine","e-Learning","Digital Bangladesh","Smart Bangladesh","Union Digital Center"],
  },
  {
    num: "১.৪",
    title: "নৈতিকতা ও সামাজিক প্রভাব",
    color: "#0891b2",
    importance: "★★★",
    points: [
      "ইতিবাচক প্রভাব: যোগাযোগ সহজ, কর্মসংস্থান বৃদ্ধি, শিক্ষার প্রসার",
      "নেতিবাচক প্রভাব: গোপনীয়তা লঙ্ঘন, আসক্তি, বেকারত্ব",
      "ডিজিটাল বিভাজন (Digital Divide): প্রযুক্তিতে সমান সুযোগ নেই",
      "Intellectual Property Rights (IPR): মেধাস্বত্ব সংরক্ষণ",
      "Copyright, Patent, Trademark — মেধাস্বত্বের ধরন",
    ],
    keyTerms: ["Digital Divide","IPR","Copyright","Privacy","Social Media","Addiction","Cybercrime","Ethics"],
  },
  {
    num: "১.৫",
    title: "সাইবার নিরাপত্তা",
    color: "#ca8a04",
    importance: "★★★★★",
    points: [
      "Hacking: অননুমোদিত প্রবেশ — White Hat, Black Hat, Grey Hat",
      "Virus, Worm, Trojan, Spyware, Ransomware — Malware-এর ধরন",
      "Phishing: প্রতারণামূলক ইমেইল/ওয়েবসাইট",
      "Spam: অবাঞ্ছিত বার্তা",
      "Firewall: নেটওয়ার্ক সুরক্ষার প্রথম স্তর",
      "Encryption: ডেটা গোপন রাখার পদ্ধতি",
    ],
    keyTerms: ["Hacking","Virus","Worm","Trojan","Phishing","Spam","Firewall","Encryption","Antivirus","Cybercrime"],
  },
];

export default function Chapter1Page() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Noto Sans Bengali',system-ui,sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>

        {/* breadcrumb */}
        <div style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1.25rem" }}>
          <span style={{ color: "#94a3b8" }}>প্রথম অধ্যায়</span>
          <span style={{ margin: "0 0.5rem", color: "#cbd5e1" }}>|</span>
          <Link href="/demo/chapter2" style={{ color: "#0284c7", textDecoration: "none" }}>অধ্যায় ২ →</Link>
        </div>

        {/* header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "0.4rem" }}>HSC ICT · NCTB · Class 11-12</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.25rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 0.4rem" }}>অধ্যায় ১</h1>
          <p style={{ fontSize: "1.1rem", color: "#475569", margin: 0, fontWeight: 500 }}>তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত</p>
          <p style={{ fontSize: "0.875rem", color: "#94a3b8", margin: "0.25rem 0 0" }}>ICT: Global and Bangladesh Context</p>
        </div>

        {/* dark analysis block */}
        <div style={{ background: "#0f172a", color: "#e2e8f0", borderRadius: "1rem", padding: "2rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ fontSize: "1.75rem" }}>💡</span>
            <div>
              <div style={{ fontWeight: 800, color: "#f1f5f9", fontSize: "1.1rem" }}>অধ্যায় বিশ্লেষণ</div>
              <div style={{ fontSize: "0.8rem", color: "#64748b" }}>পরীক্ষার কৌশলগত দৃষ্টিভঙ্গি</div>
            </div>
          </div>

          <div style={{ background: "#1e293b", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "1.5rem", borderLeft: "3px solid #0284c7" }}>
            <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.8, margin: 0 }}>
              এই অধ্যায়টি HSC ICT পরীক্ষার প্রথম অধ্যায় এবং সৃজনশীল অংশে খুবই গুরুত্বপূর্ণ।
              সাম্প্রতিক প্রযুক্তি (AI, Robotics, VR, Nanotechnology) এবং সাইবার নিরাপত্তা
              থেকে প্রতি বছর MCQ ও সৃজনশীল প্রশ্ন আসে। বিশ্বগ্রামের ধারণা ও ডিজিটাল বাংলাদেশও
              পরীক্ষায় নিয়মিত থাকে।
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
                ["সাম্প্রতিক প্রবণতা (১.২)","★★★★★","AI/Robotics/VR/Nano থেকে প্রতি বছর আসে"],
                ["সাইবার নিরাপত্তা (১.৫)","★★★★★","Hacking/Virus/Firewall — পরীক্ষায় নিয়মিত"],
                ["বিশ্বগ্রাম (১.১)","★★★★","McLuhan, উপাদান, সুবিধা-অসুবিধা"],
                ["ডিজিটাল বাংলাদেশ (১.৩)","★★★★","ই-সেবা, রূপকল্প ২০৪১"],
                ["নৈতিকতা (১.৪)","★★★","Digital Divide, IPR, Privacy"],
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
        <Link href="/demo/chapter1/textbook-quiz" style={{ textDecoration: "none" }}>
          <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", borderRadius: "0.875rem", padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", marginBottom: "2rem" }}>
            <div style={{ fontSize: "2rem" }}>📝</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, color: "#f1f5f9", fontSize: "1rem" }}>পাঠ্যবইয়ের অনুশীলনী কুইজ</div>
              <div style={{ color: "#94a3b8", fontSize: "0.85rem", marginTop: "0.25rem" }}>NCTB বইয়ের Chapter 1 অনুশীলনী থেকে MCQ প্রশ্ন</div>
            </div>
            <div style={{ color: "#60a5fa", fontSize: "1.5rem" }}>→</div>
          </div>
        </Link>

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <Link href="/demo/chapter2" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#0f172a", color: "#f1f5f9", borderRadius: "0.625rem", padding: "0.625rem 1.25rem", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}>
            পরবর্তী: অধ্যায় ২ — কমিউনিকেশন সিস্টেমস →
          </Link>
        </div>
      </div>
    </div>
  );
}
