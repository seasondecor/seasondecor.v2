"use client";

import React from "react";
import {
  Flex,
  Box,
  Heading,
  EmptyState,
  VStack,
  Image,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { ProviderSchema } from "@/types";

interface ConnectionTabProps {
  following: ProviderSchema[];
}

export const ConnectionTab: React.FC<ConnectionTabProps> = ({ following }) => {
  if (!following || following.length === 0) {
    return (
      <EmptyState.Root>
        <EmptyState.Content>
          <EmptyState.Indicator>
            <Image
              src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-UserProfile/original/e7a31b6a-2370-4cec-8bd7-8943d4130a8e.png?im_w=1680&im_q=medq"
              alt="Empty"
            />
          </EmptyState.Indicator>
          <VStack textAlign="center" gap={5}>
            <EmptyState.Title>
              You don&apos;t follow any providers so far
            </EmptyState.Title>
            <EmptyState.Description>
              When you start to follow someone ,you’ll find the profiles of
              providers here
            </EmptyState.Description>
            <Link href="/humans">
              <Button variant="surface" rounded="full">
                Explore providers
              </Button>
            </Link>
          </VStack>
        </EmptyState.Content>
      </EmptyState.Root>
    );
  }

  return (
    <Box flex="1" borderTop="none" borderBottom="none">
      <Flex
        justify="space-between"
        align={{ base: "stretch", md: "center" }}
        mb={6}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 0 }}
      >
        <Heading
          as="h2"
          fontSize="4xl"
          width={{ base: "100%", md: "20rem" }}
          mb={{ base: 2, md: 0 }}
        >
          Connections
        </Heading>
      </Flex>
    </Box>
  );
};
