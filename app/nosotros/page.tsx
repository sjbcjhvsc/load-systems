"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <main className="bg-white text-black">
            <Navbar/>

            <section className="min-h-[70-vh] flex items-center justify-center px-6 text-center pt-32">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
                        Estructura antes que expansión.
                    </h1>
                    <p className="mt-10 text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        LOAD Systems es una entidad enfocada en pensamiento estratégico aplicado a tecnología. 
                        Nuestra premisa es simple: la arquitectura determina el alcance. 
                    </p>
                </div>
            </section>

            <section className="py-40 px-6 border-t border-neutral-200">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20">
                    <div>
                        <h3 className="text-sm tracking-widest uppercase text-neutral-500">
                            Fundamento
                        </h3>
                        <p className="mt6 text-2xl leading-relaxed">
                            Diseñar sistemas con visión sistémica.
                            Pensar en interconexión, escalabilidad y permanencia.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm tracking-widest uppercase text-neutral-500">
                            Propósito
                        </h3>
                        <p className="mt6 text-2xl leading-relaxed">
                            Construir activos tecnológicos que soporten crecimiento 
                            organizacional sostenido y evolución estratégica
                        </p>
                    </div>

                </div>

            </section>

            <section className="py-48 px-6 text-center border-t border-neutral-200">
                <div className="max-w-4xl mx-auto">
                    <div>
                        <p className="text-4xl md:text-5xl font-medium leading-tight">
                            &quot;La estructura precede a la escala&quot;
                        </p>
                    </div>

                    <div className="w-12 h-[2px] bg-black mx-auto mt-12"></div>
                    <p className="mt-12 text-neutral-500 text-sm tracking-widest uppercase">
                        LOAD Systems
                    </p>
                </div>

            </section>
            <Footer/>
        </main>
    );
}