"use client";

export default function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      style={{
        display: "block",
        fontWeight: 600,
        fontSize: ".94rem",
        marginBottom: 11,
        color: "rgba(255,255,255,.7)",
        transition: "color .15s",
        whiteSpace: "pre-line",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,.7)")}
    >
      {children}
    </a>
  );
}
