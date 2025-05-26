// app/api/sendQuote.js
'use server';

import { Resend } from 'resend';
import { nextJsSchema, wordPressSchema } from '@/lib/formSchemas';
import { z } from 'zod';
//import { getDb } from '@/lib/mongodb';
import dbConnect from "@/lib/dbConnect";
import Quotes from "@/models/quotes";
//import fetch from 'node-fetch';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendQuote(formData) {
  try {
    {/* // Verificar hCaptcha
    const captchaToken = formData.get('h-captcha-response')?.toString();
    if (!captchaToken) {
      return { success: false, error: 'Por favor, completa el CAPTCHA' };
    }

    const captchaResponse = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `response=${captchaToken}&secret=${process.env.HCAPTCHA_SECRET_KEY}`,
    });
    const captchaResult = await captchaResponse.json();

    if (!captchaResult.success) {
      return { success: false, error: 'Verificación de CAPTCHA fallida' };
    }*/}

    // Obtener el tipo de formulario
    const formType = formData.get('formType')?.toString();
    if (!formType || !['nextjs', 'wordpress'].includes(formType)) {
      return { success: false, error: 'Tipo de formulario inválido' };
    }

    // Convertir FormData a objeto
    const data = Object.fromEntries(formData);

    // Parsear y validar los datos según el tipo de formulario
    let validatedData;
    try {
      if (formType === 'nextjs') {
        validatedData = nextJsSchema.parse({
          ...data,
          functionalities: data.functionalities ? JSON.parse(data.functionalities) : [],
        });
      } else {
        validatedData = wordPressSchema.parse({
          ...data,
          functionalities: data.functionalities ? JSON.parse(data.functionalities) : [],
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { success: false, error: error.errors.map((e) => e.message).join(', ') };
      }
      return { success: false, error: 'Error al validar los datos' };
    }

    // Guardar en MongoDB
    try{
      await dbConnect()
      const quotes = await Quotes.create({
        formType,
      ...validatedData
      })
      revalidatePath("/presupuestos");
      return JSON.parse(JSON.stringify(quotes));
    } catch(error) {
      console.log(error);
    }
    
    // Preparar el contenido del correo para el administrador
    const adminEmailContent = `
      Nueva solicitud de cotización (${formType === 'nextjs' ? 'Next.js/MongoDB' : 'WordPress'})
      
      Nombre: ${validatedData.name}
      Email: ${validatedData.email}
      Teléfono: ${validatedData.phone || 'No proporcionado'}
      Proyecto: ${validatedData.projectName || 'No proporcionado'}
      Tipo de proyecto: ${validatedData.projectType}
      Descripción: ${validatedData.description}
      Diseño: ${validatedData.design}
      Funcionalidades: ${validatedData.functionalities?.join(', ') || 'Ninguna seleccionada'}
      Presupuesto: ${validatedData.budget || 'No definido'}
      Plazo: ${validatedData.timeline || 'No definido'}
      Comentarios: ${validatedData.comments || 'Ninguno'}
    `;

    // Enviar el correo al administrador
    const adminEmail = await resend.emails.send({
      from: 'Cotizaciones <no-reply@horacioabitu.com.ar>',
      to: 'ahabitu@gmail.com',
      subject: `Nueva cotización para ${formType === 'nextjs' ? 'Next.js/MongoDB' : 'WordPress'}`,
      text: adminEmailContent,
    });

    if (adminEmail.error) {
      return { success: false, error: 'Error al enviar el correo al administrador: ' + adminEmail.error.message };
    }

    // Enviar correo de confirmación al cliente
    const clientEmailContent = `
      Hola ${validatedData.name},
      
      ¡Gracias por tu solicitud de cotización para un proyecto con ${
        formType === 'nextjs' ? 'Next.js/MongoDB' : 'WordPress'
      }!
      
      Hemos recibido tus datos y te contactaremos pronto para discutir los detalles. Para referencia, aquí está un resumen de tu solicitud:
      
      - Proyecto: ${validatedData.projectName || 'No proporcionado'}
      - Tipo de proyecto: ${validatedData.projectType}
      - Descripción: ${validatedData.description}
      
      Si tenés alguna duda, podés escribirnos a contacto@desarrollo.com.
      
      Saludos,
      Equipo de Desarrollo
    `;

    const clientEmail = await resend.emails.send({
      from: 'Cotizaciones <no-reply@horacioabitu.com.ar>',
      to: validatedData.email,
      subject: 'Confirmación de tu solicitud de cotización',
      text: clientEmailContent,
    });

    if (clientEmail.error) {
      return { success: false, error: 'Error al enviar el correo de confirmación al cliente: ' + clientEmail.error.message };
    }

    return { success: true, message: 'Solicitud enviada con éxito' };
  } catch (error) {
    return { success: false, error: 'Error inesperado en el servidor: ' + error.message };
  }
}