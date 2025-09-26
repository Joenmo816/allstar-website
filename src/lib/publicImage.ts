/**
 * Given an array of filenames (in /public), return a usable URL string.
 * We just return the first given name; Next/Image will handle loading.
 */
export function resolvePublicImageUrl(names: string[]): string {
  if (!Array.isArray(names) || names.length === 0) return "/placeholder.png";
  return "/" + names[0];
}