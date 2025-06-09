// src/components/layout/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollPosition from "@/hooks/useScrollPosition";

// --- IMPOR DARI FRAMER MOTION ---
import { motion, AnimatePresence } from "framer-motion";

// --- Komponen baru untuk ikon Hamburger yang beranimasi ---
const AnimatedHamburgerIcon = ({ isOpen, toggle }) => {
  const isScrolled = useScrollPosition(50);

  return (
    <button
      onClick={toggle}
      className="relative w-8 h-8 z-50 focus:outline-none"
      aria-label="Toggle Menu"
    >
      <motion.div
        className="absolute top-1/2 left-1/2" // Pusatkan pivot
        animate={isOpen ? "open" : "closed"}
      >
        <motion.span
          className={`block absolute h-0.5 w-6 ${
            isScrolled ? "bg-current" : "bg-black"
          }`}
          style={{ y: "-6px", x: "-12px" }}
          variants={{
            open: { rotate: 45, y: 0 },
            closed: { rotate: 0, y: "-6px" },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          className={`block absolute h-0.5 w-6 ${
            isScrolled ? "bg-current" : "bg-black"
          }`}
          style={{ x: "-12px" }}
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
          transition={{ duration: 0.1 }}
        />
        <motion.span
          className={`block absolute h-0.5 w-6 ${
            isScrolled ? "bg-current" : "bg-black"
          }`}
          style={{ y: "6px", x: "-12px" }}
          variants={{
            open: { rotate: -45, y: 0 },
            closed: { rotate: 0, y: "6px" },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.div>
    </button>
  );
};

// --- Varian untuk menu mobile ---
const mobileMenuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3,
      staggerChildren: 0.08, // Jeda antar link menu
      delayChildren: 0.2, // Delay sebelum link pertama muncul
    },
  },
  closed: {
    opacity: 0,
    y: "-20px",
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.2,
    },
  },
};

const mobileLinkVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -20 },
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(50);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/tentang-kami", label: "Tentang Kami" },
    { href: "/tipe-rumah", label: "Unit Kami" },
    { href: "/fasilitas-kawasan", label: "Fasilitas & Kawasan" },
  ];

  const linkClasses =
    "text-black/60 hover:text-black/90 rounded-md text-sm font-medium transition-colors";

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out p-2 sm:p-4`}
    >
      <div
        className={`container mx-auto px-4 py-3 flex justify-between items-center 
                    backdrop-blur-xl shadow-2xl shadow-slate-900/10 rounded-2xl
                    transition-colors duration-300 ease-in-out
                    ${isScrolled ? "bg-gray-900/90 text-white" : "text-white"}`}
      >
        <motion.div
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 },
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        >
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo Griya Harmoni"
              width={80}
              height={80}
              className={`h-10 md:h-16 w-auto`} // Logo jadi putih saat transparan
              priority
            />
          </Link>
        </motion.div>
        <ul className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={
                  isScrolled
                    ? "text-white hover:text-blue-400 rounded-md text-sm font-medium transition-colors"

                    : linkClasses
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li
            className={`text-sm font-semibold hidden lg:flex items-center ${
              isScrolled
                ? "text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                : "text-black"
            }`}
          >
            <FontAwesomeIcon icon={faPhone} className="w-3 h-3 mr-2" />
            <span>+62 811 286 885</span>
          </li>
          <li>
            <Link
              href="/kontak"
              className="bg-sky-500 text-white hover:bg-sky-600 px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              Hubungi Kami
            </Link>
          </li>
        </ul>

        {/* Gunakan komponen ikon hamburger baru */}
        <div className={`md:hidden`}>
          <AnimatedHamburgerIcon
            isOpen={isMobileMenuOpen}
            toggle={toggleMobileMenu}
          />
        </div>
      </div>

      {/* Gunakan AnimatePresence untuk menu mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden container mx-auto mt-2"
          >
            <div className="bg-gray-900/90 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 overflow-hidden">
              <motion.ul className="flex flex-col py-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.label + "-mobile"}
                    variants={mobileLinkVariants}
                    className="border-b border-gray-200/50 last:border-b-0"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-6 py-4 text-white hover:bg-blue-500/10 hover:text-blue-600 transition-colors text-left"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                variants={mobileLinkVariants}
                className="px-6 py-4 border-t border-gray-200/50 space-y-4"
              >
                <div className="text-white font-semibold text-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" /> +62 811
                  286 885
                </div>
                <Link
                  href="/kontak"
                  className="block bg-sky-500 text-white hover:bg-sky-600 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hubungi Kami
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
