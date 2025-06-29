"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import theme from "@/theme";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState, useLayoutEffect } from "react";
import { SessionProvider } from "next-auth/react";

function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1 * 60 * 1000, 
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });
}

let browserQueryClient: QueryClient | null = null;

function getQueryClient() {
  if (isServer) {
    // In server, we are always creating new object because, we don't want to dehydrate all the data (from other requests) inside Query Client
    console.log("SSR");
    return createQueryClient();
  } else {
    // Using the same client, to access the cached data between Client Components
    if (!browserQueryClient) {
      browserQueryClient = createQueryClient();
    }
    return browserQueryClient;
  }
}

export function Provider(props: ColorModeProviderProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const queryClient = getQueryClient();

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <SessionProvider refetchOnWindowFocus={false}>
      <ChakraProvider value={theme}>
        <QueryClientProvider client={queryClient}>
          <ColorModeProvider {...props} forcedTheme="dark" />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}
