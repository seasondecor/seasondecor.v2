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
  Badge,
  AbsoluteCenter,
  ProgressCircle,
  Separator,
  Alert,
} from "@chakra-ui/react";
import {
  IconLabel,
  IconMail,
  IconMap2,
  IconPhone,
  IconGenderGenderfluid,
  IconShield,
  IconCake,
} from "@tabler/icons-react";
import { AccountProfile } from "@/types";
import { Tooltip } from "@/components/ui/tooltip";

interface AboutTabProps {
  account: AccountProfile;
}

export const AboutTab: React.FC<AboutTabProps> = ({ account }) => {
  if (!account) {
    return <Text>Loading...</Text>;
  }

  const missingFields = [
    !account.address,
    !account.gender,
    !account.dateOfBirth,
    !account.phoneNumber,
  ].some(Boolean);

  return (
    <Box flex="1" borderTop="none" borderBottom="none">
      {/* About Me Section */}
      <Flex
        justify="space-between"
        align={{ base: "stretch", md: "none" }}
        mb={6}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 0 }}
      >
        <Heading
          as="h2"
          fontSize="4xl"
          width={{ base: "100%", md: "25rem" }}
          mb={{ base: 2, md: 0 }}
        >
          About me
        </Heading>

        {missingFields ? (
          <Alert.Root
            title="Info"
            status="info"
            variant="surface"
            borderRadius="lg"
            alignItems="center"
            size="sm"
            animation="slide-from-right .3s ease-out"
          >
            <Alert.Indicator />
            <Alert.Content color="fg">
              <Alert.Title>Note</Alert.Title>
              <Alert.Description>
                Update your informations to get access to the services.
              </Alert.Description>
            </Alert.Content>
            <Button alignSelf={{ base: "center", md: "center" }}>Update</Button>
          </Alert.Root>
        ) : (
          <Button
            size="sm"
            variant="outline"
            alignSelf={{ base: "flex-end", md: "center" }}
          >
            Edit
          </Button>
        )}
      </Flex>
      <VStack align="flex-start" gap={6} mb={8}>
        <Box
          px={20}
          py={10}
          borderColor="gray.700"
          borderRadius="3xl"
          boxShadow="custom"
          textAlign={{ base: "center", md: "center" }}
          mx={{ base: "auto", md: "unset" }}
        >
          <Avatar.Root shape="full" size="2xl">
            <Avatar.Fallback name="Random User" />
            <Avatar.Image src={account.avatar} />
          </Avatar.Root>

          <Text fontSize="xl" fontWeight="bold">
            {account.firstName} {account.lastName}
          </Text>
          <Text fontSize="sm" color="gray.500">
            Guest
          </Text>
        </Box>

        <HStack gap={3} align="center">
          <HStack>
            <IconLabel />
            <Text>Display name:</Text>
            <Text fontWeight="semibold">
              {account.firstName} {account.lastName}
            </Text>
          </HStack>
          <Tooltip showArrow content="This is your slug">
            <Badge variant="surface">{account.slug}</Badge>
          </Tooltip>
        </HStack>

        <HStack gap={3} align="center">
          <IconMail />
          <Text>Email:</Text>
          <Text fontWeight="semibold"> {account.email}</Text>
        </HStack>

        <HStack gap={3} align="center">
          <IconCake />
          <Text>Date of birth:</Text>
          <Text fontWeight="semibold"> {account.dateOfBirth || "N/A"}</Text>
        </HStack>

        <HStack gap={3} align="center">
          <IconGenderGenderfluid />
          <Text>Gender:</Text>
          <Text fontWeight="semibold"> {account.gender || "N/A"}</Text>
        </HStack>

        <HStack gap={3} align="center">
          <IconPhone />
          <Text>Phone number:</Text>
          <Text fontWeight="semibold"> {account.phoneNumber || "N/A"}</Text>
        </HStack>

        <HStack gap={3} align="center">
          <IconMap2 />
          <Text>Address:</Text>
          <Text fontWeight="semibold"> {account.address || "N/A"}</Text>
        </HStack>

        <HStack gap={3} align="center">
          <IconShield />
          <Text>Reputation point:</Text>
          <ProgressCircle.Root
            size="xl"
            colorPalette={
              account.reputation >= 70
                ? "green"
                : account.reputation >= 30
                ? "yellow"
                : "red"
            }
            value={account.reputation}
          >
            <ProgressCircle.Circle>
              <ProgressCircle.Track />
              <ProgressCircle.Range />
            </ProgressCircle.Circle>
            <AbsoluteCenter>
              <ProgressCircle.ValueText />
            </AbsoluteCenter>
          </ProgressCircle.Root>
        </HStack>
      </VStack>
      <Separator size="md" my={4} />
      <HStack gap={3} align="center">
        <Text>Account status:</Text>
        <Badge size="md" colorPalette={account.isDisable ? "red" : "green"}>
          {account.isDisable ? "Disabled" : "Active"}
        </Badge>
      </HStack>
    </Box>
  );
};
