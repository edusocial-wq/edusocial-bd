import Link from "next/link";

export const metadata = {
  title: "অধ্যায় ২: কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং — HSC ICT | EduSocial BD",
};

const topics = [
  {
    href: "/demo/chapter2/data-communication",
    num: "২.১",
    title: "ডেটা কমিউনিকেশন",
    en: "Data Communication",
    desc: "ডেটা কমিউনিকেশনের উপাদান, ব্যান্ডউইথ, ডেটা ট্রান্সমিশন মোড",
    icon: "📡",
    color: "#0284c7",
    bg: "#f0f9ff",
    border: "#bae6fd",
  },
  {
    href: "/demo/chapter2/communication-media",
    num: "২.২",
    title: "কমিউনিকেশন মাধ্যম",
    en: "Communication Media",
    desc: "তারযুক্ত (Twisted Pair, Coaxial, Fiber Optic) ও তারবিহীন মাধ্যম",
    icon: "🔌",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
  {
    href: "/demo/chapter2/network-topology",
    num: "২.৩",
    title: "নেটওয়ার্ক টপোলজি",
    en: "Network Topology",
    desc: "Bus, Star, Ring, Mesh ও Tree টপোলজি — সুবিধা, অসুবিধা ও ব্যবহার",
    icon: "🔗",
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#a5f3fc",
  },
  {
    href: "/demo/chapter2/network-types",
    num: "২.৪",
    title: "নেটওয়ার্কের ধরন",
    en: "Types of Network",
    desc: "PAN, LAN, MAN ও WAN — বিস্তার, গতি ও ব্যবহারের পার্থক্য",
    icon: "🌐",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    href: "/demo/chapter2/internet-protocol",
    num: "২.৫",
    title: "ইন্টারনেট ও প্রোটোকল",
    en: "Internet & Protocol",
    desc: "TCP/IP, IP Address, DNS, HTTP, FTP, Modem, ISP — ইন্টারনেটের মূল ধারণা",
    icon: "🌍",
    color: "#ca8a04",
    bg: "#fefce8",
    border: "#fef08a",
  },
];

const analysis = [
  {
    num: "২.১",
    title: "ডেটা কমিউনিকেশন",
    color: "#0284c7",
    importance: "★★★",
    points: [
      "ডেটা কমিউনিকেশনের ৫টি উপাদান: প্রেরক, প্রাপক, বার্তা, মাধ্যম, প্রোটোকল",
      "Simplex, Half-Duplex, Full-Duplex — ট্রান্সমিশন মোড",
      "Bandwidth: ডেটা পরিবহনের ক্ষমতা (bps, Kbps, Mbps, Gbps)",
      "Analog vs Digital Signal পার্থক্য",
      "Modulation: Analog → Digital রূপান্তর",
    ],
    keyTerms: ["Sender","Receiver","Message","Medium","Protocol","Simplex","Half-Duplex","Full-Duplex","Bandwidth","bps"],
  },
  {
    num: "২.২",
    title: "কমিউনিকেশন মাধ্যম",
    color: "#7c3aed",
    importance: "★★★★",
    points: [
      "Guided (তারযুক্ত): Twisted Pair, Coaxial Cable, Fiber Optic Cable",
      "Unguided (তারবিহীন): Radio Wave, Microwave, Infrared, Bluetooth, Wi-Fi, Satellite",
      "Fiber Optic: আলোর মাধ্যমে — সবচেয়ে দ্রুত ও নিরাপদ",
      "Twisted Pair: সবচেয়ে সস্তা ও সহজলভ্য",
      "Satellite: দীর্ঘ দূরত্বে যোগাযোগ",
    ],
    keyTerms: ["Twisted Pair","Coaxial","Fiber Optic","Radio Wave","Microwave","Satellite","Wi-Fi","Bluetooth","Infrared"],
  },
  {
    num: "২.৩",
    title: "নেটওয়ার্ক টপোলজি",
    color: "#0891b2",
    importance: "★★★★★",
    points: [
      "Bus: একটি মূল তার, সবকিছু সংযুক্ত — সহজ কিন্তু তার নষ্ট হলে সব বন্ধ",
      "Star: কেন্দ্রীয় Hub/Switch — সবচেয়ে জনপ্রিয়, একটি নষ্ট হলে বাকি চলে",
      "Ring: বৃত্তাকার — Token Passing পদ্ধতি",
      "Mesh: সব ডিভাইস পরস্পর সংযুক্ত — সবচেয়ে নির্ভরযোগ্য কিন্তু ব্যয়বহুল",
      "Tree: Bus + Star-এর সমন্বয়, Hierarchical কাঠামো",
    ],
    keyTerms: ["Bus","Star","Ring","Mesh","Tree","Hub","Switch","Token","Topology","Node"],
  },
  {
    num: "২.৪",
    title: "নেটওয়ার্কের ধরন",
    color: "#16a34a",
    importance: "★★★★",
    points: [
      "PAN (Personal Area Network): ব্যক্তিগত, ১০ মিটারের মধ্যে (Bluetooth)",
      "LAN (Local Area Network): একটি ভবন/ক্যাম্পাস, ১ কিমি পর্যন্ত",
      "MAN (Metropolitan Area Network): একটি শহর, ১০০ কিমি পর্যন্ত",
      "WAN (Wide Area Network): দেশ/মহাদেশ, সীমাহীন (ইন্টারনেট)  ",
      "বিস্তার, গতি, খরচ ও পরিচালনার পার্থক্য মনে রাখতে হবে",
    ],
    keyTerms: ["PAN","LAN","MAN","WAN","Bluetooth","Wi-Fi","Ethernet","Router","Internet","Coverage"],
  },
  {
    num: "২.৫",
    title: "ইন্টারনেট ও প্রোটোকল",
    color: "#ca8a04",
    importance: "★★★★★",
    points: [
      "TCP/IP: ইন্টারনেটের মূল প্রোটোকল",
      "IP Address: প্রতিটি ডিভাইসের অদ্বিতীয় ঠিকানা (IPv4: 32-bit, IPv6: 128-bit)",
      "DNS: Domain Name → IP Address রূপান্তর",
      "HTTP/HTTPS: ওয়েব ব্রাউজিং প্রোটোকল",
      "FTP: ফাইল ট্রান্সফার প্রোটোকল",
      "Modem: Analog ↔ Digital সংকেত রূপান্তরকারী ডিভাইস",
      "ISP (Internet Service Provider): ইন্টারনেট সরবরাহকারী প্রতিষ্ঠান",
    ],
    keyTerms: ["TCP/IP","IP Address","IPv4","IPv6","DNS","HTTP","HTTPS","FTP","SMTP","Modem","ISP","Router"],
  },
];

export default function Chapter2Page() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Noto Sans Bengali',system-ui,sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>

        {/* breadcrumb */}
        <div style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1.25rem" }}>
          <Link href="/demo/chapter3" style={{ color: "#0284c7", textDecoration: "none" }}>অধ্যায় ৩ →</Link>
          <span style={{ margin: "0 0.5rem", color: "#cbd5e1" }}>|</span>
          <span>অধ্যায় ২</span>
        </div>

        {/* header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "0.4rem" }}>HSC ICT · NCTB · Class 11-12</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.25rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 0.4rem" }}>অধ্যায় ২</h1>
          <p style={{ fontSize: "1.1rem", color: "#475569", margin: 0, fontWeight: 500 }}>কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং · Communication Systems & Networking</p>
        </div>

        {/* dark analysis block */}
        <div style={{ background: "#0f172a", color: "#e2e8f0", borderRadius: "1rem", padding: "2rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ fontSize: "1.75rem" }}>📡</span>
            <div>
              <div style={{ fontWeight: 800, color: "#f1f5f9", fontSize: "1.1rem" }}>অধ্যায় বিশ্লেষণ</div>
              <div style={{ fontSize: "0.8rem", color: "#64748b" }}>পরীক্ষার কৌশলগত দৃষ্টিভঙ্গি</div>
            </div>
          </div>

          <div style={{ background: "#1e293b", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "1.5rem", borderLeft: "3px solid #0284c7" }}>
            <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.8, margin: 0 }}>
              এই অধ্যায়টি HSC ICT পরীক্ষায় MCQ ও সৃজনশীল উভয় অংশেই গুরুত্বপূর্ণ।
              নেটওয়ার্ক টপোলজি (Bus, Star, Ring, Mesh) থেকে প্রতি বছর MCQ আসে।
              TCP/IP, IP Address ও DNS-সংক্রান্ত প্রশ্নও নিয়মিত পরীক্ষায় থাকে।
              ৫টি বিষয় সঠিকভাবে আয়ত্ত করলে এই অধ্যায় থেকে পূর্ণ নম্বর পাওয়া সম্ভব।
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
                ["নেটওয়ার্ক টপোলজি (২.৩)","★★★★★","Bus/Star/Ring/Mesh চিত্র ও বৈশিষ্ট্য"],
                ["ইন্টারনেট ও প্রোটোকল (২.৫)","★★★★★","TCP/IP, IP, DNS — প্রতি বছর আসে"],
                ["কমিউনিকেশন মাধ্যম (২.২)","★★★★","Fiber Optic vs Twisted Pair পার্থক্য"],
                ["নেটওয়ার্কের ধরন (২.৪)","★★★★","LAN/MAN/WAN পরিসীমা ও বৈশিষ্ট্য"],
                ["ডেটা কমিউনিকেশন (২.১)","★★★","Simplex/Half-Duplex/Full-Duplex"],
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
        <Link href="/demo/chapter2/textbook-quiz" style={{ textDecoration: "none" }}>
          <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", borderRadius: "0.875rem", padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", marginBottom: "2rem" }}>
            <div style={{ fontSize: "2rem" }}>📝</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, color: "#f1f5f9", fontSize: "1rem" }}>পাঠ্যবইয়ের অনুশীলনী কুইজ</div>
              <div style={{ color: "#94a3b8", fontSize: "0.85rem", marginTop: "0.25rem" }}>NCTB বইয়ের Chapter 2 অনুশীলনী থেকে MCQ প্রশ্ন</div>
            </div>
            <div style={{ color: "#60a5fa", fontSize: "1.5rem" }}>→</div>
          </div>
        </Link>

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "#94a3b8", fontSize: "0.8rem", margin: 0 }}>EduSocial BD · HSC ICT অধ্যায় ২</p>
          <div style={{ display:"flex", gap:"0.75rem", flexWrap:"wrap" }}>
            <Link href="/demo/chapter1" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#1e293b", color: "#f1f5f9", borderRadius: "0.625rem", padding: "0.625rem 1.25rem", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}>
              ← পূর্ববর্তী: অধ্যায় ১
            </Link>
            <Link href="/demo/chapter3" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#0f172a", color: "#f1f5f9", borderRadius: "0.625rem", padding: "0.625rem 1.25rem", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}>
              পরবর্তী: অধ্যায় ৩ — ডিজিটাল ডিভাইস →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
