const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const SUB_URL = `api/Provider`;

export async function fetchProviderList() {
  const endpoint = `${BASE_URL}/${SUB_URL}/getAll`;

  const response = await fetch(endpoint, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) return null;
  const json = await response.json();
  return json.data;
}

export async function fetchProviderBySlug(slug: string) {
  if (!slug) return null;

  const endpoint = `${BASE_URL}/${SUB_URL}/profile/${slug}`;

  const response = await fetch(endpoint, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) return null;
  const json = await response.json();
  return json.data;
}
