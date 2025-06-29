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
} from "@/components/animated";
import { useState, useCallback } from "react";
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
  Avatar,
  SkeletonCircle,
} from "@chakra-ui/react";
import {
  IconMenu2,
  IconHelp,
  IconHomeBolt,
  IconLogin2,
  IconShoppingCart,
  IconBellFilled,
  IconHeart,
  IconBrandBooking,
  IconMessageCircle,
  IconUserCircle,
  IconSettings,
  IconWorld,
  IconLogout,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useGetAccountById } from "@/queries";

export const Header = () => {
  const { data: session, status } = useSession();

  const accountId = session?.accountId;

  const { data: account, isLoading } = useGetAccountById(accountId);
  //console.log("Session data:", session);
  //console.log("Session status:", status);
  const pathname = usePathname();
  const router = useRouter();
  const navItems = [
    {
      name: "About",
      link: "/about-us",
    },
    {
      name: "Humans",
      link: "/humans",
    },

    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Support",
      link: "/support",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onLogout = useCallback(async () => {
    await signOut({ callbackUrl: "/login" });
  }, []);

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
              onClick={() => router.push("/cart")}
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

            {status === "authenticated" && (
              <Avatar.Root
                size="sm"
                cursor="pointer"
                shape="full"
                onClick={() => router.push("/users/profile")}
              >
                {isLoading ? (
                  <Avatar.Fallback>
                    <SkeletonCircle />
                  </Avatar.Fallback>
                ) : (
                  <>
                    <Avatar.Fallback name="customer" />
                    <Avatar.Image src={account?.avatar} />
                  </>
                )}
              </Avatar.Root>
            )}

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
                    {status === "authenticated" ? (
                      <Stack gap={2}>
                        <Menu.Item
                          value="wish-list"
                          py={2}
                          px={3}
                          transition="background-color 0.2s"
                          display="flex"
                          alignItems="center"
                          gap={2}
                          cursor="pointer"
                        >
                          <IconHeart />
                          Wishlists
                        </Menu.Item>
                        <Menu.Item
                          value="requests"
                          py={2}
                          px={3}
                          transition="background-color 0.2s"
                          display="flex"
                          alignItems="center"
                          gap={2}
                          cursor="pointer"
                          onClick={() => router.push("/apply")}
                        >
                          <IconBrandBooking />
                          Requests
                        </Menu.Item>
                        <Menu.Item
                          value="messages"
                          py={2}
                          px={3}
                          transition="background-color 0.2s"
                          display="flex"
                          alignItems="center"
                          gap={2}
                          cursor="pointer"
                        >
                          <IconMessageCircle />
                          Messages
                        </Menu.Item>
                        <Menu.Item
                          value="profile"
                          py={2}
                          px={3}
                          transition="background-color 0.2s"
                          display="flex"
                          alignItems="center"
                          gap={2}
                          cursor="pointer"
                        >
                          <IconUserCircle />
                          Profile
                        </Menu.Item>
                        <Separator size="md" />
                        <Menu.Item
                          value="account-settings"
                          py={2}
                          px={3}
                          transition="background-color 0.2s"
                          display="flex"
                          alignItems="center"
                          gap={2}
                          cursor="pointer"
                          onClick={() => router.push("/login")}
                        >
                          <IconSettings />
                          Account Settings
                        </Menu.Item>
                        <Menu.Item
                          value="languages"
                          py={2}
                          px={3}
                          transition="background-color 0.2s"
                          display="flex"
                          alignItems="center"
                          gap={2}
                          cursor="pointer"
                          onClick={() => router.push("/login")}
                        >
                          <IconWorld />
                          Languages Settings
                        </Menu.Item>
                        <Menu.Item
                          value="help-center"
                          py={2}
                          px={3}
                          transition="background-color 0.2s"
                          display="flex"
                          alignItems="center"
                          gap={2}
                          cursor="pointer"
                          onClick={() => router.push("/login")}
                        >
                          <IconHelp />
                          Help center
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
                        <Separator size="md" />
                        <Menu.Item
                          value="logout"
                          py={2}
                          px={3}
                          transition="background-color 0.2s"
                          display="flex"
                          alignItems="center"
                          gap={2}
                          cursor="pointer"
                          onClick={onLogout}
                        >
                          <IconLogout />
                          Log out
                        </Menu.Item>
                      </Stack>
                    ) : (
                      <Stack gap={2}>
                        <Menu.Item
                          value="help Center"
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
                    )}
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
};
