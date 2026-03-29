import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XanSAP — SAP Staffing Consultants",
  description:
    "XanSAP supplies specialist SAP consultants to enterprises globally. Expert staffing across SAP FICO, MM, SD, HCM, Basis, S/4HANA and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <Navbar />
          {children}
        </body>
    </html>
  );
}
