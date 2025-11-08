import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boris - Full Stack Developer Portfolio",
  description: "Professional developer portfolio showcasing projects in audio engineering, web development, and music technology.",
  keywords: ["developer", "portfolio", "full stack", "audio engineering", "JUCE", "React", "TypeScript"],
  authors: [{ name: "Boris" }],
  openGraph: {
    title: "Boris - Full Stack Developer Portfolio",
    description: "Professional developer portfolio showcasing projects in audio engineering, web development, and music technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
