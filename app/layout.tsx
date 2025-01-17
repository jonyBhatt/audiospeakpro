import type { Metadata } from "next";
import { Hind, Montserrat } from "next/font/google";
import "./globals.css";

const hind = Hind({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: "Audio Speak Pro",
  description: "This is a  website for text to speech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hind.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
