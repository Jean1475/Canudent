"use client";

import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <article
      style={{
        background: "#fff",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius)",
        padding: "38px 34px 32px",
        transition: "transform .22s ease, box-shadow .22s ease, border-color .22s ease",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-8px)";
        el.style.boxShadow = "0 30px 60px -28px rgba(15,42,63,.28)";
        el.style.borderColor = "transparent";
        (el.querySelector(".card-bar") as HTMLElement).style.transform = "scaleX(1)";
        const ic = el.querySelector(".card-ic") as HTMLElement;
        ic.style.background = "var(--accent)";
        ic.style.color = "#fff";
        (el.querySelector(".card-arrow") as HTMLElement).style.transform = "translateX(4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "";
        el.style.boxShadow = "";
        el.style.borderColor = "var(--line)";
        (el.querySelector(".card-bar") as HTMLElement).style.transform = "scaleX(0)";
        const ic = el.querySelector(".card-ic") as HTMLElement;
        ic.style.background = "var(--accent-soft)";
        ic.style.color = "var(--accent-deep)";
        (el.querySelector(".card-arrow") as HTMLElement).style.transform = "";
      }}
    >
      <div
        className="card-bar"
        style={{
          position: "absolute",
          inset: "0 0 auto 0",
          height: 5,
          background: "linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 40%, #fff))",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform .3s ease",
        }}
      />
      <div
        className="card-ic"
        style={{
          width: 64,
          height: 64,
          borderRadius: 20,
          display: "grid",
          placeItems: "center",
          background: "var(--accent-soft)",
          color: "var(--accent-deep)",
          marginBottom: 24,
          transition: "background .22s ease, color .22s ease",
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontSize: "1.5rem", marginBottom: 12 }}>{title}</h3>
      <p style={{ color: "var(--muted)", fontWeight: 500, margin: "0 0 22px" }}>{desc}</p>
      <a
        href="#"
        style={{
          fontFamily: "var(--font-head), sans-serif",
          fontWeight: 600,
          color: "var(--accent-deep)",
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
        }}
      >
        Saber más
        <span
          className="card-arrow"
          style={{ display: "inline-flex", transition: "transform .2s ease" }}
        >
          <ArrowRight size={18} />
        </span>
      </a>
    </article>
  );
}
