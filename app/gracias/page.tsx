"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Gracias() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-black">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Gracias por contactarnos
        </h1>
        <p className="text-neutral-600 text-base max-w-md">
          Te responderemos lo antes posible
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}