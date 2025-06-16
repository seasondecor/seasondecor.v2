"use client";

import React from "react";
import {
  Container,
  SimpleGrid,
  Card,
  Image,
  Text,
  Button,
  Heading,
  Skeleton,
  SkeletonText,
  FormatNumber,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useGetListProduct } from "@/queries/product";
import { Product } from "@/types";
import GlareHover from "@/components/animated/glare-hover";
import { Vortex } from "@/components/animated/vortex";
import { IconShoppingCartPlus } from "@tabler/icons-react";

export default function ShopPage() {
  const { data: productsData, isFetching } = useGetListProduct();

  // Ensure productsData.data is an array before mapping
  const products: Product[] = productsData?.data || [];

  const ProductSkeleton = () => (
    <Card.Root maxW="sm" overflow="hidden">
      <Skeleton height="200px" />
      <Card.Body gap="2">
        <Skeleton height="24px" width="70%" />
        <SkeletonText mt="4" noOfLines={2} gap="4" />
        <Skeleton height="24px" width="30%" mt="2" />
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
        containerClassName="bg-gradient-to-b from-black to-transparent"
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
            Explore a wide range of products designed to elevate your space.
          </Text>
        </Flex>
      </Vortex>

      <Container maxW="7xl" py={12}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Our Products
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 1, md: 3, lg: 4 }} gap={6}>
          {isFetching
            ? // Show 8 skeleton cards while loading
              Array(8)
                .fill(0)
                .map((_, index) => <ProductSkeleton key={index} />)
            : products.map((product) => (
                <GlareHover
                  key={product.id}
                  glareColor="#ffffff"
                  glareOpacity={0.7}
                  glareAngle={-30}
                  glareSize={400}
                  transitionDuration={1000}
                  playOnce={false}
                  className="group"
                >
                  <Card.Root
                    maxW={{ base: "full", sm: "sm" }}
                    overflow="hidden"
                    rounded="lg"
                    cursor="pointer"
                    boxShadow="md"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: "translateY(-4px)",
                      boxShadow: "lg",
                    }}
                  >
                    <Image
                      src={product.imageUrls?.[0] || "/fav-icon.svg"}
                      alt={product.productName || "Product image"}
                      fit="cover"
                      roundedTop="lg"
                      transition="transform 0.3s ease-in-out"
                      aspectRatio={4 / 3}
                      _groupHover={{ transform: "scale(1.05)" }}
                    />
                    <Card.Body gap="2">
                      <Card.Title fontSize={{ base: "sm", lg: "lg" }}>
                        {product.productName}
                      </Card.Title>
                      <Text
                        fontSize={{ base: "lg", sm: "xl" }}
                        fontWeight="medium"
                        letterSpacing="tight"
                        mt="2"
                      >
                        <FormatNumber
                          value={product.productPrice}
                          style="currency"
                          currency="VND"
                        />
                      </Text>
                    </Card.Body>
                    <Card.Footer gap="2">
                      <Button variant="outline" colorPalette="blue">
                        <IconShoppingCartPlus />
                        Buy now
                      </Button>
                    </Card.Footer>
                  </Card.Root>
                </GlareHover>
              ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
