import { Metadata } from "next";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchProviderList } from "@/queries";
import { HumanPage } from "./_client";
import { getProviderListQuery } from "@/queries";

export const metadata: Metadata = {
  title: "Humans • SeasonDecor",
  description: "Humans",
};
export default async function HumansLayout() {
  const providerList = await fetchProviderList();

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    ...getProviderListQuery(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HumanPage providerList={providerList ?? []} />;
    </HydrationBoundary>
  );
}
