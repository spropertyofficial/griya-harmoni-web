// src/components/layout/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faBars, faClose, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/tentang-kami", label: "Tentang Kami" },
    { href: "/tipe-rumah", label: "Tipe Rumah" },
    { href: "/fasilitas-kawasan", label: "Fasilitas dan kawasan" },
  ];

  const linkClasses =
    "text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors";

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

          <li className="text">
            <strong>
              <FontAwesomeIcon icon={faPhone} /> 62811286885
            </strong>
          </li>

          <li>
            <Link
              href="/kontak"
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Hubungi Kami
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="text-gray-70"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faClose} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-xs shadow-lg border-t border-gray-200/50">
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
            <div className="flex space-y-4 justify-center items-center">
              <li className="text px-6 py-1 m-0">
                <strong>
                  <FontAwesomeIcon icon={faPhone} /> 62811286885
                </strong>
              </li>

              <li className="px-6">
                <Link
                  href="/kontak"
                  className="block bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors w-full text-center"
                >
                  Hubungi Kami
                </Link>
              </li>
            </div>{" "}
          </ul>
        </div>
      )}
    </nav>
  );
}
