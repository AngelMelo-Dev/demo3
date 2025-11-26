"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "¿Cuánto tiempo toma un mantenimiento general?",
    answer:
      "Un mantenimiento general completo toma entre 2 y 4 horas, dependiendo del estado del vehículo y los servicios adicionales que se requieran. Te mantendremos informado durante todo el proceso.",
  },
  {
    question: "¿Ofrecen garantía en sus servicios?",
    answer:
      "Sí, todos nuestros servicios incluyen garantía escrita. La cobertura varía según el tipo de trabajo: 6 meses o 10.000 km para servicios mecánicos, y garantía extendida para trabajos de estética.",
  },
  {
    question: "¿Puedo agendar una cita en línea?",
    answer:
      "Actualmente puedes contactarnos por WhatsApp o completar el formulario en nuestra página de contacto. Estamos trabajando en un sistema de agendamiento en línea que estará disponible pronto.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos efectivo, tarjetas débito y crédito, transferencias bancarias y pagos corporativos. También emitimos factura electrónica para empresas.",
  },
  {
    question: "¿Trabajan con todas las marcas de vehículos?",
    answer:
      "Sí, trabajamos con todas las marcas y modelos. Contamos con herramientas y equipos especializados para vehículos nacionales e importados, desde compactos hasta camionetas.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:border-neutral-300"
        >
          <button
            type="button"
            onClick={() => toggleItem(index)}
            className="flex w-full items-center justify-between px-5 py-4 text-left"
            aria-expanded={openIndex === index}
          >
            <span className="text-base font-semibold text-neutral-900">
              {faq.question}
            </span>
            <span
              className={`ml-4 flex-shrink-0 text-2xl font-light text-neutral-400 transition-transform ${
                openIndex === index ? "rotate-45" : ""
              }`}
              aria-hidden
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-5 pb-4 text-sm text-neutral-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

