"use server";

import { Resend } from "resend"
import handleError from "@/utils/helper"

// Inicializar Resend con la API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmailToPaciente(formState) {
  try {
    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      throw new Error("Todos los campos son obligatorios")
    }

    // Convertir saltos de línea a etiquetas <br> para HTML
    const formattedContent = formState.message.replace(/\n/g, "<br>")

    const { data, error } = await resend.emails.send({
      from: `Web Horacio - ${formState.name} <noreply@horacioabitu.com.ar>`,
      to: "ahabitu@gmail.com",
      subject: formState.subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="background-color: #4ade80; padding: 15px; border-radius: 5px 5px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 24px;">Hola, Horacio</h1>
            </div>
            <div>
            <h2>Soy ${formState.name}</h2>
            <p style="color: #000;">Mi correo es ${formState.email}</p>
            <p style="color: #000;">Te escribo por ${formState.subject}</p>
            </div>
          <div style="padding: 20px;">
            ${formattedContent}
          </div>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 0 0 5px 5px; font-size: 12px; color: #666;">
            <p>Este correo fue enviado desde tu sitio web.</p>
          </div>
        </div>
      `,
    })

    if (error) {
      throw new Error(`Error al enviar el correo: ${error.message}`)
    }

    return { success: true, message: "Correo enviado correctamente", data }
  } catch (error) {
    //handleError(error)
    return { success: false, message: error.message || "Error al enviar el correo" }
  }
}

