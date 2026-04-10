"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        empresa: "",
        tipoProyecto: "",
        presupuesto: "",
        mensaje: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    
    const router = useRouter();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | 
        HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensaje = `
    🚀 Nuevo lead - LOAD

    👤 Nombre: ${form.nombre}
    📧 Email: ${form.email}
    🏢 Empresa: ${form.empresa || "No especificada"}

    💡 Proyecto: ${form.tipoProyecto}
    💰 Presupuesto: ${form.presupuesto}

    📝 Descripción:
    ${form.mensaje}
    `;
    
        const telefono = "573126679364"; // ⚠️ tu número real (sin +)

        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    };

    return (
        <main className="min-h-screen bg-white text-black flex flex-col">

            <Navbar/>

            <section className="flex-1 flex items-center justify-center px-6 py-20">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-2xl mx-auto"
            >

                <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                    Iniciar conversación
                </h1>

                <p className="text-neutral-600 text-sm md:text-base max-w-md mx-auto">
                    Cuéntanos el contexto. Pensaremos en estructura antes que en solución.
                </p>
                </div>
                <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                    <div className="grid md:grid-cols-2 gap-4">
                        <input 
                        type="text"
                        name="nombre"
                        placeholder="¿Cómo te llamas?"
                        required
                        onChange={handleChange} 
                        className="input" 
                        />

                        <input 
                        type="email" 
                        name="email"
                        placeholder="Correo electrónico" 
                        required
                        onChange={handleChange}
                        className="input" 
                        />

                        <input 
                        type="text" 
                        name="empresa" 
                        placeholder="Empresa (opcional)"
                        onChange={handleChange}
                        className="input" 
                        />
                    </div>

                <div className="space-y-4">
                    <p className="text-xs uppercase tracking-wider text-neutral-500">
                        Detalles del proyecto
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                    <select name="tipoProyecto" onChange={handleChange} required defaultValue="">
                        <option value="">Selecciona una opción</option>
                        <option value="Landing">Landing page</option>
                        <option value="Corporativa">Web corporativa</option>
                        <option value="Sistema">Sistema empresarial</option>
                        <option value="Ecommerce">E-commerce</option>
                        <option value="App">App móvil</option>
                        <option value="SaaS">SaaS</option>
                        <option value="IA">Automatización</option>
                    </select>

                    <select name="presupuesto" onChange={handleChange} required>
                        <option value="">Rango estimado</option>
                        <option value="500">Menos de $500.000</option>
                        <option value="500-1000">$500.000 - $1.000.000</option>
                        <option value="1000-5000">$1.000.000 - $5.000.000</option>
                        <option value="5000-10000">$5.000.000 - $10.000.000</option>
                        <option value="10000+">Más de $10.000.000</option>
                    </select>
                </div>
                </div>

                <div className="space-y-4">
                    <p className="text-xs uppercase tracking-wider text-neutral-500">
                        Contexto
                    </p>
                    <textarea 
                    name="mensaje" 
                    placeholder="¿Qué problema quieres resolver? (mientras más claro, mejor te ayudamos)"
                    required
                    rows={4}
                    onChange={handleChange}
                    className="input resize-none"
                    />
                </div>

                <div className="space-y-3">
                    <button 
                    type="submit"
                    disabled={loading}
                    className="w-full border border-black py-2.5 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-black hover:text-white hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                    >
                        {loading ? "Enviando..." : "Iniciar conversación"}
                    </button>
                    {error && (
                        <motion.p 

                        className="text-red-500 text-sm mt-2">{error}
                        </motion.p>
                    )}
                <p className="text-neutral-500 text-xs text-center">
                    Normalmente respondemos en menos de 24 horas
                </p>
                </div>
                </form>
            </motion.div>
        </section>
            <Footer />
        </main>
    );
}