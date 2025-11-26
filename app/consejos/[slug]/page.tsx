import { consejos } from "@/data/consejos";
import type { Consejo } from "@/types/consejo";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: { slug: string };
};

const consejosData = consejos as Consejo[];

export function generateStaticParams() {
  return consejosData.map((consejo) => ({ slug: consejo.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const consejo = consejosData.find((item) => item.slug === params.slug);
  if (!consejo) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: consejo.titulo,
    description: consejo.resumen,
  };
}

export default function ConsejoDetallePage({ params }: PageProps) {
  const consejo = consejosData.find((item) => item.slug === params.slug);

  if (!consejo) {
    notFound();
  }

  const formattedDate = format(new Date(consejo.fecha), "d 'de' MMMM yyyy", {
    locale: es,
  });

  const whatsappMessage = encodeURIComponent(
    `Hola, acabo de leer "${consejo.titulo}" y quiero recibir asesoría personalizada.`
  );

  return (
    <article className="mx-auto max-w-4xl space-y-10 px-6 py-16">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
          Consejos
        </p>
        <h1 className="text-5xl font-semibold text-neutral-900">
          {consejo.titulo}
        </h1>
        <p className="text-sm text-neutral-500">{formattedDate}</p>
      </header>

      <section className="prose prose-lg max-w-none text-neutral-800">
        {consejo.contenido.split("\n").map((paragraph, index) => (
          <p key={`paragraph-${index}`}>{paragraph.trim()}</p>
        ))}
      </section>

      <div className="rounded-3xl bg-neutral-900 px-8 py-10 text-white">
        <h2 className="text-2xl font-semibold">
          ¿Quieres aplicar este consejo en tu auto?
        </h2>
        <p className="mt-2 text-neutral-200">
          Conversemos por WhatsApp y agenda una valoración sin costo para
          confirmar el estado real de tu vehículo.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`https://wa.me/573054226304?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-amber-100"
          >
            Escríbenos por WhatsApp
          </a>
          <Link
            href="/contacto"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
          >
            Agenda una visita
          </Link>
        </div>
      </div>
    </article>
  );
}

