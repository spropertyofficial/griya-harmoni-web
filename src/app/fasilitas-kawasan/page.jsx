// src/app/fasilitas-dan-kawasan/page.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // Kumpulkan semua ikon yang mungkin dibutuhkan dari kedua halaman sebelumnya
  // Untuk Hero & Judul Section
  faMapMarkedAlt,
  faBuildingColumns,
  faRoad,
  faUsers,
  faTree,
  faLocationDot,
  faShieldHalved,
  // Untuk Fasilitas Internal (ambil dari data fasilitas sebelumnya)
  faShieldHeart,
  faSeedling,
  faWaterLadder,
  faCubesStacked,
  faPersonRunning,
  faPlaceOfWorship,
  faSquareParking,
  faBasketShopping,
  // Untuk Lokasi Strategis & Aksesibilitas
  faHospitalUser,
  faTrainSubway,
  faRoute,
  faStore,
  faLandmark,
  faUniversity,
  faShoppingCart,
  faSchool,
  faCheckCircle, // Untuk Keunggulan Area
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
// import Image from "next/image"; // Jika diperlukan untuk gambar ilustrasi

export const metadata = {
  title: "Fasilitas & Kawasan Strategis Griya Harmoni Cibugel",
  description:
    "Jelajahi fasilitas lengkap di dalam Griya Harmoni Cibugel dan kemudahan akses ke berbagai titik penting serta fasilitas publik di kawasan Cisoka, Tangerang.",
};

// --- DATA UNTUK FASILITAS INTERNAL (Ambil dari halaman Fasilitas Anda sebelumnya) ---
const internalFacilitiesData = [
  {
    icon: faShieldHeart,
    name: "Keamanan Terpadu 24/7",
    description:
      "Sistem keamanan modern dengan CCTV, patroli rutin, dan akses terkontrol untuk ketenangan Anda.",
    category: "Keamanan", // Anda bisa tetap pakai atau hilangkan kategori/highlight di tampilan
    highlight: "Prioritas Utama",
    gradientClasses: "from-red-500 to-pink-500",
  },
  {
    icon: faWaterLadder,
    name: "Kolam Renang Keluarga",
    description:
      "Kolam renang berstandar internasional dengan area dewasa & anak, plus poolside lounge.",
    category: "Rekreasi",
    highlight: "Favorit",
    gradientClasses: "from-blue-500 to-sky-500",
  },
  {
    icon: faSeedling,
    name: "Taman Hijau & Playground",
    description:
      "Desain lanskap profesional dengan taman tematik, area bermain anak yang aman dan edukatif.",
    category: "Lingkungan & Keluarga",
    highlight: "Asri & Edukatif",
    gradientClasses: "from-green-500 to-emerald-500",
  },
  {
    icon: faPersonRunning,
    name: "Sarana Olahraga",
    description:
      "Jogging track yang nyaman dan area olahraga outdoor untuk mendukung gaya hidup sehat.",
    category: "Kesehatan",
    highlight: "Aktif",
    gradientClasses: "from-purple-500 to-indigo-500",
  },
  {
    icon: faPlaceOfWorship,
    name: "Tempat Ibadah",
    description:
      "Masjid dengan desain menawan dan fasilitas lengkap untuk kenyamanan beribadah.",
    category: "Spiritual",
    highlight: "Tenang",
    gradientClasses: "from-teal-500 to-cyan-500",
  },
  // Tambahkan fasilitas internal lainnya jika ada
];

const strategicLocationsData = [
  {
    id: "rsud-balaraja",
    icon: faHospitalUser,
    name: "RSUD Balaraja",
    estimate: "10 Menit",
    iconBgClass: "bg-red-100",
    iconTextClass: "text-red-600",
    borderColorClass: "border-red-500",
  },
  {
    id: "stasiun-tigaraksa",
    icon: faTrainSubway,
    name: "Stasiun Tigaraksa",
    estimate: "12 Menit",
    iconBgClass: "bg-blue-100",
    iconTextClass: "text-blue-600",
    borderColorClass: "border-blue-500",
  },
  {
    id: "taman-cicido",
    icon: faTree, // Atau ikon lain yang lebih cocok untuk wisata
    name: "Wisata Taman Cicido",
    estimate: "4 Menit",
    iconBgClass: "bg-green-100",
    iconTextClass: "text-green-600",
    borderColorClass: "border-green-500",
  },
  {
    id: "central-durian",
    icon: faStore, // Atau ikon lain yang lebih cocok untuk tempat kuliner/oleh-oleh
    name: "Central Durian",
    estimate: "4 Menit",
    iconBgClass: "bg-yellow-100",
    iconTextClass: "text-yellow-600",
    borderColorClass: "border-yellow-500",
  },
  {
    id: "pemda-tigaraksa",
    icon: faLandmark,
    name: "Pemda Tigaraksa",
    estimate: "10 Menit",
    iconBgClass: "bg-indigo-100",
    iconTextClass: "text-indigo-600",
    borderColorClass: "border-indigo-500",
  },
  {
    id: "rencana-tol",
    icon: faRoute,
    name: "Rencana Gerbang Tol Serba Raja",
    estimate: "7 Menit",
    iconBgClass: "bg-emerald-100",
    iconTextClass: "text-emerald-600",
    borderColorClass: "border-emerald-500",
  },
  {
    id: "pasar-cisoka",
    icon: faShoppingCart,
    name: "Pasar Tradisional Cisoka",
    estimate: "5 Menit",
    iconBgClass: "bg-orange-100",
    iconTextClass: "text-orange-600",
    borderColorClass: "border-orange-500",
  },
  {
    id: "polsek-cisoka",
    icon: faShieldHeart, // Ikon Keamanan
    name: "Polsek Cisoka (24 Jam)",
    estimate: "5 Menit",
    iconBgClass: "bg-slate-100",
    iconTextClass: "text-slate-600",
    borderColorClass: "border-slate-500",
  },
  {
    id: "puskesmas",
    icon: faHospitalUser, // Ikon Kesehatan
    name: "Puskesmas (24 Jam)",
    estimate: "5 Menit",
    iconBgClass: "bg-pink-100",
    iconTextClass: "text-pink-600",
    borderColorClass: "border-pink-500",
  },
];

const publicFacilitiesData = [
  {
    id: "pendidikan", // id unik untuk key
    category: "Pendidikan Terdekat",
    categoryIcon: faSchool,
    categoryIconColor: "text-indigo-600", // Warna untuk ikon kategori
    items: [
      {
        name: "Universitas Muhammadiyah Tangerang (UMT Cisoka)",
        estimate: "± 15 menit",
      },
      { name: "Universitas Tangerang Raya", estimate: "± 20 menit" },
      { name: "STT Banten Kampus Tigaraksa", estimate: "± 25 menit" },
      {
        name: "Universitas Esa Unggul Kampus Tangerang",
        estimate: "± 30 menit",
      },
      { name: "SMK Gema Bangsa", estimate: "± 10 menit" },
      { name: "SDS Insanhandayani", estimate: "± 5 menit" },
      { name: "SDN Bojong Loa 1", estimate: "± 10 menit" },
      { name: "MA AL-HUSNA LOMBANG CISOKA", estimate: "± 10 menit" },
      { name: "YPIPP FATHURROBBAANIY CISOKA", estimate: "± 15 menit" },
      { name: "Ponpes RIYADUL AWAMIL", estimate: "± 15 menit" },
      { name: "Ponpes AL-BASSORIYAH (MTS & SMA)", estimate: "± 15 menit" },
      { name: "Yayasan Bani Adna (PAUD, TK, SD, SMP)", estimate: "± 10 menit" },
    ],
  },
  {
    id: "kesehatan",
    category: "Layanan Kesehatan",
    categoryIcon: faHospitalUser,
    categoryIconColor: "text-red-600",
    items: [
      { name: "Puskesmas Cisoka", estimate: "± 5 menit (dari brosur)" },
      { name: "RS SUCI PARAMITA", estimate: "± 15 menit" },
      { name: "HARAPAN AYAH BUNDA (CISOKA)", estimate: "± 5 menit" },
      { name: "Klinik", estimate: "± 5 menit" },
      { name: "RSUD BALARAJA", estimate: "± 20 menit" },
    ],
  },
  {
    id: "perbelanjaan",
    category: "Pusat Perbelanjaan & Kebutuhan",
    categoryIcon: faShoppingCart,
    categoryIconColor: "text-green-600",
    items: [
      { name: "Pasar Tradisional Cisoka", estimate: "± 5 menit (dari brosur)" },
      { name: "Minimarket (Alfamart/Indomaret)", estimate: "Sangat Dekat" },
      {
        name: "Supermarket/Toko Grosir terdekat (Contoh)",
        estimate: "± 15-20 menit",
      },
    ],
  },
  {
    id: "transportasi-umum",
    category: "Akses Transportasi Umum",
    categoryIcon: faTrainSubway, // Atau faBus
    categoryIconColor: "text-blue-600",
    items: [
      { name: "KRL Stasiun Tigaraksa & Cikoya", estimate: "± 15 menit" },
      { name: "Angkutan Umum/Angkot", estimate: "Akses Mudah" },
      { name: "Pangkalan Ojek", estimate: "Mudah dijangkau" },
    ],
  },
  // Anda bisa tambahkan kategori lain seperti Tempat Ibadah (di luar komplek), Rekreasi, dll.
];

// --- DATA UNTUK KEUNGGULAN AREA ---
const areaAdvantagesData = [
  {
    id: "asri",
    icon: faSeedling,
    title: "Lingkungan Asri & Nyaman",
    description:
      "Dikelilingi kehijauan yang menyejukkan, ideal untuk keluarga yang mendambakan ketenangan.",
    iconColor: "text-green-600",
  },
  {
    id: "strategis",
    icon: faLocationDot,
    title: "Lokasi Strategis",
    description:
      "Akses mudah ke berbagai fasilitas publik, pusat perbelanjaan, dan transportasi umum.",
    iconColor: "text-blue-600",
  },
  {
    id: "aman",
    icon: faShieldHalved,
    title: "Keamanan 24 Jam",
    description:
      "Sistem keamanan terpadu dengan penjagaan 24 jam dan CCTV untuk kenyamanan penghuni.",
    iconColor: "text-red-600",
  },
  {
    id: "komunitas",
    icon: faUsers,
    title: "Komunitas Harmonis",
    description:
      "Lingkungan yang ramah dengan tetangga yang bersahabat, cocok untuk membangun relasi sosial.",
    iconColor: "text-yellow-600",
  },
  {
    id: "infrastruktur",
    icon: faRoad,
    title: "Infrastruktur Modern",
    description:
      "Dilengkapi dengan sistem drainase yang baik, jalan lebar, dan penerangan jalan yang memadai.",
    iconColor: "text-purple-600",
  },
];
export default function FasilitasDanKawasanPage() {
  const contentSectionPaddingY = "";
  const pageTopPadding = "pt-24 md:pt-28"; // Sesuaikan dengan tinggi Navbar Anda
  const sectionVerticalPadding = "py-12 md:py-16";
  const mapEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16236.197565988463!2d106.4126177!3d-6.2513358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42050040fc7ddd%3A0x86616f93514ebe15!2sGriya%20Harmoni%20Cibugel!5e1!3m2!1sen!2sid!4v1748941704661!5m2!1sen!2sid";
  return (
    <>
      <div className="min-h-screen bg-white">
        <section
          className={`${pageTopPadding} pb-10 md:pb-12 bg-slate-50 border-b border-slate-200`}
        >
          {" "}
          {/* Latar hero sedikit beda, ada border bawah */}
          <div className="container mx-auto px-4 text-center center">
            <div className="max-w-3xl mx-auto">
              {" "}
              {/* Konten dibatasi lebarnya dan rata kiri (default) */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                Fasilitas dan Kawasan <span className="block">Griya Harmoni Cibugel</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Temukan kenyamanan hidup terpadu dengan fasilitas internal
                lengkap dan akses mudah ke berbagai layanan publik serta lokasi
                strategis di sekitar perumahan kami.
              </p>
            </div>
          </div>
        </section>
        {/* Kontainer untuk sisa konten halaman */}
        <div className="container mx-auto px-4">
          {/* Placeholder untuk section lokasi strategis */}
          <div className="text-center text-gray-400 italic my-10 py-10">
            {/* Section Lokasi Strategis & Aksesibilitas */}
            <section
              id="lokasi-aksesibilitas"
              className={`${sectionVerticalPadding} bg-slate-100 rounded-xl shadow-lg`}
            >
              {" "}
              {/* Latar berbeda untuk section ini */}
              <div className="container mx-auto px-4">
                <div className="text-center mb-10 md:mb-12">
                  <FontAwesomeIcon
                    icon={faRoute}
                    className="text-5xl md:text-7xl text-emerald-600 mb-3"
                  />
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                    Lokasi Strategis & Akses Mudah
                  </h2>
                  <p className="text-md text-gray-600 max-w-xl mx-auto mt-2">
                    Terletak strategis, Griya Harmoni Cibugel menawarkan
                    kemudahan jangkauan ke berbagai destinasi penting.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {strategicLocationsData.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-5 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        {" "}
                        {/* items-start agar ikon dan teks sejajar di atas */}
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-md ${
                            item.iconBgClass || "bg-gray-100"
                          } ${
                            item.iconTextClass || "text-gray-600"
                          } flex items-center justify-center`}
                        >
                          <FontAwesomeIcon
                            icon={item.icon}
                            className="w-5 h-5"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-md font-semibold text-slate-700">
                            {item.name}
                          </h3>
                          {item.estimate && (
                            <p
                              className={`text-sm font-medium ${
                                item.iconTextClass
                                  ? item.iconTextClass.replace(
                                      "text-",
                                      "text-opacity-80 text-"
                                    )
                                  : "text-gray-500"
                              }`}
                            >
                              {" "}
                              {/* Warna estimasi mengikuti warna ikon dengan opacity */}
                              {item.estimate}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>{" "}
          </div>

          {/* Placeholder untuk section fasilitas publik umum lainnya */}
          <div className="text-center text-gray-400 italic my-10 py-10">
            {/* Section Fasilitas Publik Umum di Sekitar */}
            <section
              id="fasilitas-umum"
              className="py-12 md:py-16 scroll-mt-20"
            >
              {" "}
              {/* Dihilangkan background putih agar menyatu dengan layout utama jika diinginkan, atau tambahkan bg-white rounded-xl shadow-lg jika ingin terpisah */}
              <div className="container mx-auto px-4">
                <div className="text-center mb-10 md:mb-12">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-5xl md:text-7xl text-sky-600 mb-3"
                  />
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                    Fasilitas Pendukung Keseharian
                  </h2>
                  <p className="text-md text-gray-600 max-w-xl mx-auto mt-2">
                    Berbagai sarana pendidikan, kesehatan, dan perbelanjaan
                    untuk melengkapi kebutuhan harian keluarga Anda.
                  </p>
                </div>

                <div className="space-y-12">
                  {publicFacilitiesData.map((categoryBlock) => (
                    <div key={categoryBlock.id}>
                      {/* Judul Kategori dengan Ikon */}
                      <div className="flex items-center mb-6">
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-lg ${
                            categoryBlock.categoryIconColor
                              ? categoryBlock.categoryIconColor.replace(
                                  "text-",
                                  "bg-"
                                ) + "/10"
                              : "bg-slate-100"
                          } ${
                            categoryBlock.categoryIconColor || "text-slate-600"
                          } flex items-center justify-center mr-3`}
                        >
                          <FontAwesomeIcon
                            icon={categoryBlock.categoryIcon}
                            className="w-5 h-5"
                          />
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-slate-700">
                          {categoryBlock.category}
                        </h3>
                      </div>

                      {/* Daftar Item Fasilitas per Kategori */}
                      {categoryBlock.items && categoryBlock.items.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                          {categoryBlock.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow duration-300"
                            >
                              <p className="font-semibold text-slate-800 text-sm md:text-base">
                                {item.name}
                              </p>
                              {item.estimate && (
                                <p className="text-gray-500 text-xs md:text-sm mt-1">
                                  Estimasi: {item.estimate}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500 pl-12">
                          Informasi untuk kategori ini akan segera diperbarui.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
            {/* Placeholder untuk section berikutnya */}
            <div className="text-center text-gray-400 italic my-10">
              {/* Section Keunggulan Area */}
              {/* Section Peta Lokasi */}
              <section
                id="peta-lokasi"
                className={`${contentSectionPaddingY} bg-white rounded-xl shadow-xl mt-12 md:mt-16`}
              >
                {" "}
                {/* Diberi background dan shadow terpisah */}
                <div className="container mx-auto px-4 py-10">
                  <div className="text-center mb-10 md:mb-12">
                    <FontAwesomeIcon
                      icon={faMapMarkedAlt}
                      className="text-5xl md:text-7xl text-orange-600 mb-3"
                    />
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                      Temukan Kami Dengan Mudah
                    </h2>
                    <p className="text-md text-gray-600 max-w-xl mx-auto mt-2">
                      Lihat peta interaktif untuk mengetahui lokasi presisi
                      Griya Harmoni Cibugel dan akses sekitarnya.
                    </p>
                  </div>
                  <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200">
                    <iframe
                      src={mapEmbedSrc} // PASTIKAN INI URL EMBED GOOGLE MAPS YANG BENAR
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Peta Lokasi Griya Harmoni Cibugel"
                    ></iframe>
                  </div>
                </div>
              </section>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
