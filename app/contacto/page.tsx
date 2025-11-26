
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const whatsappLink =
  "https://wa.me/573054226304?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20sus%20servicios.";

const contactSchema = z.object({
  nombre: z
    .string()
    .min(3, "Ingresa al menos 3 caracteres")
    .max(80, "El nombre es demasiado largo"),
  correo: z
    .string()
    .email("Ingresa un correo electrónico válido")
    .max(120, "El correo es demasiado largo"),
  telefono: z
    .string()
    .max(25, "El teléfono es demasiado largo")
    .optional(),
  tipoServicio: z.string().optional(),
  mensaje: z
    .string()
    .min(10, "Cuéntanos un poco más sobre lo que necesitas")
    .max(1000, "El mensaje es demasiado largo"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const serviceOptions = [
  { value: "", label: "Selecciona una opción" },
  { value: "mantenimiento-general", label: "Mantenimiento general" },
  { value: "frenos", label: "Servicio de frenos" },
  { value: "cambio-de-aceite", label: "Cambio de aceite" },
  { value: "diagnostico-electronico", label: "Diagnóstico electrónico" },
  { value: "suspension-direccion", label: "Suspensión y dirección" },
  { value: "servicio-a-domicilio", label: "Servicio a domicilio" },
  { value: "otro", label: "Otro" },
];

export default function ContactoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (values: ContactFormValues) => {
    setServerMessage(null);
    setServerError(null);

    try {
      // Transformar strings vacíos a undefined
      const payload = {
        ...values,
        telefono: values.telefono === "" ? undefined : values.telefono,
        tipoServicio: values.tipoServicio === "" ? undefined : values.tipoServicio,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setServerError(
          data?.message ||
            "No pudimos enviar tu mensaje. Inténtalo nuevamente en unos minutos."
        );
        return;
      }

      setServerMessage(
        data?.message ||
          "Hemos recibido tu mensaje. Te contactaremos muy pronto."
      );
      reset();
    } catch (error) {
      console.error("Error enviando formulario de contacto", error);
      setServerError(
        "Ocurrió un error inesperado al enviar tu mensaje. Inténtalo más tarde."
      );
    }
  };

  return (
    <section className="mx-auto max-w-6xl space-y-10 px-6 py-16 sm:px-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-3xl bg-white px-6 py-8 shadow-lg sm:px-10 sm:py-10">
          <header className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
              Contacto
            </p>
            <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
              Agenda tu cita o pide una valoración
            </h1>
            <p className="text-sm text-neutral-600 sm:text-base">
              Completa el formulario y uno de nuestros asesores te contactará
              para confirmar disponibilidad, tiempos y costos estimados.
            </p>
          </header>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="nombre"
                  className="text-sm font-medium text-neutral-800"
                >
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-2xl border border-neutral-300 px-3 py-2 text-sm outline-none ring-0 transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  {...register("nombre")}
                />
                {errors.nombre && (
                  <p className="text-xs text-red-600">
                    {errors.nombre.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="correo"
                  className="text-sm font-medium text-neutral-800"
                >
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-2xl border border-neutral-300 px-3 py-2 text-sm outline-none ring-0 transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  {...register("correo")}
                />
                {errors.correo && (
                  <p className="text-xs text-red-600">
                    {errors.correo.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="telefono"
                  className="text-sm font-medium text-neutral-800"
                >
                  Teléfono (opcional)
                </label>
                <input
                  id="telefono"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-2xl border border-neutral-300 px-3 py-2 text-sm outline-none ring-0 transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  {...register("telefono")}
                />
                {errors.telefono && (
                  <p className="text-xs text-red-600">
                    {errors.telefono.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="tipoServicio"
                  className="text-sm font-medium text-neutral-800"
                >
                  Tipo de servicio
                </label>
                <select
                  id="tipoServicio"
                  className="w-full rounded-2xl border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-0 transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  {...register("tipoServicio")}
                >
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.tipoServicio && (
                  <p className="text-xs text-red-600">
                    {errors.tipoServicio.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="mensaje"
                className="text-sm font-medium text-neutral-800"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={5}
                className="w-full rounded-2xl border border-neutral-300 px-3 py-2 text-sm outline-none ring-0 transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                placeholder="Cuéntanos qué le ocurre a tu vehículo o qué servicio necesitas..."
                {...register("mensaje")}
              />
              {errors.mensaje && (
                <p className="text-xs text-red-600">
                  {errors.mensaje.message}
                </p>
              )}
            </div>

            {serverMessage && (
              <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                {serverMessage}
              </p>
            )}

            {serverError && (
              <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
                {serverError}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </form>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-neutral-200 bg-white px-6 py-6 shadow-sm sm:px-8 sm:py-8">
            <h2 className="text-lg font-semibold text-neutral-900">
              Información de contacto
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Si prefieres, puedes escribirnos directamente por WhatsApp o
              llamarnos en horario laboral.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>
                <span className="font-medium">Teléfono: </span>
                (604) 123 45 67
              </li>
              <li>
                <span className="font-medium">WhatsApp: </span>
                305 422 6304
              </li>
              <li>
                <span className="font-medium">Correo: </span>
                contacto@clinicaauto.com
              </li>
              <li>
                <span className="font-medium">Dirección: </span>
                Calle 123 #45-67, Medellín
              </li>
            </ul>
          </div>

          <div className="space-y-3 rounded-3xl border border-neutral-200 bg-white px-3 py-3 shadow-sm sm:px-4 sm:py-4">
            <h2 className="px-2 text-sm font-semibold text-neutral-900 sm:text-base">
              Cómo llegar
            </h2>
            <div className="overflow-hidden rounded-2xl">
              <iframe
                title="Ubicación Clínica Automotriz"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9999999999995!2d-75.577!3d6.251999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCl%C3%ADnica%20Automotriz!5e0!3m2!1ses-419!2sco!4v1700000000000"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

