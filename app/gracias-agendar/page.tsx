"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GraciasAgendar() {
    return (      
<main className="min-h-screen flex flex-col bg-white text-black">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Agenda tu reunión
        </h1>
        <iframe
             src="https://calendly.com/nelsonpc1549/30min" 
             width="100%"
             height="600"
             />
      </section>

      {/* Footer */}
      <Footer />
    </main>

    );
}
