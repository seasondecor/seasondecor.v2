"use client";

import {
  Container,
  Heading,
  Text,
  Highlight,
  Button,
  Image,
  Box,
  SimpleGrid,
  Link as ChakraLink,
  VStack,
  For,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";



export const HumanCard = () => {
  return (
    <ChakraLink
      as={Link}
      href={`/humans/${slugify(item.businessName, {
        lower: true,
        strict: true,
      })}?slug=${encodeURIComponent(item.slug)}`}
      key={item.id ?? i}
      _hover={{ textDecoration: "none" }}
      _focus={{ outline: "none" }}
    >
      <VStack
        gap={4}
        transition="transform 0.2s, opacity 0.2s, filter 0.2s"
        _hover={{
          transform: "scale(1.05)",
          opacity: 1,
          filter: "brightness(1.2)",
        }}
        minH="220px"
        textAlign="center"
      >
        <Image
          borderRadius="full"
          boxSize={{
            base: "90px",
            sm: "120px",
            md: "130px",
            xl: "142px",
          }}
          src={item.avatar ?? "https://bit.ly/dan-abramov"}
          alt={item.businessName ?? "Human"}
        />
        <VStack gap={1}>
          <Heading as="h2" size="sm">
            {item.businessName}
          </Heading>
          <Text fontSize="sm" color="gray.500" mx="auto" maxW="80%">
            {item.address}
          </Text>
        </VStack>
      </VStack>
    </ChakraLink>
  );
};
