// @ts-check

/**
 * @typedef {Object} Consejo
 * @property {string} slug
 * @property {string} titulo
 * @property {string} resumen
 * @property {string} contenido
 * @property {string} fecha
 */

/** @type {Consejo[]} */
export const consejos = [
  {
    slug: "senales-problemas-suspension",
    titulo: "Señales de problemas en la suspensión",
    resumen:
      "Ruidos metálicos, desgaste irregular en llantas y vibraciones inusuales suelen anticipar daños en bujes o amortiguadores.",
    contenido:
      "Cuando la suspensión comienza a fallar, el auto pierde estabilidad y seguridad. Algunos síntomas clave son el rebote excesivo después de pasar un reductor, direcciones imprecisas o una nariz que se hunde al frenar. También puedes notar desgaste irregular en las llantas delanteras. Ante estos signos, solicita una revisión en banco de suspensión y exige mediciones de altura y dureza. Atender la falla a tiempo evita que se dañen las terminales de dirección o que el chasis se desalinee.",
    fecha: "2025-01-15",
  },
  {
    slug: "como-saber-si-necesitas-cambio-frenos",
    titulo: "Cómo saber si necesitas cambio de frenos",
    resumen:
      "El pedal esponjoso, las luces de advertencia y los chirridos al frenar indican desgaste en pastillas o discos.",
    contenido:
      "Un sistema de frenos en buen estado mantiene el recorrido del pedal corto y consistente. Si debes presionar más de lo normal, escuchas chirridos o sientes vibraciones en el volante, es momento de evaluar el espesor de discos y la vida útil de las pastillas. También revisa el nivel de líquido: cuando baja demasiado, puede encenderse la luz en el tablero. Acude a un taller que mida los discos con herramientas de precisión y purgue el circuito luego del recambio para garantizar una respuesta segura.",
    fecha: "2025-01-08",
  },
  {
    slug: "ventajas-mantenimiento-preventivo",
    titulo: "Ventajas del mantenimiento preventivo",
    resumen:
      "Un plan preventivo extiende la vida del motor, mejora el consumo y evita reparaciones costosas.",
    contenido:
      "El mantenimiento preventivo no solo consiste en cambiar aceite; implica revisar correas, filtros, frenos y suspensión según el kilometraje. Esto ayuda a detectar fugas, piezas flojas o sensores que comienzan a fallar. Al seguir la programación recomendada por el fabricante, mantienes la garantía vigente y reduces el riesgo de quedar varado en carretera. Además, los registros digitales permiten llevar un historial que incrementa el valor de reventa del vehículo.",
    fecha: "2025-01-02",
  },
  {
    slug: "cada-cuanto-cambiar-aceite-carro",
    titulo: "Cada cuánto cambiar el aceite del carro",
    resumen:
      "La mayoría de autos modernos requieren cambios entre 8.000 y 10.000 km, aunque el intervalo se ajusta según el tipo de aceite y uso.",
    contenido:
      "Verifica en el manual la viscosidad y el intervalo sugerido para tu modelo. Si conduces principalmente en ciudad, con arranques constantes y tráfico pesado, adelanta el cambio por lo menos un 20 %. Usa filtros originales o equivalentes certificados y pide que reinicien el testigo de mantenimiento. Llevar un registro de kilometraje y fecha te permitirá planear la siguiente visita y evitar que el aceite pierda sus propiedades lubricantes.",
    fecha: "2024-12-20",
  },
];

/**
 * @param {string} slug
 * @returns {Consejo | undefined}
 */
export function getConsejoBySlug(slug) {
  return consejos.find((consejo) => consejo.slug === slug);
}

