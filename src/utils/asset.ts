/** Antepone la ruta base (necesaria en GitHub Pages) a un recurso de /public. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
