// src/app/kontak/page.jsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import ContactAgentForm from "@/components/forms/ContactAgentForm"; // Impor form yang sudah ada

export const metadata = {
  title: "Hubungi Kami - Griya Harmoni",
  description:
    "Hubungi tim marketing Griya Harmoni untuk informasi lebih lanjut, pertanyaan, atau jadwal kunjungan. Kami siap membantu Anda.",
};

export default function KontakPage() {
  // Detail kontak perusahaan
  const contactDetails = {
    address: "Cibugel, Cisoka, Tangerang, Indonesia, Banten",
    phone: "+62 811-286-885",
    whatsappDisplay: "+62 811-286-885",
    whatsappLink: "62811286885",
    email: "griyaharmoni2021@gmail.com",
    operationalHours:
      "Selalu Buka",
  };
  const mapEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4059.059353234433!2d106.41303907509567!3d-6.25005199373836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42050040fc7ddd%3A0x86616f93514ebe15!2sGriya%20Harmoni%20Cibugel!5e1!3m2!1sen!2sid!4v1748859109326!5m2!1sen!2sid";

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-3">
          Hubungi Kami
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Kami senang mendengar dari Anda! Silakan gunakan formulir di bawah ini
          atau detail kontak kami untuk pertanyaan atau informasi lebih lanjut.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Kolom Informasi Kontak */}
        <section className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-slate-700 mb-6">
            Informasi Kontak
          </h2>
          <div className="space-y-5">
            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="w-5 h-5 text-blue-600 mt-1 mr-4 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-slate-800">
                  Alamat Kantor Pemasaran
                </h3>
                <p className="text-gray-600 text-sm">
                  {contactDetails.address}
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faPhone}
                className="w-5 h-5 text-blue-600 mt-1 mr-4 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-slate-800">
                  Telepon & WhatsApp
                </h3>
                <p className="text-gray-600 text-sm">
                  Tel: {contactDetails.phone}
                </p>
                <p className="text-gray-600 text-sm">
                  WA:{" "}
                  <a
                    href={`https://wa.me/${contactDetails.whatsappLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    {contactDetails.whatsappDisplay}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-5 h-5 text-blue-600 mt-1 mr-4 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-slate-800">Email</h3>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-gray-600 text-sm hover:text-blue-600 hover:underline"
                >
                  {contactDetails.email}
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faClock}
                className="w-5 h-5 text-blue-600 mt-1 mr-4 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-slate-800">
                  Jam Operasional
                </h3>
                <p className="text-gray-600 text-sm whitespace-pre-line">
                  {contactDetails.operationalHours}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kolom Form Kontak */}
        <section className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <ContactAgentForm
            formTitle="Kirimkan Pesan Anda"
            formSubtitle="Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda."
            propertyName="Pertanyaan Umum dari Halaman Kontak"
            initialMessage="Halo, Saya ingin informasi lebih lanjut. Mohon segera hubungi saya"
          />
        </section>
      </div>

      {/* Section Peta Lokasi */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Temukan Kami di Peta
        </h2>
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border">
          <iframe
            src={mapEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Lokasi Griya Harmoni"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
