"use client";

import Link from "next/link";
import { Image, Stack, Flex } from "@chakra-ui/react";
import { clsx } from "clsx";
import { useColorMode } from "@/components/ui/color-mode";
import { useState, useEffect } from "react";

interface LogoProps {
  outsideStyle?: string;
  insideStyle?: string;
}

const Logo = ({ outsideStyle, insideStyle }: LogoProps) => {
  const { colorMode } = useColorMode();
  const [imageSrc, setImageSrc] = useState<string>("/logo-white.svg"); // Default to light mode image

  useEffect(() => {
    // This will only run on the client side after hydration
    setImageSrc(colorMode === "dark" ? "/logo-black.svg" : "/logo-white.svg");
  }, [colorMode]);

  return (
    <Flex className={clsx("hidden", outsideStyle)}>
      <Stack className={clsx("", insideStyle)}>
        <Link href="/">
          <>
            <Stack position="relative" zIndex={20}>
              <Image
                src={imageSrc} // Use the state variable for src
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
