
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const SUB_URL = `api/AccountProfile`;
const SUB_URL2 = `api/Follow`;

export async function fetchAccountById(accountId: number | undefined) {
  const endpoint = `${BASE_URL}/${SUB_URL}/${accountId}`;

  const response = await fetch(endpoint, {
    method: "GET",
    cache: "no-store",
    priority: "high",
  });

  if (!response.ok) return null;
  const json = await response.json();
  return json.data;
}

export async function fetchFollowing() {
  const endpoint = `${BASE_URL}/${SUB_URL2}/followings`;

  const response = await fetch(endpoint, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) return null;
  const json = await response.json();
  return json.data;
}