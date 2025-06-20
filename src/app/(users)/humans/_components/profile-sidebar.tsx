"use client";

import {
  HStack,
  VStack,
  Button,
  Image,
  Heading,
  Badge,
  Box,
  Text,
  Link,
  Status,
  ButtonGroup,
  Separator,
} from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";

import {
  IconMapPin,
  IconBrandGithub,
  IconBrandX,
  IconCircleCheck,
  IconPhone,
  IconArticle,
  IconHammer,
  IconInfoCircle,
  IconUserPlus,
  IconUserMinus,
  IconMessageCircle,
} from "@tabler/icons-react";
import { ProviderSchema } from "@/types";
import { FC } from "react";

export interface ProfileSidebarProps {
  provider: ProviderSchema;
  followed?: boolean;
  onFollowClick?: () => void | Promise<void>;
  onUnFollowClick?: () => void | Promise<void>;
}

export const ProfileSidebar: FC<ProfileSidebarProps> = ({
  provider,
  followed: baseFollowed,
  onFollowClick,
  onUnFollowClick,
}: ProfileSidebarProps) => {
  return (
    <VStack align="start" gap={6} width="full">
      <Image
        src={provider.avatar}
        boxSize={{ base: "120px", md: "150px" }}
        borderRadius="full"
        fit="cover"
        alt="Profile"
      />

      <VStack align="start" gap={4}>
        <Heading size="2xl" fontWeight="semibold">
          {provider.businessName}
        </Heading>
        {baseFollowed ? (
          <Button variant="outline" onClick={onUnFollowClick} size="sm">
            <IconUserMinus />
          </Button>
        ) : (
          <ButtonGroup>
            <Button variant="solid" onClick={onFollowClick} size="sm">
              <IconUserPlus /> Follow
            </Button>
            <Button
              colorPalette="black"
              variant="subtle"
              onClick={onFollowClick}
              size="sm"
            >
              <IconMessageCircle /> Message
            </Button>
          </ButtonGroup>
        )}
        <Separator size="xs" width="full" />
        <HStack>
          <Badge variant="subtle" size="sm" colorPalette="green">
            <IconCircleCheck size={14} />
            Provider
          </Badge>
          <Badge variant="surface" size="sm">
            <IconHammer size={14} />
            {provider.skillName}
          </Badge>
        </HStack>

        <VStack align="start" gap={3} mt={2}>
          <HStack fontSize="sm" color="whiteAlpha.800">
            <IconMapPin size={18} />
            <Text>{provider.address}</Text>
          </HStack>
          <HStack fontSize="sm" color="whiteAlpha.800">
            <IconPhone size={18} />
            <Text>{provider.phone}</Text>
          </HStack>
          <HStack fontSize="sm" color="whiteAlpha.800">
            <IconArticle size={18} />
            <Link href="https://zenorocha.com">zenorocha.com</Link>
          </HStack>
          <HStack>
            <Status.Root
              colorPalette={provider?.providerStatus ? "green" : "red"}
            >
              <Status.Indicator />
              {provider.providerStatus ? "Currently active" : "Busy right now"}
            </Status.Root>
            <Tooltip
              showArrow
              positioning={{ placement: "right-end" }}
              content={
                provider.providerStatus
                  ? "You can contact and schedule at the moment"
                  : "The provider is currently busy, you can contact later!"
              }
            >
              <IconInfoCircle size={20} />
            </Tooltip>
          </HStack>
        </VStack>

        <HStack gap={4} mt={2}>
          <Link href="https://github.com/zenorocha">
            <IconBrandGithub size={20} />
          </Link>
          <Link href="https://twitter.com/zenorocha">
            <IconBrandX size={20} />
          </Link>
        </HStack>
      </VStack>

      <Box mt={8}>
        <Heading size="md" mb={4}>
          Interests
        </Heading>
        <HStack gap={3}>
          <Box
            p={3}
            bg="whiteAlpha.100"
            borderRadius="full"
            _hover={{ bg: "whiteAlpha.200" }}
          >
            🎧
          </Box>
          <Box
            p={3}
            bg="whiteAlpha.100"
            borderRadius="full"
            _hover={{ bg: "whiteAlpha.200" }}
          >
            ☕
          </Box>
        </HStack>
      </Box>
    </VStack>
  );
};
