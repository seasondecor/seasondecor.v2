import { useQuery } from "@tanstack/react-query";
import BaseRequest from "@/config/axios.config";
import { useSession } from "next-auth/react";
import { UserSchema } from "@/types";

const SUB_URL = `api/AccountProfile`;
const SUB_URL2 = `api/Follow`;


export function useGetAccountById(accountId: number | undefined) {
  return useQuery({
    queryKey: ["account", accountId],
    queryFn: async () => {
      const response = await BaseRequest.Get<{ data: UserSchema }>(
        `/${SUB_URL}/${accountId}`
      );
      return response.data;
    },
    enabled: !!accountId,
  });
}

export function useGetFollowing(enabled: boolean) {
    const { status } = useSession();
  return useQuery({
    queryKey: ["following-by-account"],
    queryFn: async () => {
      const response = await BaseRequest.Get<{ data: any }>(
        `/${SUB_URL2}/followings`, false
      );
      return response.data;
    },
    enabled: status === "authenticated" && enabled,
  });
}