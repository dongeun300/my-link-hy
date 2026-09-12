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
  title: "홍길동 (Hong Gildong) | MyLink ✦ Neobrutalism Portfolio",
  description: "개발자 홍길동의 네오브루탈리즘 스타일 올인원 링크 & 프로젝트 허브",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-amber-300 selection:text-black">
        {children}
      </body>
    </html>
  );
}
