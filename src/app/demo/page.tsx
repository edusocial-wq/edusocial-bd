import Quiz from "./quiz";
import Link from "next/link";

export const metadata = {
  title: "সংখ্যা পদ্ধতি — EduSocial BD Demo | HSC ICT অধ্যায় ৩",
  description: "HSC ICT: Number Systems — read the topic then take a 10-question quiz",
};

export default function DemoPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
        fontFamily: "'Noto Sans Bengali', system-ui, sans-serif",
        padding: "2rem 1rem",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>

        {/* breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
          <Link href="/demo/chapter3" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>← অধ্যায় ৩ সূচি</Link>
        </div>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
            <span
              style={{
                background: "#2563eb",
                color: "#fff",
                borderRadius: "0.5rem",
                padding: "0.35rem 0.75rem",
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              HSC ICT · অধ্যায় ৩.১
            </span>
            <span style={{ color: "#6b7280", fontSize: "0.875rem" }}>EduSocial BD</span>
          </div>
          <h1
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.25rem)",
              fontWeight: 800,
              color: "#0f172a",
              margin: "0 0 0.5rem",
            }}
          >
            সংখ্যা পদ্ধতি
          </h1>
          <p style={{ color: "#64748b", fontSize: "1rem", margin: 0 }}>
            Number Systems — বিষয়টি পড়ুন, তারপর কুইজ দিন
          </p>
        </div>

        {/* Topic Explanation */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "1rem",
            padding: "2rem",
            marginBottom: "2rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          <h2 style={h2}>📖 বিষয় ব্যাখ্যা</h2>

          <Section title="সংখ্যা পদ্ধতি কী?">
            সংখ্যা প্রকাশ করার নিয়মকে সংখ্যা পদ্ধতি বলে। কম্পিউটার বিজ্ঞানে মূলত চারটি সংখ্যা
            পদ্ধতি ব্যবহার হয়: বাইনারি, অক্টাল, দশমিক এবং হেক্সাডেসিমেল।
          </Section>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem", margin: "1.5rem 0" }}>
            {[
              { name: "বাইনারি", base: "বেস ২", digits: "০, ১", color: "#dbeafe", border: "#93c5fd", text: "#1e40af" },
              { name: "অক্টাল", base: "বেস ৮", digits: "০–৭", color: "#dcfce7", border: "#86efac", text: "#15803d" },
              { name: "দশমিক", base: "বেস ১০", digits: "০–৯", color: "#fef9c3", border: "#fde047", text: "#854d0e" },
              { name: "হেক্সাডেসিমেল", base: "বেস ১৬", digits: "০–৯, A–F", color: "#fae8ff", border: "#d8b4fe", text: "#7e22ce" },
            ].map((s) => (
              <div
                key={s.name}
                style={{
                  background: s.color,
                  border: `1.5px solid ${s.border}`,
                  borderRadius: "0.75rem",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: 700, color: s.text, fontSize: "1rem" }}>{s.name}</div>
                <div style={{ color: s.text, fontSize: "0.85rem", marginTop: "0.25rem" }}>{s.base}</div>
                <div style={{ color: "#374151", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                  অঙ্ক: {s.digits}
                </div>
              </div>
            ))}
          </div>

          <Section title="বাইনারি → দশমিক রূপান্তর">
            প্রতিটি বিটের অবস্থান অনুযায়ী ২ এর ঘাত গুণ করে যোগ করলেই দশমিক পাওয়া যায়।
          </Section>

          {/* Worked example box */}
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "0.75rem",
              padding: "1.25rem",
              margin: "1rem 0 1.5rem",
              fontFamily: "monospace",
            }}
          >
            <div style={{ fontSize: "0.8rem", color: "#6b7280", marginBottom: "0.75rem", fontFamily: "inherit" }}>
              উদাহরণ: 1011 (বাইনারি) → দশমিক
            </div>
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginBottom: "0.75rem" }}>
              {[["1", "2³=8"], ["0", "2²=4"], ["1", "2¹=2"], ["1", "2⁰=1"]].map(([bit, pos], i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      background: bit === "1" ? "#dbeafe" : "#f1f5f9",
                      border: `2px solid ${bit === "1" ? "#93c5fd" : "#e2e8f0"}`,
                      borderRadius: "0.5rem",
                      width: "52px",
                      height: "52px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: bit === "1" ? "#1e40af" : "#94a3b8",
                    }}
                  >
                    {bit}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#64748b", marginTop: "0.25rem" }}>{pos}</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", fontSize: "0.95rem", color: "#1e293b", fontFamily: "inherit" }}>
              = 8 + 0 + 2 + 1 = <strong style={{ color: "#2563eb" }}>11 (দশমিক)</strong>
            </div>
          </div>

          <Section title="দশমিক → বাইনারি রূপান্তর">
            দশমিক সংখ্যাকে ২ দিয়ে ভাগ করতে থাকুন এবং ভাগশেষগুলো নিচ থেকে উপরে সাজান।
          </Section>

          <div
            style={{
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: "0.75rem",
              padding: "1rem 1.25rem",
              margin: "1rem 0 1.5rem",
              fontSize: "0.9rem",
              color: "#1e293b",
            }}
          >
            <strong>উদাহরণ: ১৩ → বাইনারি</strong>
            <div style={{ marginTop: "0.5rem", lineHeight: 1.8, fontFamily: "monospace" }}>
              ১৩ ÷ ২ = ৬, ভাগশেষ <strong>১</strong><br />
              ৬ ÷ ২ = ৩, ভাগশেষ <strong>০</strong><br />
              ৩ ÷ ২ = ১, ভাগশেষ <strong>১</strong><br />
              ১ ÷ ২ = ০, ভাগশেষ <strong>১</strong><br />
              <span style={{ color: "#15803d" }}>নিচ থেকে উপরে: <strong>1101</strong></span>
            </div>
          </div>

          <Section title="হেক্সাডেসিমেল">
            বেস ১৬ পদ্ধতি। ১০–১৫ কে A–F দিয়ে প্রকাশ করা হয়। মেমোরি অ্যাড্রেস ও রং কোডে ব্যবহার হয়।
          </Section>

          <div
            style={{
              overflowX: "auto",
              margin: "1rem 0",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.85rem",
                minWidth: "380px",
              }}
            >
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  {["দশমিক", "বাইনারি", "অক্টাল", "হেক্সাডেসিমেল"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "0.6rem 0.75rem",
                        textAlign: "center",
                        fontWeight: 700,
                        color: "#475569",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["0", "0000", "0", "0"],
                  ["1", "0001", "1", "1"],
                  ["8", "1000", "10", "8"],
                  ["10", "1010", "12", "A"],
                  ["15", "1111", "17", "F"],
                  ["16", "10000", "20", "10"],
                  ["255", "11111111", "377", "FF"],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "0.55rem 0.75rem",
                          textAlign: "center",
                          border: "1px solid #e2e8f0",
                          fontFamily: "monospace",
                          color: j === 0 ? "#0f172a" : "#2563eb",
                          fontWeight: j === 0 ? 400 : 600,
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key points */}
          <div
            style={{
              background: "#fef9c3",
              border: "1px solid #fde047",
              borderRadius: "0.75rem",
              padding: "1rem 1.25rem",
              marginTop: "1.5rem",
            }}
          >
            <strong style={{ color: "#854d0e" }}>💡 মনে রাখুন:</strong>
            <ul style={{ margin: "0.5rem 0 0", paddingLeft: "1.25rem", lineHeight: 2, color: "#1e293b", fontSize: "0.9rem" }}>
              <li>কম্পিউটার শুধু বাইনারি বোঝে</li>
              <li>১ বাইট = ৮ বিট = সর্বোচ্চ ২৫৫ (দশমিক)</li>
              <li>হেক্সাডেসিমেলে A=10, B=11, C=12, D=13, E=14, F=15</li>
              <li>রঙের কোড যেমন #FF5733 হেক্সাডেসিমেল পদ্ধতিতে লেখা</li>
            </ul>
          </div>
        </div>

        {/* Quiz Section */}
        <div
          style={{
            background: "#ffffff",
            border: "2px solid #2563eb",
            borderRadius: "1rem",
            padding: "2rem",
            boxShadow: "0 4px 12px rgba(37,99,235,0.1)",
          }}
        >
          <h2 style={{ ...h2, color: "#1e40af" }}>
            ✏️ কুইজ — ১০টি MCQ প্রশ্ন
          </h2>
          <Quiz />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <Link href="/demo/chapter3" style={{ color: "#2563eb", fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}>← অধ্যায় ৩ সূচি</Link>
          <Link href="/demo/binary-arithmetic" style={{ color: "#2563eb", fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}>বাইনারি গণিত →</Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.35rem" }}>
        {title}
      </h3>
      <p style={{ color: "#475569", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{children}</p>
    </div>
  );
}

const h2: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 700,
  color: "#0f172a",
  marginBottom: "1.25rem",
  paddingBottom: "0.75rem",
  borderBottom: "2px solid #e2e8f0",
};
