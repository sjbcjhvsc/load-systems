"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ExplorePage() {
    return (
        <main className="bg-white text-black">
            <Navbar/>
            <motion.section
            className="py-32 px-6 text-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            >   
            <section className="min-h-[70vh] flex items-center justify-center px-6 text-center pt-32">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
                        Exploración estratégica
                    </h1>
                    <p className="mt-10 text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Analizamos, diseñamos y estructuramos sistemas con visión de largo plazo.
                        No respondemos a tendencias. Construimos fundamentos.
                    </p>
                </div>
            </section>
        </motion.section>
            <motion.section 
            className="py-40 px-6 border-t border-neutral-200"
            initial={{ opacity:0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20">
                    <div>
                        <h3 className="text-sm tracking-widest uppercase text-neutral-500">
                            Investigación
                        </h3>
                        <p className="mt6 text-2xl leading-relaxed">
                            Estudiamos arquitectura digital, inteligencia artificial y modelos tecnológicos escalables.
                        </p>
                    </div>

                                        <div>
                        <h3 className="text-sm tracking-widest uppercase text-neutral-500">
                            Implementación
                        </h3>
                        <p className="mt6 text-2xl leading-relaxed">
                            Convertimos pensamiento estructural en sistemas funcionales, medibles y preparados para evolucionar.
                        </p>
                    </div>

                </div>

            </motion.section>
        <Footer/>
        </main>
    );
}