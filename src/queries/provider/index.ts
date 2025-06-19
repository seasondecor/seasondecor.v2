import { useQuery } from "@tanstack/react-query";
import BaseRequest from "@/config/axios.config";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { ProviderSchema } from "@/types";

const SUB_URL = `api/Provider`;

export function useGetListProvider() {
  return useQuery({
    queryKey: ["get_list_provider"],
    queryFn: async () => {
      nProgress.start();
      try {
        const response = await BaseRequest.Get<{ data: ProviderSchema[] }>(`/${SUB_URL}/getAll`, false);
        return response.data;
      } finally {
        nProgress.done();
      }
    },
  });
}

export function useGetProviderBySlug(slug: string) {
  return useQuery({
    queryKey: ["get_provider_by_slug", slug],
    queryFn: async () => {
      if (!slug) return null;
      nProgress.start();
      try {
        const response = await BaseRequest.Get<{ data: ProviderSchema }>(`/${SUB_URL}/profile/${slug}`, false);
        return response.data;
      } finally {
        nProgress.done();
      }
    },
    enabled: !!slug,
    staleTime: 300000, 
    refetchOnWindowFocus: false, 
    refetchOnMount: false,
  });
}