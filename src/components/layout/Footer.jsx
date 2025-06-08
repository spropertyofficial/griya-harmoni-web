// src/components/layout/Footer.jsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok, // Mengganti Twitter dengan TikTok sesuai tren
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Ikon brand
import Image from "next/image";
// Jika Anda ingin ikon generik untuk "situs" atau "blog"
// import { faGlobe, faRss } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61554672707011",
      icon: faFacebookF,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/rumahgriyaharmoni/",
      icon: faInstagram,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@griyaharmonicibugel",
      icon: faTiktok,
    },
  ];

  const quickLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Tipe Rumah", href: "/tipe-rumah" },
    { name: "Fasilitas & Kawasan", href: "/fasilitas-kawasan" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 pt-12 pb-8">
      {" "}
      {/* Warna lebih gelap, padding disesuaikan */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-block mb-4 text-2xl font-bold text-white hover:text-sky-300 transition-colors"
            >
              <Image
                src="/logo-footer.png"
                alt="Logo"
                width={100}
                height={100}
                className="w-auto h-auto"
                priority
                quality={100}
              />
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
                griyaharmoni2021@gmail.com
              </a>{" "}
            </p>
            <p className="text-sm">
              Telp:{" "}
              <a
                href="tel:+6811286885
"
                className="hover:text-sky-300 hover:underline"
              >
                0811-286-885
              </a>{" "}
              {/* Ganti nomor telepon */}
            </p>
          </div>
        </div>

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
