import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import Header from "@/components/header";
import Footer from "@/components/footer";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compagnons pour Tous",
  description: "Projet associatif pour objectif de recréer un lien social entre les personnes agées, les animaux et leurs maîtres",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr" data-theme="corporate" className="scroll-smooth">
        <Script src="https://kit.fontawesome.com/6358dc97bb.js" crossOrigin="anonymous" />
        <body className={figtree.className}>
            <Header />
            {children}
            <Footer />
        </body>
      </html>
  );
}
