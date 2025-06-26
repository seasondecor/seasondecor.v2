"use client";

import { FC } from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Badge,
  Stack,
} from "@chakra-ui/react";
import { DecorServiceSchema } from "@/types";
import Link from "next/link";
import DOMPurify from "dompurify";
import { IconCaretRight } from "@tabler/icons-react";

interface DecorServiceCardProps {
  decorService: DecorServiceSchema;
}

export const DecorServiceCard: FC<DecorServiceCardProps> = ({
  decorService,
}) => {
  return (
    <Link href="#">
      <Box
        width="full"
        mb={10}
        cursor="pointer"
        borderRadius="lg"
        display="grid"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap={4}
          mb={4}
          order={{ base: 999, md: 0 }}
          mt={{ base: 4, md: 0 }}
        >
          <VStack align="flex-start" gap={1} maxW={{ base: "100%", md: "70%" }}>
            <HStack gap={3}>
              <Heading size="2xl">{decorService.style}</Heading>
              <Badge variant="surface">{decorService.categoryName}</Badge>
            </HStack>
            <Box
              fontSize="sm"
              color="gray.300"
              maxW={{ base: "full", md: "25vw" }}
            >
              <Text truncate lineClamp={2} mt={2}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(decorService.description),
                  }}
                />
              </Text>
            </Box>
          </VStack>

          <Button
            width={{base: "full", md: "auto"}}
            variant="outline"
            colorPalette="gray"
            alignSelf="start"
            rounded="full"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-4px)",
              boxShadow: "lg",
            }}
          >
            <IconCaretRight />
            View more
          </Button>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
          {(decorService.images ?? []).slice(0, 3).map((img, idx) => (
            <Box
              key={img.id ?? idx}
              display={{ base: idx === 0 ? "block" : "none", md: "block" }}
            >
              <Image
                src={img.imageURL}
                alt={`Thumbnail ${idx + 1}`}
                width="100%"
                aspectRatio={4 / 3}
                objectFit="cover"
                borderRadius="lg"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Link>
  );
};
