"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import theme from "@/theme";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EmotionCacheProvider } from "@/emotion";

const queryClient = new QueryClient();
export function Provider(props: ColorModeProviderProps) {
  return (
    <EmotionCacheProvider>
      <ChakraProvider value={theme}>
        <QueryClientProvider client={queryClient}>
          <ColorModeProvider {...props} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ChakraProvider>
    </EmotionCacheProvider>
  );
}
