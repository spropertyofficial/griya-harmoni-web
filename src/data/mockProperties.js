// src/data/mockProperties.js
export const allProperties = [
  {
    id: 1,
    name: "Tipe Azalea (60/72)",
    slug: "azalea", // Hanya slug, bukan path lengkap lagi
    image: "https://picsum.photos/800/600",
    images: [
      // Contoh array gambar untuk galeri
      "https://picsum.photos/800/600?random=1",
      "https://picsum.photos/800/600?random=2",
      "https://picsum.photos/800/600?random=3",
    ],
    status: "For Sale",
    location: "Cisoka, Tangerang Selatan",
    bedrooms: 2,
    bathrooms: 1,
    area: 60,
    landArea: 72,
    price: 350000000,
    priceType: "",
    rating: 4.5,
    description:
      "Hunian nyaman dengan 2 kamar tidur, desain modern minimalis yang memaksimalkan ruang. Cocok untuk keluarga muda yang dinamis dan mencari kenyamanan dalam lingkungan yang asri.",
    features: [
      "Carport 1 Mobil",
      "Taman Depan",
      "Dapur Modern",
      "Listrik 1300W",
      "Air Bersih PDAM",
    ], // BARU
  },
  {
    id: 2,
    name: "Tipe Bougenville (70/90)",
    slug: "bougenville",
    image: "https://picsum.photos/800/600?random=4",
    images: [
      "https://picsum.photos/800/600?random=5",
      "https://picsum.photos/800/600?random=6",
      "https://picsum.photos/800/600?random=7",
    ],
    status: "For Sale",
    location: "Dekat Pusat Kota Strategis",
    bedrooms: 3,
    bathrooms: 2,
    area: 70,
    landArea: 90,
    price: 450000000,
    priceType: "",
    rating: 4.8,
    description:
      "Ruang lebih luas dengan 3 kamar tidur yang lega, memberikan kenyamanan ekstra untuk seluruh anggota keluarga. Nikmati kualitas hidup lebih baik dengan fasilitas lengkap.",
    features: [
      "Carport 2 Mobil",
      "Taman Depan & Belakang",
      "Ruang Tamu Luas",
      "Listrik 2200W",
    ],
  },
  {
    id: 3,
    name: "Tipe Cattleya (85/120)",
    slug: "cattleya",
    image: "https://picsum.photos/800/600?random=8",
    images: [
      "https://picsum.photos/800/600?random=9",
      "https://picsum.photos/800/600?random=10",
      "https://picsum.photos/800/600?random=11",
    ],
    status: "Sold Out",
    location: "Area Premium, Cluster Eksklusif",
    bedrooms: 3,
    bathrooms: 2,
    area: 85,
    landArea: 120,
    price: 600000000,
    priceType: "",
    rating: 4.9,
    description:
      "Pilihan premium dengan desain arsitektur elegan dan material berkualitas tinggi. Dilengkapi 3 kamar tidur, ruang keluarga yang mewah, dan lingkungan yang aman.",
    features: [
      "Carport 2 Mobil (Covered)",
      "Smart Home System",
      "Private Garden",
      "One Gate System Security 24 Jam",
    ],
  },
  {
    id: 4,
    name: "Tipe Dahlia (50/60)",
    slug: "dahlia",
    image: "https://picsum.photos/800/600?random=12",
    images: [
      "https://picsum.photos/800/600?random=13",
      "https://picsum.photos/800/600?random=14",
    ],
    status: "New Launch",
    location: "Kawasan Berkembang Pesat",
    bedrooms: 2,
    bathrooms: 1,
    area: 50,
    landArea: 60,
    price: 290000000,
    priceType: "",
    rating: 4.3,
    description:
      "Solusi hunian minimalis modern yang efisien dan terjangkau. Ideal untuk pasangan baru atau sebagai investasi properti yang menjanjikan di masa depan.",
    features: ["Desain Compact", "Harga Terjangkau", "Lingkungan Nyaman"],
  },
  // Tambahkan lebih banyak data properti jika perlu
];

// Anda bisa membuat fungsi untuk mengambil semua properti atau berdasarkan slug
export function getAllProperties() {
  return allProperties;
}

export function getPropertyBySlug(slug) {
  return allProperties.find((property) => property.slug === slug);
}