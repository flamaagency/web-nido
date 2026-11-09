/**
 * Helper to resolve asset URLs with the correct base path for both local dev and GitHub Pages
 */
const BASE = import.meta.env.BASE_URL || '/';
const normalizedBase = BASE.endsWith('/') ? BASE : `${BASE}/`;

export function assetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.replace(/^\/+/, '');
  return `${normalizedBase}${cleanPath}`;
}
