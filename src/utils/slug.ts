import slugify from "slugify";

export function createSlug(name: string, id: number | string): string {
  const slug = slugify(name, { lower: true, strict: true });
  return `${slug}--${id}`;
}

export function extractIdFromSlug(slug: string): string | null {
  const match = slug.match(/--(\d+)$/);
  return match ? match[1] : null;
}