import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Hormones and Emotions: Indian Food Guide (Pune Region)",
  description:
    "A comprehensive guide to foods that balance hormones and influence emotions positively, tailored for the Pune region in Maharashtra, India.",
  keywords:
    "hormones, emotions, Indian food, Pune, Maharashtra, nutrition, wellness",
  authors: [{ name: "Janhavi Foods" }],
  openGraph: {
    title: "Hormones and Emotions: Indian Food Guide (Pune Region)",
    description:
      "Discover how local foods in Pune can help balance your hormones and improve your emotional well-being.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
