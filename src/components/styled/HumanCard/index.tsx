"use client";

import { FC } from "react";
import { Heading, Text, Image, VStack } from "@chakra-ui/react";
import Link from "next/link";
import slugify from "slugify";
import { ProviderSchema } from "@/types";

interface HumanCardProps {
  human: ProviderSchema;
  followed?: boolean;
  onFollowClick?: () => void | Promise<void>;
  onUnFollowClick?: () => void | Promise<void>;
}

export const HumanCard: FC<HumanCardProps> = ({ human }) => {
  return (
    <Link
      href={`/humans/${slugify(human.slug, {
        lower: true,
        strict: true,
      })}`}
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
          src={human.avatar ?? "https://bit.ly/dan-abramov"}
          alt={human.businessName ?? "Human"}
        />
        <VStack gap={1}>
          <Heading as="h2" size="sm">
            {human.businessName}
          </Heading>
          <Text fontSize="sm" color="gray.500" mx="auto" maxW="80%">
            {human.address}
          </Text>
        </VStack>
      </VStack>
    </Link>
  );
};
