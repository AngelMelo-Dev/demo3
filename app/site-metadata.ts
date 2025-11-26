import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Clínica Automotriz",
    template: "%s | Clínica Automotriz",
  },
  description:
    "Taller especializado en estética y mantenimiento automotriz. Agenda tu cita y dale vida a tu vehículo.",
  keywords: [
    "detailing automotriz",
    "pulido de autos",
    "lavado profesional",
    "mantenimiento automotriz",
  ],
  authors: [{ name: "Clínica Automotriz" }],
  openGraph: {
    title: "Clínica Automotriz",
    description:
      "Servicios profesionales para mantener tu vehículo en óptimas condiciones.",
    url: "https://example.com",
    siteName: "Clínica Automotriz",
    locale: "es_CO",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

