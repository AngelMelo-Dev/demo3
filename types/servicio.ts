export interface Servicio {
  slug: string;
  nombre: string;
  descripcionCorta: string;
  descripcionLarga: string;
  beneficios: string[];
  icono: {
    viewBox: string;
    paths: string[];
  };
}

