// lib/formSchemas.js
import { z } from 'zod';

// Esquema base para campos comunes
const baseSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100, 'El nombre es demasiado largo'),
  email: z.string().email('Debe ser un correo electrónico válido'),
  phone: z.string().optional(),
  projectName: z.string().max(100, 'El nombre del proyecto es demasiado largo').optional(),
  description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres').max(1000, 'La descripción es demasiado larga'),
  design: z.enum(['custom', 'template', 'provided'], { required_error: 'Debes seleccionar una opción de diseño' }),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  comments: z.string().max(1000, 'Los comentarios son demasiado largos').optional(),
});

// Esquema para Next.js
export const nextJsSchema = baseSchema.extend({
  projectType: z.enum(['dynamic-site', 'web-app', 'custom-platform', 'other'], {
    required_error: 'Debes seleccionar un tipo de proyecto',
  }),
  functionalities: z.array(z.string()).optional(),
});

// Esquema para WordPress
export const wordPressSchema = baseSchema.extend({
  projectType: z.enum(['simple-site', 'ecommerce', 'other'], {
    required_error: 'Debes seleccionar un tipo de proyecto',
  }),
  functionalities: z.array(z.string()).optional(),
});