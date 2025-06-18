"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  Icon,
  Image,
} from "@chakra-ui/react";
import { CardSwap, Card } from "@/components/animated";
import {
  IconListSearch,
  IconAdjustments,
  IconCalendarClock,
  IconUserFilled,
  IconPackage,
  IconHeartBolt,
  IconPointFilled,
  IconPhoneRinging,
  IconHeartbeat,
  IconWorldSearch,
} from "@tabler/icons-react";
import { CountUp } from "@/components/animated";
import dynamic from "next/dynamic";
import FeaturesSection from "./_components/features-section";

export default function Home() {
  const NoSSR = dynamic(
    () => import("@/components/animated").then((mod) => mod.BeamsBg),
    {
      ssr: false,
    }
  );
  return (
    <>
      <Box position="relative" minH="100vh" mt="-68px">
        <Box
          position="absolute"
          inset={0}
          width="100%"
          height="100vh"
          zIndex={0}
          overflow="hidden"
          bgColor="black"
        >
          <NoSSR />
          <Box
            position="absolute"
            insetX={0}
            bottom={0}
            zIndex={10}
            height="900px"
            bgGradient="to-t"
            gradientFrom="white"
            gradientTo="transparent"
            opacity={1}
            _dark={{
              bgGradient: "to-t",
              gradientFrom: "black",
              gradientTo: "transparent",
            }}
          />
        </Box>
        <Box as="section" position="relative" zIndex={10} pt={20}>
          <Container
            maxW="7xl"
            px={{ base: 6, md: 12 }}
            pt={{ base: 16, md: 24, lg: 32 }}
          >
            <Flex
              direction={{ base: "column", lg: "row" }}
              align="center"
              justify="space-between"
              gap={{ base: 12, lg: 20 }}
            >
              {/* Left side content */}
              <Box w={{ base: "full", lg: "50%" }}>
                <Badge
                  px={3}
                  py={1}
                  borderRadius="full"
                  bg="purple.500"
                  fontSize="sm"
                  mb={8}
                >
                  ✨ Introducing Our Platform
                </Badge>

                <Heading
                  fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                  fontWeight="bold"
                  lineHeight="unset"
                  mb={4}
                  textShadow="0 0.1rem 0 hsla(0, 0%, 0%, 0.1), 0 0 5rem hsla(0, 0%, 0%, 0.5)"
                  _dark={{
                    textShadow:
                      "0 0.1rem 0 hsla(0, 0%, 100%, 0.1), 0 0 5rem hsla(0, 0%, 100%, 0.5)",
                  }}
                >
                  Transform Your Space Experience
                </Heading>

                <Text fontSize={{ base: "lg", md: "xl" }} maxW="xl" mb={8}>
                  Connect with professional decorators who bring your vision to
                  life. Our platform makes it easy to
                </Text>

                <VStack gap={4} align="stretch" mb={8}>
                  <HStack gap={3} direction="row">
                    <Icon size="lg" color="purple.700">
                      <IconListSearch />
                    </Icon>

                    <Text>Find your perfect decoration style</Text>
                  </HStack>
                  <HStack gap={3}>
                    <Icon size="lg" color="purple.700">
                      <IconAdjustments />
                    </Icon>
                    <Text>Free to customize your experience</Text>
                  </HStack>
                  <HStack gap={3}>
                    <Icon size="lg" color="purple.700">
                      <IconCalendarClock />
                    </Icon>
                    <Text>Book with confidence</Text>
                  </HStack>
                </VStack>

                <Box
                  backdropFilter={{ base: "none", md: "blur(12px)" }}
                  p={{ base: 3, md: 6 }}
                  borderRadius={{ base: "lg", md: "xl" }}
                  border="1px solid"
                  borderColor="purple.500"
                  style={{ borderColor: "rgba(159, 122, 234, 0.2)" }}
                  mb={{ base: 4, md: 8 }}
                  bg={{ base: "gray.950", md: "rgba(255, 255, 255, 0.1)" }}
                >
                  <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 3 }}
                    gap={{ base: 3, md: 6 }}
                  >
                    <VStack
                      align="start"
                      gap={{ base: 1, md: 2 }}
                      p={{ base: 1, md: 0 }}
                    >
                      <HStack align="center" gap={{ base: 1, md: 2 }}>
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          fontWeight="medium"
                        >
                          Active Providers
                        </Text>
                        <Icon
                          size={{ base: "xs", md: "md" }}
                          color="green"
                          animation="pulse 2s infinite"
                        >
                          <IconPointFilled />
                        </Icon>
                      </HStack>

                      <HStack gap={{ base: 1, md: 2 }}>
                        <Badge
                          size={{ base: "sm", md: "lg" }}
                          variant="plain"
                          px={{ base: 1.5, md: 3 }}
                          py={{ base: 0.5, md: 1 }}
                        >
                          <CountUp
                            from={0}
                            to={250}
                            separator=","
                            direction="up"
                            duration={2}
                            className="count-up-text"
                          />
                        </Badge>
                        <Icon size={{ base: "xs", md: "md" }}>
                          <IconUserFilled />
                        </Icon>
                      </HStack>
                    </VStack>

                    <VStack
                      align="start"
                      gap={{ base: 1, md: 2 }}
                      p={{ base: 1, md: 0 }}
                    >
                      <HStack align="center" gap={{ base: 1, md: 2 }}>
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          fontWeight="medium"
                        >
                          Services Available
                        </Text>
                        <Icon
                          size={{ base: "xs", md: "md" }}
                          color="blue.500"
                          animation="fade-in 2s infinite"
                        >
                          <IconPhoneRinging />
                        </Icon>
                      </HStack>

                      <HStack gap={{ base: 1, md: 2 }}>
                        <Badge
                          size={{ base: "sm", md: "lg" }}
                          variant="plain"
                          px={{ base: 1.5, md: 3 }}
                          py={{ base: 0.5, md: 1 }}
                        >
                          <CountUp
                            from={0}
                            to={1000}
                            separator=","
                            direction="up"
                            duration={2}
                            className="count-up-text"
                          />
                        </Badge>
                        <Icon size={{ base: "xs", md: "md" }}>
                          <IconPackage />
                        </Icon>
                      </HStack>
                    </VStack>

                    <VStack
                      align="start"
                      gap={{ base: 1, md: 2 }}
                      p={{ base: 1, md: 0 }}
                    >
                      <HStack align="center" gap={{ base: 1, md: 2 }}>
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          fontWeight="medium"
                        >
                          Happy Customers
                        </Text>
                        <Icon
                          size={{ base: "xs", md: "md" }}
                          color="red.500"
                          animation="bounce 2s infinite"
                        >
                          <IconHeartbeat />
                        </Icon>
                      </HStack>

                      <HStack gap={{ base: 1, md: 2 }}>
                        <Badge
                          size={{ base: "sm", md: "lg" }}
                          variant="plain"
                          px={{ base: 1.5, md: 3 }}
                          py={{ base: 0.5, md: 1 }}
                        >
                          <CountUp
                            from={0}
                            to={5000}
                            separator=","
                            direction="up"
                            duration={2}
                            className="count-up-text"
                          />
                        </Badge>
                        <Icon size={{ base: "xs", md: "md" }}>
                          <IconHeartBolt />
                        </Icon>
                      </HStack>
                    </VStack>
                  </SimpleGrid>
                </Box>

                <HStack gap={4} direction={{ base: "column", sm: "row" }}>
                  <Button
                    bg="purple.600"
                    _hover={{ bg: "purple.700" }}
                    color="white"
                  >
                    Get Started Now
                  </Button>
                  <Button
                    variant="outline"
                    borderColor="purple.500"
                    _hover={{ bg: "purple.500" }}
                  >
                    Customize
                  </Button>
                </HStack>
              </Box>

              {/* Right side with card swap */}
              <Box
                w={{ base: "full", lg: "50%" }}
                display={{ base: "none", md: "block" }}
                h="500px"
                position="relative"
              >
                <CardSwap
                  width={500}
                  height={400}
                  cardDistance={60}
                  verticalDistance={70}
                  delay={4000}
                  pauseOnHover={true}
                >
                  <Card className="p-6 bg-[#1A1A1A] text-white flex flex-col justify-between">
                    <HStack>
                      <Icon size="lg">
                        <IconWorldSearch />
                      </Icon>
                      <Heading size="md" py={2} px={2}>
                        Reliable
                      </Heading>
                    </HStack>
                    <Text color="gray.300" px={2} pb={1}>
                      Find your perfect match base on your preferences
                    </Text>
                    <Image
                      src="/hero-vid-1.gif"
                      alt="hero-vid-1"
                      width="full"
                      height="full"
                      aspectRatio={4 / 3}
                      borderRadius="md"
                      boxShadow="xl"
                    />
                  </Card>

                  <Card className="p-6 bg-[#1A1A1A] text-white flex flex-col justify-between">
                    <HStack>
                      <Icon size="lg">
                        <IconPointFilled />
                      </Icon>
                      <Heading size="md" py={2} px={2}>
                        Customizable
                      </Heading>
                    </HStack>
                    <Text color="gray.300" px={2} pb={1}>
                      Free to share your customization ideas with our providers.
                    </Text>
                    <Image
                      src="/hero-vid-2.gif"
                      alt="hero-vid-2"
                      width="full"
                      height="full"
                      aspectRatio={4 / 3}
                      borderRadius="md"
                      boxShadow="xl"
                    />
                  </Card>

                  <Card className="p-6 bg-[#1A1A1A] text-white flex flex-col justify-between">
                    <HStack>
                      <Icon size="lg">
                        <IconAdjustments />
                      </Icon>
                      <Heading size="md" py={2} px={2}>
                        Easy to communicate
                      </Heading>
                    </HStack>
                    <Text color="gray.300" px={2} pb={1}>
                      Communicate with your favorite providers through our
                      platform.
                    </Text>
                    <Image
                      src="/hero-vid-3.gif"
                      alt="hero-vid-2"
                      width="full"
                      height="full"
                      aspectRatio={4 / 3}
                      borderRadius="md"
                      boxShadow="xl"
                    />
                  </Card>
                </CardSwap>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
      <FeaturesSection />
    </>
  );
}
