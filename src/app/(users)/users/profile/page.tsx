"use client";

import React, { useState } from "react";
import {
  Container,
  Box,
  Flex,
  Text,
  Heading,
  Avatar,
  Image,
  Tabs,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  Icon,
  Center,
} from "@chakra-ui/react";
import { HashLoader } from "react-spinners";
import { AboutTab, BookingTab, ConnectionTab } from "./_components";
import { useSession } from "next-auth/react";
import { useGetAccountById, useGetFollowing } from "@/queries";

export default function GuestProfilePage() {
  const { data: session } = useSession();

  const accountId = session?.accountId;

  const { data: account, isLoading } = useGetAccountById(accountId);

  const [tabValue, setTabValue] = useState("about");
  const { data: following, isLoading: followingLoading } = useGetFollowing(
    tabValue === "connections"
  );

  return (
    <Box as="section">
      <Container maxW="7xl" py={20}>
        <Tabs.Root
          orientation="vertical"
          variant="subtle"
          defaultValue="about"
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          minH="100vh"
          width="full"
          size="lg"
          onValueChange={(details: { value: string }) => {
            setTabValue(details.value);
          }}
        >
          {/* Left Sidebar */}
          <Box
            w={{ base: "full", md: "27rem" }}
            h="fit-content"
            p={{ base: 4, md: 10 }}
            borderTop={{ base: "none", md: "revert" }}
            borderBottom={{ base: "none", md: "revert" }}
            borderRight={{ base: "none", md: "none" }}
            borderRadius="3xl"
            boxShadow="custom"
            mb={{ base: 6, md: 0 }}
            display="flex"
            flexDirection="column"
          >
            <Box px={{ base: 4, md: 5 }}>
              <Heading as="h2" size="4xl" mb={6}>
                Profile
              </Heading>
              <Tabs.List
                flexDirection={{ base: "column", md: "column" }}
                gapX={{ base: 4, md: 0 }} // Horizontal spacing for mobile
                gapY={{ base: 5, md: 10 }} // Vertical spacing for desktop
                border="none"
                alignItems="flex-start"
                justifyContent="flex-start"
                width="20rem"
              >
                <Tabs.Trigger
                  p={5}
                  rounded="md"
                  value="about"
                  _selected={{ bg: "gray.600", fontWeight: "bold", p: 7 }}
                  width={{ base: "full", md: "full" }}
                  justifyContent="flex-start"
                >
                  <Flex align="center" gap={3}>
                    <Avatar.Root shape="full" size="sm">
                      <Avatar.Fallback name="Random User" />
                      <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" />
                    </Avatar.Root>
                    <Text fontSize="md">About me</Text>
                  </Flex>
                </Tabs.Trigger>
                <Tabs.Trigger
                  p={5}
                  rounded="md"
                  value="request"
                  _selected={{ bg: "gray.600", fontWeight: "bold", p: 7 }}
                  width={{ base: "full", md: "full" }}
                  justifyContent="flex-start"
                >
                  <Flex align="center" gap={3}>
                    <Image
                      src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-UserProfile/original/797c1df2-a40c-4d93-9550-ca5b213cd01b.png?im_w=240"
                      boxSize="40px"
                      borderRadius="full"
                      fit="cover"
                      alt="Naruto Uzumaki"
                    />
                    <Text fontSize="md">Past Booking</Text>
                  </Flex>
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="connections"
                  p={5}
                  rounded="md"
                  _selected={{ bg: "gray.600", fontWeight: "bold", p: 7 }}
                  width={{ base: "full", md: "full" }}
                  justifyContent="flex-start"
                >
                  <Flex align="center" gap={3}>
                    <Box position="relative" boxSize="40px">
                      <Image
                        src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-UserProfile/original/3009d40c-3aa7-498b-a887-ba641d3bbcc6.png?im_w=240"
                        boxSize="24px"
                        borderRadius="full"
                        fit="cover"
                        alt="Avatar 1"
                        position="absolute"
                        top="0"
                        left="0"
                        zIndex="3"
                      />
                      <Image
                        src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-UserProfile/original/63335677-55ad-4489-8616-91a9a4059405.png?im_w=240"
                        boxSize="24px"
                        borderRadius="full"
                        fit="cover"
                        alt="Avatar 2"
                        position="absolute"
                        top="0"
                        left="16px"
                        zIndex="2"
                      />
                      <Image
                        src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-UserProfile/original/29771a06-933c-47e5-8be9-0067d2bfd6b5.png?im_w=240"
                        boxSize="24px"
                        borderRadius="full"
                        fit="cover"
                        alt="Avatar 3"
                        position="absolute"
                        top="16px"
                        left="8px"
                        zIndex="1"
                      />
                    </Box>
                    <Text fontSize="md">Connections</Text>
                  </Flex>
                </Tabs.Trigger>
              </Tabs.List>
            </Box>
          </Box>

          {/* Right Content Area */}
          <Box
            flex="1"
            borderTop={{ base: "1px solid", md: "none" }}
            borderBottom="none"
            p={{ base: 4, md: 10 }}
            px={{ base: 4, md: 10 }}
          >
            <Tabs.Content value="about" width="full">
              {isLoading ? (
                <Box>
                  <SkeletonCircle height="100px" width="100px" mb={4} />
                  <Skeleton height="24px" width="200px" mb={2} />
                  <Skeleton height="18px" width="100px" mb={6} />
                  <SkeletonText mt="4" noOfLines={4} gap="4" />
                </Box>
              ) : (
                account && <AboutTab account={account} />
              )}
            </Tabs.Content>

            <Tabs.Content value="request">
              <BookingTab />
            </Tabs.Content>

            <Tabs.Content value="connections">
              {followingLoading ? (
                <Center height="full">
                  <Icon size="2xl">
                    <HashLoader color="white" />
                  </Icon>
                </Center>
              ) : (
                following && <ConnectionTab following={following} />
              )}
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Container>
    </Box>
  );
}
