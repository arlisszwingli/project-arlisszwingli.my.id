import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import footer from "./footer";

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

export const metadata= {
  title: "Welcome to Arliss Zwingli Sitanggang World",
  description: "This Website by create Arliss Zwingli Sitanggang",
  icons: {
    icon: '/AZS.png',
  }
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
        {footer()}
      </body>
    </html>
  );
}
