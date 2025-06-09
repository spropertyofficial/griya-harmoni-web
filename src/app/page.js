// src/app/page.jsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import {
  faBath,
  faBed,
  faHome,
  faHouse,
  faPenNib,
  faRulerCombined,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { getProperty } from "@/data/mockProperties";
import FadeInWhenVisible from "@/components/common/FadeInWhenVisible";
import { motion } from "framer-motion";

export default function HomePage() {
  const unit = getProperty();
  const heroContentPaddingTop = "pt-28 md:pt-15";
  const heroContentPaddingBottom = "pb-12 md:pb-20";

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/unit/griya-harmoni-cibugel-fasad-deret-1.jpg"
          alt="Latar Belakang Perumahan Griya Harmoni"
          fill
          sizes="100vw"
          className="object-cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-35"></div>
      </div>
      <section
        className={`relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center text-white ${heroContentPaddingTop} ${heroContentPaddingBottom}`}
      >
        <div
          className="relative z-20 container mx-auto max-w-4xl p-8 md:p-12 
                     bg-white/10 backdrop-blur-lg rounded-xl 
                     border border-white/20 shadow-2xl"
        >
          <motion.div // Bungkus konten teks dengan motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }, // Jeda antar anak
              hidden: {},
            }}
          >
            <motion.h1 // Animasikan H1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              Rumah Subsidi Berkualitas{" "}
              <span className="block text-yellow-300 md:inline mt-1 md:mt-0">
                Griya Harmoni Cibugel
              </span>
            </motion.h1>

            <motion.p // Animasikan paragraf dengan sedikit delay
              className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto text-gray-50"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              Wujudkan impian memiliki hunian idaman yang terjangkau. Desain
              modern, lingkungan nyaman, dan kualitas terjamin untuk keluarga
              Anda.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            Mengapa Memilih Griya Harmoni?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FadeInWhenVisible delay={0.4}>
              <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4 inline-block">
                  <FontAwesomeIcon icon={faBuilding} className="text-5xl" />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">
                  Lokasi Strategis
                </h3>
                <p className="text-gray-600">
                  Lokasi strategis dekat dengan pusat kota, pasar tradisional,
                  dan akses transportasi umum yang mudah dijangkau.
                </p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.8}>
              <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4 inline-block">
                  <FontAwesomeIcon icon={faPenNib} className="text-5xl" />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">
                  Desain Modern
                </h3>
                <p className="text-gray-600">
                  Rumah dengan desain arsitektur modern minimalis yang
                  fungsional dan estetik.
                </p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={1}>
              <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4 inline-block">
                  <FontAwesomeIcon icon={faHouse} className="text-5xl" />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">
                  Fasilitas Lengkap
                </h3>
                <p className="text-gray-600">
                  Dilengkapi berbagai fasilitas pendukung untuk kenyamanan dan
                  gaya hidup Anda.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>
      {unit && ( // Hanya render section ini jika data unit ada
        <section
          id="featured-unit"
          className="py-16 md:py-20 bg-slate-50 relative z-10"
        >
          {" "}
          {/* Ganti ID jika perlu, sesuaikan bg */}
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                Unit rumah kami
              </h2>
              <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                Memperkenalkan {unit.name}, solusi hunian berkualitas yang
                dirancang khusus untuk kenyamanan keluarga Anda di Griya Harmoni
                Cibugel.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Kolom Gambar Unit */}
              <div className="relative aspect-video sm:aspect-[4/3] lg:aspect-auto lg:h-full rounded-xl overflow-hidden shadow-2xl group">
                <Image
                  src={unit.image} // Gambar utama unit
                  alt={`Tampilan ${unit.name}`}
                  fill
                  sizes="(max-width: 1023px) 90vw, 45vw" // Sesuaikan dengan layout Anda
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                {unit.status && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs sm:text-sm px-3 py-1.5 rounded-full shadow-md z-10">
                    {unit.status}
                  </div>
                )}
              </div>

              {/* Kolom Info & Spek Kunci */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-3">
                  {unit.name}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 line-clamp-4 sm:line-clamp-5">
                  {" "}
                  {/* Batasi deskripsi singkat */}
                  {unit.shortDescription || unit.description}{" "}
                  {/* Gunakan shortDescription jika ada, atau potong dari description panjang */}
                </p>

                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-700 mb-6">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="w-5 h-5 mr-2 text-blue-500"
                    />
                    <span>{unit.bedrooms} Kamar Tidur</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faBath}
                      className="w-5 h-5 mr-2 text-blue-500"
                    />
                    <span>{unit.bathrooms} Kamar Mandi</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faRulerCombined}
                      className="w-5 h-5 mr-2 text-blue-500"
                    />
                    <span>LB: {unit.area} m²</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faHome}
                      className="w-5 h-5 mr-2 text-blue-500"
                    />
                    <span>LT: {unit.landArea} m²</span>
                  </div>
                  {unit.carport && (
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faCar}
                        className="w-5 h-5 mr-2 text-blue-500"
                      />{" "}
                      {/* Perlu import faCar */}
                      <span>{unit.carport} Carport</span>
                    </div>
                  )}
                </div>

                <div className="mt-auto text-center md:text-left">
                  {" "}
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{
                      scale: 0.97,
                      transition: { duration: 0.1 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <Link
                      href="/tipe-rumah"
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-md sm:text-lg shadow-md hover:shadow-lg w-full md:w-fit transition-all duration-300 transform hover:scale-105"
                    >
                      Lihat Detail Unit
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
