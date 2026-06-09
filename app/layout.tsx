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
  title: "Canudent — Clínica dental",
  description:
    "Odontología moderna y cercana en Madrid. Ortodoncia invisible, implantes y estética dental con la última tecnología.",
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
