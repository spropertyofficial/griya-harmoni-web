// src/app/tipe-rumah/page.jsx
import { getAllProperties, getProperty } from "@/data/mockProperties";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBed,
  faBath,
  faRulerCombined,
  faHome,
  faCheckCircle,
  faChevronLeft,
  faTag,
  faBuilding,
  faCar, // Mengganti faCarSide dengan faCar untuk carport
} from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";

import PropertyImageGallery from "@/components/common/PropertyImageGallery";
import ContactAgentForm from "@/components/forms/ContactAgentForm";
import { formatPrice } from "@/utils/formatPrice";

const property = getProperty();

export const metadata = {
  title: property
    ? `${property.name} - Detail Unit Griya Harmoni`
    : "Detail Unit Griya Harmoni",
  description: property
    ? property.description?.substring(0, 160) ||
      `Detail lengkap untuk ${property.name}, rumah subsidi berkualitas.`
    : "Detail lengkap rumah subsidi berkualitas di Griya Harmoni.",
};

export default function SinglePropertyDetailPage() {
  if (!property) {
    notFound();
  }

  const galleryImagesData =
    property.images && property.images.length > 0
      ? property.images
      : property.image
      ? [property.image]
      : ["/placeholder-image.jpg"];

  const pageTopPadding = "pt-12";

  // Rangkuman spesifikasi kunci untuk sidebar (sesuai brosur)
  const keySpecs = [
    { icon: faBed, label: `${property.bedrooms} Kamar Tidur` },
    { icon: faBath, label: `${property.bathrooms} Kamar Mandi` },
    { icon: faRulerCombined, label: `LB: ${property.area} m²` },
    { icon: faHome, label: `LT: ${property.landArea} m²` },
    { icon: faCar, label: `${property.carport} Carport` },
  ];

  return (
    <div className={`bg-slate-100 ${pageTopPadding}`}>
      {" "}
      {/* Latar halaman sedikit berbeda */}
      <div className="container mx-auto px-4 pb-12 md:pb-16">
        <div className="mb-6 md:mb-8">
          <Link
            href="/"
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3 mr-2" />
            Kembali ke Beranda
          </Link>
        </div>

        <article>
          {/* Header Utama Halaman - Nama Properti, Lokasi, Status */}
          <header className="mb-8 md:mb-10">
            {property.status && (
              <span
                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full text-white mb-3 bg-gradient-to-r ${
                  property.status === "For Sale"
                    ? "from-green-500 to-emerald-600"
                    : property.status === "Sold Out"
                    ? "from-red-500 to-pink-600"
                    : "from-sky-500 to-blue-600"
                }`}
              >
                {property.status}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-2 leading-tight">
              {property.name}
            </h1>
            <div className="flex items-center text-md text-gray-600">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0"
              />
              <span className="truncate">{property.location}</span>
            </div>
          </header>

          {/* Layout Dua Kolom */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Kolom Kiri: Galeri & Detail Konten */}
            <div className="lg:col-span-2 space-y-10">
              <section aria-labelledby="property-gallery-heading">
                <h2 id="property-gallery-heading" className="sr-only">
                  Galeri Gambar Properti
                </h2>
                <PropertyImageGallery
                  images={galleryImagesData}
                  altPrefix={`Tampilan ${property.name}`}
                />
              </section>

              {/* Denah Unit (jika ada dan ingin ditampilkan terpisah) */}
              {property.floorPlanImage && (
                <section
                  aria-labelledby="floorplan-heading"
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h2
                    id="floorplan-heading"
                    className="text-2xl font-semibold text-slate-800 mb-4 flex items-center"
                  >
                    <FontAwesomeIcon
                      icon={faRulerCombined}
                      className="mr-3 text-blue-600"
                    />{" "}
                    Denah Unit
                  </h2>
                  <div className="relative w-full max-w-md mx-auto border rounded-lg overflow-hidden bg-gray-50">
                    <Image
                      src={property.floorPlanImage}
                      alt={`Denah ${property.name}`}
                      width={700}
                      height={500} // Sesuaikan rasio aspek denah Anda
                      className="object-contain w-full h-auto p-1"
                    />
                  </div>
                </section>
              )}

              <section
                aria-labelledby="description-heading"
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h2
                  id="description-heading"
                  className="text-2xl font-semibold text-slate-800 mb-4 border-b border-gray-200 pb-3"
                >
                  Deskripsi Unit
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line prose prose-sm max-w-none">
                  {property.description}
                </div>
              </section>

              {property.features && property.features.length > 0 && (
                <section
                  aria-labelledby="features-heading"
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h2
                    id="features-heading"
                    className="text-2xl font-semibold text-slate-800 mb-4 border-b border-gray-200 pb-3"
                  >
                    Keunggulan & Fitur
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {property.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700 text-sm"
                      >
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="w-4 h-4 mr-2.5 text-green-500 mt-1 flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {property.detailedSpecifications && (
                <section
                  aria-labelledby="specs-heading"
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h2
                    id="specs-heading"
                    className="text-2xl font-semibold text-slate-800 mb-4 border-b border-gray-200 pb-3 flex items-center"
                  >
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="mr-3 text-blue-600"
                    />
                    Spesifikasi Bangunan
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                    {Object.entries(property.detailedSpecifications).map(
                      ([key, value]) => {
                        const formattedKey = key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase());
                        return (
                          <div key={key} className="pb-2">
                            <span className="font-medium text-gray-500 block">
                              {formattedKey}:
                            </span>
                            <p className="text-slate-700 font-semibold">
                              {value}
                            </p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </section>
              )}
            </div>
            {/* Kolom Kanan: Sidebar Harga & Kontak Agen */}
            <aside className="lg:col-span-1 h-full">
              {/* Kontainer untuk membuat elemen di dalamnya sticky */}

              {/* top-24 untuk jarak dari navbar, space-y-6 untuk jarak antar kartu di sidebar */}
              {/* Kartu Harga & Spesifikasi Kunci */}
              <div className="bg-white p-6 rounded-xl shadow-xl">
                <div className="mb-5 pb-4 border-b border-gray-200">
                  {/* <p className="text-sm text-gray-500 mb-1">
                    {property.priceQualifier
                      ? `${
                          property.priceQualifier.charAt(0).toUpperCase() +
                          property.priceQualifier.slice(1)
                        } Harga`
                      : "Harga Unit"}
                  </p> */}
                  <p className="text-sm text-gray-500 mb-1">Harga mulai dari</p>
                  <p className="text-3xl md:text-4xl font-extrabold text-orange-600">
                    {formatPrice(property.price)}
                    {property.priceType && (
                      <span className="text-base font-medium text-gray-600 ml-1">
                        {property.priceType}
                      </span>
                    )}
                  </p>
                  {property.priceQualifier === "Harga" && (
                    <p className="text-xs text-gray-500 mt-1">
                      (*Harga dapat berubah)
                    </p>
                  )}
                </div>

                <div className="space-y-2.5">
                  {" "}
                  {/* Sedikit penyesuaian spasi */}
                  <h3 className="text-md font-semibold text-slate-700 mb-2">
                    Ringkasan Spesifikasi:
                  </h3>
                  {keySpecs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <FontAwesomeIcon
                        icon={spec.icon}
                        className="w-4 h-4 mr-2.5 text-blue-500 flex-shrink-0"
                      />
                      <span>{spec.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Kartu Form Kontak Agen */}
              <div className="bg-white p-6 rounded-xl shadow-xl sticky top-20 mt-10">
                <ContactAgentForm
                  propertyName={property.name}
                  formTitle={`Tertarik Unit Ini?`} // Judul ini bisa diubah jika mau
                  formSubtitle="Hubungi agen kami untuk info lebih lanjut atau jadwal survei." // Subjudul disesuaikan
                />
              </div>
            </aside>
          </div>
        </article>
      </div>
    </div>
  );
}
