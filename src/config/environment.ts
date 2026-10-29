/**
 * ============================================================
 *  CONFIGURACIÓN CENTRAL DEL BLOG
 *  Aquí se administran los colores, datos generales y tamaños
 *  de las capturas. Cambia un valor y se actualiza todo el sitio.
 * ============================================================
 */

/**
 * Paleta original entregada:
 *   #c44a37 (rojo) · #196791 (azul) · #dccdcc (rosado grisáceo)
 *   #5194bc (azul claro) · #6490a9 (azul grisáceo)
 *
 * Se oscurecieron el azul y el rojo, y el azul es el color dominante.
 */
export const colors = {
  // Azules (dominantes)
  primary: '#0f4c75', // azul principal (más oscuro que #196791)
  primaryDark: '#082f4a', // azul profundo: header, hero, footer
  primaryLight: '#5194bc', // azul de apoyo
  muted: '#6490a9', // azul grisáceo para textos secundarios y bordes

  // Rojo (acento)
  secondary: '#a63a2a', // rojo más oscuro que #c44a37
  secondaryDark: '#872c1f', // hover / énfasis

  // Neutros
  surface: '#dccdcc', // bordes, fondos suaves
  background: '#f7f3f3', // fondo general de la página
  card: '#ffffff', // tarjetas
  text: '#14222c', // texto principal
  textSoft: '#4a5a66', // texto secundario
  onDark: '#ffffff', // texto sobre fondos oscuros
} as const;

/** Datos generales del sitio. Cambia aquí los textos de identificación. */
export const site = {
  title: 'Invernadero Inteligente',
  subtitle: 'Frutos de Guatemala · Zacapa',
  description:
    'Sistema de automatización y monitoreo para el invernadero de Frutos de Guatemala, basado en microcontroladores.',
  university: 'Universidad Mariano Gálvez de Guatemala',
  course: 'Electrónica Digital',
  cycle: 'Sexto Ciclo',
  year: '2026',
  // Reemplaza por los integrantes reales del grupo
  team: [
    { name: 'Axel Yoc', carnet: '3590-24-14784' },
    { name: 'Wilson Ixbalan', carnet: '3590-24-8401' },
    { name: 'Luis Tocay', carnet: '3590-24-7692' },
    { name: 'William Toc', carnet: '3590-24-9412' },
  ],
  // Enlace del video de funcionamiento (YouTube: usa la URL de "embed"). Déjalo vacío para mostrar el espacio reservado.
  videoEmbedUrl: 'https://www.youtube.com/embed/9xdurjdrGJ0',
  // Carpeta pública de Drive y clave de navegador restringida a este blog.
  driveVideo: {
    folderId: import.meta.env.PUBLIC_DRIVE_FOLDER_ID || '',
    apiKey: import.meta.env.PUBLIC_GOOGLE_DRIVE_API_KEY || '',
    fileName: 'invernadero-demo.mp4',
  },
  // Repositorio (opcional)
  repoUrl: '',
};

/**
 * Dimensiones recomendadas para las capturas (en píxeles).
 * Todas se muestran con su proporción, así que si exportas
 * con estas medidas no habrá recortes ni deformaciones.
 */
export const imageSizes = {
  hero: { width: 1600, height: 900, label: 'Portada · 16:9' },
  wide: { width: 1280, height: 720, label: 'Captura estándar · 16:9' },
  detail: { width: 800, height: 600, label: 'Detalle · 4:3' },
  square: { width: 800, height: 800, label: 'Componente · 1:1' },
  vertical: { width: 720, height: 1280, label: 'Pantalla móvil · 9:16' },
  photo: { width: 1280, height: 960, label: 'Foto horizontal · 4:3' },
  photoTall: { width: 960, height: 1280, label: 'Foto vertical · 3:4' },
} as const;

export type ImageSize = keyof typeof imageSizes;
