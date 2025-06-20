"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  Heading,
  Text,
  Highlight,
  Button,
  Box,
  SimpleGrid,
  VStack,
  For,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import { IconChevronRight } from "@tabler/icons-react";
import { useGetListProvider } from "@/queries";
import { HumanCard } from "@/components/styled/HumanCard";

export default function HumanPage() {
  const router = useRouter();
  const { data: provider, isFetching } = useGetListProvider();
  const count = provider?.length ?? 0;

  const HumanCardSkeleton = () => (
    <VStack gap={4} minH="220px" textAlign="center">
      <SkeletonCircle
        loading={true}
        size={{
          base: "90px",
          sm: "120px",
          md: "130px",
          xl: "142px",
        }}
      />
      <VStack gap={1} w="full">
        <Skeleton loading={true} height="20px" width="60%" mx="auto" />
        <Skeleton loading={true} height="16px" width="80%" mx="auto" />
      </VStack>
    </VStack>
  );

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
      <Button
        variant="surface"
        mt={8}
        rounded="full"
        onClick={() => router.push("/apply")}
      >
        Add yourself to the list <IconChevronRight />
      </Button>

      <Box as="ul" mx="auto" pt={32}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          gap={{ base: 8, md: 12, lg: 16, xl: 20 }}
        >
          <For
            each={
              isFetching
                ? Array.from({ length: 10 }, () => undefined)
                : provider ?? []
            }
            fallback={null}
          >
            {(item, i) =>
              isFetching ? (
                <HumanCardSkeleton key={i} />
              ) : (
                <HumanCard key={item.id} human={item} />
              )
            }
          </For>
        </SimpleGrid>
      </Box>
    </Container>
  );
}
