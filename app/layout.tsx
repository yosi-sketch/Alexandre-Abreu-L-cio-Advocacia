import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Playfair_Display,
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const cinzelFont = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfairFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060d16",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.santiagosilvaesantos.adv.br"),
  title: "Santiago, Silva & Santos | Sociedade de Advogados · LSS Advogados em Cláudio · MG",
  description:
    "🏛️ Santiago, Silva & Santos Sociedade de Advogados (LSS Advogados Associados). Orientação jurídica clara e responsável em Direito Civil, Previdenciário (INSS), Trabalhista, Imobiliário e Família. Nota máxima 5,0 ★ no Google (124 avaliações). Sede em Cláudio - MG.",
  keywords: [
    "Santiago Silva e Santos Sociedade de Advogados",
    "LSS Advogados Associados",
    "Advogado em Cláudio MG",
    "Advogados Cláudio Minas Gerais",
    "Armando Santiago Advogado",
    "Lucas da Silva e Silva Advogado",
    "Ana Carolina Santos Advogada",
    "Direito Previdenciário Cláudio MG",
    "Aposentadoria Rural e Urbana Cláudio MG",
    "Direito do Trabalho Cláudio MG",
    "Direito Imobiliário e Usucapião Cláudio MG",
    "Direito Civil e Contratos Cláudio MG",
    "Direito de Família e Sucessões Cláudio MG",
    "Escritório de Advocacia Cláudio MG",
    "Divinópolis Carmópolis Oliveira Cláudio MG",
  ],
  authors: [{ name: "Santiago, Silva & Santos Sociedade de Advogados" }],
  creator: "Santiago, Silva & Santos Sociedade de Advogados",
  publisher: "Santiago, Silva & Santos Sociedade de Advogados",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=sss2", sizes: "any" },
      { url: "/favicon-32x32.png?v=sss2", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=sss2", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=sss2", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=sss2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=sss2",
    apple: [{ url: "/apple-icon.png?v=sss2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.santiagosilvaesantos.adv.br",
    title: "Santiago, Silva & Santos | Sociedade de Advogados · Cláudio · MG",
    description:
      "🏛️ Orientação jurídica clara e responsável. Atuação em Direito Civil, Previdenciário, Trabalhista, Imobiliário e Sucessões. Avaliado com 5,0 ★ no Google (124 avaliações). Sede em Cláudio - MG e atendimento online em todo o Brasil.",
    siteName: "Santiago, Silva & Santos Sociedade de Advogados",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Santiago, Silva & Santos Sociedade de Advogados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago, Silva & Santos | Sociedade de Advogados · Cláudio - MG",
    description:
      "🏛️ Orientação jurídica clara e responsável. Civil, Previdenciário, Trabalhista e Imobiliário. 5,0 ★ no Google (124 avaliações).",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Santiago, Silva & Santos Sociedade de Advogados",
    alternateName: "LSS Advogados Associados",
    legalName: "Santiago, Silva & Santos Sociedade de Advogados",
    telephone: "+55-37-99103-2732",
    email: "contato@santiagosilvaesantos.adv.br",
    url: "https://www.santiagosilvaesantos.adv.br",
    image: "https://www.santiagosilvaesantos.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Goiás, 521 - 1° andar - Rosário",
      addressLocality: "Cláudio",
      addressRegion: "MG",
      postalCode: "35530-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-20.4442",
      longitude: "-44.7672",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "124",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      "Cláudio",
      "Divinópolis",
      "Itaúna",
      "Carmópolis de Minas",
      "Oliveira",
      "Passa Tempo",
      "Carmo da Mata",
      "Campo Belo",
      "Minas Gerais",
      "Brasil",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/santiagosilvaesantos.adv/",
      "https://linktr.ee/santiagosilvaesantos",
      "https://wa.me/5537991032732",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=sss2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=sss2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=sss2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=sss2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=sss2" />
        <link rel="shortcut icon" href="/favicon.ico?v=sss2" />
        <meta name="theme-color" content="#060d16" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 antialiased selection:bg-[#c59b5f] selection:text-white">
        {children}
      </body>
    </html>
  );
}
