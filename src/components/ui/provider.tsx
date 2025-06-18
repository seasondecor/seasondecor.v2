"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import theme from "@/theme";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useLayoutEffect } from "react";
import { SessionProvider } from "next-auth/react";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

export function Provider(props: ColorModeProviderProps) {
  const [mounted, setMounted] = useState<boolean>(false);

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
