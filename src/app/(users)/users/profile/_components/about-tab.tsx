"use client";

import React from "react";
import {
  Box,
  Flex,
  Avatar,
  VStack,
  HStack,
  Text,
  Button,
  Heading,
  Icon,
} from "@chakra-ui/react";
import {
  IconWorld,
  IconBriefcase,
  IconBulb,
  IconMasksTheater,
  IconMessageDots,
} from "@tabler/icons-react";

export const AboutTab = () => {
  return (
    <Box
      flex="1"
      borderTop="none"
      borderBottom="none"
      p={0}
      px={{ base: 4, md: 0 }}
    >
      {/* About Me Section */}
      <Flex justify="space-between" align="center" mb={6}>
        <Heading as="h2" size="4xl">
          About me
        </Heading>
        <Button size="sm" variant="outline">
          Edit
        </Button>
      </Flex>

      <VStack align="flex-start" gap={6} mb={8}>
        <Box
          py={0}
          borderRadius="none"
          textAlign={{ base: "center", md: "center" }}
          mx={{ base: "auto", md: "unset" }}
          shadow="none"
        >
          <Avatar.Root shape="full" size="2xl">
            <Avatar.Fallback name="Random User" />
            <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" />
          </Avatar.Root>
          <Text fontSize="xl" fontWeight="bold">
            Steve
          </Text>
          <Text fontSize="sm" color="gray.600">
            Guest
          </Text>
        </Box>

        <HStack gap={3} align="center">
          <Icon as={IconWorld} w={5} h={5} color="gray.600" />
          <Text>
            Where I&apos;ve always wanted to go:{" "}
            <Text as="span" fontWeight="semibold">
              Russia
            </Text>
          </Text>
        </HStack>

        <HStack gap={3} align="center">
          <Icon as={IconBriefcase} w={5} h={5} color="gray.600" />
          <Text>
            My work:{" "}
            <Text as="span" fontWeight="semibold">
              Student
            </Text>
          </Text>
        </HStack>
      </VStack>

      {/* My Interests Section */}
      <Heading as="h3" size="md" mb={4}>
        My interests
      </Heading>
      <Flex wrap="wrap" mb={8}>
        <HStack gap={2} align="center" mr={6} mb={2}>
          <Text>Movies</Text>
        </HStack>
        <HStack gap={2} align="center" mr={6} mb={2}>
          <Text>Video games</Text>
        </HStack>
        <HStack gap={2} align="center" mr={6} mb={2}>
          <Icon as={IconBulb} w={5} h={5} color="gray.600" />
          <Text>Nightlife</Text>
        </HStack>
        <HStack gap={2} align="center" mr={6} mb={2}>
          <Icon as={IconMasksTheater} w={5} h={5} color="gray.600" />
          <Text>Theater</Text>
        </HStack>
      </Flex>

      {/* Reviews I&apos;ve Written Section */}
      <HStack gap={3} align="center">
        <Icon as={IconMessageDots} w={5} h={5} color="gray.600" />
        <Text>Reviews I&apos;ve written</Text>
      </HStack>
    </Box>
  );
};
