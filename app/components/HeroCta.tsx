"use client";

import { CalendarCheck, Stethoscope } from "lucide-react";

const btnBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 9,
  fontFamily: "var(--font-head), sans-serif",
  fontWeight: 500,
  fontSize: "1.08rem",
  padding: "17px 32px",
  borderRadius: 999,
  border: "none",
  transition: "background .18s ease, transform .18s ease, box-shadow .18s ease, border-color .18s ease, color .18s ease",
  textDecoration: "none",
  cursor: "pointer",
};

export default function HeroCta() {
  return (
    <>
      <a
        href="#contacto"
        style={{ ...btnBase, background: "var(--accent)", color: "#fff", boxShadow: "0 10px 24px -8px color-mix(in srgb, var(--accent) 70%, transparent)" }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.background = "var(--accent-deep)";
          el.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.background = "var(--accent)";
          el.style.transform = "";
        }}
      >
        <CalendarCheck size={20} />
        Pedir cita
      </a>
      <a
        href="#servicios"
        style={{ ...btnBase, background: "#fff", color: "var(--ink)", border: "1.5px solid var(--line)" }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.borderColor = "var(--accent)";
          el.style.color = "var(--accent)";
          el.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.borderColor = "var(--line)";
          el.style.color = "var(--ink)";
          el.style.transform = "";
        }}
      >
        <Stethoscope size={20} />
        Ver servicios
      </a>
    </>
  );
}
