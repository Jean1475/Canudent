const stats = [
  { value: "+15 años", label: "cuidando sonrisas" },
  { value: "2.000+", label: "pacientes satisfechos" },
  { value: "4,9 / 5", label: "valoración en Google" },
  { value: "3", label: "especialistas dedicados" },
];

export default function StatsBand() {
  return (
    <section
      style={{
        background: "var(--accent-tint)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "0",
      }}
    >
      <div
        className="stats-grid"
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 28px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "36px 24px",
              textAlign: "center",
              borderRight: i < stats.length - 1 ? "1px solid var(--line)" : "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-head), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)",
                color: "var(--accent)",
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontSize: ".92rem",
                color: "var(--muted)",
                fontWeight: 600,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 960px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stats-grid > div:nth-child(2),
          .stats-grid > div:nth-child(4) {
            border-right: none;
          }
          .stats-grid > div:nth-child(1),
          .stats-grid > div:nth-child(2) {
            border-bottom: 1px solid var(--line);
          }
        }
        @media (max-width: 480px) {
          .stats-grid > div {
            padding: 28px 16px;
          }
        }
      `}</style>
    </section>
  );
}
