import { useQuery } from "@tanstack/react-query";
import { getAccountByIdQuery, getAccountFollowingQuery } from "@/queries";

export function useGetAccountById(accountId: number | undefined) {
  return useQuery({
    ...getAccountByIdQuery(accountId),
    staleTime: 300000,
    enabled: !!accountId,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}

export function useGetFollowing() {
  return useQuery({
    ...getAccountFollowingQuery(),
    staleTime: 300000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
