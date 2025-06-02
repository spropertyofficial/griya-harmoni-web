// src/components/layout/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/tentang-kami", label: "Tentang Kami" },
    { href: "/tipe-rumah", label: "Tipe Rumah" },
    { href: "/fasilitas", label: "Fasilitas" },
    { href: "/lingkungan", label: "Lingkungan" },
    { href: "/galeri", label: "Galeri" },
    { href: "/blog", label: "Blog" },
    { href: "/kontak", label: "Kontak" },
  ];

  const linkClasses =
    "text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors";

  return (
    <nav className="sticky top-0 z-50 p-4 md:p-0 md:bg-white/20 md:backdrop-blur-lg md:shadow-lg md:rounded-2xl md:mx-10 md:my-5 bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center md:rounded-none">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          GriyaHarmoni
        </Link>

        <ul className="hidden md:flex space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className={linkClasses}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 p-2 rounded-md"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-1.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg border-t border-gray-200/50">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.label + "-mobile"}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-3 text-gray-800 hover:bg-blue-500/10 hover:text-blue-600 transition-colors text-left"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
