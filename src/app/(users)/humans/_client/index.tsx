"use client";

import React from "react";
import {
  Container,
  Heading,
  Text,
  Highlight,
  Button,
  Box,
  SimpleGrid,
  For,
} from "@chakra-ui/react";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";
import { HumanCard } from "@/components/styled/HumanCard";
import { ProviderSchema } from "@/types";

export function HumanPage({
  providerList,
}: {
  providerList: ProviderSchema[];
}) {
  const count = providerList?.length ?? 0;
  return (
    <Container maxW="container.xl" centerContent minH="100vh" py={20}>
      <Heading as="h1" size="5xl" my={2} textAlign="center">
        Humans behind SeasonDecor
      </Heading>
      <Text
        fontSize="xl"
        color="whiteAlpha.800"
        maxW="500px"
        lineHeight="1.6"
        textAlign="center"
      >
        We&apos;re a team of{" "}
        <Highlight
          query={`${count.toString()} providers`}
          styles={{ px: "0.5", bg: "teal.muted" }}
        >
          {`${count.toString()} providers`}
        </Highlight>{" "}
        who bring diversities and styles to your space.
      </Text>
      <Link href="/apply">
        <Button variant="surface" my={8} rounded="full">
          Add yourself to the list <IconChevronRight />
        </Button>
      </Link>

      <Box as="ul" mx="auto" pt={30}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          gap={{ base: 8, md: 12, lg: 16, xl: 20 }}
        >
          <For each={providerList ?? []} fallback={null}>
            {(item) => <HumanCard key={item.id} human={item} />}
          </For>
        </SimpleGrid>
      </Box>
    </Container>
  );
}
