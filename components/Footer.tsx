"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 py-24 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
                <div>
                    {/**Identidad */}
                    <h4 className="text-sm tracking-widset uppercase text-neutral-500">
                        LOAD Systems
                    </h4>
                    <p className="mt-6 text-neutral-600 leading-relaxed">
                        Arquitectura tecnológica con enfoque estructural.
                        Diseñamos sistemas preparados para la permanencia.
                    </p>
                </div>

                    {/**Navegación */}
                <div>
                    <h4 className="text-sm tracking-widest uppercase text-neutral-500">
                        Navegación
                    </h4>
                    <ul className="mt-6 space-y-3 text-neutral-700">
                        <li>Inicio</li>
                        <li>Explorar</li>
                        <li>Contacto</li>
                        <li>Nosotros</li>
                    </ul>
                </div>

                {/**Contacto */}
                <div>
                    <h4 className="text-sm tracking-widest uppercase text-neutral-500">
                        Contacto
                    </h4>
                    <p className="mt-6 text-neutral-700">
                        contacto.loadsystemas@gmail.com
                    </p>
                </div>

                <div className="mt-20 pt-10 border-t border-neutral-200 text-center-text-neutral-400-text-sm">
                    © {new Date().getFullYear()} LOAD Systems. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}