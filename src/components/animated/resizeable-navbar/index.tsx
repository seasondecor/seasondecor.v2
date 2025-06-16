"use client";
// import { cn } from "@/utils/index";
import React, { useRef, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Logo from "@/components/layout/logo";
import { Flex, Heading, Box, Link as ChakraLink } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import Link from "next/link";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link?: string;
    menu?: {
      title: string;
      items: {
        name: string;
        description?: string;
        link: string;
        icon?: React.ReactNode;
      }[];
    };
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const MotionBox = motion.create(Box);

  return (
    <MotionBox
      as="header"
      ref={ref}
      position="sticky"
      insetX={0}
      top={0}
      zIndex="banner"
      w="full"
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </MotionBox>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  const MotionBox = motion.create(Box);

  return (
    <MotionBox
      animate={{
        backdropFilter: visible ? "blur(100px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 10 : 0,
        x: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
      }}
      minW="800px"
      position="relative"
      zIndex={60}
      mx="auto"
      display={{ base: "none", lg: "flex" }}
      w="full"
      maxW="7xl"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      alignSelf="flex-start"
      borderRadius="full"
      bg="transparent"
      px={5}
      py={3}
      className={className}
    >
      {children}
    </MotionBox>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const MotionBox = motion.create(Box);

  return (
    <MotionBox
      onMouseLeave={() => setHovered(null)}
      display={{ base: "none", lg: "flex" }}
      flex={1}
      flexDir="row"
      alignItems="center"
      justifyContent="center"
      gap={2}
      fontWeight="medium"
      transition={{ duration: 0.2 }}
      className={className}
    >
      {items.map((item, idx) => (
        <Box
          key={`nav-item-${idx}`}
          position="relative"
          onMouseEnter={() => setHovered(idx)}
        >
          <ChakraLink
            as={Link}
            onClick={onItemClick}
            className="relative"
            href={item.link}
            focusRing="none"
            _hover={{ textDecoration: "none" }}
          >
            {hovered === idx && (
              <MotionBox
                layoutId="hovered"
                position="absolute"
                inset={0}
                h="full"
                w="full"
                borderRadius="full"
                bg="blue"
              />
            )}
            <Heading
              as="h1"
              size="sm"
              position="relative"
              fontWeight="medium"
              zIndex={20}
              px={4}
              py={2}
            >
              {item.name}
            </Heading>
          </ChakraLink>
        </Box>
      ))}
    </MotionBox>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  const bgColor = useColorModeValue("whiteAlpha.800", "blackAlpha.800");
  const MotionBox = motion.create(Box);
  return (
    <MotionBox
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
        x: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      position="relative"
      zIndex={50}
      mx="auto"
      display={{ base: "flex", lg: "none" }}
      w="full"
      maxW="calc(100vw - 2rem)"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      bg={visible ? bgColor : "transparent"}
      px={0}
      py={2}
      className={className}
    >
      {children}
    </MotionBox>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <Box
      display="flex"
      w="full"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      className={className}
      px={4}
    >
      {children}
    </Box>
  );
};

export const MobileNavMenu = ({
  children,
  isOpen,
}: //onClose,
MobileNavMenuProps) => {
  const bgColor = useColorModeValue("white", "black");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const boxShadow = useColorModeValue(
    "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
    "0 0 24px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 4px rgba(0, 0, 0, 0.15), 0 16px 68px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(255, 255, 255, 0.05) inset"
  );
  return (
    <AnimatePresence>
      {isOpen && (
        <Box
          bg={bgColor}
          boxShadow={boxShadow}
          borderColor={borderColor}
          borderWidth={1}
          px={4}
          py={8}
          position="absolute"
          top="4rem"
          left={0}
          right={0}
          zIndex={50}
          borderRadius="lg"
        >
          {children}
        </Box>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  const MotionBox = motion.create(Box);
  return (
    <AnimatePresence mode="wait" initial={false}>
      {isOpen ? (
        <MotionBox
          key="close-icon"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 180, opacity: 1 }}
          exit={{ rotate: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconX onClick={onClick} className="cursor-pointer" />
        </MotionBox>
      ) : (
        <MotionBox
          key="menu-icon"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconMenu2 onClick={onClick} className="cursor-pointer" />
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export const NavbarLogo = () => {
  return (
    <Flex direction="row" alignItems="center" gap={2}>
      <Logo />
    </Flex>
  );
};
