/**
 * Márgenes preventivos para evitar que la interfaz de las plataformas cubra
 * texto, datos o subtítulos. Son una base conservadora y deben revisarse
 * según la plataforma final antes de cerrar el diseño.
 */
export const ZONAS_SEGURAS = {
  /** Encabezado, nombre de cuenta y otros elementos superiores. */
  margenSuperior: 240,
  /** Descripción, botones laterales, navegación y controles inferiores. */
  margenInferior: 360,
} as const;
