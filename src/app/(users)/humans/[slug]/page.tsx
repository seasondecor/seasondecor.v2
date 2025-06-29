import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchProviderBySlug, getProviderBySlugQuery } from "@/queries";
import { ProviderProfilePage } from "./_client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const provider = await fetchProviderBySlug(slug as string);
  return {
    title:
      `${provider?.businessName} • SeasonDecor` || "Provider • SeasonDecor",
    description: provider?.bio || "Provider details on SeasonDecor.",
  };
}

export default async function HumanDetailLayout({
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    ...getProviderBySlugQuery(slug),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProviderProfilePage/>
    </HydrationBoundary>
  );
}
