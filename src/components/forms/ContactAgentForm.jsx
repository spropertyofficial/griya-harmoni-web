// src/components/forms/ContactAgentForm.jsx
"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faCommentDots,
  faSpinner,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

export default function ContactAgentForm({
  propertyName = "properti ini",
  agentWhatsappNumber = "6285123123891",
  formTitle = `Tertarik dengan Property Ini?`,
  formSubtitle = "Kirim pesan untuk info lebih lanjut atau jadwal kunjungan.",
  submitButtonText = "Hubungi Kami",
  initialMessage = `Halo, saya tertarik dengan ${propertyName}. Mohon informasinya lebih lanjut.`,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: initialMessage,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const sendToGoogleSheet = async (data) => {
    if (
      !GOOGLE_SCRIPT_URL ||
      GOOGLE_SCRIPT_URL === "URL_GOOGLE_APPS_SCRIPT_ANDA_DI_SINI" ||
      GOOGLE_SCRIPT_URL === undefined
    ) {
      console.warn(
        "URL Google Apps Script belum dikonfigurasi atau masih menggunakan placeholder."
      );
      return { success: false, message: "Konfigurasi spreadsheet belum siap." };
    }
    const scriptFormData = new FormData();
    scriptFormData.append(
      "timestamp",
      new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })
    );
    scriptFormData.append("propertyName", propertyName);
    scriptFormData.append("name", data.name);
    scriptFormData.append("email", data.email);
    scriptFormData.append("phone", data.phone);
    scriptFormData.append("message", data.message);
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: scriptFormData,
      });
      const textResponse = await response.text();
      try {
        const result = JSON.parse(textResponse);
        if (result.result === "success") {
          console.log("Data berhasil dikirim ke Google Sheet:", result);
          return { success: true, message: "Data Anda berhasil dicatat." };
        } else {
          console.error(
            "Gagal mengirim ke Google Sheet (respon dari script):",
            result
          );
          return {
            success: false,
            message: result.message || "Gagal menyimpan ke spreadsheet.",
          };
        }
      } catch (parseError) {
        console.error(
          "Gagal parse JSON dari Apps Script:",
          parseError,
          "Respons teks:",
          textResponse
        );
        return {
          success: false,
          message: "Terjadi masalah saat berkomunikasi dengan spreadsheet.",
        };
      }
    } catch (error) {
      console.error("Error saat fetch ke Google Sheet:", error);
      return {
        success: false,
        message: "Gagal terhubung ke layanan spreadsheet.",
      };
    }
  };

  const openWhatsApp = () => {
    const waMessage = encodeURIComponent(
      `Halo, saya ${formData.name}.\n` +
        `Saya tertarik dengan: ${propertyName}.\n\n` +
        `Detail Kontak Saya:\n` +
        `Email: ${formData.email}\n` +
        `Telepon: ${formData.phone}\n\n` +
        `Pesan Tambahan:\n${formData.message}`
    );
    const waLink = `https://wa.me/${agentWhatsappNumber}?text=${waMessage}`;
    window.open(waLink, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    const sheetResponse = await sendToGoogleSheet(formData);
    setIsSubmitting(false);

    if (sheetResponse.success) {
      setSubmitStatus({
        type: "success",
        message: `${sheetResponse.message} Anda akan segera diarahkan ke WhatsApp.`,
      });
      setTimeout(() => {
        openWhatsApp();
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: initialMessage,
        });
      }, 1000);
    } else {
      setSubmitStatus({
        type: "warning",
        message: `Pesan akan dikirim via WhatsApp. (${
          sheetResponse.message || "Pencatatan otomatis sementara gagal."
        })`,
      });
      setTimeout(() => {
        openWhatsApp();
      }, 3500);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-800 mb-1">{formTitle}</h3>
      <p className="text-sm text-gray-600 mb-6">{formSubtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Nama */}
        <div>
          <label
            htmlFor="form-name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nama Anda
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon
                icon={faUser}
                className="text-gray-400 h-4 w-4"
              />
            </div>
            <input
              type="text"
              name="name"
              id="form-name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-3 py-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              placeholder="Nama Lengkap"
            />
          </div>
        </div>

        {/* Input Email */}
        <div>
          <label
            htmlFor="form-email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-400 h-4 w-4"
              />
            </div>
            <input
              type="email"
              name="email"
              id="form-email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-3 py-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              placeholder="anda@email.com"
            />
          </div>
        </div>

        {/* Input No. Telepon */}
        <div>
          <label
            htmlFor="form-phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            No. Telepon
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-gray-400 h-4 w-4"
              />
            </div>
            <input
              type="tel"
              name="phone"
              id="form-phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-3 py-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              placeholder="0812xxxxxxx"
            />
          </div>
        </div>

        {/* Input Pesan */}
        <div>
          <label
            htmlFor="form-message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Pesan
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute top-2.5 left-0 pl-3 flex items-start pointer-events-none">
              <FontAwesomeIcon
                icon={faCommentDots}
                className="text-gray-400 h-4 w-4"
              />
            </div>
            <textarea
              name="message"
              id="form-message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-3 py-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              placeholder="Tulis pesan Anda..."
            ></textarea>
          </div>
        </div>

        {/* Tombol Submit */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <FontAwesomeIcon
                icon={faSpinner}
                className="animate-spin w-5 h-5 mr-2"
              />
            ) : null}{" "}
            {/* Ikon submit dihilangkan saat tidak submitting */}
            {isSubmitting ? "Mengirim..." : submitButtonText}
          </button>
        </div>
      </form>

      {/* Pesan Status */}
      {submitStatus.message && (
        <div
          className={`mt-4 text-sm p-3 rounded-md flex items-center border ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-700 border-green-200"
              : submitStatus.type === "error"
              ? "bg-red-50 text-red-700 border-red-200"
              : "bg-yellow-50 text-yellow-700 border-yellow-200"
          }`}
        >
          {submitStatus.type === "success" && (
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="w-5 h-5 mr-2 flex-shrink-0"
            />
          )}
          <span>{submitStatus.message}</span>
        </div>
      )}
    </div>
  );
}
