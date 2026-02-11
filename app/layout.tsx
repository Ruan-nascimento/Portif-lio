import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import AnimatedBackground from "@/components/AnimatedBackground";
import CustomCursor from "@/components/CustomCursor";
import TimelineNav from "@/components/TimelineNav";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { Providers } from "./providers";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ruan Carlos — Portfólio",
  description:
    "Portfólio pessoal de Ruan Carlos — Desenvolvedor web criando aplicações com foco em clareza, organização e experiência do usuário.",
  keywords: ["Ruan Carlos", "desenvolvedor", "portfólio", "web", "Next.js", "React"],
  authors: [{ name: "Ruan Carlos" }],
  openGraph: {
    title: "Ruan Carlos — Portfólio",
    description: "Desenvolvedor e criador de projetos web.",
    type: "website",
    locale: "pt_BR",
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
        <Providers>
          <LanguageProvider>
            <AnimatedBackground />
            <CustomCursor />
            <LanguageToggle />
            <TimelineNav />
            <div className="relative z-10 main-content">{children}</div>
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
