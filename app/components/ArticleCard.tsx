import Link from "next/link";
import type { Consejo } from "@/types/consejo";
import { format } from "date-fns";
import { es } from "date-fns/locale";

type Props = {
  consejo: Consejo;
};

export default function ArticleCard({ consejo }: Props) {
  const formattedDate = format(new Date(consejo.fecha), "d 'de' MMMM yyyy", {
    locale: es,
  });

  return (
    <article className="group flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white/80 p-6 transition hover:border-neutral-300 hover:shadow-lg">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
          {formattedDate}
        </p>
        <h3 className="text-2xl font-semibold text-neutral-900">
          {consejo.titulo}
        </h3>
        <p className="text-sm text-neutral-600">{consejo.resumen}</p>
      </div>
      <Link
        href={`/consejos/${consejo.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-600"
      >
        Leer artículo
        <span aria-hidden className="transition group-hover:translate-x-1">
          →
        </span>
      </Link>
    </article>
  );
}

