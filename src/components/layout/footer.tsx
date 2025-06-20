"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Box,
  Flex,
  Container,
  Text,
  Link,
  Grid,
  GridItem,
  Icon,
  Status,
  HStack,
  Badge,
} from "@chakra-ui/react";
import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

export const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }
  return (
    <Box
      as="footer"
      py={{ base: 10, md: 20 }}
      px={{ base: 4, md: 8 }}
      color="whiteAlpha.800"
      fontSize="sm"
    >
      <Container maxW="7xl">
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align="flex-start"
          gap={{ base: 10, lg: 20 }}
        >
          <Flex direction="column" gap={6} flex={1}>
            <Text>Tang Nhon Phu</Text>
            <Text>Ho Chi Minh, Vietnam</Text>

            <HStack gap={4} mt={2}>
              <Link href="#" _hover={{ opacity: 0.7 }}>
                <Icon as={IconBrandX} boxSize={5} />
              </Link>
              <Link href="#" _hover={{ opacity: 0.7 }}>
                <Icon as={IconBrandGithub} boxSize={5} />
              </Link>
              <Link href="#" _hover={{ opacity: 0.7 }}>
                <Icon as={IconBrandLinkedin} boxSize={5} />
              </Link>
              <Link href="#" _hover={{ opacity: 0.7 }}>
                <Icon as={IconBrandYoutube} boxSize={5} />
              </Link>
            </HStack>

            <Badge
              variant="surface"
              size="lg"
              rounded="full"
              width="fit-content"
            >
              <Status.Root>
                <Status.Indicator colorPalette="green" animation="pulse" />
              </Status.Root>
              All system operational
            </Badge>
          </Flex>

          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={{ base: 8, md: 10 }}
            flex={2}
          >
            <GridItem>
              <Text fontWeight="bold" mb={4}>
                Documentation
              </Text>
              <Flex direction="column" gap={2}>
                <Link href="#" _hover={{ color: "whiteAlpha.600" }}>
                  Getting Started
                </Link>
                <Link href="#" _hover={{ color: "whiteAlpha.600" }}>
                  API Reference
                </Link>
                <Link href="#" _hover={{ color: "whiteAlpha.600" }}>
                  Integrations
                </Link>
                <Link href="#" _hover={{ color: "whiteAlpha.600" }}>
                  Examples
                </Link>
                <Link href="#" _hover={{ color: "whiteAlpha.600" }}>
                  SDKs
                </Link>
              </Flex>
            </GridItem>

            <GridItem>
              <Text fontWeight="bold" mb={4}>
                Resources
              </Text>
              <Flex direction="column" gap={2}>
                <Link href="#" _hover={{ color: "whiteAlpha.600" }}>
                  Changelog
                </Link>
                <Link href="#" _hover={{ color: "whiteAlpha.600" }}>
                  Pricing
                </Link>
                <Link href="#" _hover={{ color: "whiteAlpha.600" }}>
                  Security
                </Link>
                <Link href="#" _hover={{ color: "whiteAlpha.600" }}>
                  SOC 2
                </Link>
                <Link href="#" _hover={{ color: "whiteAlpha.600" }}>
                  GDPR
                </Link>
                <Link href="#" _hover={{ color: "whiteAlpha.600" }}>
                  Brand
                </Link>
              </Flex>
            </GridItem>

            <GridItem>
              <Text fontWeight="bold" mb={4}>
                Company
              </Text>
              <Flex direction="column" gap={2}>
                <Link href="#" _hover={{ color: "whiteAlpha.600" }}>
                  About
                </Link>
              </Flex>
            </GridItem>

            <GridItem>
              <Text fontWeight="bold" mb={4}>
                Help
              </Text>
              <Flex direction="column" gap={2}>
                <Link href="#" _hover={{ color: "whiteAlpha.600" }}>
                  Contact
                </Link>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
}
