"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [transition, setTransition] = useState(false);

  const handleExplore = () => {
    setTransition(true);
    setTimeout(() => {
      router.push("/explore");
    }, 900);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen relative overflow-hidden">
        <section className="min-h-screen flex items-center justify-center px-6 text-center">
          <Hero onExplore={handleExplore} />
        </section>

    <motion.section
      className="py-32 px-6 text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium leading-snug">
          La tecnología no es una herramienta.
          <br />
          Es infraestructura estratégica.
        </h2>

        <p className="mt-10 text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Diseñamos sistemas con visión estructural.
          Pensamos en arquitectura antes que en interfaz.
          Construimos activos digitales que soportan crecimiento,
          complejidad y escala.
        </p>
      </div>
    </motion.section>

    <motion.section
      className="bg-black text-white py-40 px-6 text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          No construimos proyectos.
          <br />
          Construimos estructuras.
        </h2>

        <p className="mt-12 text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Cada sistema que desarrollamos está pensado como una pieza
          dentro de un ecosistema mayor. La visión es de largo plazo.
          La ejecución es precisa.
        </p>
      </div>
    
    </motion.section>

    <section className="py-40 px-6 border-t border-neutral-200">
      <div className="max-w 5xl-mx auto-grid md:grid-cols-2 gap-20">
        <div>
          <h3 className="text-sm tracking-widest text-neutral-500 uppercase">
            Enfoque
          </h3>
          <p className="mt-6 text-2xl leading-relaxed">
            La tecnología debe diseñarse con lógica sistémica.
            No como producto aislado, sino como infraestructura evolutiva.
          </p>
        </div>
        <div>
          <h3 className="text-sm tracking-widest text-neutral-500 uppercase">
            Principio
          </h3>
            <p className="mt-6 text-2xl leading-relaxed">
              Pensar en decadas, no en ciclos.
              Construir estructuras, no soluciones temporales.
            </p>
        </div>
      </div>
    </section>

    <section className="py-48 px-6 text-center bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-4xl md:text-5xl font-medium leading-tight">
          &quot;La estructura precede a la escala&quot;
        </p>
        <div className="w-12 h-[2px] bg-black mx-auto mt-12"></div>
        <p className="mt-12 text-neutral-500 text-sm tracking-widest uppercase">
          LOAD Systems
        </p>
      </div>
    </section>


        <AnimatePresence>
          {transition && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 bg-white z-50"
            />
          )}
        </AnimatePresence>

      </main>
      <Footer />
    </>
  );
}