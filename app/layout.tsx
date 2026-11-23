import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VleeFruit — Alat sortir buah otomatis",
  description:
    "Perangkat IoT dengan kamera dan model AI yang menyortir buah di jalur konveyor, lengkap dengan dashboard kualitas per batch. Rp2 juta per unit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${bricolage.variable} ${instrument.variable}`}>
        {children}
      </body>
    </html>
  );
}
