import type { Metadata } from "next";
import { Exo, Roboto_Mono } from "next/font/google";
import "./globals.css";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moustafa Mohamed | AI Engineer",
  description:
    "AI Engineer with hands-on experience in Machine Learning and GenAI. Building and deploying practical AI solutions including RAG pipelines, automation workflows, and real-time dashboards.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "GenAI",
    "LLM",
    "RAG",
    "Python",
    "Moustafa Mohamed",
  ],
  openGraph: {
    title: "Moustafa Mohamed | AI Engineer",
    description:
      "I turn AI from an idea into a system your team actually uses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${exo.variable} ${robotoMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
