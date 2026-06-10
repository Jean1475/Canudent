"use client";

import { CalendarCheck } from "lucide-react";

export default function CtaButton() {
  return (
    <a
      href="#contacto"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        fontFamily: "var(--font-head), sans-serif",
        fontWeight: 400,
        fontSize: "1.08rem",
        padding: "17px 32px",
        borderRadius: 999,
        background: "#fff",
        color: "var(--accent-deep)",
        position: "relative",
        border: "none",
        transition: "transform .18s ease, box-shadow .18s ease",
        textDecoration: "none",
        zIndex: 1,
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = "translateY(-2px)";
        el.style.boxShadow = "0 16px 30px -10px rgba(0,0,0,.3)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = "";
        el.style.boxShadow = "";
      }}
    >
      <CalendarCheck size={20} />
      Reservar primera visita
    </a>
  );
}
