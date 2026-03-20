import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendClientConfirmation(email: string, nombre: string,) {
    try {
    await resend.emails.send({
        from: "LOAD <onboarding@resend.dev>",
        to: email,
        subject: "Recibimos tu solicitud - LOAD",
        html: `
        <h2>Hola ${nombre}, </h2>
        <p>Recibimos tu solicitud para desarrollo de Software.</p>
        <p>En menos de 24 horas nos pondremos en contacto contigo.</p>
        </br>
        <strong>Equipo LOAD</strong>
        `,
    });
} catch (error) {
    console.error("Error enviando confirmación:", error);
}
}

export async function notifyOwner(data: {
    nombre: string;
    email: string;
    empresa?: string;
    mensaje: string;
    tipoProyecto: string;
    presupuesto: string;
    plazo: string;
}) {
    try {
    await resend.emails.send({
        from: "LOAD <onboarding@resend.dev>",
        to: "nelsonpc1549@gmail.com",
        subject: "Nuevo lead recibido",
        html: `
            <h2>Nuevo contacto</h2>
            <p><strong>Nombre:</strong>${data.nombre}</p>
            <p><strong>Email:</strong>${data.email}</p>
            <p><strong>Empresa:</strong>${data.empresa ?? "No especificada"}</p>
            <p><strong>Tipo de proyecto:</strong>${data.tipoProyecto}</p>
            <p><strong>Presupuesto:</strong>${data.presupuesto}</p>
            <p><strong>Plazo:</strong>${data.plazo}</p>
            <p><strong>Mensaje:</strong></p>
            <p><strong>${data.mensaje}</strong></p>
        `
    });
} catch (error) {
    console.error("Error notificando owner:", error);
}
}