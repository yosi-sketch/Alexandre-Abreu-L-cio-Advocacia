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
  themeColor: "#090b0e",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alexandreabreulucio.adv.br"),
  title: "Dr. Alexandre Abreu Lúcio | Escritório de Advocacia · OAB/MG 122.827 · Pitangui · MG",
  description:
    "⚖️ Escritório de Advocacia - Dr. Alexandre Abreu Lúcio (OAB/MG 122.827). Conselheiro Subseccional OAB, Membro do IBDFAM e da Comissão de Prerrogativas da OAB/MG. Direito de Família, Sucessões, Inventários, Cível, Consumidor, Previdenciário e Trabalhista. Nota máxima 5,0 ★ no Google (39 avaliações). Sede em Pitangui - MG e atendimento digital em todo o Brasil.",
  keywords: [
    "Dr. Alexandre Abreu Lúcio",
    "Alexandre Abreu Lúcio Advocacia",
    "Escritório de Advocacia Dr Alexandre Abreu Lúcio",
    "Advogado Pitangui MG",
    "OAB MG 122827",
    "Advogado Família Pitangui",
    "Inventário Extrajudicial Pitangui",
    "Membro IBDFAM Minas Gerais",
    "Comissão de Prerrogativas OAB MG",
    "Conselheiro Subseccional OAB",
    "Direito Previdenciário Pitangui",
    "Direito do Trabalho Pitangui",
    "Advogado Cível Pitangui MG",
    "Pará de Minas Nova Serrana Conceição do Pará Pitangui MG",
    "Atendimento Jurídico Online Brasil",
  ],
  authors: [{ name: "Dr. Alexandre Abreu Lúcio" }],
  creator: "Dr. Alexandre Abreu Lúcio — Advocacia",
  publisher: "Escritório de Advocacia - Dr. Alexandre Abreu Lúcio",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=aal1", sizes: "any" },
      { url: "/favicon-32x32.png?v=aal1", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=aal1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=aal1", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=aal1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=aal1",
    apple: [{ url: "/apple-icon.png?v=aal1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.alexandreabreulucio.adv.br",
    title: "Dr. Alexandre Abreu Lúcio | Escritório de Advocacia · Pitangui · MG",
    description:
      "⚖️ Advocacia de alto padrão com rigor técnico, ética e discrição. Conselheiro OAB, Membro do IBDFAM e Prerrogativas OAB/MG. Avaliado com 5,0 ★ no Google (39 avaliações). Sede em Pitangui - MG e atuação em todo o Brasil.",
    siteName: "Alexandre Abreu Lúcio Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Dr. Alexandre Abreu Lúcio — Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Alexandre Abreu Lúcio | Advocacia de Excelência · Pitangui - MG",
    description:
      "⚖️ Advocacia de Alto Padrão. OAB/MG 122.827. 5,0 ★ no Google (39 avaliações). Sede em Pitangui - MG e atuação em todo o Brasil.",
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
    name: "Escritório de Advocacia - Dr. Alexandre Abreu Lúcio",
    alternateName: "Alexandre Abreu Lúcio — Advocacia",
    legalName: "Escritório de Advocacia - Dr. Alexandre Abreu Lúcio",
    telephone: "+55-37-99971-0510",
    email: "contato@alexandreabreulucio.adv.br",
    url: "https://www.alexandreabreulucio.adv.br",
    image: "https://www.alexandreabreulucio.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Praça Dr. Isauro Epifânio, 141 - bairro São Francisco",
      addressLocality: "Pitangui",
      addressRegion: "MG",
      postalCode: "35650-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-19.6806",
      longitude: "-45.2106",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "39",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      "Pitangui",
      "Pará de Minas",
      "Nova Serrana",
      "Conceição do Pará",
      "Bom Despacho",
      "Divinópolis",
      "Belo Horizonte",
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
        opens: "08:30",
        closes: "18:30",
      },
    ],
    sameAs: [
      "https://www.instagram.com/alexandreabreulucio/",
      "https://wa.me/5537999710510",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=aal1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=aal1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=aal1" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=aal1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=aal1" />
        <link rel="shortcut icon" href="/favicon.ico?v=aal1" />
        <meta name="theme-color" content="#090b0e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 antialiased selection:bg-[#c5b293] selection:text-[#090b0e]">
        {children}
      </body>
    </html>
  );
}
