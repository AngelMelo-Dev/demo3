import { servicios } from "@/data/servicios";
import type { Servicio } from "@/types/servicio";
import ServiceCard from "../components/ServiceCard";

const serviciosData = servicios as Servicio[];

export default function ServiciosPage() {
  return (
    <section className="mx-auto max-w-6xl space-y-8 px-6 py-16 sm:px-12">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
          Servicios
        </p>
        <h1 className="text-4xl font-semibold text-neutral-900">
          Elige el plan que mejor se adapte a tu auto
        </h1>
        <p className="text-neutral-600 sm:max-w-3xl">
          Cada servicio fue diseñado para resolver necesidades específicas:
          desde mantenimientos preventivos hasta diagnósticos avanzados. Haz clic
          en cualquiera de ellos para ver los detalles completos, beneficios y
          preguntas frecuentes.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {serviciosData.map((servicio) => (
          <ServiceCard key={servicio.slug} service={servicio} variant="full" />
        ))}
      </div>
    </section>
  );
}

