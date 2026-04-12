"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const telefono = "573126679364";

  const mensaje = "Hola, estoy interesado en sus servicios de desarrollo de software.";

  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
    >
      <span className="text-xl">💬</span>
    </motion.a>
  );
}