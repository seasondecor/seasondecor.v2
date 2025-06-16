"use client";

import Link from "next/link";
import { Image, Stack, Flex } from "@chakra-ui/react";
import { clsx } from "clsx";

interface LogoProps {
  outsideStyle?: string;
  insideStyle?: string;
}

const Logo = ({ outsideStyle, insideStyle }: LogoProps) => {
  return (
    <Flex className={clsx("hidden", outsideStyle)}>
      <Stack className={clsx("", insideStyle)}>
        <Link href="/">
          <>
            <Stack position="relative" zIndex={20}>
              <Image
                src="/logo-black.svg" 
                alt="Logo"
                width="100%"
                height="45px"
              />
            </Stack>
          </>
        </Link>
      </Stack>
    </Flex>
  );
};

export default Logo;
