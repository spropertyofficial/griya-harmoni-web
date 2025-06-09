// src/app/not-found.jsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export default function NotFoundPage() {
  return (
    // Kita gunakan min-h-screen dan flex untuk menengahkan konten di halaman
    <div className="flex items-center justify-center min-h-screen bg-slate-100 text-center px-4">
      <div className="max-w-md">
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className="text-5xl md:text-6xl text-yellow-500 mb-6"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-md md:text-lg text-slate-600 mb-8">
          Maaf, halaman yang Anda cari tidak ada atau mungkin telah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
