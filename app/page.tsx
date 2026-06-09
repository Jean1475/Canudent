import Image from "next/image";
import {
  Star,
  Clock,
  HeartHandshake,
  AlignCenterHorizontal,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Navbar from "./components/Navbar";
import HeroCta from "./components/HeroCta";
import ServiceCard from "./components/ServiceCard";
import CtaButton from "./components/CtaButton";
import FooterLink from "./components/FooterLink";

const wrap: React.CSSProperties = {
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 28px",
};

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div
            style={{
              position: "absolute",
              width: 560,
              height: 560,
              right: -160,
              top: -180,
              borderRadius: "50%",
              background: "radial-gradient(circle at 30% 30%, var(--accent-soft), transparent 70%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 420,
              height: 420,
              left: -180,
              bottom: -160,
              borderRadius: "50%",
              filter: "blur(8px)",
              opacity: 0.55,
              background: "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 14%, #fff), transparent 72%)",
            }}
          />
        </div>

        <div
          className="hero-inner"
          style={{
            ...wrap,
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "1.05fr .95fr",
            gap: 60,
            alignItems: "center",
            padding: "78px 28px 96px",
          }}
        >
          {/* Copy */}
          <div>
            <span
              className="hero-enter hero-enter-1"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--accent-soft)",
                color: "var(--accent-deep)",
                fontFamily: "var(--font-head), sans-serif",
                fontWeight: 500,
                fontSize: ".92rem",
                padding: "8px 16px",
                borderRadius: 999,
                marginBottom: 24,
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Clínica dental · Madrid
            </span>

            <h1 className="hero-enter hero-enter-2" style={{ fontSize: "clamp(2.6rem, 4.6vw, 4rem)", fontWeight: 600 }}>
              Tu mejor{" "}
              <span style={{ color: "var(--accent)", position: "relative", whiteSpace: "nowrap" }}>
                sonrisa
                <svg
                  viewBox="0 0 300 14"
                  preserveAspectRatio="none"
                  style={{ position: "absolute", left: 0, right: 0, bottom: -12, width: "100%", height: 14 }}
                >
                  <path
                    d="M3 9 C 70 2, 230 2, 297 8"
                    stroke="var(--accent)"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                    opacity=".4"
                  />
                </svg>
              </span>{" "}
              empieza aquí
            </h1>

            <p
              className="hero-enter hero-enter-3"
              style={{
                fontSize: "1.22rem",
                color: "var(--muted)",
                maxWidth: "35ch",
                margin: "26px 0 36px",
                fontWeight: 500,
              }}
            >
              Odontología moderna y cercana, con la última tecnología. Cuidamos de ti y de toda tu familia en un espacio donde te sentirás como en casa.
            </p>

            <div className="hero-enter hero-enter-4" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <HeroCta />
            </div>

            <div className="hero-enter hero-enter-4" style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 34 }}>
              <span style={{ display: "flex", gap: 2, color: "#F5B301" }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={18} fill="#F5B301" stroke="#F5B301" />
                ))}
              </span>
              <span style={{ fontSize: ".98rem", color: "var(--muted)", fontWeight: 600 }}>
                <strong style={{ color: "var(--ink)" }}>4,9 / 5</strong> · más de 2.000 pacientes felices
              </span>
            </div>
          </div>

          {/* Media */}
          <div className="hero-media-enter" style={{ position: "relative" }}>
            <Image
              src="/ClaudeCode/assets/mark-teal.png"
              alt=""
              aria-hidden
              width={200}
              height={200}
              style={{
                position: "absolute",
                width: 200,
                height: "auto",
                right: -44,
                top: -46,
                opacity: 0.1,
                zIndex: -1,
                rotate: "8deg",
              }}
            />
            <div
              style={{
                width: "100%",
                aspectRatio: "4/5",
                borderRadius: "42px 42px 42px 120px",
                boxShadow: "0 40px 80px -36px rgba(15,42,63,.42)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85"
                alt="Interior de la clínica Canudent, Madrid — gabinete dental moderno con equipamiento de última generación"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 960px) 100vw, 45vw"
                priority
              />
            </div>

            {/* Float: open hours */}
            <div
              style={{
                position: "absolute",
                background: "#fff",
                borderRadius: 18,
                boxShadow: "0 20px 44px -18px rgba(15,42,63,.30)",
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 18px",
                left: -34,
                bottom: 54,
              }}
            >
              <div style={{ width: 42, height: 42, borderRadius: 12, display: "grid", placeItems: "center", background: "var(--accent-soft)", color: "var(--accent-deep)", flexShrink: 0 }}>
                <Clock size={22} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 600, fontSize: "1rem", lineHeight: 1.1 }}>Abierto hoy</div>
                <div style={{ fontSize: ".82rem", color: "var(--muted)", fontWeight: 600 }}>Lun–Sáb · 9:00–21:00</div>
              </div>
            </div>

            {/* Float: years */}
            <div
              style={{
                position: "absolute",
                background: "#fff",
                borderRadius: 18,
                boxShadow: "0 20px 44px -18px rgba(15,42,63,.30)",
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 18px",
                right: -26,
                top: 40,
              }}
            >
              <div style={{ width: 42, height: 42, borderRadius: 12, display: "grid", placeItems: "center", background: "var(--accent-soft)", color: "var(--accent-deep)", flexShrink: 0 }}>
                <HeartHandshake size={22} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 600, fontSize: "1.5rem", lineHeight: 1 }}>+15 años</div>
                <div style={{ fontSize: ".82rem", color: "var(--muted)", fontWeight: 600 }}>cuidando sonrisas</div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 960px) {
            .hero-inner {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
              padding: 56px 20px 72px !important;
            }
          }
        `}</style>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="servicios" style={{ padding: "96px 0 40px" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 56px" }}>
            <span
              style={{
                fontFamily: "var(--font-head), sans-serif",
                fontWeight: 600,
                color: "var(--accent)",
                letterSpacing: ".08em",
                textTransform: "uppercase",
                fontSize: ".86rem",
              }}
            >
              Nuestros servicios
            </span>
            <h2 style={{ fontSize: "clamp(2rem,3.4vw,2.9rem)", margin: "14px 0 16px" }}>
              Todo lo que tu sonrisa necesita
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1.12rem", fontWeight: 500, margin: 0 }}>
              Tratamientos a medida con materiales de primera calidad y un equipo que te explica cada paso con total transparencia.
            </p>
          </div>

          <div className="services-grid">
            <ServiceCard
              icon={<AlignCenterHorizontal size={32} />}
              title="Ortodoncia invisible"
              desc="Alinea tus dientes sin que nadie lo note, con férulas transparentes hechas a tu medida y revisiones cómodas."
            />
            <ServiceCard
              icon={<ShieldCheck size={32} />}
              title="Implantes dentales"
              desc="Recupera los dientes que faltan con implantes de titanio de alta calidad y resultados naturales y duraderos."
            />
            <ServiceCard
              icon={<Sparkles size={32} />}
              title="Estética dental"
              desc="Blanqueamiento y carillas para conseguir una sonrisa luminosa, armónica y completamente natural."
            />
          </div>
        </div>

        <style>{`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 26px;
          }
          @media (max-width: 960px) {
            .services-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      {/* ===== CTA BAND ===== */}
      <section style={{ padding: "90px 0" }}>
        <div style={wrap}>
          <div
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-deep))",
              borderRadius: 40,
              padding: "64px 56px",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 40,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 380,
                height: 380,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,255,255,.18), transparent 70%)",
                right: -80,
                top: -120,
              }}
            />
            <div style={{ position: "relative" }}>
              <h2 style={{ fontSize: "clamp(1.9rem,3vw,2.6rem)", color: "#fff", maxWidth: "18ch" }}>
                ¿Listo para sentirte orgulloso de tu sonrisa?
              </h2>
              <p style={{ color: "rgba(255,255,255,.85)", fontWeight: 500, margin: "14px 0 0", fontSize: "1.08rem" }}>
                Reserva tu primera visita y diagnóstico sin compromiso.
              </p>
            </div>
            <CtaButton />
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="contacto" style={{ background: "var(--ink)", color: "rgba(255,255,255,.7)", padding: "60px 0 36px" }}>
        <div style={wrap}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 48,
              flexWrap: "wrap",
              paddingBottom: 40,
              borderBottom: "1px solid rgba(255,255,255,.12)",
            }}
          >
            <div>
              <Image
                src="/ClaudeCode/uploads/wordmark-white.png"
                alt="Canudent"
                height={34}
                width={160}
                style={{ height: 34, width: "auto", marginBottom: 18 }}
              />
              <p style={{ maxWidth: "30ch", fontWeight: 500, fontSize: ".96rem", margin: 0 }}>
                Odontología moderna y cercana en el corazón de Madrid. Cuidamos de ti y de toda tu familia.
              </p>
            </div>
            <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
              <FooterCol
                title="Servicios"
                links={["Ortodoncia invisible", "Implantes dentales", "Estética dental", "Odontología general"]}
              />
              <FooterCol
                title="Clínica"
                links={["Sobre nosotros", "Equipo", "Tarifas", "Blog"]}
              />
              <FooterCol
                title="Contacto"
                links={["910 000 000", "hola@canudent.es", "Calle de la Sonrisa, 12\n28001 Madrid"]}
                hrefs={["tel:+34910000000", "mailto:hola@canudent.es", "#contacto"]}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
              paddingTop: 26,
              fontSize: ".88rem",
              fontWeight: 600,
            }}
          >
            <span>© 2026 Canudent. Todos los derechos reservados.</span>
            <span>Aviso legal · Privacidad · Cookies</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function FooterCol({
  title,
  links,
  hrefs,
}: {
  title: string;
  links: string[];
  hrefs?: string[];
}) {
  return (
    <div>
      <h4 style={{ fontFamily: "var(--font-head), sans-serif", fontWeight: 600, color: "#fff", fontSize: "1rem", marginBottom: 16 }}>
        {title}
      </h4>
      {links.map((link, i) => (
        <FooterLink key={i} href={hrefs?.[i] ?? "#"}>
          {link}
        </FooterLink>
      ))}
    </div>
  );
}
