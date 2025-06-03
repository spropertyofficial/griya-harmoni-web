// src/app/fasilitas/page.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHeart,
  faSeedling,
  faWaterLadder,
  faCubesStacked,
  faPersonRunning,
  faPlaceOfWorship,
  faSquareParking,
  faBasketShopping,
  faBuildingColumns, // Ikon untuk header (contoh)
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const metadata = {
  title: "Fasilitas Griya Harmoni | Kenyamanan Modern",
  description:
    "Temukan fasilitas unggulan di Griya Harmoni yang dirancang untuk mendukung gaya hidup berkualitas dan kenyamanan setiap penghuni.",
};

const facilitiesData = [
  {
    icon: faShieldHeart,
    name: "Keamanan Terpadu 24/7",
    description:
      "Sistem keamanan modern dengan CCTV dan tim patroli profesional untuk ketenangan maksimal.",
    iconColor: "text-blue-600", // Warna ikon konsisten
  },
  {
    icon: faWaterLadder,
    name: "Kolam Renang & Area Santai",
    description:
      "Kolam renang keluarga yang bersih dan nyaman, lengkap dengan dek berjemur dan area relaksasi.",
    iconColor: "text-blue-600",
  },
  {
    icon: faSeedling,
    name: "Taman Hijau & Ruang Terbuka",
    description:
      "Lanskap indah dengan taman tematik, jalur pejalan kaki, dan area hijau untuk rekreasi.",
    iconColor: "text-blue-600",
  },
  {
    icon: faCubesStacked,
    name: "Playground Kreatif Anak",
    description:
      "Area bermain anak yang aman, modern, dan edukatif, mendukung tumbuh kembang si kecil.",
    iconColor: "text-blue-600",
  },
  {
    icon: faPersonRunning,
    name: "Pusat Kebugaran & Olahraga",
    description:
      "Jogging track, lapangan multifungsi, dan fasilitas gym outdoor untuk gaya hidup aktif.",
    iconColor: "text-blue-600",
  },
  {
    icon: faPlaceOfWorship,
    name: "Sarana Ibadah Elegan",
    description:
      "Tempat ibadah yang nyaman dan representatif, mudah dijangkau oleh semua penghuni.",
    iconColor: "text-blue-600",
  },
  {
    icon: faSquareParking,
    name: "Parkir Luas & Akses Mudah",
    description:
      "Area parkir yang memadai untuk setiap unit dan tamu, dengan akses jalan yang lebar.",
    iconColor: "text-blue-600",
  },
  {
    icon: faBasketShopping,
    name: "Area Komersial Terdekat (Rencana)",
    description:
      "Pengembangan zona komersial untuk kemudahan akses kebutuhan harian dan lifestyle.",
    iconColor: "text-blue-600",
  },
];

export default function FasilitasPage() {
  const heroContentPaddingTop = "pt-28 md:pt-32";
  const heroSectionPaddingBottom = "pb-16 md:pb-20";

  return (
    <>
      <div className="min-h-screen bg-slate-50">
        <section
          className={`relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-sky-500 to-blue-700 text-white ${heroContentPaddingTop} ${heroSectionPaddingBottom}`}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=\'60\'%20height=\'60\'%20viewBox=\'0%200%2060%2060\'%20xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg%20fill=\'none\'%20fill-rule=\'evenodd\'%3E%3Cg%20fill=\'%23ffffff\'%20fill-opacity=\'0.05\'%3E%3Ccircle%20cx=\'30\'%20cy=\'30\'%20r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          <div className="relative container mx-auto px-4 text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">✨ Fasilitas Lengkap</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fasilitas{" "}
              <span className="block sm:inline bg-clip-text text-white">
                Terpadu
              </span>
            </h1>
            <p className="text-lg md:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed mb-8">
              Nikmati kenyamanan hidup dengan fasilitas lengkap yang dirancang
              untuk memudahkan aktivitas Anda sekeluarga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">
                  {facilitiesData.length}+
                </div>
                <div className="text-sm text-sky-200">Fasilitas Terpadu</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-sky-200">Keamanan</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">Nyaman</div>
                <div className="text-sm text-sky-200">Desain & Kualitas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Grid - Tampilan Kartu Baru */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
                Jelajahi Fasilitas Kami
              </h2>
              <p className="text-md text-gray-600">
                Setiap sudut Griya Harmoni dirancang untuk memberikan pengalaman
                terbaik bagi Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {facilitiesData.map((facility, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1.5"
                  // Efek hover sedikit terangkat dan bayangan lebih jelas
                >
                  {/* Ikon Fasilitas */}
                  <div className="mb-5 flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-sky-100 to-blue-200 group-hover:from-sky-200 group-hover:to-blue-300 transition-colors duration-300">
                    <FontAwesomeIcon
                      icon={facility.icon}
                      className={`text-3xl ${facility.iconColor} transition-transform duration-300 group-hover:scale-110`}
                    />
                  </div>

                  {/* Nama Fasilitas */}
                  <h3 className="text-lg font-bold text-slate-800 text-center mb-2 group-hover:text-blue-700 transition-colors">
                    {facility.name}
                  </h3>

                  {/* Deskripsi */}
                  <p className="text-gray-600 text-sm leading-relaxed text-center line-clamp-3">
                    {" "}
                    {/* line-clamp untuk batasi panjang */}
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section (Sama seperti yang Anda buat sebelumnya) */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-slate-800 via-gray-900 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=\'100\'%20height=\'100\'%20viewBox=\'0%200%20100%20100\'%20xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath%20d=\'M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM34%2090c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm56-76c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM12%2086c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm28-65c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm23-11c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-6%2060c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm29%2022c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zM32%2063c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm57-13c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-9-21c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM60%2091c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM35%2041c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM12%2060c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202z\' fill=\'%23ffffff\' fill-opacity=\'0.02\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')] opacity-70"></div>
          <div className="relative container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Fasilitas Lengkap untuk Kenyamanan Anda
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Jangan lewatkan kesempatan untuk memiliki hunian dengan
                fasilitas lengkap dan lokasi strategis di Griya Harmoni.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tipe-rumah"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>Lihat Tipe Rumah</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center bg-white text-slate-800 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>Hubungi Kami</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
