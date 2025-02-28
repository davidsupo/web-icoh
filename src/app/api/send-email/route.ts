import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const {
      name,
      email,
      phone,
      country,
      socioEconomicLevel,
      isICOHAssociate,
      ICOHCode,
      academicStatus,
      academicLevel,
    } = data;

    // Configurar el transporte de Nodemailer usando variables de entorno
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });


    // Configurar el contenido del correo
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "Nuevo Registro en el Congreso ICOH 2025",
      html: `
        <h1>Información del Registro</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>País:</strong> ${country}</p>
        <p><strong>Nivel Socioeconómico:</strong> ${socioEconomicLevel}</p>
        <p><strong>¿Es socio de ICOH?:</strong> ${
          isICOHAssociate ? "Sí" : "No"
        }</p>
        ${
          isICOHAssociate
            ? `<p><strong>Código ICOH:</strong> ${ICOHCode}</p>`
            : ""
        }
        <p><strong>Estado Académico:</strong> ${academicStatus}</p>
        ${
          academicStatus === "PostGrado"
            ? `<p><strong>Nivel Académico:</strong> ${academicLevel}</p>`
            : ""
        }
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Correo enviado exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { message: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
