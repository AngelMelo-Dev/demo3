// @ts-check

/**
 * @typedef {Object} Icono
 * @property {string} viewBox
 * @property {string[]} paths
 */

/**
 * @typedef {Object} Servicio
 * @property {string} slug
 * @property {string} nombre
 * @property {string} descripcionCorta
 * @property {string} descripcionLarga
 * @property {string[]} beneficios
 * @property {Icono} icono
 */

/** @type {Servicio[]} */
export const servicios = [
  {
    slug: "mantenimiento-general",
    nombre: "Mantenimiento general",
    descripcionCorta:
      "Inspección integral, filtros limpios y ajustes preventivos para extender la vida útil del vehículo.",
    descripcionLarga:
      "Nuestro servicio de mantenimiento general combina diagnóstico computarizado, reemplazo de fluidos críticos y calibraciones finas para asegurar que tu vehículo rinda al máximo rendimiento. Es ideal como plan periódico para conservar garantía y evitar fallas costosas.",
    beneficios: [
      "Revisión de 40 puntos mecánicos y eléctricos",
      "Cambio de filtros básicos incluidos",
      "Informe digital con prioridades y recomendaciones",
      "Entrega en el mismo día",
    ],
    icono: {
      viewBox: "0 0 24 24",
      paths: [
        "M12 2a1 1 0 0 1 1 1v1.26a7 7 0 0 1 2.63.95l.89-.9a1 1 0 0 1 1.42 1.42l-.89.89a7 7 0 0 1 .95 2.64H21a1 1 0 0 1 0 2h-1.26a7 7 0 0 1-.95 2.63l.89.89a1 1 0 0 1-1.42 1.42l-.89-.89a7 7 0 0 1-2.64.95V21a1 1 0 0 1-2 0v-1.26a7 7 0 0 1-2.63-.95l-.89.89a1 1 0 0 1-1.42-1.42l.89-.89a7 7 0 0 1-.95-2.64H3a1 1 0 0 1 0-2h1.26a7 7 0 0 1 .95-2.63l-.89-.89a1 1 0 0 1 1.42-1.42l.89.89a7 7 0 0 1 2.64-.95V3a1 1 0 0 1 1-1Zm0 5a5 5 0 1 0 5 5 5.01 5.01 0 0 0-5-5Z",
      ],
    },
  },
  {
    slug: "frenos",
    nombre: "Servicio de frenos",
    descripcionCorta:
      "Diagnóstico de discos y pastillas, purga del sistema y calibración del pedal.",
    descripcionLarga:
      "Aplicamos herramientas de medición láser para validar el desgaste de discos, sustituimos pastillas premium y purgamos el circuito para recuperar la presión exacta. Tu auto recupera la respuesta inmediata y segura que necesitas en carretera.",
    beneficios: [
      "Lectura de espesores y alineación de discos",
      "Cambio de pastillas y herrajes certificados",
      "Purgado y sangrado con fluido DOT compatible",
      "Prueba dinámica y reporte de desempeño",
    ],
    icono: {
      viewBox: "0 0 24 24",
      paths: [
        "M12 4a8 8 0 1 0 8 8h2a1 1 0 0 0 1-1 5 5 0 0 0-5-5 1 1 0 0 0-1 1v2a4 4 0 0 1-4 4H7a4 4 0 0 1 0-8Zm0 2a6 6 0 1 0 6 6H13a6 6 0 0 0-6-6Z",
        "M9 12a3 3 0 1 0 3-3 3 3 0 0 0-3 3Z",
      ],
    },
  },
  {
    slug: "cambio-de-aceite",
    nombre: "Cambio de aceite premium",
    descripcionCorta:
      "Lubricantes sintéticos y filtros OEM para proteger el motor desde el arranque.",
    descripcionLarga:
      "Utilizamos aceites sintéticos aprobados por fabricantes y reemplazamos filtros OEM para garantizar flujo constante, presión estable y menor consumo. Complementamos con escaneo de códigos para asegurar que el mantenimiento resetee correctamente los parámetros del motor.",
    beneficios: [
      "Selección de aceite de acuerdo al VIN",
      "Filtro original o equivalente certificado",
      "Reseteo de luz de servicio",
      "Revisión visual de fugas y sensores",
    ],
    icono: {
      viewBox: "0 0 24 24",
      paths: [
        "M9 3a1 1 0 0 0-.76.35L5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-3.24-3.65A1 1 0 0 0 15 3Zm3 4 3 3.5V19H9v-8.5Zm5.5-4.13L22 6l-2 2-3.5-3.13Z",
        "M12 11.5c-.83 1.24-2 2.92-2 4a2 2 0 0 0 4 0c0-1.08-1.17-2.76-2-4Z",
      ],
    },
  },
  {
    slug: "diagnostico-electronico",
    nombre: "Diagnóstico electrónico",
    descripcionCorta:
      "Scanner OEM, osciloscopio y pruebas dinámicas para aislar fallas eléctricas.",
    descripcionLarga:
      "Contamos con equipos OEM y procesos guiados por fabricante para leer, interpretar y validar códigos en vivo. Correlacionamos datos de sensores, actuadores y módulos para entregarte un informe claro con el origen real de la falla y las acciones sugeridas.",
    beneficios: [
      "Lectura y limpieza de DTC en todos los módulos",
      "Pruebas de actuadores y adaptaciones",
      "Informe gráfico con datos en tiempo real",
      "Asesoría para planificar reparaciones",
    ],
    icono: {
      viewBox: "0 0 24 24",
      paths: [
        "M4 5a2 2 0 0 0-2 2v8h2v4h4v-4h8v4h4v-4h2V7a2 2 0 0 0-2-2Zm0 2h16v6H4Zm3 2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2Zm6 0a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z",
      ],
    },
  },
  {
    slug: "suspension-direccion",
    nombre: "Suspensión y dirección",
    descripcionCorta:
      "Alineación 3D, balanceo y reemplazo de componentes para una conducción precisa.",
    descripcionLarga:
      "Revisamos bujes, terminales, amortiguadores y cremallera con herramientas de medición 3D. Balanceamos cada rueda, corregimos alturas y entregamos el vehículo con reporte del antes y después para garantizar confort y seguridad.",
    beneficios: [
      "Pruebas en banco de suspensión",
      "Alineación computarizada con tolerancias OEM",
      "Balanceo dinámico y calibración de presión",
      "Suministro e instalación de repuestos",
    ],
    icono: {
      viewBox: "0 0 24 24",
      paths: [
        "M5 4h2v3h10V4h2v3h2a1 1 0 0 1 0 2h-2v6h2a1 1 0 0 1 0 2h-2v3h-2v-3H7v3H5v-3H3a1 1 0 0 1 0-2h2V9H3a1 1 0 0 1 0-2h2Zm2 5v6h10V9Z",
      ],
    },
  },
  {
    slug: "servicio-a-domicilio",
    nombre: "Servicio a domicilio",
    descripcionCorta:
      "Un técnico certificado llega hasta tu casa u oficina con equipo portátil.",
    descripcionLarga:
      "Coordinamos una visita donde llevamos herramientas, insumos y diagnóstico ligero para solucionar mantenimientos básicos sin que te desplaces. Ideal para flotillas urbanas o clientes con agendas ajustadas.",
    beneficios: [
      "Programación flexible según tu disponibilidad",
      "Reporte digital y evidencia fotográfica",
      "Medios de pago móviles",
      "Cobertura en áreas metropolitanas",
    ],
    icono: {
      viewBox: "0 0 24 24",
      paths: [
        "M3 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h3l3 3.5V19a2 2 0 0 1-2 2h-1a3 3 0 0 0-6 0H9a3 3 0 0 0-6 0H3Zm2 0v10.17A3 3 0 0 1 7 17a3 3 0 0 1 3 3h4a3 3 0 0 1 6 0h1v-5.5L18.5 11H15v6h-2V7Z",
      ],
    },
  },
];

/**
 * @param {string} slug
 * @returns {Servicio | undefined}
 */
export function getServicioBySlug(slug) {
  return servicios.find((servicio) => servicio.slug === slug);
}

