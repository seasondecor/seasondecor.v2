"use client";

import React from "react";
import DotGrid from "@/components/animated/dot-grid";
import { Flex, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex direction="column" justifyContent="start" minHeight="100vh">
      <Box position="relative" width="100%" height="200vh">
        <DotGrid
          dotSize={2}
          gap={22}
          baseColor="#BABABA"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={0}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </Box>
    </Flex>
  );
}
