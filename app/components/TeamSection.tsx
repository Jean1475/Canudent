"use client";

import Image from "next/image";

const team = [
  {
    name: "Dra. Ana Canudo",
    role: "Directora clínica · Ortodoncia invisible",
    bio: "Especialista en ortodoncia de adultos con más de 15 años de experiencia. Formada en la Universidad Complutense y certificada en Invisalign.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    years: "15 años",
  },
  {
    name: "Dr. Carlos Merino",
    role: "Implantología y cirugía oral",
    bio: "Especialista en implantes de carga inmediata y cirugía mínimamente invasiva. Máster en Implantología por la Universidad de Barcelona.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    years: "12 años",
  },
  {
    name: "Dra. Laura Vidal",
    role: "Estética dental y blanqueamiento",
    bio: "Especializada en diseño de sonrisa y carillas cerámicas. Referente en estética dental mínimamente invasiva en Madrid.",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
    years: "9 años",
  },
];

export default function TeamSection() {
  return (
    <section id="equipo" style={{ padding: "var(--space-3xl) 0" }}>
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 28px",
        }}
      >
        <div style={{ maxWidth: 580, marginBottom: 56 }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.4vw, 2.9rem)",
              marginBottom: 16,
              textWrap: "balance",
            } as React.CSSProperties}
          >
            Conoce a quién te va a tratar
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1.12rem",
              fontWeight: 500,
              margin: 0,
              maxWidth: "52ch",
            }}
          >
            En Canudent siempre sabes quién te atiende. Sin rotaciones ni caras nuevas en cada visita: tu doctor te acompaña desde el diagnóstico hasta el resultado final.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <article
              key={member.name}
              className="team-card"
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                transition: "transform .22s ease, box-shadow .22s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 30px 60px -28px rgba(15,42,63,.24)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "";
                el.style.boxShadow = "";
              }}
            >
              <div
                style={{
                  aspectRatio: "3/2",
                  overflow: "hidden",
                  position: "relative",
                  background: "var(--accent-tint)",
                }}
              >
                <Image
                  src={member.img}
                  alt={`Foto de ${member.name}`}
                  fill
                  sizes="(max-width: 599px) 100vw, (max-width: 960px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top center",
                    transition: "transform .4s ease",
                  }}
                  className="team-photo"
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 14,
                    right: 14,
                    background: "var(--accent)",
                    color: "#fff",
                    borderRadius: 999,
                    padding: "5px 14px",
                    fontSize: ".8rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-head), sans-serif",
                  }}
                >
                  {member.years} exp.
                </div>
              </div>
              <div style={{ padding: "28px 30px 30px" }}>
                <div
                  style={{
                    fontSize: ".88rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    marginBottom: 8,
                  }}
                >
                  {member.role}
                </div>
                <h3
                  style={{
                    fontSize: "1.35rem",
                    marginBottom: 12,
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: ".96rem",
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        @media (max-width: 960px) and (min-width: 600px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 599px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 960px) {
          #equipo {
            padding: var(--space-2xl) 0;
          }
        }
        .team-card:hover .team-photo {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
}
