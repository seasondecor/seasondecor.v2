import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { ProductDetailPage } from "./_client";
import { fetchProductById, getProductByIdQuery } from "@/queries";
import { extractIdFromSlug } from "@/utils";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = extractIdFromSlug(slug);
  if (!id) return { title: "Product Not Found • SeasonDecor" };
  const product = await fetchProductById(id);
  return {
    title: `${product?.productName} • SeasonDecor` || "Not Found • SeasonDecor",
    // description: provider?.bio || "Provider details on SeasonDecor.",
  };
}

export default async function ProductDetailLayout({
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = extractIdFromSlug(slug);

  if (!id) notFound();

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(getProductByIdQuery(id));

  const product = await fetchProductById(id);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetailPage product={product} />
    </HydrationBoundary>
  );
}
