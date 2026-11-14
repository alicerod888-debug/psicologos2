import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const description = "Psicoterapia acolhedora e ética, presencial e online. Um espaço seguro para cuidar da sua saúde emocional, no seu ritmo.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description,
  keywords: ["psicóloga", "psicoterapia", "terapia online", "ansiedade", "autoconhecimento", "saúde emocional"],
  openGraph: { title: `${site.name} | ${site.tagline}`, description, type: "website", locale: "pt_BR", siteName: site.name },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#FAF6EE", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: site.name,
    description,
    url: site.url,
    areaServed: "BR",
  };
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
