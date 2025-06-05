// src/components/common/PropertyImageGallery.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, FreeMode } from "swiper/modules";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

export default function PropertyImageGallery({
  images,
  altPrefix = "Property",
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  // Modal/Fullscreen state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle fullscreen modal
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle keyboard navigation in modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, images.length]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div className="space-y-4">
        {/* Main Image Slider */}
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Navigation, Thumbs]}
          className="rounded-lg overflow-hidden cursor-pointer"
          onSwiper={setMainSwiper}
          onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative aspect-[16/10] w-full group"
                onClick={() => openModal(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    openModal(index);
                  }
                }}
              >
                <Image
                  src={img}
                  alt={`${altPrefix} - Gambar ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder-image.jpg";
                  }}
                />
                {/* Fullscreen indicator overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                    <FontAwesomeIcon
                      icon={faExpand}
                      className="w-6 h-6 text-gray-800"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails Slider */}
        {images.length > 1 && (
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 7,
              },
            }}
            className="thumbnails-swiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative aspect-[4/3] cursor-pointer rounded overflow-hidden border-2 border-transparent hover:border-blue-400 transition-colors duration-200"
                  onClick={() => {
                    // Sync main swiper with thumbnail click
                    if (mainSwiper) {
                      mainSwiper.slideTo(index);
                    }
                  }}
                >
                  <Image
                    src={img}
                    alt={`${altPrefix} - Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="150px"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder-image.jpg";
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors duration-200"
            onClick={closeModal}
            aria-label="Close fullscreen view"
          >
            <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors duration-200 disabled:opacity-50"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                disabled={images.length <= 1}
                aria-label="Previous image"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors duration-200 disabled:opacity-50"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                disabled={images.length <= 1}
                aria-label="Next image"
              >
                <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Main Image in Modal */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentImageIndex]}
              alt={`${altPrefix} - Gambar ${currentImageIndex + 1}`}
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-full"
              onError={(e) => {
                e.currentTarget.src = "/placeholder-image.jpg";
              }}
            />
          </div>

          {/* Thumbnail Navigation in Modal */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
              <div className="flex gap-2 bg-black/50 p-2 rounded-lg max-w-[90vw] overflow-x-auto">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`relative w-16 h-12 cursor-pointer rounded overflow-hidden border-2 transition-colors duration-200 flex-shrink-0 ${
                      index === currentImageIndex
                        ? "border-blue-400"
                        : "border-transparent hover:border-white/50"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                  >
                    <Image
                      src={img}
                      alt={`${altPrefix} - Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
