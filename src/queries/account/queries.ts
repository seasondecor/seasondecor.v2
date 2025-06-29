import { fetchAccountById, fetchFollowing } from "@/queries";

export const getAccountByIdQuery = (accountId: number | undefined) => ({
  queryKey: ["get_account_by_id",, accountId],
  queryFn: () => fetchAccountById(accountId),
});


export const getAccountFollowingQuery = () => ({
  queryKey: ["get_following"],
  queryFn: () => fetchFollowing(),
});