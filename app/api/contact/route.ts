import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { containsCSSVariable } from "framer-motion";
import { sendClientConfirmation, notifyOwner } from "@/lib/email";

const contactShema = z.object({
    nombre: z.string().min(2, "Nombre muy corto"),
    email: z.string().email("Email inválido"),
    empresa: z.string().optional(),
    mensaje: z.string().min(10, "Explica mejor tu proyecto"),
    tipoProyecto: z.string().min(1, "Selecciona tipo de proyecto"),
    presupuesto: z.string().min(1, "Selecciona presupuesto"),
    plazo: z.string().min(1),
    tipoCliente: z.string().min(1),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const parsed = contactShema.safeParse(body);
        
        if (!parsed.success) {
            return NextResponse.json(
                { error: "Campos obligatorios incompletos. " },
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
            tipoCliente,
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
                tipoCliente,
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
            tipoCliente 
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
}