"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect (() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    
        return () => {
            document.body.style.overflow = "auto";
        };

    }, [open]);
    
    return (
            <header className="w-full px-6 py-4 border-b border-neutral-200">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <h1 className="text-lg font-semibold">
                        LOAD
                    </h1>
                        <nav className="hidden md:flex gap-8">
                        <Link href="/">Inicio</Link>
                        <Link href="/explore">Explorar</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/contacto">Contacto</Link>
                        </nav>
                        <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex flex-col gap-1"
                        >
                            <span className="w-5 h-[2px] bg-black"></span>
                            <span className="w-5 h-[2px] bg-black"></span>
                            <span className="w-5 h-[2px] bg-black"></span>
                        </button>
                </div>
                <AnimatePresence>
                    {open && (
                        <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden mt-4 px-6 pb-4 flex flex-col gap-4 text-sm"
                        >
                            <Link href="/" onClick={() => setOpen(false)}>Inicio</Link>
                            <Link href="/explore" onClick={() => setOpen(false)}>Explorar</Link>
                            <Link href="/nosotros" onClick={() => setOpen(false)}>Nosotros</Link>
                            <Link href="/contacto" onClick={() => setOpen(false)}>Contacto</Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
    );
}