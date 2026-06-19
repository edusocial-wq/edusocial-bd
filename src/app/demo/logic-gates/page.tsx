import LogicGatesQuiz from "./quiz";
import Link from "next/link";

export const metadata = {
  title: "লজিক গেট — EduSocial BD | HSC ICT অধ্যায় ৩",
};

/* ── inline styles ──────────────────────────────────────────── */
const card: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "1rem",
  padding: "2rem",
  marginBottom: "2rem",
  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
};

const h2style: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 700,
  color: "#0f172a",
  marginBottom: "1.25rem",
  paddingBottom: "0.75rem",
  borderBottom: "2px solid #e2e8f0",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#1e293b",
  margin: "1.5rem 0 0.4rem",
};

const para: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.8,
  margin: 0,
  fontSize: "0.95rem",
};

/* ── truth table helper ─────────────────────────────────────── */
function TruthTable({ gate, rows, outputs }: {
  gate: string;
  rows: [string, string, string][];
  outputs: Record<string, string>;
}) {
  const hasB = rows[0][1] !== "-";
  return (
    <div style={{ overflowX: "auto", margin: "0.75rem 0 1.5rem" }}>
      <table style={{ borderCollapse: "collapse", fontSize: "0.875rem", minWidth: "220px" }}>
        <thead>
          <tr style={{ background: "#f1f5f9" }}>
            <th style={th}>A</th>
            {hasB && <th style={th}>B</th>}
            <th style={{ ...th, color: "#7c3aed" }}>Y ({gate})</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b, y], i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
              <td style={td}>{a}</td>
              {hasB && <td style={td}>{b}</td>}
              <td style={{ ...td, fontWeight: 700, color: y === "1" ? "#16a34a" : "#dc2626" }}>{y}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ fontSize: "0.8rem", color: "#7c3aed", marginTop: "0.4rem" }}>
        {outputs[gate]}
      </p>
    </div>
  );
}
const th: React.CSSProperties = { padding: "0.5rem 1rem", border: "1px solid #e2e8f0", fontWeight: 700, color: "#475569", textAlign: "center" };
const td: React.CSSProperties = { padding: "0.45rem 1rem", border: "1px solid #e2e8f0", textAlign: "center", fontFamily: "monospace", fontSize: "1rem" };

/* ── gate symbol card ───────────────────────────────────────── */
function GateCard({ name, nameBn, symbol, expr, color, bg, description }: {
  name: string; nameBn: string; symbol: string; expr: string;
  color: string; bg: string; description: string;
}) {
  return (
    <div style={{ border: `2px solid ${color}20`, borderRadius: "0.875rem", background: bg, padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <span style={{ fontSize: "2rem" }}>{symbol}</span>
        <div>
          <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "1rem" }}>{name} গেট</div>
          <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>{nameBn}</div>
        </div>
      </div>
      <code style={{ fontSize: "0.9rem", fontWeight: 700, color, background: `${color}15`, padding: "0.25rem 0.6rem", borderRadius: "0.375rem", alignSelf: "flex-start" }}>
        {expr}
      </code>
      <p style={{ ...para, fontSize: "0.85rem" }}>{description}</p>
    </div>
  );
}

/* ── main page ──────────────────────────────────────────────── */
export default function LogicGatesPage() {
  const gateExpressions: Record<string, string> = {
    AND:  "উভয় ইনপুট 1 হলেই আউটপুট 1",
    OR:   "যেকোনো একটি ইনপুট 1 হলেই আউটপুট 1",
    NOT:  "ইনপুট 0 হলে 1, ইনপুট 1 হলে 0",
    NAND: "AND-এর উল্টো। উভয় 1 হলে আউটপুট 0",
    NOR:  "OR-এর উল্টো। উভয় 0 হলে আউটপুট 1",
    XNOR: "ইনপুট একই হলে 1, ভিন্ন হলে 0",
    XOR:  "ইনপুট ভিন্ন হলে 1, একই হলে 0",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f3ff", fontFamily: "'Noto Sans Bengali', system-ui, sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "740px", margin: "0 auto" }}>

        {/* breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#7c3aed", marginBottom: "1.25rem", flexWrap: "wrap" }}>
          <Link href="/demo/chapter3" style={{ color: "#7c3aed", textDecoration: "none", fontWeight: 600 }}>← অধ্যায় ৩</Link>
          <span style={{ color: "#c4b5fd" }}>|</span>
          <Link href="/demo/binary-arithmetic" style={{ color: "#7c3aed", textDecoration: "none" }}>বাইনারি গণিত</Link>
          <span style={{ color: "#c4b5fd" }}>|</span>
          <span style={{ color: "#6b7280" }}>লজিক গেট</span>
        </div>

        {/* header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
            <span style={{ background: "#7c3aed", color: "#fff", borderRadius: "0.5rem", padding: "0.35rem 0.75rem", fontSize: "0.8rem", fontWeight: 600 }}>
              HSC ICT · অধ্যায় ৩
            </span>
            <span style={{ color: "#6b7280", fontSize: "0.875rem" }}>EduSocial BD</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.25rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 0.5rem" }}>
            লজিক গেট
          </h1>
          <p style={{ color: "#64748b", fontSize: "1rem", margin: 0 }}>
            Logic Gates — বিষয়টি পড়ুন, তারপর কুইজ দিন
          </p>
        </div>

        {/* ── TOPIC CONTENT ── */}
        <div style={card}>
          <h2 style={h2style}>📖 বিষয় ব্যাখ্যা</h2>

          <h3 style={sectionTitle}>লজিক গেট কী?</h3>
          <p style={para}>
            লজিক গেট হলো ডিজিটাল সার্কিটের মূল উপাদান যা এক বা একাধিক বাইনারি ইনপুট (0 বা 1) নিয়ে
            একটি বাইনারি আউটপুট দেয়। কম্পিউটারের প্রতিটি অপারেশন শেষ পর্যন্ত এই লজিক গেটগুলোর
            সমন্বয়ে সম্পন্ন হয়।
          </p>

          {/* key concept box */}
          <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: "0.75rem", padding: "1rem 1.25rem", margin: "1.25rem 0", fontSize: "0.9rem", color: "#1e293b" }}>
            <strong style={{ color: "#7c3aed" }}>💡 মূল ধারণা:</strong>
            <ul style={{ margin: "0.5rem 0 0", paddingLeft: "1.25rem", lineHeight: 2 }}>
              <li>ইনপুট ও আউটপুট শুধুমাত্র দুটি অবস্থায় থাকে: <strong>0 (মিথ্যা/False)</strong> বা <strong>1 (সত্য/True)</strong></li>
              <li>Truth Table দিয়ে গেটের আচরণ বোঝানো হয়</li>
              <li>NAND ও NOR — এই দুটিকে Universal Gate বলে</li>
              <li>বুলিয়ান অ্যালজেব্রা দিয়ে গেটের লজিক প্রকাশ করা হয়</li>
            </ul>
          </div>

          {/* ── Gate overview grid ── */}
          <h3 style={sectionTitle}>গেটসমূহের পরিচিতি</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", margin: "1rem 0 1.75rem" }}>
            <GateCard name="AND" nameBn="এবং গেট" symbol="🔵" expr="Y = A · B" color="#2563eb" bg="#eff6ff" description="সব ইনপুট 1 হলেই আউটপুট 1। যেন সিরিজে সুইচ।" />
            <GateCard name="OR" nameBn="অথবা গেট" symbol="🟢" expr="Y = A + B" color="#16a34a" bg="#f0fdf4" description="যেকোনো একটি ইনপুট 1 হলেই আউটপুট 1। যেন প্যারালালে সুইচ।" />
            <GateCard name="NOT" nameBn="না গেট / ইনভার্টার" symbol="🔴" expr="Y = Ā" color="#dc2626" bg="#fef2f2" description="শুধুমাত্র একটি ইনপুট থাকে, আউটপুট সবসময় উল্টো।" />
            <GateCard name="NAND" nameBn="না-এবং গেট" symbol="🟡" expr="Y = A·B̄" color="#d97706" bg="#fffbeb" description="AND + NOT। Universal Gate। AND-এর আউটপুট উল্টে দেয়।" />
            <GateCard name="NOR" nameBn="না-অথবা গেট" symbol="🟠" expr="Y = A+B̄" color="#ea580c" bg="#fff7ed" description="OR + NOT। Universal Gate। OR-এর আউটপুট উল্টে দেয়।" />
            <GateCard name="XOR" nameBn="এক্সক্লুসিভ OR" symbol="🟣" expr="Y = A ⊕ B" color="#7c3aed" bg="#f5f3ff" description="ইনপুট ভিন্ন হলে 1। Half adder-এ ব্যবহার হয়।" />
            <GateCard name="XNOR" nameBn="এক্সক্লুসিভ NOR" symbol="⚪" expr="Y = A⊕B̄" color="#475569" bg="#f8fafc" description="XOR + NOT। ইনপুট একই হলে 1।" />
          </div>

          {/* ── Truth Tables ── */}
          <h3 style={sectionTitle}>Truth Table (সত্যক সারণি)</h3>
          <p style={{ ...para, marginBottom: "1rem" }}>
            Truth Table দেখায় কোন ইনপুট কম্বিনেশনে কী আউটপুট হবে। পরীক্ষায় এটি সবচেয়ে বেশি আসে।
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>

            {/* AND */}
            <div>
              <div style={{ fontWeight: 700, color: "#2563eb", marginBottom: "0.5rem" }}>🔵 AND গেট</div>
              <TruthTable gate="AND" rows={[["0","0","0"],["0","1","0"],["1","0","0"],["1","1","1"]]} outputs={{ AND: "উভয় 1 হলে আউটপুট 1" }} />
            </div>

            {/* OR */}
            <div>
              <div style={{ fontWeight: 700, color: "#16a34a", marginBottom: "0.5rem" }}>🟢 OR গেট</div>
              <TruthTable gate="OR" rows={[["0","0","0"],["0","1","1"],["1","0","1"],["1","1","1"]]} outputs={{ OR: "যেকোনো একটি 1 হলে আউটপুট 1" }} />
            </div>

            {/* NOT */}
            <div>
              <div style={{ fontWeight: 700, color: "#dc2626", marginBottom: "0.5rem" }}>🔴 NOT গেট</div>
              <TruthTable gate="NOT" rows={[["0","-","1"],["1","-","0"]]} outputs={{ NOT: "ইনপুটের বিপরীত আউটপুট" }} />
            </div>

            {/* NAND */}
            <div>
              <div style={{ fontWeight: 700, color: "#d97706", marginBottom: "0.5rem" }}>🟡 NAND গেট</div>
              <TruthTable gate="NAND" rows={[["0","0","1"],["0","1","1"],["1","0","1"],["1","1","0"]]} outputs={{ NAND: "AND-এর উল্টো — শুধু 1,1 তে আউটপুট 0" }} />
            </div>

            {/* NOR */}
            <div>
              <div style={{ fontWeight: 700, color: "#ea580c", marginBottom: "0.5rem" }}>🟠 NOR গেট</div>
              <TruthTable gate="NOR" rows={[["0","0","1"],["0","1","0"],["1","0","0"],["1","1","0"]]} outputs={{ NOR: "OR-এর উল্টো — শুধু 0,0 তে আউটপুট 1" }} />
            </div>

            {/* XOR */}
            <div>
              <div style={{ fontWeight: 700, color: "#7c3aed", marginBottom: "0.5rem" }}>🟣 XOR গেট</div>
              <TruthTable gate="XOR" rows={[["0","0","0"],["0","1","1"],["1","0","1"],["1","1","0"]]} outputs={{ XOR: "ইনপুট ভিন্ন হলেই আউটপুট 1" }} />
            </div>

            {/* XNOR */}
            <div>
              <div style={{ fontWeight: 700, color: "#475569", marginBottom: "0.5rem" }}>⚪ XNOR গেট</div>
              <TruthTable gate="XNOR" rows={[["0","0","1"],["0","1","0"],["1","0","0"],["1","1","1"]]} outputs={{ XNOR: "ইনপুট একই হলে আউটপুট 1" }} />
            </div>
          </div>

          {/* ── Quick comparison table ── */}
          <h3 style={sectionTitle}>দ্রুত তুলনা সারণি</h3>
          <div style={{ overflowX: "auto", margin: "0.75rem 0 1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem", minWidth: "400px" }}>
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  {["গেট", "ইনপুট", "আউটপুট শর্ত", "বুলিয়ান", "Universal?"].map(h => (
                    <th key={h} style={{ ...th, fontSize: "0.8rem" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["AND 🔵", "2+", "সব 1 হলে 1", "A·B", "না"],
                  ["OR 🟢", "2+", "যেকোনো 1 থাকলে 1", "A+B", "না"],
                  ["NOT 🔴", "1", "সবসময় বিপরীত", "Ā", "না"],
                  ["NAND 🟡", "2+", "যেকোনো 0 থাকলে 1", "A·B̄", "✅ হ্যাঁ"],
                  ["NOR 🟠", "2+", "সব 0 হলেই 1", "A+B̄", "✅ হ্যাঁ"],
                  ["XOR 🟣", "2", "ভিন্ন ইনপুটে 1", "A⊕B", "না"],
                  ["XNOR ⚪", "2", "একই ইনপুটে 1", "A⊕B̄", "না"],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ ...td, fontFamily: j === 3 ? "monospace" : "inherit", fontWeight: j === 0 ? 600 : 400, color: cell === "✅ হ্যাঁ" ? "#16a34a" : "#374151" }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Universal Gate box ── */}
          <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "1.25rem" }}>
            <strong style={{ color: "#92400e" }}>⭐ Universal Gate সম্পর্কে:</strong>
            <p style={{ ...para, marginTop: "0.5rem", fontSize: "0.9rem" }}>
              NAND এবং NOR গেট দিয়ে AND, OR, NOT সহ যেকোনো লজিক সার্কিট তৈরি করা যায়।
              তাই এদের <strong>Universal Gate</strong> বলা হয়। পরীক্ষায় এটি প্রায়ই আসে!
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.75rem" }}>
              {["NAND দিয়ে NOT → একটি NAND, উভয় ইনপুট একই", "NAND দিয়ে AND → দুটি NAND ব্যবহার করে", "NAND দিয়ে OR → তিনটি NAND ব্যবহার করে"].map(t => (
                <span key={t} style={{ fontSize: "0.78rem", background: "#fff", border: "1px solid #fde68a", borderRadius: "0.375rem", padding: "0.25rem 0.6rem", color: "#78350f" }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Memory tip */}
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
            <strong style={{ color: "#15803d" }}>🧠 মনে রাখার কৌশল:</strong>
            <ul style={{ margin: "0.5rem 0 0", paddingLeft: "1.25rem", lineHeight: 2, color: "#1e293b", fontSize: "0.9rem" }}>
              <li><strong>AND</strong> → গুণ (×) এর মতো: 1×1=1, অন্য সব 0</li>
              <li><strong>OR</strong> → যোগ (+) এর মতো: শুধু 0+0=0</li>
              <li><strong>XOR</strong> → "একই হলে 0, ভিন্ন হলে 1" (পরীক্ষায় বেশি আসে)</li>
              <li><strong>NAND/NOR</strong> → AND/OR-এর সব আউটপুট উল্টে দাও</li>
            </ul>
          </div>
        </div>

        {/* ── QUIZ ── */}
        <div style={{ background: "#ffffff", border: "2px solid #7c3aed", borderRadius: "1rem", padding: "2rem", boxShadow: "0 4px 12px rgba(124,58,237,0.12)" }}>
          <h2 style={{ ...h2style, color: "#6d28d9", borderBottomColor: "#ddd6fe" }}>
            ✏️ কুইজ — ১০টি MCQ প্রশ্ন
          </h2>
          <LogicGatesQuiz />
        </div>

        {/* nav footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <Link href="/demo/binary-arithmetic" style={{ color: "#7c3aed", fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}>
            ← বাইনারি গণিত
          </Link>
          <Link href="/demo/boolean-algebra" style={{ color: "#7c3aed", fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}>
            বুলিয়ান অ্যালজেব্রা →
          </Link>
        </div>
      </div>
    </div>
  );
}
