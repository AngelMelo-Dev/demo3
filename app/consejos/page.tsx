export default function ConsejosPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-4 px-6 py-16">
      <p className="text-sm font-semibold text-amber-600">Consejos</p>
      <h1 className="text-4xl font-semibold text-neutral-900">
        Tips y guías para el cuidado del auto
      </h1>
      <p className="text-neutral-600">
        Este espacio está reservado para artículos, videos y recursos educativos.
      </p>
      <div
        className="min-h-[300px] rounded-3xl border border-dashed border-neutral-300 bg-white/60"
        aria-label="Listado de consejos pendiente"
      />
    </section>
  );
}

