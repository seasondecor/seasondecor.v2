"use client";

import React from "react";
import {
  EmptyState,
  Box,
  VStack,
  Button,
  Center,
  Image,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { useGetCart } from "@/queries";
import { useSession } from "next-auth/react";
import { IconBasket } from "@tabler/icons-react";
import { HashLoader } from "react-spinners";

export default function CartPage() {
  const { data: session } = useSession();
  const accountId = session?.accountId;
  const { data: cart, isLoading } = useGetCart(accountId);

  if (isLoading) {
    return (
      <Center minH="100vh">
        <Icon size="2xl">
          <HashLoader color="white" />
        </Icon>
      </Center>
    );
  }

  if (!cart || !cart.cartItems || cart.cartItems.length === 0) {
    return (
      <Center minH="70vh">
        <EmptyState.Root size="lg">
          <EmptyState.Content>
            <EmptyState.Indicator>
              <Image
                src="https://cdn.divineshop.vn/static/4e0db8ffb1e9cac7c7bc91d497753a2c.svg"
                alt="empty"
              />
            </EmptyState.Indicator>
            <VStack textAlign="center">
              <EmptyState.Title>Your cart is empty!</EmptyState.Title>
              <EmptyState.Description>
                Explore our products and add items to your cart &lt;3
              </EmptyState.Description>
            </VStack>
          </EmptyState.Content>
        </EmptyState.Root>
      </Center>
    );
  }

  return <Box>cart</Box>;
}
