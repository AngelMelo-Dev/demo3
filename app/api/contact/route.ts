import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

export async function POST(request: Request) {
  try {
    if (!CONTACT_EMAIL || !SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error("[contact] Faltan variables de entorno SMTP/CONTACT_EMAIL");
      return NextResponse.json(
        {
          ok: false,
          message:
            "La configuración de correo no está completa. Inténtalo más tarde.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const { nombre, correo, telefono, tipoServicio, mensaje } = body ?? {};

    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        {
          ok: false,
          message: "Datos incompletos en la solicitud.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject = `Nuevo mensaje de contacto - ${nombre}`;

    const text = [
      `Nombre: ${nombre}`,
      `Correo: ${correo}`,
      `Teléfono: ${telefono || "No proporcionado"}`,
      `Tipo de servicio: ${tipoServicio || "No especificado"}`,
      "",
      "Mensaje:",
      mensaje,
    ].join("\n");

    await transporter.sendMail({
      from: `"Formulario Web" <${SMTP_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: correo,
      subject,
      text,
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Tu mensaje fue enviado correctamente. Te contactaremos pronto.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[contact] Error al enviar correo", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Ocurrió un error al enviar tu mensaje. Por favor, inténtalo de nuevo.",
      },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json(
    {
      ok: true,
      message:
        "Utiliza POST para enviar datos al formulario de contacto.",
    },
    { status: 200 }
  );
}

