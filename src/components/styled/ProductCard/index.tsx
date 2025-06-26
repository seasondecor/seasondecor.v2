"use client";

import { FC } from "react";
import {
  Card,
  Image,
  Text,
  FormatNumber,
  HStack,
  Badge,
  Icon,
} from "@chakra-ui/react";
import { ProductSchema } from "@/types";
import { GlareHover } from "@/components/animated";
import { IconStar } from "@tabler/icons-react";
import Link from "next/link";
import slugify from "slugify";

interface ProductCardProps {
  product: ProductSchema;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/products/${slugify(product.productName, {
        lower: true,
        strict: true,
      })}`}
    >
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
          h="full"
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
            roundedBottom="lg"
            transition="transform 0.3s ease-in-out"
            aspectRatio={4 / 3}
          />
          <Card.Body gap="2">
            <Card.Title
              fontSize={{ base: "sm", lg: "lg" }}
              lineHeight="1.75rem"
              lineClamp="2"
            >
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
            <HStack justifyContent="space-between" width="full">
              <Badge variant="outline" size="md">
                {product.rate}
                <Icon size="sm" color="yellow">
                  <IconStar />
                </Icon>
              </Badge>
              <Text fontSize="sm">{product.totalSold} sold</Text>
            </HStack>
          </Card.Footer>
        </Card.Root>
      </GlareHover>
    </Link>
  );
};
