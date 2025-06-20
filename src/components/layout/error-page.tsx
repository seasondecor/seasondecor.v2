import { EmptyState, VStack, Button, Center } from "@chakra-ui/react";

import { IconArrowLeft, IconExclamationCircle } from "@tabler/icons-react";

import Link from "next/link";

interface ErrorPageProps {
  code: number;
  message?: string;
}

export function ErrorPage({ code, message }: ErrorPageProps) {
  return (
    <Center minH="100vh">
      <EmptyState.Root size="lg">
        <EmptyState.Content>
          <EmptyState.Indicator>
            <IconExclamationCircle />
          </EmptyState.Indicator>
          <VStack textAlign="center">
            <EmptyState.Title>{code}</EmptyState.Title>
            <EmptyState.Description>{message}</EmptyState.Description>
          </VStack>

          <Link href="/">
            <Button variant="subtle">
              <IconArrowLeft />
              Go back Home
            </Button>
          </Link>
        </EmptyState.Content>
      </EmptyState.Root>
    </Center>
  );
}
