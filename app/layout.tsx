import type { Metadata } from "next";
import { Varela_Round, Nunito } from "next/font/google";
import "./globals.css";

const varelaRound = Varela_Round({
  variable: "--font-varela-round",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Canudent — Clínica dental en Madrid",
  description:
    "Ortodoncia invisible, implantes y estética dental en el corazón de Madrid. Primera visita gratuita. Llámanos: 910 000 000.",
  openGraph: {
    title: "Canudent — Clínica dental en Madrid",
    description: "Ortodoncia invisible, implantes y estética dental. Primera visita gratuita.",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canudent — Clínica dental en Madrid",
    description: "Ortodoncia invisible, implantes y estética dental. Primera visita gratuita.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${varelaRound.variable} ${nunito.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
