"use client";

import { useState } from "react";
import {
  Container,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  HStack,
  VStack,
  Button,
  Badge,
  NumberInput,
  Breadcrumb,
  IconButton,
  Stack,
  RatingGroup,
  Icon,
  FormatNumber,
  Wrap,
  Separator,
} from "@chakra-ui/react";
import {
  IconHeart,
  IconCircleCheck,
  IconTruck,
  IconDiscount2,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import { ImageGallery } from "@/app/(root)/shop/_components/image-gallery";
import { ProductSchema } from "@/types";
import Link from "next/link";
import { seasons } from "@/constant";

export function ProductDetailPage({ product }: { product: ProductSchema }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Container maxW="7xl" py={8}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ base: "start", md: "center" }}
      >
        {/* Page Title */}
        <Heading as="h1" size="2xl" textAlign="center" fontWeight="bold">
          Product Details
        </Heading>
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link as={Link} href="/">
                Home
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator>/</Breadcrumb.Separator>
            <Breadcrumb.Item>
              <Breadcrumb.Link as={Link} href="/shop">
                Shop
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator>/</Breadcrumb.Separator>
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>
                {product.productName}
              </Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </Stack>
      {/* Breadcrumb */}

      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
        gap={{ base: 8, lg: 16 }}
        pt={20}
      >
        {/* Product Images */}
        <GridItem>
          <>
            <ImageGallery images={product.imageUrls} />
          </>
        </GridItem>
        {/* Product Details */}
        <GridItem>
          <VStack align="stretch" gap={6}>
            {/* Product Title and Badge */}
            <Box>
              <HStack justify="space-between" align="flex-start" mb={2}>
                <Heading as="h2" size="3xl" lineHeight="1.3">
                  {product.productName}
                </Heading>
              </HStack>

              {/* Rating and Stock */}
              <HStack gap={4} mb={4}>
                <HStack gap={1}>
                  <RatingGroup.Root
                    readOnly
                    count={5}
                    defaultValue={3}
                    size="sm"
                  >
                    <RatingGroup.HiddenInput />
                    <RatingGroup.Control />
                  </RatingGroup.Root>
                  <Text fontSize="sm" color="gray.500" ml={2}>
                    (0 customer reviews)
                  </Text>
                </HStack>
                <Badge size="lg" colorPalette="green" variant="plain">
                  <Icon size="md">
                    <IconCircleCheck />
                  </Icon>
                  In Stock
                </Badge>
              </HStack>
            </Box>

            {/* Price */}
            <Box>
              <HStack align="baseline" gap={3}>
                <Text fontSize="md">Price:</Text>
                <Text fontSize="2xl" fontWeight="bold">
                  <FormatNumber
                    value={100000}
                    style="currency"
                    currency="VND"
                  />
                </Text>
              </HStack>
            </Box>

            {/* Promotional Info */}
            <VStack align="stretch" gap={3}>
              <HStack>
                <Icon size="md">
                  <IconTruck />
                </Icon>

                <Text fontSize="sm">Free delivery in Vietnam</Text>
              </HStack>
              <HStack>
                <Icon size="md">
                  <IconDiscount2 />
                </Icon>

                <Text fontSize="sm">Ship from {product.shipFrom}</Text>
              </HStack>
              <HStack>
                <Icon size="md">
                  <IconCircleCheck />
                </Icon>

                <Text fontSize="sm">15-Day Free Returns</Text>
              </HStack>
            </VStack>

            <Separator />

            {/* Season Badges */}
            <Wrap gap={2}>
              <Text fontSize="sm">Decorated for:</Text>
              {product.seasons?.map((seasonName) => {
                const season = seasons.find(
                  (s) =>
                    s.label === seasonName ||
                    s.value === seasonName.toLowerCase()
                );
                return season ? (
                  <Badge
                    key={season.value}
                    colorPalette="teal"
                    variant="subtle"
                    size="sm"
                  >
                    {season.icon}
                    <span style={{ marginLeft: 4 }}>{season.label}</span>
                  </Badge>
                ) : null;
              })}
            </Wrap>

            {/* Quantity Left */}
            <HStack gap={2}>
              <Text fontSize="sm">Quantity left:</Text>
              <Text fontSize="sm">
                {product.quantity} pieces available
              </Text>
            </HStack>

            {/* Category Name */}
            <HStack gap={2}>
              <Text fontSize="sm">Type of product:</Text>
              <Badge variant="outline" size="md">
                {product.categoryName}
              </Badge>
            </HStack>

            {/* Quantity and Actions */}
            <VStack align="stretch" gap={4}>
              <HStack gap={4}>
                <NumberInput.Root defaultValue="3" unstyled spinOnPress={false}>
                  <HStack gap="2">
                    <NumberInput.DecrementTrigger asChild>
                      <IconButton variant="outline" size="sm">
                        <IconMinus />
                      </IconButton>
                    </NumberInput.DecrementTrigger>
                    <NumberInput.ValueText
                      textAlign="center"
                      fontSize="lg"
                      minW="3ch"
                    />
                    <NumberInput.IncrementTrigger asChild>
                      <IconButton variant="outline" size="sm">
                        <IconPlus />
                      </IconButton>
                    </NumberInput.IncrementTrigger>
                  </HStack>
                </NumberInput.Root>
                <Button
                  aria-label="Add to wishlist"
                  variant="outline"
                  colorScheme={isWishlisted ? "red" : "gray"}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <IconHeart size={20} />
                </Button>
              </HStack>

              <Stack direction={{ base: "column", sm: "row" }} gap={3}>
                <Button
                  colorScheme="blue"
                  size="lg"
                  flex={1}
                  _hover={{ transform: "translateY(-1px)" }}
                >
                  Purchase Now
                </Button>
                <Button
                  variant="outline"
                  colorScheme="gray"
                  size="lg"
                  flex={1}
                  _hover={{ transform: "translateY(-1px)" }}
                >
                  Add to Cart
                </Button>
              </Stack>
            </VStack>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
}
