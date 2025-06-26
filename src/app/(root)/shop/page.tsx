"use client";

import React from "react";
import {
  Container,
  SimpleGrid,
  Card,
  Text,
  Heading,
  Skeleton,
  SkeletonText,
  Flex,
  Box,
  For,
} from "@chakra-ui/react";
import { useGetListProduct } from "@/queries";
import { ProductSchema } from "@/types";
import { ProductCard, Vortex, FadeContent } from "@/components";

export default function ShopPage() {
  const { data: productsData, isFetching } = useGetListProduct();

  const ProductSkeleton = () => (
    <Card.Root maxW="sm" overflow="hidden">
      <Skeleton height="200px" />
      <Card.Body gap="2">
        <Skeleton height="24px" width="70%" />
        <SkeletonText mt="4" noOfLines={2} gap="4" />
      </Card.Body>
      <Card.Footer gap="2">
        <Skeleton height="40px" width="100%" />
      </Card.Footer>
    </Card.Root>
  );

  return (
    <Box as="main" className="relative" mt="-80px">
      <Vortex
        className="h-[100vh] w-full"
        containerClassName="inset-x-0 bg-gradient-to-b from-black opacity-90 to-transparent"
        particleCount={500}
        baseHue={200}
        baseSpeed={0.2}
        rangeSpeed={0.8}
        baseRadius={1.5}
        rangeRadius={3}
        backgroundColor="transparent"
      >
        <Flex
          flexDir="column"
          w="full"
          h="full"
          alignItems="center"
          justifyContent="center"
        >
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <Heading
              as="h1"
              size={{ base: "5xl", md: "6xl", lg: "7xl" }}
              color="white"
              textAlign="center"
              className="text-shadow-lg"
            >
              Discover Our Collection
            </Heading>
            <Text
              fontSize={{ base: "xl", md: "lg" }}
              color="whiteAlpha.800"
              mt={4}
              textAlign="center"
            >
              Handpicked products crafted with care to transform your living and
              working spaces.
            </Text>
          </FadeContent>
        </Flex>
      </Vortex>

      <Container maxW="7xl" py={12}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Our Products
        </Heading>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
            {isFetching ? (
              <For each={Array(8).fill(0)}>
                {(_, index) => <ProductSkeleton key={index} />}
              </For>
            ) : (
              <For each={productsData?.items ?? []}>
                {(product: ProductSchema) => (
                  <ProductCard key={product.id} product={product}  />
                )}
              </For>
            )}
          </SimpleGrid>
        </FadeContent>
      </Container>
    </Box>
  );
}
