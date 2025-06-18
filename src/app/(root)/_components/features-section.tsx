"use client";

import { Box, Heading, Container } from "@chakra-ui/react";

export default function FeaturesSection() {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        insetX={0}
        top={0}
        zIndex={1}
        height="20rem"
        bgGradient="to-t"
        gradientFrom="white"
        gradientTo="transparent"
        opacity={1}
        _dark={{
          bgGradient: "to-b",
          gradientFrom: "black",
          gradientTo: "transparent",
        }}
      />

      <Container maxW="7xl" mx="auto">
        <Box
          position="relative"
          px={{ base: 6, md: 12 }}
          py={{ base: 16, md: 24, lg: 80 }}
          textAlign="center"
          letterSpacing="-2px"
          mb=".2rem"
        >
          <Heading
            as="h3"
            fontSize="6xl"
            fontWeight="extrabold"
            lineHeight="1.2"
            bgGradient="to-r"
            gradientFrom="purple.400"
            gradientTo="blue.400"
            bgClip="text"
            text-align="center"
          >
            Zero Cost, at the cool
          </Heading>
        </Box>
      </Container>
    </Box>
  );
}
