// src/components/layout/Footer.jsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok, // Mengganti Twitter dengan TikTok sesuai tren
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Ikon brand
// Jika Anda ingin ikon generik untuk "situs" atau "blog"
// import { faGlobe, faRss } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/rumahrgiyaharmoni",
      icon: faFacebookF,
    }, // Ganti dengan URL Anda
    {
      name: "Instagram",
      href: "https://instagram.com/rumahrgiyaharmoni",
      icon: faInstagram,
    }, // Ganti dengan URL Anda
    {
      name: "TikTok",
      href: "https://tiktok.com/@rumahrgiyaharmoni",
      icon: faTiktok,
    }, // Ganti dengan URL Anda
    {
      name: "YouTube",
      href: "https://youtube.com/rumahrgiyaharmoni",
      icon: faYoutube,
    }, // Ganti dengan URL Anda
  ];

  const quickLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Unit Kami", href: "/tipe-rumah" }, // Mengarah ke detail unit tunggal
    { name: "Fasilitas & Kawasan", href: "/fasilitas-dan-kawasan" },
    { name: "Blog", href: "/blog" }, // Jika sudah ada atau direncanakan
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 pt-12 pb-8">
      {" "}
      {/* Warna lebih gelap, padding disesuaikan */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">
          {/* Kolom 1: Logo dan Deskripsi Singkat */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-block mb-4 text-2xl font-bold text-white hover:text-sky-300 transition-colors"
            >
              GriyaHarmoni
              <span className="block text-xs font-normal text-sky-400 tracking-wider">
                CIBUGEL
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Wujudkan impian hunian idaman Anda bersama kami. Kualitas,
              kenyamanan, dan lokasi strategis adalah prioritas kami.
            </p>
          </div>

          {/* Kolom 2: Quick Links */}
          <div className="md:col-span-1 md:justify-self-center">
            <h3 className="text-md font-semibold text-white uppercase tracking-wider mb-4">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-sky-300 hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Sosial Media & Kontak Singkat */}
          <div className="md:col-span-1 md:justify-self-end text-left md:text-right">
            <h3 className="text-md font-semibold text-white uppercase tracking-wider mb-4">
              Terhubung Dengan Kami
            </h3>
            <div className="flex md:justify-end space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a // Menggunakan <a> untuk link eksternal, Link Next.js untuk internal
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                  aria-label={social.name}
                  title={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />{" "}
                  {/* Ukuran ikon disesuaikan */}
                </a>
              ))}
            </div>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:marketing@griya-harmoni.com"
                className="hover:text-sky-300 hover:underline"
              >
                marketing@griya-harmoni.com
              </a>{" "}
              {/* Ganti email */}
            </p>
            <p className="text-sm">
              Telp:{" "}
              <a
                href="tel:+62215550123"
                className="hover:text-sky-300 hover:underline"
              >
                +62 21 555 0123
              </a>{" "}
              {/* Ganti nomor telepon */}
            </p>
          </div>
        </div>

        {/* Garis Pemisah */}
        <div className="border-t border-slate-700 my-6"></div>

        {/* Bagian Copyright */}
        <div className="text-center text-sm">
          <p>
            &copy; {currentYear}{" "}
            <span className="font-semibold text-white">
              Griya Harmoni Cibugel
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
