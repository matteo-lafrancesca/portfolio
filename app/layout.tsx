import type { Metadata } from "next";
import { Archivo, Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], weight: ["800", "900"] });
const instrument = Instrument_Serif({ variable: "--font-instrument", subsets: ["latin"], weight: "400", style: "italic" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mattéo Lafrancesca — Développeur web",
  description: "Portfolio de Mattéo Lafrancesca, développeur fullstack.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${instrument.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
    >
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
