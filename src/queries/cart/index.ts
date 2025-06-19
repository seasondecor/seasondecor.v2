import { useQuery } from "@tanstack/react-query";
import BaseRequest from "@/config/axios.config";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { CartSchema } from "@/types";

const SUB_URL = `api/Cart`;

export function useGetCart(accountId: number | undefined) {
  return useQuery({
    queryKey: ["getCart", accountId],
    queryFn: async () => {
      nProgress.start();
      try {
        const response = await BaseRequest.Get<{ data: CartSchema }>(
          `/${SUB_URL}/getCart/${accountId}`,
          false
        );
        return response.data;
      } finally {
        nProgress.done();
      }
    },
    enabled: !!accountId,
  });
}
