// // src/app/tipe-rumah/[slug]/page.jsx

// import { getPropertyBySlug, getAllProperties } from "@/data/mockProperties";
// // Image tidak lagi digunakan langsung di sini karena sudah di dalam PropertyImageGallery
// // import Image from "next/image";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMapMarkerAlt,
//   faBed,
//   faBath,
//   faRulerCombined,
//   faHome,
//   faCheckCircle,
//   faChevronLeft,
//   faTag,
// } from "@fortawesome/free-solid-svg-icons";
// import { notFound } from "next/navigation";

// import PropertyImageGallery from "@/components/common/PropertyImageGallery";
// import ContactAgentForm from "@/components/forms/ContactAgentForm"; // <<< IMPOR FORM BARU
// import { formatPrice } from "@/utils/formatPrice";

// export async function generateStaticParams() {
//   // ... (kode tetap sama)
//   const properties = getAllProperties();
//   return properties.map((property) => ({
//     slug: property.slug,
//   }));
// }

// export async function generateMetadata({ params: paramsPromise }) {
//   // ... (kode tetap sama)
//   const params = await paramsPromise;
//   const property = getPropertyBySlug(params.slug);

//   if (!property) {
//     return {
//       title: "Properti Tidak Ditemukan",
//       description: "Detail properti yang Anda cari tidak tersedia.",
//     };
//   }
//   return {
//     title: `${property.name} - Griya Harmoni`,
//     description:
//       property.description?.substring(0, 160) ||
//       `Detail lengkap untuk ${property.name}, properti terbaik di Griya Harmoni.`,
//   };
// }

// export default async function PropertyDetailPage({ params: paramsPromise }) {
//   const params = await paramsPromise;
//   const { slug } = params;
//   const property = getPropertyBySlug(slug);

//   if (!property) {
//     notFound();
//   }

//   const galleryImagesData =
//     property.images && property.images.length > 0
//       ? property.images
//       : property.image
//       ? [property.image]
//       : ["/placeholder-image.jpg"];

//   return (
//     // Hapus logika isFullScreen dari className kontainer utama
//     <div className="container mx-auto px-4 py-8 md:py-12">
//       <div className="mb-6">
//         <Link
//           href="/tipe-rumah"
//           className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
//         >
//           <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4 mr-2" />
//           Kembali ke Daftar Tipe Rumah
//         </Link>
//       </div>

//       <article>
//         {/* Galeri Gambar Dipindahkan KE ATAS JUDUL */}
//         <div className="mb-8">
//           <PropertyImageGallery
//             images={galleryImagesData}
//             altPrefix={`Tampilan ${property.name}`}
//           />
//         </div>

//         {/* Judul dan Lokasi DIPINDAHKAN KE BAWAH GALERI */}
//         <header className="mb-6 md:mb-8">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-2">
//             {property.name}
//           </h1>
//           <div className="flex items-center text-md text-gray-600">
//             <FontAwesomeIcon
//               icon={faMapMarkerAlt}
//               className="w-4 h-4 mr-2 text-gray-500"
//             />
//             <span>{property.location}</span>
//           </div>
//           {property.status && (
//             <div className="mt-2 inline-flex items-center bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
//               <FontAwesomeIcon icon={faTag} className="w-3 h-3 mr-1.5" />
//               {property.status}
//             </div>
//           )}
//         </header>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="md:col-span-2">
//             {/* ... (Deskripsi dan Fitur tetap sama) ... */}
//             <section className="mb-8">
//               <h2 className="text-2xl font-semibold text-slate-700 mb-3 border-b pb-2">
//                 Deskripsi Properti
//               </h2>
//               <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//                 {property.description}
//               </p>
//             </section>

//             {property.features && property.features.length > 0 && (
//               <section className="mb-8">
//                 <h2 className="text-2xl font-semibold text-slate-700 mb-3 border-b pb-2">
//                   Fitur Unggulan
//                 </h2>
//                 <ul className="list-none space-y-2">
//                   {property.features.map((feature, index) => (
//                     <li key={index} className="flex items-center text-gray-700">
//                       <FontAwesomeIcon
//                         icon={faCheckCircle}
//                         className="w-5 h-5 mr-2 text-green-500"
//                       />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </section>
//             )}
//           </div>

//           <aside className="md:col-span-1">
//             <div className="bg-slate-50 p-6 rounded-lg shadow top-24">
//               <h2 className="text-xl font-semibold text-slate-700 mb-4 border-b pb-2">
//                 Spesifikasi Unit
//               </h2>
//               {/* ... (Spesifikasi tetap sama) ... */}
//               <div className="space-y-2 text-gray-700 mb-6">
//                 <div className="flex justify-between">
//                   <span>
//                     <FontAwesomeIcon
//                       icon={faBed}
//                       className="w-4 mr-2 text-gray-500"
//                     />
//                     Kamar Tidur:
//                   </span>{" "}
//                   <strong>{property.bedrooms}</strong>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>
//                     <FontAwesomeIcon
//                       icon={faBath}
//                       className="w-4 mr-2 text-gray-500"
//                     />
//                     Kamar Mandi:
//                   </span>{" "}
//                   <strong>{property.bathrooms}</strong>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>
//                     <FontAwesomeIcon
//                       icon={faRulerCombined}
//                       className="w-4 mr-2 text-gray-500"
//                     />
//                     Luas Bangunan:
//                   </span>{" "}
//                   <strong>{property.area}</strong>
//                 </div>
//                 {property.landArea && (
//                   <div className="flex justify-between">
//                     <span>
//                       <FontAwesomeIcon
//                         icon={faHome}
//                         className="w-4 mr-2 text-gray-500"
//                       />
//                       Luas Tanah:
//                     </span>{" "}
//                     <strong>{property.landArea}</strong>
//                   </div>
//                 )}
//               </div>
//               <div className="mb-6">
//                 <p className="text-sm text-gray-500">Harga Mulai dari</p>
//                 <p className="text-3xl font-extrabold text-orange-600">
//                   {formatPrice(property.price)}
//                   {property.priceType && (
//                     <span className="text-base font-medium text-gray-600 ml-1">
//                       {property.priceType}
//                     </span>
//                   )}
//                 </p>
//               </div>
//             </div>
//             <div className="bg-slate-50 p-6 rounded-lg shadow mt-5">
//               <ContactAgentForm
//                 formSubtitle="Agen kami siap membantu menjawab pertanyaan Anda atau mengatur jadwal kunjungan." // <<< SUBJUDUL SPESIFIK
//                 propertyName={property.name} // propertyName spesifik unit
//               />
//             </div>
//           </aside>
//         </div>
//       </article>
//     </div>
//   );
// }
