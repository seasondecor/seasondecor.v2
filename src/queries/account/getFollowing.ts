import { useQuery } from "@tanstack/react-query";
import BaseRequest from "@/config/axios.config";
import { useSession } from "next-auth/react";


const SUB_URL = `api/Follow`;

export function useGetFollowing(enabled: boolean) {
    const { status } = useSession();
  return useQuery({
    queryKey: ["following-by-account"],
    queryFn: async () => {
      const response = await BaseRequest.Get<{ data: any }>(
        `/${SUB_URL}/followings`, false
      );
      return response.data;
    },
    enabled: status === "authenticated" && enabled,
  });
}