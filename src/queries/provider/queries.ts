import { fetchProviderBySlug, fetchProviderList } from "./api";

export const getProviderListQuery = () => ({
  queryKey: ["get_providers_list"],
  queryFn: () => fetchProviderList(),
});
export const getProviderBySlugQuery = (slug: string) => ({
  queryKey: ["get_provider_by_slug", slug],
  queryFn: () => fetchProviderBySlug(slug),
});
