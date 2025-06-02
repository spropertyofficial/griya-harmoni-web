// src/components/layout/Footer.jsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini secara dinamis

  // Contoh link sosial media
  const socialLinks = [
    { name: "Facebook", href: "#", icon: "FB" }, // Ganti href dan ikonnya nanti
    { name: "Instagram", href: "#", icon: "IG" },
    { name: "Twitter", href: "#", icon: "TW" },
    { name: "YouTube", href: "#", icon: "YT" },
  ];

  return (
    <footer className="bg-slate-800 text-slate-300 py-8 mt-auto">
      {" "}
      {/* mt-auto akan membantu jika flex-grow di main tidak cukup */}
      <div className="container mx-auto px-4 text-center">
        {/* Bagian Link Sosial Media (opsional) */}
        <div className="mb-4 flex justify-center space-x-6">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank" // Buka di tab baru untuk link eksternal
              rel="noopener noreferrer" // Keamanan untuk target="_blank"
              className="hover:text-sky-400 transition-colors"
              aria-label={social.name}
            >
              {/* Placeholder untuk ikon, bisa diganti dengan SVG atau library ikon */}
              <span className="text-2xl">{social.icon}</span>
            </Link>
          ))}
        </div>

        {/* Bagian Copyright */}
        <p className="text-sm">
          &copy; {currentYear} Griya Harmoni Web. All rights reserved.
        </p>

        {/* Link tambahan (opsional) */}
        {/* <div className="mt-4 text-sm">
          <Link href="/kebijakan-privasi" className="hover:text-sky-400 mx-2">Kebijakan Privasi</Link>
          |
          <Link href="/syarat-ketentuan" className="hover:text-sky-400 mx-2">Syarat & Ketentuan</Link>
        </div> */}
      </div>
    </footer>
  );
}
