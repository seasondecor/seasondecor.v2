import { Metadata } from "next";
import { fetchAccountById, fetchFollowing } from "@/queries";
import GuestProfilePage from "./_client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "Guest profile • SeasonDecor",
  description: "Guest profile",
};
export default async function ProfileLayout({}) {
  const session = await getServerSession(authOptions);

  if (!session?.accessToken) {
    throw new Error("Not authenticated");
  }

  const accountId = session.accountId;

  const account = await fetchAccountById(accountId);
  const following = await fetchFollowing();
  // const following = await fetchFollowingByAccountId(accountId);

  return <GuestProfilePage account={account} following={following} />;
}
