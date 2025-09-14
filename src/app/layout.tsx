import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Разработка сайтов и настройка Яндекс.Директ | Фрилансер",
  description: "Профессиональная разработка сайтов от 40 000₽ и настройка рекламы в Яндекс.Директ от 30 000₽. Гарантия результата или возврат средств.",
  keywords: "разработка сайтов, Яндекс.Директ, настройка рекламы, веб-разработка, фрилансер",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
