// src/components/common/FadeInWhenVisible.jsx
"use client";

import { motion } from "framer-motion";

export default function FadeInWhenVisible({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  once = true,
  amount = 0.2,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once, amount: amount }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: duration,
        delay: delay,
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: yOffset },
      }}
    >
      {children}
    </motion.div>
  );
}
