import type { Metadata } from "next";
import { Archivo, Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import { content } from "@/lib/content";

const { lastName, role, siteUrl } = content.identity;

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], weight: ["800", "900"] });
const instrument = Instrument_Serif({ variable: "--font-instrument", subsets: ["latin"], weight: "400", style: "italic" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

const description = `Portfolio de Mattéo ${lastName}, ${role.toLowerCase()}. Projets, parcours et contact.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `Mattéo ${lastName} — ${role}`, template: `%s — Mattéo ${lastName}` },
  description,
  openGraph: { type: "website", locale: "fr_FR", siteName: `Mattéo ${lastName}`, title: `Mattéo ${lastName} — ${role}`, description },
  twitter: { card: "summary_large_image" },
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
        <Analytics />
      </body>
    </html>
  );
}
