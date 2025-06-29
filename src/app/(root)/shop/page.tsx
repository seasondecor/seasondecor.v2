import { Metadata } from "next";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getProductListQuery } from "@/queries";
import { ShopPage } from "./_client";

export const metadata: Metadata = {
  title: "Shop • SeasonDecor",
  description: "Shop",
};
export default async function ShopLayout() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(getProductListQuery({ pageIndex: 1, pageSize: 10 }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ShopPage />
    </HydrationBoundary>
  );
}