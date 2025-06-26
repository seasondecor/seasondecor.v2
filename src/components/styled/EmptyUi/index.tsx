"use client";
import { FC } from "react";
import { EmptyState, VStack, Center, Image } from "@chakra-ui/react";

interface EmptyUiProps {
  image: string;
  title: string;
  description: string;
}

export const EmptyUi: FC<EmptyUiProps> = ({ image, title, description }) => {
  return (
    <Center minH="70vh">
      <EmptyState.Root size="lg">
        <EmptyState.Content>
          <EmptyState.Indicator>
            <Image src={image} alt="empty" />
          </EmptyState.Indicator>
          <VStack textAlign="center">
            <EmptyState.Title>{title}</EmptyState.Title>
            <EmptyState.Description>{description}</EmptyState.Description>
          </VStack>
        </EmptyState.Content>
      </EmptyState.Root>
    </Center>
  );
};
