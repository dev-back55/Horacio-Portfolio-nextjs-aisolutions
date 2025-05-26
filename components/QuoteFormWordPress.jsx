// components/QuoteFormWordPress.js
'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { wordPressSchema } from '@/lib/formSchemas';
import { sendQuote } from '@/actions/sendQuote';

export default function QuoteFormWordPress() {
  const [submitStatus, setSubmitStatus] = useState(null);
  const captchaRef = useRef(null);

  // Configurar el formulario con react-hook-form y Zod
  const form = useForm({
    resolver: zodResolver(wordPressSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      projectName: '',
      projectType: undefined,
      description: '',
      functionalities: [],
      design: undefined,
      budget: '',
      timeline: '',
      comments: '',
    },
  });

  const onSubmit = async (data) => {
    // Ejecutar la verificación del CAPTCHA
    if (!captchaRef.current) {
      setSubmitStatus({ success: false, error: 'Error con el CAPTCHA' });
      return;
    }

    try {
      const token = await captchaRef.current.execute({ async: true });
      if (!token) {
        setSubmitStatus({ success: false, error: 'Por favor, completa el CAPTCHA' });
        return;
      }

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'functionalities') {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      });
      formData.append('formType', 'wordpress');
      formData.append('h-captcha-response', token);

      const result = await sendQuote(formData);
      setSubmitStatus(result);

      if (result.success) {
        form.reset();
        if (captchaRef.current) {
          captchaRef.current.reset();
        }
      }
    } catch (error) {
      setSubmitStatus({ success: false, error: 'Error al verificar el CAPTCHA' });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Cotización para sitio WordPress o tienda online
        </h2>

        {/* Nombre */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre completo *</FormLabel>
              <FormControl>
                <Input placeholder="Ej. María Gómez" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico *</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Ej. maria@ejemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Teléfono */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono (opcional)</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Ej. +54 9 11 9876-5432" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Nombre del proyecto */}
        <FormField
          control={form.control}
          name="projectName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del proyecto (opcional)</FormLabel>
              <FormControl>
                <Input placeholder="Ej. Mi Tienda Online" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tipo de proyecto */}
        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de proyecto *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="simple-site">Sitio WordPress simple</SelectItem>
                  <SelectItem value="ecommerce">Tienda online con WooCommerce</SelectItem>
                  <SelectItem value="other">Otro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Descripción */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción del proyecto *</FormLabel>
              <FormControl>
                <Textarea placeholder="Contanos qué necesitas..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Funcionalidades */}
        <FormField
          control={form.control}
          name="functionalities"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Funcionalidades principales (opcional)</FormLabel>
              <div className="space-y-2">
                {[
                  'Secciones básicas (Inicio, Nosotros, etc.)',
                  'Formulario de contacto',
                  'Blog integrado',
                  'Galería de fotos o portfolio',
                  'Catálogo de productos',
                  'Pasarela de pago',
                  'Cálculo de costos de envío',
                  'Gestión de pedidos y stock',
                  'Integración con redes sociales',
                  'Botón de WhatsApp',
                  'Optimización SEO básica',
                ].map((func) => (
                  <div key={func} className="flex items-center">
                    <Checkbox
                      checked={field.value?.includes(func)}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...(field.value || []), func]
                          : field.value?.filter((f) => f !== func) || [];
                        field.onChange(newValue);
                      }}
                    />
                    <label className="ml-2 text-sm text-gray-600 dark:text-gray-400">{func}</label>
                  </div>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Diseño */}
        <FormField
          control={form.control}
          name="design"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Diseño *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="custom">Diseño personalizado desde cero</SelectItem>
                  <SelectItem value="template">Diseño basado en plantillas</SelectItem>
                  <SelectItem value="provided">Ya tengo un diseño</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Presupuesto */}
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Presupuesto estimado (opcional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="less-800k">Menos de $800.000 ARS</SelectItem>
                  <SelectItem value="800k-2m">$800.000 - $2.000.000 ARS</SelectItem>
                  <SelectItem value="2m-5m">$2.000.000 - $5.000.000 ARS</SelectItem>
                  <SelectItem value="more-5m">Más de $5.000.000 ARS</SelectItem>
                  <SelectItem value="undefined">No definido</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Plazo */}
        <FormField
          control={form.control}
          name="timeline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Plazo deseado (opcional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="less-1month">Menos de 1 mes</SelectItem>
                  <SelectItem value="1-2months">1-2 meses</SelectItem>
                  <SelectItem value="2-3months">2-3 meses</SelectItem>
                  <SelectItem value="no-deadline">Sin fecha límite</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Comentarios */}
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Otros detalles (opcional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ej. Quiero un sitio bilingüe o me gusta mercadolibre.com.ar"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* hCaptcha 
        <div>
          <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
            ref={captchaRef}
          />
        </div>*/}

        {/* Estado del envío */}
        {submitStatus && (
          <p className={`text-sm ${submitStatus.success ? 'text-green-600' : 'text-red-600'}`}>
            {submitStatus.message || submitStatus.error}
          </p>
        )}

        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
        </Button>
      </form>
    </Form>
  );
}