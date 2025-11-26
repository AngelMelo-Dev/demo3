import { consejos } from "@/data/consejos";
import type { Consejo } from "@/types/consejo";
import ArticleCard from "../components/ArticleCard";

const consejosData = [...(consejos as Consejo[])].sort(
  (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
);

export default function ConsejosPage() {
  return (
    <section className="mx-auto max-w-6xl space-y-8 px-6 py-16 sm:px-12">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
          Consejos
        </p>
        <h1 className="text-4xl font-semibold text-neutral-900">
          Tips y guías para el cuidado del auto
        </h1>
        <p className="text-neutral-600 sm:max-w-3xl">
          Descubre señales de alerta, buenas prácticas de mantenimiento y
          recomendaciones de nuestros técnicos para mantener tu vehículo en su
          mejor forma.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {consejosData.map((consejo) => (
          <ArticleCard key={consejo.slug} consejo={consejo} />
        ))}
      </div>
    </section>
  );
}

