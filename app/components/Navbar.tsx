"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, CalendarCheck, Menu } from "lucide-react";

const NAV_SECTIONS = ["servicios", "equipo", "tarifas", "contacto"] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled
          ? "rgba(255,255,255,0.94)"
          : "color-mix(in srgb, #fff 88%, transparent)",
        backdropFilter: "saturate(160%) blur(14px)",
        boxShadow: scrolled
          ? "0 6px 24px -14px rgba(15,42,63,.28)"
          : "none",
        transition: "box-shadow .25s ease, background .25s ease",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 28px",
          display: "flex",
          alignItems: "center",
          gap: 36,
          height: 78,
        }}
      >
        <a href="#" aria-label="Canudent inicio" style={{ flexShrink: 0 }}>
          {/* wordmark on desktop, icon mark on mobile */}
          <Image
            src="/ClaudeCode/assets/wordmark-navy.png"
            alt="Canudent"
            height={34}
            width={160}
            priority
            className="logo-wordmark"
            style={{ height: 34, width: "auto", display: "block" }}
          />
          <Image
            src="/ClaudeCode/assets/mark-teal.png"
            alt="Canudent"
            height={36}
            width={36}
            priority
            className="logo-mark"
            style={{ height: 36, width: "auto", display: "none" }}
          />
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          {NAV_SECTIONS.map((id) => {
            const label = id.charAt(0).toUpperCase() + id.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className={`nav-link${isActive ? " nav-link--active" : ""}`}
                style={{
                  fontWeight: 700,
                  fontSize: ".98rem",
                  position: "relative",
                  padding: "6px 0",
                }}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 18 }}>
          <a
            href="tel:+34910000000"
            className="nav-phone-link"
            style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: ".96rem", color: "var(--ink)" }}
          >
            <Phone size={18} color="var(--accent)" />
            910 000 000
          </a>
          <a
            href="#contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              fontFamily: "var(--font-head), sans-serif",
              fontWeight: 400,
              fontSize: "1.02rem",
              padding: "14px 26px",
              borderRadius: 999,
              background: "var(--accent)",
              color: "#fff",
              boxShadow: "0 10px 24px -8px color-mix(in srgb, var(--accent) 70%, transparent)",
              border: "none",
              whiteSpace: "nowrap",
              transition: "background .18s ease, transform .18s ease, box-shadow .18s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-deep)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "";
            }}
          >
            <CalendarCheck size={18} />
            Pedir cita
          </a>
          <button
            className="menu-btn-mobile"
            aria-label="Menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "var(--ink)" }}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          role="navigation"
          aria-label="Menú móvil"
          style={{
            background: "#fff",
            borderTop: "1px solid var(--line)",
            padding: "16px 28px 20px",
          }}
        >
          {NAV_SECTIONS.map((id) => {
            const label = id.charAt(0).toUpperCase() + id.slice(1);
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: "10px 0",
                  color: "var(--ink)",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                {label}
              </a>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .nav-links { display: none !important; }
          .nav-phone-link { display: none !important; }
          .menu-btn-mobile { display: grid !important; }
          .logo-wordmark { display: none !important; }
          .logo-mark { display: block !important; }
        }
        .nav-links { display: flex; align-items: center; gap: 34px; margin-left: 8px; }
        .nav-link {
          color: var(--ink);
          text-decoration: none;
          transition: color .18s ease;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 2px;
          border-radius: 2px;
          width: 100%;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .22s ease;
        }
        .nav-link:hover,
        .nav-link--active { color: var(--accent); }
        .nav-link:hover::after,
        .nav-link--active::after { transform: scaleX(1); }

        @media (prefers-reduced-motion: reduce) {
          .nav-link::after { transition: none; }
        }
      `}</style>
    </header>
  );
}
