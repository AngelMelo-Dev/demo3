import { servicios } from "@/data/servicios";
import type { Servicio } from "@/types/servicio";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

type Faq = {
  question: string;
  answer: string;
};

const serviciosData = servicios as Servicio[];

export function generateStaticParams() {
  return serviciosData.map((servicio) => ({
    slug: servicio.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const servicio = serviciosData.find((item) => item.slug === resolvedParams.slug);
  if (!servicio) {
    return {
      title: "Servicio no encontrado",
    };
  }

  return {
    title: servicio.nombre,
    description: servicio.descripcionCorta,
  };
}

export default async function ServicioDetallePage({ params }: PageProps) {
  const resolvedParams = await params;
  const servicio = serviciosData.find((item) => item.slug === resolvedParams.slug);

  if (!servicio) {
    notFound();
  }

  const faqs = buildFaqs(servicio);
  const whatsappLink = buildWhatsAppLink(servicio.nombre);

  return (
    <div className="space-y-12 py-16">
      <section className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-700 px-6 py-14 text-white sm:px-12">
        <div className="space-y-6">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white/15 text-white">
            <ServiceIcon icon={servicio.icono} />
          </span>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-200">
              Servicio
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              {servicio.nombre}
            </h1>
            <p className="text-lg text-white/80">
              {servicio.descripcionCorta}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-amber-100"
            >
              Solicitar por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-10 px-6 sm:px-0">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="space-y-4 rounded-3xl border border-neutral-200 bg-white px-6 py-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-neutral-900">
              ¿Qué incluye?
            </h2>
            <p className="text-neutral-600">{servicio.descripcionLarga}</p>
          </article>

          <article className="space-y-4 rounded-3xl border border-neutral-200 bg-white px-6 py-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Beneficios clave
            </h2>
            <ul className="space-y-3 text-sm text-neutral-700">
              {servicio.beneficios.map((beneficio, index) => (
                <li
                  key={`beneficio-${index}`}
                  className="flex items-start gap-3 rounded-2xl bg-neutral-50 px-3 py-2"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-600" />
                  <span>{beneficio}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 rounded-3xl border border-neutral-200 bg-white px-6 py-10 shadow-sm sm:px-10">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl font-semibold text-neutral-900">
            Todo lo que necesitas saber sobre {servicio.nombre}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={`faq-${index}`}
              className="rounded-2xl border border-neutral-100 bg-neutral-50 px-5 py-4"
            >
              <summary className="cursor-pointer text-base font-semibold text-neutral-900">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm text-neutral-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

function ServiceIcon({ icon }: { icon: Servicio["icono"] }) {
  return (
    <svg
      viewBox={icon.viewBox}
      aria-hidden
      className="h-7 w-7 text-white"
      fill="currentColor"
    >
      {icon.paths.map((d, index) => (
        <path key={`path-${index}`} d={d} />
      ))}
    </svg>
  );
}

function buildWhatsAppLink(serviceName: string) {
  const message = `Hola, quiero información sobre el servicio de ${serviceName}.`;
  return `https://wa.me/573054226304?text=${encodeURIComponent(message)}`;
}

function buildFaqs(servicio: Servicio): Faq[] {
  const specificFaqs: Record<Servicio["slug"], Faq[]> = {
    "mantenimiento-general": [
      {
        question: "¿Cada cuánto debo agendar el mantenimiento general?",
        answer:
          "Recomendamos programarlo cada 10.000 km o seis meses. Si tu auto opera en ciudad con tráfico intenso, adelántalo a los 8.000 km para mantener los fluidos en óptimo estado.",
      },
      {
        question: "¿Utilizan repuestos originales?",
        answer:
          "Sí, trabajamos con proveedores certificados por las casas matrices. Si prefieres una marca específica, la conseguimos antes de la cita.",
      },
      {
        question: "¿Puedo seguir la intervención en vivo?",
        answer:
          "Contamos con zona de clientes y reportes digitales en tiempo real para que revises fotos y avances del servicio.",
      },
    ],
    frenos: [
      {
        question: "¿Cuánto dura el servicio de frenos?",
        answer:
          "Entre 3 y 4 horas incluyendo pruebas dinámicas. Dependiendo del modelo, podríamos extendernos si detectamos piezas adicionales por reemplazar.",
      },
      {
        question: "¿Puedo mezclar distintas marcas de pastillas?",
        answer:
          "No lo recomendamos. Seleccionamos kits completos para mantener la misma fricción en ambos ejes y evitar vibraciones o ruidos.",
      },
      {
        question: "¿Incluyen garantía?",
        answer:
          "Sí, 6 meses o 10.000 km sobre la mano de obra y los repuestos instalados durante el servicio.",
      },
    ],
    "cambio-de-aceite": [
      {
        question: "¿Qué tipo de aceite utilizan?",
        answer:
          "Trabajamos con aceites sintéticos API/SP y especificaciones aprobadas por fabricante. Confirmamos viscosidad según el VIN antes de la cita.",
      },
      {
        question: "¿Puedo llevar mi propio lubricante?",
        answer:
          "Claro, solo verificamos que cumpla las normas del fabricante. En ese caso, cobramos únicamente mano de obra y filtros.",
      },
      {
        question: "¿Se resetea la luz de servicio?",
        answer:
          "Sí, nuestro escáner actualiza el contador de mantenimiento para que el tablero refleje el nuevo intervalo.",
      },
    ],
    "diagnostico-electronico": [
      {
        question: "¿Qué equipos utilizan?",
        answer:
          "Disponemos de scanner OEM, osciloscopio y herramientas de datos en vivo para revisar cada módulo del vehículo.",
      },
      {
        question: "¿Cuánto se demora el diagnóstico?",
        answer:
          "Depende de la complejidad de la falla, pero usualmente entregamos el informe en menos de 24 horas.",
      },
      {
        question: "¿Incluye la reparación?",
        answer:
          "El servicio cubre la trazabilidad de la falla. Con el informe podrás aprobar las reparaciones necesarias con tiempos y costos claros.",
      },
    ],
    "suspension-direccion": [
      {
        question: "¿Necesito cambiar todos los componentes?",
        answer:
          "No siempre. Primero medimos el desgaste y solo sugerimos reemplazar las piezas que superan la tolerancia indicada por el fabricante.",
      },
      {
        question: "¿La alineación está incluida?",
        answer:
          "Sí, aplicamos alineación 3D y balanceo dinámico como parte del servicio para que salgas conduciendo con el ajuste final realizado.",
      },
      {
        question: "¿Realizan prueba de ruta?",
        answer:
          "Finalizamos con una ruta corta para validar ruidos, dirección y frenado antes de la entrega.",
      },
    ],
    "servicio-a-domicilio": [
      {
        question: "¿Qué zonas cubren?",
        answer:
          "Actualmente operamos en el Valle de Aburrá. Para otras zonas cercanas coordinamos disponibilidad con al menos 48 horas de anticipación.",
      },
      {
        question: "¿Qué servicios se pueden hacer a domicilio?",
        answer:
          "Mantenimientos básicos, escaneos iniciales, pulido express y limpieza profesional. Reparaciones mayores se programan en taller.",
      },
      {
        question: "¿Cómo garantizan la seguridad?",
        answer:
          "Nuestros técnicos están registrados y compartimos su información antes de la visita. Además, llevamos herramientas certificadas y generamos un acta digital al cierre.",
      },
    ],
  };

  return (
    specificFaqs[servicio.slug] ?? [
      {
        question: `¿Cuál es la duración del servicio de ${servicio.nombre}?`,
        answer:
          "El tiempo dependerá del diagnóstico previo. Antes de agendarte te entregamos una estimación clara y, si surge algún cambio, te avisamos de inmediato.",
      },
      {
        question: "¿El servicio tiene garantía?",
        answer:
          "Sí, todos nuestros trabajos cuentan con garantía escrita que cubre mano de obra y repuestos instalados por nuestro equipo.",
      },
      {
        question: "¿Puedo pagar con diferentes medios?",
        answer:
          "Aceptamos tarjetas débito, crédito, transferencias y pagos corporativos. También podemos emitir factura electrónica.",
      },
    ]
  );
}

