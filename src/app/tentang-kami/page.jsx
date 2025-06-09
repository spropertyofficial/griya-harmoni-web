// src/app/tentang-kami/page.jsx
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUsers,
  faBullseye,
  faHandshake,
  faLightbulb,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import FadeInWhenVisible from "@/components/common/FadeInWhenVisible";

export const metadata = {
  title: "Tentang Kami - Griya Harmoni",
  description:
    "Kenali lebih jauh tentang Griya Harmoni, pengembang properti terpercaya yang berkomitmen untuk mewujudkan hunian impian Anda dengan kualitas dan layanan terbaik.",
};

export default function TentangKamiPage() {
  return (
    // Kontainer utama halaman, memastikan padding dan lebar konten konsisten
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Bagian Hero/Judul Halaman */}
      <section className="text-center mb-12 md:mb-16">
        <FontAwesomeIcon
          icon={faBuilding}
          className="text-5xl md:text-6xl text-blue-600 mb-4"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-3">
          Tentang Griya Harmoni
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Membangun Hunian, Mewujudkan Impian. Kenali kami lebih dekat.
        </p>
      </section>

      {/* Bagian Visi & Misi atau Filosofi Perusahaan */}
      <section className="mb-12 md:mb-16 bg-white p-8 rounded-xl shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-700 mb-4">
              Filosofi Kami
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Di Griya Harmoni, kami percaya bahwa rumah bukan hanya sekadar
              bangunan, tetapi adalah fondasi dari kebahagiaan dan harmoni
              keluarga. Sejak awal berdiri, komitmen kami adalah untuk membangun
              hunian berkualitas yang tidak hanya nyaman ditinggali, tetapi juga
              memiliki nilai investasi yang baik untuk masa depan Anda.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kami selalu mengedepankan integritas, inovasi dalam desain, dan
              kualitas konstruksi terbaik dalam setiap proyek yang kami
              kembangkan. Kepuasan Anda adalah prioritas utama kami.
            </p>
          </div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
            {/* Ganti dengan gambar yang relevan dengan perusahaan Anda atau suasana kantor */}
            <Image
              src="/griya-harmoni-cibugel-gate.jpg"
              alt="Gerbang Griya Harmoni"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Bagian Nilai-Nilai Perusahaan atau Mengapa Memilih Kami (Contoh) */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-3xl font-bold text-center text-slate-700 mb-10">
          Nilai Inti Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Nilai 1 */}
          <FadeInWhenVisible delay={0.4}>
            <div className="bg-slate-50 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <FontAwesomeIcon
                icon={faHandshake}
                className="text-4xl text-orange-500 mb-3"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Integritas
              </h3>
              <p className="text-gray-600 text-sm">
                Kami menjunjung tinggi kejujuran dan transparansi dalam setiap
                aspek bisnis kami.
              </p>
            </div>
          </FadeInWhenVisible>
          {/* Nilai 2 */}
          <FadeInWhenVisible delay={0.8}>
            <div className="bg-slate-50 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-4xl text-green-500 mb-3"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Inovasi
              </h3>
              <p className="text-gray-600 text-sm">
                Terus berinovasi untuk menghadirkan desain dan solusi hunian
                yang modern dan fungsional.
              </p>
            </div>
          </FadeInWhenVisible>

          {/* Nilai 3 */}
          <FadeInWhenVisible delay={1}>
            <div className="bg-slate-50 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-4xl text-sky-500 mb-3"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Fokus Pelanggan
              </h3>
              <p className="text-gray-600 text-sm">
                Kepuasan dan kebutuhan pelanggan adalah prioritas utama dalam
                layanan kami.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Bagian Misi & Visi (Contoh) */}
      <section className="grid md:grid-cols-2 gap-8 mb-12 md:mb-16">
        <FadeInWhenVisible delay={0.3}>
          <div className="bg-green-50 p-8 rounded-lg shadow-md h-full">
            <div className="flex items-center mb-3">
              <FontAwesomeIcon
                icon={faUser}
                className="text-3xl text-green-600 mr-3"
              />{" "}
              {/* Bisa pakai ikon lain */}
              <h2 className="text-2xl font-bold text-slate-700">Visi Kami</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Menjadi pengembang properti terdepan dan paling tepercaya, dikenal
              karena kualitas, inovasi, dan kontribusi positif bagi masyarakat.
            </p>
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.3}>
          <div className="bg-blue-50 p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <FontAwesomeIcon
                icon={faBullseye}
                className="text-3xl text-blue-600 mr-3"
              />
              <h2 className="text-2xl font-bold text-slate-700">Misi Kami</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 pl-2">
              <li>
                Menyediakan properti berkualitas tinggi dengan harga yang
                kompetitif.
              </li>
              <li>
                Menciptakan lingkungan hunian yang aman, nyaman, dan harmonis.
              </li>
              <li>
                Memberikan pelayanan terbaik dan profesional kepada setiap
                pelanggan.
              </li>
              <li>
                Berkontribusi pada pengembangan komunitas dan lingkungan
                sekitar.
              </li>
            </ul>
          </div>
        </FadeInWhenVisible>
      </section>

      {/* Bagian CTA (Call to Action) */}
      <section className="text-center py-10 bg-gradient-to-r from-blue-600 to-sky-500 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-4">
          Siap Menemukan Properti Impian Anda?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
          Jelajahi pilihan properti kami atau hubungi tim kami untuk konsultasi.
        </p>
        <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/tipe-rumah"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-slate-100 transition-colors text-lg"
          >
            Lihat Properti Kami
          </Link>
          <Link
            href="/kontak"
            className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-orange-600 transition-colors text-lg"
          >
            Hubungi Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
