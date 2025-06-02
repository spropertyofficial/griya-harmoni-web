// src/app/tipe-rumah/page.jsx

"use client";
import Link from "next/link";
import PropertyCard from "@/components/common/PropertyCard";
import { getAllProperties } from "@/data/mockProperties";

const daftarTipeRumah = getAllProperties();
export default function TipeRumahPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-slate-800 mb-4">
        Pilihan Tipe Rumah Kami
      </h1>
      <p className="text-center text-gray-600 mb-10 md:mb-12 max-w-2xl mx-auto">
        Kami menyediakan beragam tipe hunian yang dirancang untuk memenuhi
        kebutuhan dan preferensi Anda. Setiap unit dibangun dengan standar
        kualitas terbaik untuk kenyamanan jangka panjang.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {daftarTipeRumah.map((unit) => (
          // Gunakan komponen PropertyCard di sini
          <PropertyCard key={unit.id} unit={unit} />
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          href="/kontak"
          className="bg-slate-700 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
        >
          Hubungi Marketing Kami
        </Link>
      </div>
    </div>
  );
}
