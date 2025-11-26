import { servicios } from "@/data/servicios";
import type { Servicio } from "@/types/servicio";
import Link from "next/link";
import ServiceCard from "./components/ServiceCard";
import ImageCarousel from "./components/ImageCarousel";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import FAQAccordion from "./components/FAQAccordion";

const whatsappLink =
  "https://wa.me/573054226304?text=Hola%2C%20quiero%20agendar%20una%20cita%20para%20mi%20auto.%20Vengo%20desde%20la%20p%C3%A1gina%20web.";

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
        <div className="space-y-2">
          <p className="text-sm font-semibold text-amber-600">Galería</p>
          <h2 className="text-3xl font-semibold text-neutral-900">
            Nuestro taller en acción
          </h2>
          <p className="text-neutral-600">
            Conoce nuestras instalaciones y el trabajo que realizamos día a día.
          </p>
        </div>
        <ImageCarousel />
      </section>

      <section
        id="testimonios"
        className="mx-auto max-w-6xl space-y-6 px-6 sm:px-12"
      >
        <div className="space-y-2">
          <p className="text-sm font-semibold text-amber-600">Testimonios</p>
          <h2 className="text-3xl font-semibold text-neutral-900">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-neutral-600">
            Miles de vehículos confían en nosotros para su mantenimiento y
            cuidado.
          </p>
        </div>
        <TestimonialsCarousel />
      </section>

      <section
        id="faq"
        className="mx-auto max-w-6xl space-y-6 rounded-3xl border border-neutral-200 bg-white px-6 py-10 shadow-sm sm:px-10"
      >
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl font-semibold text-neutral-900">
            Resolvemos tus dudas
          </h2>
          <p className="text-neutral-600">
            Encuentra respuestas a las preguntas más comunes sobre nuestros
            servicios.
          </p>
        </div>
        <FAQAccordion />
      </section>

      <section
        id="mapa"
        className="mx-auto max-w-6xl space-y-6 px-6 sm:px-12"
      >
        <div className="space-y-2">
          <p className="text-sm font-semibold text-amber-600">Ubicación</p>
          <h2 className="text-3xl font-semibold text-neutral-900">
            Visítanos en nuestro taller
          </h2>
          <p className="text-neutral-600">
            Estamos ubicados en el corazón de Medellín, con fácil acceso y
            estacionamiento.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
          <iframe
            title="Ubicación Clínica Automotriz"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9999999999995!2d-75.577!3d6.251999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCl%C3%ADnica%20Automotriz!5e0!3m2!1ses-419!2sco!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full sm:h-96"
          />
        </div>
      </section>
    </div>
  );
}
