export const allProperties = [
  {
    id: 1,
    slug: "unit-subsidi-29-60",
    name: "Tipe 29/60",
    image: "https://picsum.photos/800/600?random=1",
    images: [
      "https://picsum.photos/800/600?random=2",
      "https://picsum.photos/800/600?random=3",
      "https://picsum.photos/800/600?random=4",
      "https://picsum.photos/800/600?random=5",
      "https://picsum.photos/800/600?random=6",
      "https://picsum.photos/800/600?random=7",
      "https://picsum.photos/800/600?random=8",
      "https://picsum.photos/800/600?random=9",
      "https://picsum.photos/800/600?random=10",    ],
    floorPlanImage:
      "https://griyaharmoni.com/wp-content/uploads/2024/01/floorplan-Griya-harmoni-copy-1028x1536.jpg",
    status: "For Sale",
    location: "Cisoka, Kab. Tangerang",
    fullAddress:
      "Griya Harmoni Cibugel, Jl. Specht Hubarok, Bojongloa, Kec. Cisoka, Kabupaten Tangerang, Banten 15730 (Dekat PCX8+R36)",

    description:
      "Wujudkan impian hunian idaman Anda di Griya Harmoni Cibugel. Rumah subsidi berkualitas dengan lingkungan asri, tenang, dan lokasi strategis. Dilengkapi tembok belakang setinggi 2 meter dan Sertifikat IMB terjamin, memberikan rasa aman dan nyaman untuk keluarga Anda. Pilihan tepat untuk masa depan.",

    bedrooms: 2,
    bathrooms: 1,
    area: 29,
    landArea: 60,
    carport: 1,

    features: [
      "Include tembok belakang rumah 2 meter",
      "Sertifikat IMB Terjamin",
      "Lingkungan Kawasan Asri dan Tenang",
      "Lokasi Strategis & Mudah di Akses",
      "Carport untuk 1 Mobil",
    ],

    detailedSpecifications: {
      pondasi: "Batu Kali",
      struktur: "Beton Bertulang",
      lantai: "Keramik 40x40",
      dinding: "Batako Plester, Aci, Cat",
      plafond: "Rangka Hollow, Gypsum",
      kerangkaAtap: "Baja Ringan",
      atap: "Genteng Beton",
      kusen: "Kayu Keras",
      kamarMandi: " Kloset Jongkok",
      listrik: "1300 Watt",
      air: "Sumur Gali (Pompa)",
    },

    price: 100000000,
    priceQualifier: "mulai",
    priceType: "",
  },
];

export function getAllProperties() {
  return allProperties;
}

export function getPropertyBySlug(slug) {
  return (
    allProperties.find((property) => property.slug === slug) || allProperties[0]
  );
}
