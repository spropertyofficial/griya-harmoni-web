// src/app/page.jsx
"use client";
import Link from "next/link";
import Image from "next/image";
import PropertyCard from "@/components/common/PropertyCard";
import { getAllProperties } from "@/data/mockProperties";

export default function HomePage() {
  const allProperties = getAllProperties();
  const featuredUnits = allProperties.slice(0, 3);
  const heroContentPaddingTop = "pt-28 md:pt-15";
  const heroContentPaddingBottom = "pb-12 md:pb-20";

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Latar Belakang Perumahan Griya Harmoni"
          fill
          sizes="100vw"
          className="object-cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <section
        className={`relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center text-white ${heroContentPaddingTop} ${heroContentPaddingBottom}`}
      >
        <div
          className="relative z-20 container mx-auto max-w-4xl p-8 md:p-12 
                     bg-white/10 backdrop-blur-lg rounded-xl 
                     border border-white/20 shadow-2xl"
        >
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Rumah {""}
              <span className="block md:inline">Kenyamanan Sejati</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-100">
              Griya Harmoni: Hunian eksklusif dengan desain modern dan fasilitas
              premium untuk Anda.
            </p>
            <Link
              href="/tipe-rumah"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-lg text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Jelajahi Tipe Unit
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            Mengapa Memilih Griya Harmoni?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4 inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">
                Lokasi Strategis
              </h3>
              <p className="text-gray-600">
                Akses mudah ke pusat kota, area bisnis, sekolah, dan fasilitas
                publik lainnya.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4 inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18h16.5a1.5 1.5 0 011.5 1.5v16.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V4.5a1.5 1.5 0 011.5-1.5zm16.5 0L12 12.75M2.25 21L12 12.75M2.25 21L12 12.75M2.25 3l9.75 9.75M20.25 3l-9.75 9.75"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">
                Desain Modern
              </h3>
              <p className="text-gray-600">
                Rumah dengan desain arsitektur modern minimalis yang fungsional
                dan estetis.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4 inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296A3.745 3.745 0 0116.5 21a3.745 3.745 0 01-2.863-1.332A3.745 3.745 0 0112.5 18.5v-2.25A3.75 3.75 0 0116.25 12h5.25M4.75 12h5.25A3.75 3.75 0 0113.75 15v2.25c0 .869-.293 1.666-.784 2.298A3.745 3.745 0 0112 21a3.745 3.745 0 01-2.716-1.332A3.745 3.745 0 017.5 18.5v-2.25A3.75 3.75 0 003.75 12H.75"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">
                Fasilitas Lengkap
              </h3>
              <p className="text-gray-600">
                Dilengkapi berbagai fasilitas pendukung untuk kenyamanan dan
                gaya hidup Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">
            Tipe Unit Kami
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Pilih hunian yang paling sesuai dengan kebutuhan dan gaya hidup
            keluarga Anda dari berbagai tipe unit terbaik yang kami tawarkan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredUnits.map((unit) => (
              // Gunakan komponen PropertyCard di sini
              <PropertyCard key={unit.id} unit={unit} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/tipe-rumah"
              className="bg-transparent hover:bg-slate-700 text-slate-700 font-semibold hover:text-white py-3 px-8 border border-slate-700 hover:border-transparent rounded-lg transition-colors duration-300"
            >
              Lihat Semua Tipe Unit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
