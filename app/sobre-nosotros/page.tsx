import Image from "next/image";
import Link from "next/link";

const timeline = [
  {
    year: "2015",
    title: "Nace Clínica Automotriz",
    description:
      "Abrimos nuestras puertas como un taller boutique enfocado en detallado y pulido profesional.",
  },
  {
    year: "2018",
    title: "Laboratorio electrónico",
    description:
      "Integramos diagnóstico computarizado y herramientas OEM para atender sistemas modernos.",
  },
  {
    year: "2021",
    title: "Servicio a domicilio",
    description:
      "Creamos un equipo móvil para flotillas y clientes corporativos en el Valle de Aburrá.",
  },
  {
    year: "2024",
    title: "Centro de experiencia",
    description:
      "Remodelamos nuestras instalaciones con cabinas de pintura, sala de espera y show room.",
  },
];

const teamPhotos = [
  {
    name: "Luis Álvarez",
    role: "Director operativo",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Mateo Ramírez",
    role: "Líder técnico",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Valentín Gómez",
    role: "Experiencia al cliente",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80",
  },
];

const whatsappCTA =
  "https://wa.me/573054226304?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20sus%20servicios%20para%20mi%20veh%C3%ADculo.";

export default function SobreNosotrosPage() {
  return (
    <div className="space-y-16 py-16">
      <section className="mx-auto max-w-5xl rounded-3xl bg-white px-6 py-12 shadow-lg sm:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
          Nuestra historia
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-neutral-900 sm:text-5xl">
          10 años transformando vehículos en Medellín
        </h1>
        <p className="mt-6 text-lg text-neutral-600">
          Somos un equipo de técnicos y asesores que combina procesos artesanales
          con tecnología de diagnóstico. Creemos que cada auto cuenta una
          historia y merece un plan de cuidado diseñado a la medida. Por eso
          documentamos cada intervención, compartimos evidencia en tiempo real y
          acompañamos al cliente en la toma de decisiones.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 sm:grid-cols-2 sm:px-0">
        <article className="rounded-3xl border border-neutral-200 bg-white p-8">
          <h2 className="text-2xl font-semibold text-neutral-900">Misión</h2>
          <p className="mt-4 text-neutral-600">
            Proteger el valor de cada vehículo a través de diagnósticos precisos
            y servicios transparentes que generan confianza en nuestros clientes.
          </p>
        </article>
        <article className="rounded-3xl border border-neutral-200 bg-white p-8">
          <h2 className="text-2xl font-semibold text-neutral-900">Visión</h2>
          <p className="mt-4 text-neutral-600">
            Convertirnos en el centro automotriz más confiable del país,
            integrando experiencia digital, movilidad eléctrica y servicios a
            domicilio sostenibles.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-6 sm:px-0">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
              Nuestro equipo
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-neutral-900">
              Personas que hacen magia en el taller
            </h2>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {teamPhotos.map((member) => (
            <article
              key={member.name}
              className="rounded-3xl border border-neutral-200 bg-white"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={600}
                height={640}
                className="h-64 w-full rounded-3xl object-cover"
              />
              <div className="space-y-1 px-5 py-4">
                <p className="text-lg font-semibold text-neutral-900">
                  {member.name}
                </p>
                <p className="text-sm text-neutral-500">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-8 px-6 sm:px-0">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
          Línea de tiempo
        </p>
        <div className="space-y-6 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10">
          {timeline.map((item, index) => (
            <div
              key={`${item.year}-${item.title}`}
              className="flex flex-col gap-4 border-l-2 border-neutral-200 pl-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                {item.year}
              </span>
              <h3 className="text-2xl font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="text-neutral-600">{item.description}</p>
              {index < timeline.length - 1 && (
                <span className="h-6 w-px bg-neutral-200" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-700 px-8 py-12 text-white">
        <h2 className="text-3xl font-semibold">¿Quieres una página web así?</h2>
        <p className="mt-3 text-neutral-100">
          Contáctame a mi WhatsApp y te ayudo a crear una página web profesional
          para tu negocio.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={whatsappCTA}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-amber-100"
          >
            Escríbeme por WhatsApp
          </a>
          <Link
            href="/contacto"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
          >
            Ver opciones de contacto
          </Link>
        </div>
      </section>
    </div>
  );
}

