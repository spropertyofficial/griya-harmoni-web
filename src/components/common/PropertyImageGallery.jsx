// src/components/common/PropertyImageGallery.jsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyImageGallery({
  images = [],
  altPrefix = "Tampilan Properti",
}) {
  if (!images || images.length === 0) {
    return (
      <div className="relative w-full aspect-[16/6] rounded-lg overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Gambar tidak tersedia</p>
      </div>
    );
  }

  const [currentMainImage, setCurrentMainImage] = useState(images[0]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentFullscreenImageIndex, setCurrentFullscreenImageIndex] =
    useState(0);

  useEffect(() => {
    if (images && images.length > 0) {
      const initialImage = images[0];
      setCurrentMainImage(initialImage);
    } else {
      setCurrentMainImage("/placeholder-image.jpg");
    }
  }, [images]);

  const handleThumbnailClick = (newImageSrc, index) => {
    setCurrentMainImage(newImageSrc);
    // Jika di fullscreen, update juga indeks fullscreen
    if (isFullscreen) {
      setCurrentFullscreenImageIndex(index);
    }
  };

  const openFullscreen = useCallback(
    (index) => {
      if (index >= 0 && index < images.length) {
        setCurrentFullscreenImageIndex(index);
        setIsFullscreen(true);
        // document.body.style.overflow = 'hidden'; // Mencegah scroll body saat modal terbuka
      } else if (images.length > 0) {
        setCurrentFullscreenImageIndex(0);
        setIsFullscreen(true);
        // document.body.style.overflow = 'hidden';
      }
    },
    [images]
  );

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false);
    // document.body.style.overflow = 'auto'; // Kembalikan scroll body
  }, []);

  const navigateFullscreen = useCallback(
    (direction) => {
      setCurrentFullscreenImageIndex((prevIndex) => {
        let nextIndex = direction === "next" ? prevIndex + 1 : prevIndex - 1;
        if (nextIndex >= images.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = images.length - 1;
        return nextIndex;
      });
    },
    [images.length]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isFullscreen) {
        if (event.key === "Escape") closeFullscreen();
        if (event.key === "ArrowRight") navigateFullscreen("next");
        if (event.key === "ArrowLeft") navigateFullscreen("prev");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, closeFullscreen, navigateFullscreen]);

  const currentMainImageIndex = images.findIndex(
    (img) => img === currentMainImage
  );

  // Efek untuk mengubah currentMainImage jika currentFullscreenImageIndex berubah (navigasi di fullscreen)
  useEffect(() => {
    if (isFullscreen && images[currentFullscreenImageIndex]) {
      setCurrentMainImage(images[currentFullscreenImageIndex]);
    }
  }, [currentFullscreenImageIndex, isFullscreen, images]);

  return (
    <section aria-label="Galeri Gambar Properti">
      {/* Gambar Utama */}
      <div
        className="relative w-full aspect-[16/6] rounded-lg overflow-hidden shadow-lg mb-3 sm:mb-4 group cursor-pointer"
        onClick={() =>
          openFullscreen(currentMainImageIndex >= 0 ? currentMainImageIndex : 0)
        }
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ")
            openFullscreen(
              currentMainImageIndex >= 0 ? currentMainImageIndex : 0
            );
        }}
        title="Lihat gambar fullscreen"
      >
        <Image
          src={currentMainImage}
          alt={`${altPrefix} - Gambar Utama`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw" // Contoh sizes
          className="object-cover"
          priority
          onError={() => setCurrentMainImage("/placeholder-image.jpg")}
        />
        <div
          className="absolute top-3 right-3 bg-black/40 text-white p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100 focus-within:opacity-100"
          aria-label="Tombol lihat gambar fullscreen"
        >
          <FontAwesomeIcon icon={faExpand} className="w-4 h-4" />
        </div>
      </div>

      {/* Thumbnails di bawah gambar utama */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative aspect-[4/2] rounded overflow-hidden shadow-md cursor-pointer transition-all duration-200
                          border-2 ${
                            currentMainImage === img
                              ? "border-blue-600 ring-2 ring-blue-400"
                              : "border-transparent hover:border-gray-400"
                          }`}
              onClick={(e) => {
                e.stopPropagation();
                handleThumbnailClick(img, index);
              }} // Kirim index juga
              title={`${altPrefix} - Gambar ${index + 1}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.stopPropagation();
                  handleThumbnailClick(img, index);
                }
              }}
            >
              <Image
                src={img}
                alt={`${altPrefix} - Thumbnail ${index + 1}`}
                fill
                sizes="20vw" // Contoh, thumbnail kecil
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder-image.jpg";
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Modal Fullscreen */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center z-[9999] p-2 sm:p-4" // Diubah ke flex-col
          onClick={closeFullscreen}
        >
          {/* Tombol Close Fullscreen */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeFullscreen();
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/30 hover:bg-black/50 rounded-full p-2 z-[10001]"
            aria-label="Tutup fullscreen"
          >
            <FontAwesomeIcon icon={faTimes} className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Kontainer Gambar Fullscreen (Wrapper untuk gambar dan navigasi) */}
          <div
            className="relative w-full h-[calc(100%-120px)] sm:h-[calc(100%-140px)] flex items-center justify-center" // Sisakan ruang untuk thumbnail di bawah
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Navigasi Kiri */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateFullscreen("prev");
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/30 hover:bg-black/50 rounded-full p-2 sm:p-3 z-[10000]"
                aria-label="Gambar sebelumnya"
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </button>
            )}

            {/* Gambar Fullscreen Utama */}
            <div className="relative max-w-[95vw] sm:max-w-[90vw] max-h-full w-auto h-auto">
              {" "}
              {/* max-h-full agar mengisi ruang yang tersedia */}
              <Image
                src={images[currentFullscreenImageIndex]}
                alt={`${altPrefix} - Fullscreen ${
                  currentFullscreenImageIndex + 1
                }`}
                width={1920}
                height={1080} // Beri nilai besar, akan di-scale down oleh 'contain' dan parent
                className="object-contain rounded-md shadow-2xl max-w-full max-h-full" // max-w/h-full untuk memastikan tidak melebihi parent
              />
            </div>

            {/* Tombol Navigasi Kanan */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateFullscreen("next");
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/30 hover:bg-black/50 rounded-full p-2 sm:p-3 z-[10000]"
                aria-label="Gambar berikutnya"
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </button>
            )}
          </div>

          {/* Thumbnail Strip di Fullscreen */}
          {images.length > 1 && (
            <div className="w-full max-w-xl lg:max-w-2xl h-[80px] sm:h-[100px] flex justify-center items-center p-2 mt-3 overflow-x-auto space-x-2 bg-black/30 rounded-lg">
              {images.map((img, index) => (
                <div
                  key={`fs-thumb-${index}`}
                  className={`relative aspect-square h-full rounded-md overflow-hidden cursor-pointer transition-all duration-200
                              border-2 flex-shrink-0 ${
                                currentFullscreenImageIndex === index
                                  ? "border-sky-400 ring-2 ring-sky-300"
                                  : "border-transparent hover:border-gray-500 opacity-70 hover:opacity-100"
                              }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentFullscreenImageIndex(index); // Langsung set index untuk fullscreen
                  }}
                  title={`${altPrefix} - Navigasi ke gambar ${index + 1}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.stopPropagation();
                      setCurrentFullscreenImageIndex(index);
                    }
                  }}
                >
                  <Image
                    src={img}
                    alt={`${altPrefix} - Thumbnail Fullscreen ${index + 1}`}
                    fill
                    sizes="10vw"
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder-image.jpg";
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
