// src/components/common/PropertyCard.jsx
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBed,
  faBath,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons"; // Impor ikon yang dibutuhkan
import { formatPrice, formatPriceCompact } from "@/utils/formatPrice";

export default function PropertyCard({ unit }) {
  if (!unit) {
    return null;
  }

  const {
    image = "https://picsum.photos/800/600?random=" +
      (unit?.id || Math.random()), // Tambahkan randomizer jika picsum
    status = "For Sale",
    name = "Nama Properti Tidak Tersedia",
    location = "Lokasi Tidak Diketahui",
    bedrooms = 0,
    bathrooms = 0,
    area = "0", // Ubah ke angka atau string angka jika belum
    price = 0, // Ubah ke angka jika belum, atau N/A jika string
    priceType = "",
    slug = "#",
  } = unit;

  // Pastikan 'area' dan 'price' adalah angka untuk formatting
  const numericPrice = Number(price);
  const numericArea = parseInt(String(area).replace(/[^0-9]/g, ""), 10); // Ekstrak angka dari string area

  return (
    <Link
      href={`/tipe-rumah/${slug}`} // Pastikan path diawali dengan / jika itu root path untuk tipe rumah
      className="block group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex-col overflow-hidden p-2"
    >
      <div className="relative w-full aspect-[16/10] sm:aspect-[4/3]">
        <Image
          src={image}
          alt={`Tampilan ${name}`}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" // Sesuaikan nilai sizes ini
          className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" // rounded-lg karena ada p-2 di parent
        />
        {status && (
          <div className="absolute top-3 left-3 bg-slate-800 bg-opacity-80 text-white text-xs px-3 py-1 rounded-full shadow">
            {status}
          </div>
        )}
      </div>

      {/* Konten Info */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {" "}
        {/* Padding internal konten */}
        <h3
          className="text-lg sm:text-xl font-bold text-slate-900 mb-1 truncate"
          title={name}
        >
          {name}
        </h3>
        <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3 h-3 mr-1.5" />
          <span className="truncate">{location}</span>
        </div>
        {/* Spesifikasi */}
        <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-600 mb-4">
          {bedrooms > 0 && (
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faBed}
                className="w-3.5 h-3.5 mr-1 text-gray-500"
              />
              <span>{bedrooms} Beds</span>
            </div>
          )}
          {bathrooms > 0 && (
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faBath}
                className="w-3.5 h-3.5 mr-1 text-gray-500"
              />
              <span>{bathrooms} Baths</span>
            </div>
          )}
          {numericArea > 0 && ( // Tampilkan jika area numerik > 0
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faRulerCombined}
                className="w-3.5 h-3.5 mr-1 text-gray-500"
              />
              <span>
                {numericArea} m² {/* Tambahkan unit di sini */}
              </span>
            </div>
          )}
        </div>
        {/* Bagian Harga */}
        <div className="mt-auto">
          {" "}
          <p className="text-xs text-gray-500 mb-0.5">Harga mulai dari</p>{" "}
          <p className="text-lg sm:text-xl font-bold text-orange-600">
            {" "}
            {formatPrice(numericPrice)}
            {priceType && (
              <span className="text-sm font-normal text-gray-600 ml-1">
                {priceType}
              </span>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
}
