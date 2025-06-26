"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Container,
  HStack,
  VStack,
  Button,
  Tabs,
  Grid,
  GridItem,
  Box,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  Blockquote,
} from "@chakra-ui/react";
import { notFound } from "next/navigation";

import { IconArrowLeft } from "@tabler/icons-react";
import { FadeContent } from "@/components/animated";
import DOMPurify from "dompurify";
import { ProfileSidebar, SellTab, ServiceTab } from "../_components";
import {
  useGetProviderBySlug,
  useGetProductByProvider,
  useGetDecorServiceOfProvider,
} from "@/queries";

export default function ProviderProfilePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") || "";

  const { data: provider, isFetching, isError } = useGetProviderBySlug(slug);
  const providerId = provider?.id;
  const { data: products, isFetching: isProductFetching } =
    useGetProductByProvider(slug);

  const { data: decorService, isFetching: isDecorServiceFetching } =
    useGetDecorServiceOfProvider(providerId ? { providerId } : {});

  if (!isFetching && (isError || !provider)) {
    notFound();
  }

  if (isFetching) {
    return (
      <Container maxW="7xl" minH="100vh" py={8}>
        <Button
          variant="ghost"
          mb={12}
          pl={0}
          _hover={{ bg: "transparent", color: "whiteAlpha.700" }}
          onClick={() => router.back()}
        >
          <IconArrowLeft />
          Back
        </Button>

        <Grid
          templateColumns={{ base: "1fr", md: "300px 1fr" }}
          gap={{ base: 8, md: 16 }}
        >
          {/* Left Sidebar Skeleton */}
          <GridItem>
            <VStack align="start" gap={6}>
              <SkeletonCircle size={{ base: "120px", md: "150px" }} />

              <VStack align="start" gap={4} width="full">
                <Skeleton height="40px" width="200px" />
                <HStack gap={2}>
                  <Skeleton height="24px" width="100px" />
                  <Skeleton height="24px" width="100px" />
                </HStack>

                <VStack align="start" gap={3} mt={2} width="full">
                  <Skeleton height="20px" width="180px" />
                  <Skeleton height="20px" width="150px" />
                  <Skeleton height="20px" width="160px" />
                </VStack>

                <HStack gap={4} mt={2}>
                  <Skeleton height="20px" width="20px" />
                  <Skeleton height="20px" width="20px" />
                </HStack>
              </VStack>

              <Box mt={8} width="full">
                <Skeleton height="24px" width="100px" mb={4} />
                <HStack gap={3}>
                  <Skeleton height="40px" width="40px" borderRadius="full" />
                  <Skeleton height="40px" width="40px" borderRadius="full" />
                </HStack>
              </Box>
            </VStack>
          </GridItem>

          {/* Right Content Skeleton */}
          <GridItem>
            <VStack align="start" width="full" gap={8}>
              <HStack width="full" gap={4}>
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    height="36px"
                    flex="1"
                    borderRadius="full"
                  />
                ))}
              </HStack>

              <VStack align="start" width="full" gap={4} pt={4}>
                <SkeletonText noOfLines={4} gap={4} />
                <SkeletonText noOfLines={3} gap={4} />
                <SkeletonText noOfLines={2} gap={4} />
              </VStack>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    );
  }

  return (
    <Container maxW="7xl" minH="100vh" py={8}>
      <FadeContent
        blur={true}
        duration={500}
        easing="ease-out"
        initialOpacity={1}
      >
        <Button
          variant="ghost"
          mb={12}
          pl={0}
          _hover={{ bg: "transparent", color: "whiteAlpha.700" }}
          onClick={() => router.back()}
        >
          <IconArrowLeft />
          Back
        </Button>
        <Grid
          templateColumns={{ base: "1fr", md: "300px 1fr" }}
          gap={{ base: 8, md: 16 }}
        >
          {/* Left Sidebar */}
          <GridItem>
            {provider && (
              <ProfileSidebar
                provider={provider}
                followed={false}
                onFollowClick={() => {}}
                onUnFollowClick={() => {}}
              />
            )}
          </GridItem>

          {/* Right Content */}
          <GridItem>
            <Tabs.Root
              defaultValue="about"
              fitted
              variant="plain"
              colorPalette="cyan"
            >
              <Tabs.List>
                <Tabs.Trigger value="about">About</Tabs.Trigger>
                <Tabs.Trigger value="service">Service</Tabs.Trigger>
                <Tabs.Trigger value="sell">Sell</Tabs.Trigger>
                <Tabs.Trigger value="handbook">Handbook</Tabs.Trigger>
                <Tabs.Indicator rounded="3xl" shadow="xl" />
              </Tabs.List>

              <Tabs.Content value="about" pt={8}>
                <Blockquote.Root>
                  <Blockquote.Content>
                    {provider?.bio && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(provider.bio),
                        }}
                      />
                    )}
                  </Blockquote.Content>
                </Blockquote.Root>
              </Tabs.Content>
              <Tabs.Content value="service" pt={8}>
                <ServiceTab
                  decorService={decorService?.items || []}
                  isFetching={isDecorServiceFetching}
                  totalCount={decorService?.totalCount || 0}
                />
              </Tabs.Content>
              <Tabs.Content value="sell" pt={8}>
                <SellTab
                  product={products?.items || []}
                  isFetching={isProductFetching}
                  totalCount={products?.totalCount || 0}
                />
              </Tabs.Content>
              <Tabs.Content value="handbook" pt={8}>
                dsa
              </Tabs.Content>
            </Tabs.Root>
          </GridItem>
        </Grid>
      </FadeContent>
    </Container>
  );
}
