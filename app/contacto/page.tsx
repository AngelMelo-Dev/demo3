export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-4 px-6 py-16">
      <p className="text-sm font-semibold text-amber-600">Contacto</p>
      <h1 className="text-4xl font-semibold text-neutral-900">
        Agenda tu cita
      </h1>
      <p className="text-neutral-600">
        Aquí vivirá el formulario y los datos detallados del equipo comercial.
      </p>
      <div
        className="min-h-[300px] rounded-3xl border border-dashed border-neutral-300 bg-white/60"
        aria-label="Formulario de contacto pendiente"
      />
    </section>
  );
}

