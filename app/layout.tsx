import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import AnimatedBackground from "@/components/AnimatedBackground";
import ParticleField from "@/components/ParticleField";
import TimelineNav from "@/components/TimelineNav";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider } from "@/providers/LanguageProvider";
import SmoothScroll from "@/components/SmoothScroll";
import StructuredData from "@/components/StructuredData";
import { Providers } from "./providers";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.euruancarlos.com"),
  title: {
    default: "Ruan Carlos | Desenvolvedor Full Stack",
    template: "%s | Ruan Carlos | Desenvolvedor Full Stack",
  },
  description:
    "Portfólio de Ruan Carlos, desenvolvedor Full Stack especializado em React, Next.js, TypeScript, Node.js, APIs, bancos de dados e aplicações web modernas.",
  keywords: [
    "Ruan Carlos",
    "Ruan Carlos Nascimento",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Web",
    "Programador React",
    "Desenvolvedor Next.js",
    "Desenvolvedor TypeScript",
    "Desenvolvedor Node.js",
    "Portfólio Desenvolvedor",
    "Desenvolvedor em Maceió",
    "Desenvolvedor em Alagoas",
    "Aplicações Web",
    "APIs REST",
    "Prisma",
    "PostgreSQL",
    "React Native",
    "GitHub",
  ],
  authors: [{ name: "Ruan Carlos", url: "https://www.euruancarlos.com" }],
  creator: "Ruan Carlos",
  publisher: "Ruan Carlos",
  applicationName: "Ruan Carlos Portfolio",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ruan Carlos | Desenvolvedor Full Stack",
    description:
      "Portfólio de Ruan Carlos, desenvolvedor Full Stack especializado em React, Next.js, TypeScript, Node.js, APIs e aplicações web modernas.",
    url: "https://www.euruancarlos.com",
    siteName: "Ruan Carlos | Desenvolvedor Full Stack",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ruan Carlos | Desenvolvedor Full Stack - React, Next.js, TypeScript, Node.js",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruan Carlos | Desenvolvedor Full Stack",
    description:
      "Portfólio de Ruan Carlos, desenvolvedor Full Stack especializado em React, Next.js, TypeScript, Node.js, APIs e aplicações web modernas.",
    images: ["/og-image.png"],
    creator: "@ruan_carlosrcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${jetbrains.variable} antialiased`}
      >
        <SmoothScroll>
          <Providers>
            <LanguageProvider>
              <StructuredData />
              <AnimatedBackground />
              <ParticleField />
              <LanguageToggle />
              <TimelineNav />
              <div className="relative z-10 main-content">{children}</div>
            </LanguageProvider>
          </Providers>
        </SmoothScroll>
      </body>
    </html>
  );
}
