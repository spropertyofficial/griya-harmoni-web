// src/components/common/PageTransitionWrapper.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Definisikan varian animasi baru yang lebih halus
const variants = {
  // Keadaan awal (saat halaman baru akan masuk)
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5, // Durasi animasi masuk
      ease: [0.43, 0.13, 0.23, 0.96], // Kurva easing custom yang sangat mulus (mirip ease-in-out-sine)
    },
  },
  // Keadaan saat halaman lama keluar
  exit: {
    opacity: 0,
    y: -20, // Bergerak sedikit ke atas saat keluar
    scale: 0.98, // Sedikit mengecil saat keluar
    transition: {
      duration: 0.4, // Durasi animasi keluar sedikit lebih cepat
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence
      mode="wait"
      // initial={false} // Uncomment baris ini jika Anda tidak ingin ada animasi saat halaman pertama kali dibuka
      onExitComplete={() => window.scrollTo(0, 0)} // Scroll ke atas setelah transisi selesai
    >
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
