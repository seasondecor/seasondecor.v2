import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Box } from "@chakra-ui/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`!scroll-smooth ${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Header />
          <Box as="main">{children}</Box>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
