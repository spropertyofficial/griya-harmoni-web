import { unitImages } from "./unitImages";

const floorPlanImage = unitImages.find((img) => img.type === "denah");
const galleryImages = unitImages.filter((img) => img.type !== "denah");

export const unit = {
  id: 1,
  slug: "unit-subsidi-29-60",
  name: "Tipe 29/60",
  image: galleryImages[0]?.src || "/placeholder-image.jpg", 
  images: galleryImages.map((img) => img.src),
  floorPlanImage: floorPlanImage?.src || null,

  status: "For Sale",
  location: "Cisoka, Kab. Tangerang",
  fullAddress:
    "Griya Harmoni Cibugel, Jl. Specht Hubarok, Bojongloa, Kec. Cisoka, Kabupaten Tangerang, Banten 15730 (Dekat PCX8+R36)",

  description:
    "Wujudkan impian hunian idaman Anda bersama Griya Harmoni Cibugel. Rumah subsidi berkualitas dengan lingkungan asri, tenang dan lokasi strategis. Dilengkapi tembok belakang setinggi 2 meter dan Sertifikat IMB terjamin. Hunian ini memberikan rasa aman dan nyaman untuk keluarga Anda. Griya Harmoni Cibugel adalah pilihan tepat untuk masa depan Anda.",

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
    "Carport untuk 1 Mobil dan 1 motor",
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

  price: 185000000,
  priceQualifier: "mulai",
  priceType: "",
};

export function getProperty() {
  return unit;
}
