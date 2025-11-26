import Link from "next/link";
import type { Servicio } from "@/types/servicio";

type ServiceCardProps = {
  service: Servicio;
  variant?: "compact" | "full";
};

const variantClasses: Record<NonNullable<ServiceCardProps["variant"]>, string> =
  {
    compact:
      "p-5 sm:p-6 bg-white/80 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg",
    full: "p-6 sm:p-8 bg-white border border-neutral-100 shadow-xl",
  };

export default function ServiceCard({
  service,
  variant = "compact",
}: ServiceCardProps) {
  return (
    <article
      className={`group flex h-full flex-col justify-between rounded-3xl transition ${variantClasses[variant]}`}
    >
      <div className="space-y-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-lg shadow-neutral-900/20">
          <ServiceIcon icon={service.icono} />
        </span>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
            {service.nombre}
          </h3>
          <p className="text-sm text-neutral-600">{service.descripcionCorta}</p>
        </div>
      </div>
      <Link
        href={`/servicios/${service.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-600 transition group-hover:text-amber-500"
      >
        Ver detalles
        <span aria-hidden className="transition group-hover:translate-x-1">
          →
        </span>
      </Link>
    </article>
  );
}

function ServiceIcon({ icon }: { icon: Servicio["icono"] }) {
  return (
    <svg
      viewBox={icon.viewBox}
      aria-hidden
      className="h-6 w-6 text-white"
      fill="currentColor"
    >
      {icon.paths.map((d, index) => (
        <path key={`path-${index}`} d={d} />
      ))}
    </svg>
  );
}

