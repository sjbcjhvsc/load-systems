import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { containsCSSVariable } from "framer-motion";
import { sendClientConfirmation, notifyOwner } from "@/lib/email";
import { details } from "framer-motion/client";

const contactShema = z.object({
    nombre: z.string().min(2, "Nombre muy corto"),
    email: z.string().email("Email inválido"),
    empresa: z.string().optional(),
    mensaje: z.string().min(10, "Explica mejor tu proyecto"),
    tipoProyecto: z.string().min(1, "Selecciona tipo de proyecto"),
    presupuesto: z.string().min(1, "Selecciona presupuesto"),
    plazo: z.string().optional(),
});

export async function POST(request: Request) { 
    try {
        const body = await request.json();

        const parsed = contactShema.safeParse(body);
        
        if (!parsed.success) {
            console.log(parsed.error.format());
            return NextResponse.json(
                { error: "Campos obligatorios incompletos. ", details: parsed.error.format() },
                { status: 400 }
            );
        }

        const { 
            nombre, 
            email, 
            empresa, 
            mensaje,
            tipoProyecto,
            presupuesto,
            plazo,
         } = parsed.data;

         
        const agendar = 
        ["Sistema", "SaaS", "IA"].includes(tipoProyecto) && 
        ["1000-5000", "5000-10000", "10000+"].includes(presupuesto) &&
        mensaje.length > 20;

        await prisma.contactMessage.create({
            data: {
                nombre,
                email,
                empresa,
                mensaje,
                tipoProyecto,
                presupuesto,
                plazo,
            },
        });

        await sendClientConfirmation(email, nombre);
        await notifyOwner({ 
            nombre, 
            email, 
            empresa, 
            mensaje, 
            tipoProyecto, 
            presupuesto, 
            plazo, 
        });
       
        return NextResponse.json({ 
            success: true,
            agendar, 
        });
    
    
    } catch (error) {
        console.error("Error en API:", error);
        
        return NextResponse.json(
            { error: String(error) },
            { status: 500 }
        );
    }
}  //Mensaje de prueba