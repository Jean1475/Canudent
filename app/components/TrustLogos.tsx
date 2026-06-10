"use client";

const logos = [
  { name: "Colegio de Odontólogos de Madrid", abbr: "COEM" },
  { name: "Invisalign Provider", abbr: "Invisalign" },
  { name: "Straumann Group", abbr: "Straumann" },
  { name: "Sanitas", abbr: "Sanitas" },
  { name: "Adeslas", abbr: "Adeslas" },
];

export default function TrustLogos() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "28px 28px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontSize: ".82rem",
          fontWeight: 700,
          color: "var(--muted)",
          whiteSpace: "nowrap",
          marginRight: 4,
        }}
      >
        Trabajamos con
      </span>
      {logos.map((logo) => (
        <div
          key={logo.name}
          title={logo.name}
          style={{
            padding: "8px 18px",
            border: "1px solid var(--line)",
            borderRadius: 8,
            color: "var(--muted)",
            fontFamily: "var(--font-head), sans-serif",
            fontWeight: 700,
            fontSize: ".86rem",
            letterSpacing: ".01em",
            opacity: 0.75,
            transition: "opacity .2s ease, border-color .2s ease, color .2s ease",
            cursor: "default",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = "1";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
            (e.currentTarget as HTMLElement).style.color = "var(--ink)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = "0.75";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
            (e.currentTarget as HTMLElement).style.color = "var(--muted)";
          }}
        >
          {logo.abbr}
        </div>
      ))}
    </div>
  );
}
