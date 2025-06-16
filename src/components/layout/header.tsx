"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/animated/resizeable-navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Flex,
  Button,
  Menu,
  Portal,
  Separator,
  Stack,
  Text,
  IconButton,
  CloseButton,
  Drawer,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  IconMenu2,
  IconHelp,
  IconHomeBolt,
  IconLogin2,
  IconShoppingCart,
  IconBellFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const navItems = [
    {
      name: "Providers",
      link: "providers",
    },
    {
      name: "About Us",
      link: "about-us",
    },
    {
      name: "Shop",
      link: "shop",
    },
    {
      name: "Support",
      link: "support",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <Flex direction="row" gap={3} alignItems="center">
            <IconButton
              aria-label="cart"
              variant="ghost"
              size="md"
              rounded="full"
            >
              <IconShoppingCart />
            </IconButton>
            <Drawer.Root size="md">
              <Drawer.Trigger asChild>
                <IconButton
                  aria-label="notifications"
                  variant="ghost"
                  size="md"
                  rounded="full"
                >
                  <IconBellFilled />
                </IconButton>
              </Drawer.Trigger>
              <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                  <Drawer.Content>
                    <Drawer.Header>
                      <Drawer.Title>Drawer Title</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body>Notifications here</Drawer.Body>
                    <Drawer.Footer>
                      <Drawer.ActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                      </Drawer.ActionTrigger>
                      <Button>Save</Button>
                    </Drawer.Footer>
                    <Drawer.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Drawer.CloseTrigger>
                  </Drawer.Content>
                </Drawer.Positioner>
              </Portal>
            </Drawer.Root>

            <Menu.Root>
              <Menu.Trigger asChild zIndex="banner">
                <Button
                  colorPalette="gray"
                  variant="surface"
                  size="sm"
                  rounded="full"
                >
                  <IconMenu2 />
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content
                    boxShadow="lg"
                    borderRadius="md"
                    p={4}
                    minW="200px"
                    mt={2}
                  >
                    <Stack gap={2}>
                      <Menu.Item
                        value="Help Center"
                        py={2}
                        px={3}
                        transition="background-color 0.2s"
                        display="flex"
                        alignItems="center"
                        gap={2}
                        cursor="pointer"
                      >
                        <IconHelp />
                        Help Center
                      </Menu.Item>
                      <Separator size="md" />
                      <Menu.Item
                        value="become-provider"
                        py={2}
                        px={3}
                        transition="background-color 0.2s"
                        display="flex"
                        alignItems="center"
                        gap={2}
                        cursor="pointer"
                        onClick={() => router.push("/apply")}
                      >
                        <Flex direction="column" gap={1} maxW="200px">
                          <Text fontWeight="bold"> Become a provider</Text>

                          <Text fontSize="sm" color="gray.500" lineClamp="2">
                            Join our network and start earning today!
                          </Text>
                        </Flex>
                        <IconHomeBolt color="blue" />
                      </Menu.Item>
                      <Menu.Item
                        value="Find a provider"
                        py={2}
                        px={3}
                        transition="background-color 0.2s"
                        display="flex"
                        alignItems="center"
                        gap={2}
                        cursor="pointer"
                      >
                        Find a provider
                      </Menu.Item>
                      <Menu.Item
                        value="explore-services"
                        py={2}
                        px={3}
                        transition="background-color 0.2s"
                        display="flex"
                        alignItems="center"
                        gap={2}
                        cursor="pointer"
                      >
                        Explore services
                      </Menu.Item>
                      <Separator size="md" />
                      <Menu.Item
                        value="export"
                        py={2}
                        px={3}
                        transition="background-color 0.2s"
                        display="flex"
                        alignItems="center"
                        gap={2}
                        cursor="pointer"
                        onClick={() => router.push("/login")}
                      >
                        <IconLogin2 />
                        Login or Sign Up
                      </Menu.Item>
                    </Stack>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Flex>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <ChakraLink
                as={Link}
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative"
              >
                <Text fontWeight="bold">{item.name}</Text>
              </ChakraLink>
            ))}
            <Flex direction="column" gap={2} mt={4} width="100%">
              <Button
                onClick={() => router.push("/login")}
                colorPalette="gray"
                variant="surface"
              >
                Login
              </Button>
              <Button
                onClick={() => router.push("/signup")}
                colorPalette="gray"
                variant="solid"
              >
                Sign Up
              </Button>
            </Flex>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  );
}
