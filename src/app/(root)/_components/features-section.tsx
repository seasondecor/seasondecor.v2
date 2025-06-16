"use client";

import { Box, Heading, Container } from "@chakra-ui/react";

export default function FeaturesSection() {
  return (
    <Container maxW="7xl" mt="none" mx="auto">
      <Box
        position="relative"
        px={{ base: 6, md: 12 }}
        mt="8em"
        py={{ base: 16, md: 24, lg: 32 }}
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
  );
}
