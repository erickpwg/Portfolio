import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Erick Wagner | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js and Node.js. Building modern web applications with clean code and great user experiences.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript"],
  authors: [{ name: "Erick Wagner" }],
  openGraph: {
    title: "Erick Wagner | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js and Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-background text-foreground antialiased min-h-screen">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
