"use client";

import { Icon, Center } from "@chakra-ui/react";
import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <Center minH="100vh">
      <Icon size="2xl">
        <HashLoader color="white" />
      </Icon>
    </Center>
  );
}
