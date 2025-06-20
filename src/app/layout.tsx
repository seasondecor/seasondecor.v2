import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Header } from "@/components";
import { Footer } from "@/components";
import { Box } from "@chakra-ui/react";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SeasonDecor",
  description: "A platform for finding the best decorators for your home",
  metadataBase: new URL("https://www.seasondecor.netlify.app"),
  icons: {
    icon: "/fav-icon.svg",
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en" suppressHydrationWarning className={bricolage.variable}>
      <body className={`___next`}>
        <Provider>
          <Box
            bgImage="url('/static/profile-bg-desktop.png')"
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            as="main"
            overflow="unset"
            minH="100vh"
          >
            <Header />

            {children}
            <Footer />
          </Box>
        </Provider>
      </body>
    </html>
  );
}
