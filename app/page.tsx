import { servicios } from "@/data/servicios";
import type { Servicio } from "@/types/servicio";
import Link from "next/link";
import ServiceCard from "./components/ServiceCard";

const whatsappLink =
  "https://wa.me/573054226304?text=Hola%2C%20quiero%20agendar%20una%20cita%20para%20mi%20auto.%20Vengo%20desde%20la%20p%C3%A1gina%20web.";

const placeholderBlocks = Array.from({ length: 4 });
const serviciosData = servicios as Servicio[];

export default function Home() {
  return (
    <div className="space-y-16 pb-16 pt-10">
      <section
        id="hero"
        className="mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl bg-white px-6 py-16 shadow-lg shadow-neutral-200 sm:px-12"
      >
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
            Detailing premium
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
            Cuidamos tu auto como si fuera nuestro.
          </h1>
          <p className="text-lg text-neutral-600 sm:max-w-3xl">
            Agenda una valoración personalizada y conoce los planes de estética,
            protección y mantenimiento ideales para tu vehículo.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contacto"
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Agenda tu cita
          </Link>
          <a
            href={whatsappLink}
            className="rounded-full border border-neutral-900 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </section>

      <section
        id="servicios"
        className="mx-auto max-w-6xl space-y-6 px-6 sm:px-12"
      >
        <div className="space-y-2">
          <p className="text-sm font-semibold text-amber-600">Servicios</p>
          <h2 className="text-3xl font-semibold text-neutral-900">
            Personaliza el plan perfecto para tu vehículo
          </h2>
          <p className="text-neutral-600">
            Selecciona uno de los servicios especializados o explora el detalle
            completo en la página de cada uno.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {serviciosData.map((servicio) => (
            <ServiceCard key={servicio.slug} service={servicio} />
          ))}
        </div>
      </section>

      <section
        id="carrusel"
        className="mx-auto max-w-6xl space-y-4 px-6 sm:px-12"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Carrusel de proyectos
          </h2>
        </div>
        <div
          className="h-64 rounded-3xl border border-dashed border-neutral-300 bg-white/60"
          aria-label="Carrusel de proyectos en construcción"
        />
      </section>

      <section
        id="testimonios"
        className="mx-auto max-w-6xl space-y-4 px-6 sm:px-12"
      >
        <h2 className="text-2xl font-semibold text-neutral-900">Testimonios</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {placeholderBlocks.slice(0, 2).map((_, index) => (
            <div
              key={`testimonial-${index}`}
              className="h-40 rounded-3xl border border-dashed border-neutral-300 bg-white/60"
              aria-label={`Espacio reservado para testimonio ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl space-y-4 px-6 sm:px-12">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Preguntas frecuentes
        </h2>
        <div className="space-y-3">
          {placeholderBlocks.map((_, index) => (
            <div
              key={`faq-${index}`}
              className="h-16 rounded-2xl border border-dashed border-neutral-300 bg-white/60"
              aria-label={`Pregunta frecuente ${index + 1} pendiente`}
            />
          ))}
        </div>
      </section>

      <section
        id="mapa"
        className="mx-auto max-w-6xl space-y-4 px-6 sm:px-12"
      >
        <h2 className="text-2xl font-semibold text-neutral-900">Mapa</h2>
        <div
          className="h-80 rounded-3xl border border-dashed border-neutral-300 bg-white/60"
          aria-label="Mapa pendiente"
        />
      </section>
    </div>
  );
}
