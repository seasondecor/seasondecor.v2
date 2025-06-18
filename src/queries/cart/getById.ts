import { useQuery } from "@tanstack/react-query";
import BaseRequest from "@/config/axios.config";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { Cart } from "@/types/cart";

const SUB_URL = `api/Cart`;

export function useGetCart(accountId: number | undefined) {
  return useQuery({
    queryKey: ["getCart", accountId],
    queryFn: async () => {
      nProgress.start();
      try {
        const response = await BaseRequest.Get<{ data: Cart }>(
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
