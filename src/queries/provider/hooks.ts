import { useQuery } from "@tanstack/react-query";
import { fetchProviderList } from "@/queries";
import { getProviderBySlugQuery } from "@/queries";

export function useGetProviderList() {
  return useQuery({
    queryKey: ["get_provider_list"],
    queryFn: fetchProviderList,
    staleTime: 300000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
export function useGetProviderBySlug(slug: string) {
  return useQuery({
    ...getProviderBySlugQuery(slug),
    enabled: !!slug,
    staleTime: 300000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
