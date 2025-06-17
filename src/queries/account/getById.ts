import { useQuery } from "@tanstack/react-query";
import BaseRequest from "@/config/axios.config";
import { AccountProfile } from "@/types";

const SUB_URL = `api/AccountProfile`;

export function useGetAccountById(accountId: number | undefined) {
  return useQuery({
    queryKey: ["account", accountId],
    queryFn: async () => {
      const response = await BaseRequest.Get<{ data: AccountProfile }>(
        `/${SUB_URL}/${accountId}`
      );
      return response.data;
    },
    enabled: !!accountId,
  });
}
