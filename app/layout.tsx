import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
