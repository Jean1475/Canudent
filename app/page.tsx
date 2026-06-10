import Image from "next/image";
import {
  Star,
  Clock,
  HeartHandshake,
  AlignCenterHorizontal,
  ShieldCheck,
  Sparkles,
  Phone,
} from "lucide-react";
import Navbar from "./components/Navbar";
import HeroCta from "./components/HeroCta";
import ServiceCard from "./components/ServiceCard";
import CtaButton from "./components/CtaButton";
import FooterLink from "./components/FooterLink";
import StatsBand from "./components/StatsBand";
import TrustLogos from "./components/TrustLogos";
import TeamSection from "./components/TeamSection";

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

            <h1 className="hero-enter hero-enter-2" style={{ fontSize: "clamp(2.1rem, 6vw, 4rem)", fontWeight: 400, textWrap: "balance" } as React.CSSProperties}>
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

            <div className="hero-enter hero-enter-4 hero-cta-group" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <HeroCta />
            </div>

            {/* Trust cluster: phone + rating grouped tightly */}
            <div className="hero-enter hero-enter-4" style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Phone size={15} color="var(--accent)" strokeWidth={2.5} />
                <span style={{ fontSize: ".92rem", color: "var(--muted)", fontWeight: 600 }}>
                  Llámanos:{" "}
                  <a
                    href="tel:+34910000000"
                    style={{ color: "var(--ink)", fontWeight: 700, textDecoration: "underline", textDecorationColor: "var(--line)", textUnderlineOffset: 3 }}
                  >
                    910 000 000
                  </a>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ display: "flex", gap: 2, color: "var(--star)" }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={15} fill="var(--star)" stroke="var(--star)" />
                  ))}
                </span>
                <span style={{ fontSize: ".92rem", color: "var(--muted)", fontWeight: 600 }}>
                  <strong style={{ color: "var(--ink)" }}>4,9 / 5</strong> · más de 2.000 pacientes felices
                </span>
              </div>
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
              className="hero-media-wrap"
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
              className="hero-float"
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
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 400, fontSize: "1rem", lineHeight: 1.1 }}>Abierto hoy</div>
                <div style={{ fontSize: ".82rem", color: "var(--muted)", fontWeight: 600 }}>Lun–Sáb · 9:00–21:00</div>
              </div>
            </div>

            {/* Float: years */}
            <div
              className="hero-float"
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
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 400, fontSize: "1.5rem", lineHeight: 1 }}>+15 años</div>
                <div style={{ fontSize: ".82rem", color: "var(--muted)", fontWeight: 600 }}>cuidando sonrisas</div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 960px) {
            .hero-inner {
              grid-template-columns: 1fr !important;
              gap: 36px !important;
              padding: 48px 20px 64px !important;
            }
            .hero-float {
              display: none !important;
            }
            .hero-media-wrap {
              aspect-ratio: 16/9 !important;
              border-radius: 24px !important;
            }
          }
          @media (max-width: 480px) {
            .hero-inner {
              padding: 36px 16px 52px !important;
            }
          }
        `}</style>
      </section>

      {/* ===== STATS BAND ===== */}
      <StatsBand />

      {/* ===== SERVICES ===== */}
      <section id="servicios" style={{ padding: "var(--space-2xl) 0" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 56px" }}>
            <h2 style={{ fontSize: "clamp(2rem,3.4vw,2.9rem)", margin: "0 0 16px", textWrap: "balance" } as React.CSSProperties}>
              Todo lo que tu sonrisa necesita
            </h2>

            <p style={{ color: "var(--muted)", fontSize: "1.12rem", fontWeight: 500, margin: 0 }}>
              Tratamientos a medida con materiales de primera calidad y un equipo que te explica cada paso con total transparencia.
            </p>
          </div>

          <div className="services-grid">
            <ServiceCard
              featured
              icon={<AlignCenterHorizontal size={34} />}
              title="Ortodoncia invisible"
              desc="Para dientes apiñados o mal alineados sin brackets metálicos. Férulas transparentes a medida, revisiones cómodas y resultados visibles desde la primera fase. El tratamiento más solicitado en la clínica, con más de 800 casos completados."
            />
            <ServiceCard
              icon={<ShieldCheck size={32} />}
              title="Implantes dentales"
              desc="Para recuperar uno o varios dientes perdidos con un resultado que dura décadas. Implantes de titanio con carga inmediata cuando es posible, sin extracciones largas ni prótesis removibles."
            />
            <ServiceCard
              icon={<Sparkles size={32} />}
              title="Estética dental"
              desc="Para una sonrisa más blanca, simétrica y natural. Blanqueamiento profesional y carillas cerámicas mínimamente invasivas, diseñadas pieza a pieza para tu cara."
            />
          </div>
        </div>

        <style>{`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          @media (max-width: 640px) {
            .services-grid { grid-template-columns: 1fr; }
          }

          /* CTA band */
          @media (max-width: 640px) {
            .cta-band {
              padding: 40px 28px !important;
              border-radius: 24px !important;
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 28px !important;
            }
          }

          /* Footer columns */
          .footer-cols {
            display: flex;
            gap: 64px;
            flex-wrap: wrap;
          }
          @media (max-width: 640px) {
            .footer-cols {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 32px;
            }
          }
        `}</style>
      </section>

      {/* ===== TRUST LOGOS ===== */}
      <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <TrustLogos />
      </div>

      {/* ===== TEAM ===== */}
      <TeamSection />

      {/* ===== TARIFAS ===== */}
      <section id="tarifas" style={{ padding: "var(--space-2xl) 0 72px", background: "var(--accent-tint)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={wrap}>
          <div className="tarifas-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: "48px 80px", alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: "clamp(2rem,3.4vw,2.9rem)", marginBottom: 18, textWrap: "balance" } as React.CSSProperties}>
                Precios claros, sin sorpresas
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "1.1rem", fontWeight: 500, maxWidth: "44ch", margin: "0 0 32px" }}>
                Enviamos el presupuesto detallado antes de empezar cualquier tratamiento. Sin letra pequeña, sin costes ocultos.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Primera visita y diagnóstico", price: "Gratuita", highlight: true },
                  { label: "Ortodoncia invisible", price: "desde 2.900 €", highlight: false },
                  { label: "Implante dental completo", price: "desde 1.490 €", highlight: false },
                  { label: "Blanqueamiento profesional", price: "desde 280 €", highlight: false },
                ].map(({ label, price, highlight }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 16,
                      padding: highlight ? "18px 20px" : "14px 20px",
                      background: highlight ? "var(--accent)" : "#fff",
                      borderRadius: 12,
                      border: highlight ? "none" : "1px solid var(--line)",
                    }}
                  >
                    <span style={{ fontWeight: 600, fontSize: ".97rem", color: highlight ? "#fff" : "var(--ink)" }}>{label}</span>
                    <span style={{ fontWeight: 700, fontSize: highlight ? "1.05rem" : "1rem", color: highlight ? "#fff" : "var(--accent)", whiteSpace: "nowrap" }}>{price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, paddingTop: 8 }}>
              <div style={{ paddingBottom: 24, borderBottom: "1px solid var(--line)", marginBottom: 24 }}>
                <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--ink)", marginBottom: 8 }}>
                  Financiación sin intereses
                </div>
                <p style={{ color: "var(--muted)", fontWeight: 500, margin: "0 0 12px", fontSize: ".95rem", lineHeight: 1.55 }}>
                  Divide el coste en cuotas mensuales desde 0% TAE con Dentix Finance.
                </p>
                <a href="#contacto" style={{ fontWeight: 700, color: "var(--accent)", fontSize: ".93rem", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  Consultar opciones →
                </a>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--ink)", marginBottom: 8 }}>
                  Seguros aceptados
                </div>
                <p style={{ color: "var(--muted)", fontWeight: 500, margin: "0 0 12px", fontSize: ".95rem", lineHeight: 1.55 }}>
                  Trabajamos con Sanitas, Adeslas, Mapfre y Asisa. Consulta tu cobertura antes de la primera visita.
                </p>
                <a href="tel:+34910000000" style={{ fontWeight: 700, color: "var(--accent)", fontSize: ".93rem", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  Llamar ahora →
                </a>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .tarifas-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>

      {/* ===== CTA BAND ===== */}
      <section style={{ padding: "var(--space-2xl) 0" }}>
        <div style={wrap}>
          <div
            className="cta-band"
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
              <h2 style={{ fontSize: "clamp(1.9rem,3vw,2.6rem)", color: "#fff", maxWidth: "18ch", textWrap: "balance" } as React.CSSProperties}>
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
      <footer id="contacto" style={{ background: "var(--ink)", color: "rgba(255,255,255,.7)", padding: "64px 0 40px" }}>
        <div style={wrap}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 48,
              flexWrap: "wrap",
              paddingBottom: 48,
              borderBottom: "1px solid rgba(255,255,255,.12)",
            }}
          >
            <div style={{ flex: "0 0 auto", maxWidth: 300 }}>
              <Image
                src="/ClaudeCode/uploads/wordmark-white.png"
                alt="Canudent"
                height={34}
                width={160}
                style={{ height: 34, width: "auto", marginBottom: 18 }}
              />
              <p style={{ maxWidth: "30ch", fontWeight: 500, fontSize: ".96rem", margin: "0 0 20px" }}>
                Odontología moderna y cercana en el corazón de Madrid. Cuidamos de ti y de toda tu familia.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: ".8rem", fontWeight: 700, color: "rgba(255,255,255,.45)", textTransform: "uppercase", letterSpacing: ".06em", marginRight: 2 }}>
                  Seguros:
                </span>
                {["Sanitas", "Adeslas", "Mapfre", "Asisa"].map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: ".82rem",
                      fontWeight: 700,
                      color: "rgba(255,255,255,.6)",
                      background: "rgba(255,255,255,.08)",
                      border: "1px solid rgba(255,255,255,.14)",
                      borderRadius: 6,
                      padding: "3px 10px",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="footer-cols">
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
            className="footer-bottom"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
              paddingTop: 24,
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
      <h4 style={{ fontFamily: "var(--font-head), sans-serif", fontWeight: 400, color: "#fff", fontSize: "1rem", marginBottom: 16 }}>
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
