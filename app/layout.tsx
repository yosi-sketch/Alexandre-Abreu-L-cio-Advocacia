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
  themeColor: "#080c12",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.katiasilaine.adv.br"),
  title: "Katia Silaine Santos | Advocacia e Consultoria Jurídica · Caeté · MG",
  description:
    "⚖️ Dra. Katia Silaine Santos — Advocacia Cível, Trabalhista e Previdenciária. Orientação jurídica clara, acolhedora e combativa em Caeté - MG. Nota máxima 5,0 ★ no Google (57 avaliações). Atendimento presencial e online em todo o Brasil.",
  keywords: [
    "Katia Silaine Santos Advocacia",
    "Dra Katia Silaine Santos",
    "Advocacia e Consultoria Jurídica Caeté",
    "Advogado Trabalhista Caeté MG",
    "Direito do Trabalho Caeté MG",
    "Direito do Trabalhador Caeté",
    "Direito Previdenciário Caeté MG",
    "Aposentadoria Caeté MG",
    "BPC LOAS Caeté MG",
    "Auxílio Doença Caeté MG",
    "Salário Maternidade Caeté MG",
    "Inventário e Sucessões Caeté",
    "Direito Civil e Família Caeté",
    "Advogada Caeté Minas Gerais",
    "Belo Horizonte Sabará Santa Bárbara Caeté MG",
  ],
  authors: [{ name: "Dra. Katia Silaine Santos" }],
  creator: "Dra. Katia Silaine Santos — Advocacia e Consultoria Jurídica",
  publisher: "Katia Silaine Santos — Advocacia e Consultoria Jurídica",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=kss3", sizes: "any" },
      { url: "/favicon-32x32.png?v=kss3", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=kss3", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=kss3", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=kss3", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=kss3",
    apple: [{ url: "/apple-icon.png?v=kss3", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.katiasilaine.adv.br",
    title: "Katia Silaine Santos | Advocacia e Consultoria Jurídica · Caeté · MG",
    description:
      "⚖️ Dra. Katia Silaine Santos — Advocacia Cível, Trabalhista e Previdenciária. Orientação clara, sem enrolação e com dedicação total. Avaliado com 5,0 ★ no Google (57 avaliações). Sede em Caeté - MG e atendimento em todo o Brasil.",
    siteName: "Katia Silaine Santos Advocacia e Consultoria Jurídica",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Katia Silaine Santos Advocacia e Consultoria Jurídica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katia Silaine Santos | Advocacia e Consultoria Jurídica · Caeté - MG",
    description:
      "⚖️ Advocacia Cível, Trabalhista e Previdenciária. 5,0 ★ no Google (57 avaliações). Sede em Caeté - MG.",
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
    name: "Katia Silaine Santos — Advocacia e Consultoria Jurídica",
    alternateName: "Dra. Katia Silaine Santos Advocacia",
    legalName: "Katia Silaine Santos — Advocacia e Consultoria Jurídica",
    telephone: "+55-31-99850-8837",
    email: "contato@katiasilaine.adv.br",
    url: "https://www.katiasilaine.adv.br",
    image: "https://www.katiasilaine.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Pres. Kenedy, 189 - José Brandão",
      addressLocality: "Caeté",
      addressRegion: "MG",
      postalCode: "34800-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-19.8789",
      longitude: "-43.6703",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "57",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      "Caeté",
      "Belo Horizonte",
      "Sabará",
      "Santa Bárbara",
      "Barão de Cocais",
      "Nova Lima",
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
      "https://www.instagram.com/drakatiasilainesantos/",
      "https://wa.me/5531998508837",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=kss3" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=kss3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=kss3" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=kss3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=kss3" />
        <link rel="shortcut icon" href="/favicon.ico?v=kss3" />
        <meta name="theme-color" content="#080c12" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 antialiased selection:bg-[#ca9759] selection:text-white">
        {children}
      </body>
    </html>
  );
}
