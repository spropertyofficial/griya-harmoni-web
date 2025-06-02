// src/app/layout.jsx
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Griya Harmoni Web - Rumah Impian Anda",
  description:
    "Temukan rumah impian Anda bersama Griya Harmoni. Kualitas terbaik, lokasi strategis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} font-sans`}>
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
