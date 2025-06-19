"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Highlight,
  Wrap,
} from "@chakra-ui/react";
import { GlitchText, ProfileCard } from "@/components/animated";

export default function GuestProfilePage() {
  return (
    <Box as="section" minH="100vh" display="flex" alignItems="center" py={20}>
      <Container maxW="container.lg">
        <VStack gap={10} align="center">
          {/* Hero Section */}
          <VStack gap={6} textAlign="center">
            <GlitchText
              speed={1}
              enableShadows={true}
              enableOnHover={false}
              className="custom-class"
            >
              SeasonDecor
            </GlitchText>
            <Heading
              as="h1"
              size="4xl"
              fontWeight="medium"
              lineHeight="1.2"
              letterSpacing="-0.02em"
            >
              Building the modern seasonal decor platform
            </Heading>
            <Text
              fontSize="xl"
              color="whiteAlpha.800"
              maxW="700px"
              lineHeight="1.6"
            >
              The decor industry has come a long way in the road, but why is
              seasonal decoration stuck in the past? It doesn&apos;t have to be
              that way. We want to change that. We want to reimagine seasonal
              decor.
            </Text>
          </VStack>
          <Box
            as="section"
            position="relative"
            width="100vw"
            height="40vh"
            left="55%"
            transform="translateX(-50%)"
            bgImage="url('/static/wave.png')"
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
          />

          {/* Story Section */}
          <VStack gap={12} align="center" maxW="700px">
            <Heading
              as="h2"
              size="4xl"
              fontWeight="medium"
              letterSpacing="-0.02em"
            >
              Our story
            </Heading>

            <Text
              lineHeight="tall"
              fontSize="lg"
              color="whiteAlpha.900"
              textAlign="left"
            >
              <Highlight
                query={[
                  "connect",
                  "providers",
                  "customers",
                  "booking",
                  "decor service",
                  "seamless",
                  "platform",
                  "trusted",
                ]}
                styles={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                SeasonDecor was created to connect providers with customers for
                booking decor services. Our platform bridges the gap between
                talented decor professionals and people seeking to transform
                their spaces for any season or occasion. We believe that finding
                and booking trusted decor services should be seamless and
                accessible to everyone.
              </Highlight>
              <br />
              <br />
              By bringing together a community of providers and customers, we
              make it easy to discover, compare, and book the perfect decor
              service. Whether it&apos;s for a holiday, event, or a simple
              refresh, SeasonDecor is here to help you create memorable
              experiences with ease.
            </Text>
          </VStack>

          {/*TeamSection */}
          <Box as="section" mt={40}>
            <VStack gap={12} textAlign="center">
              <Heading
                as="h2"
                size="4xl"
                fontWeight="medium"
                letterSpacing="-0.02em"
              >
                The team behind it
              </Heading>
              <Text
                fontSize="md"
                color="whiteAlpha.800"
                maxW="500px"
                lineHeight="1.6"
                letterSpacing="wide"
              >
                A fully remote team on a mission to build <br /> the best
                decorator booking platform for customers.
              </Text>
            </VStack>
            <Wrap gap={30} mt={20} justify="center">
              <ProfileCard
                name="Steve Mai"
                title="FE Developer"
                handle="steve.mai"
                status="Online"
                contactText="Contact now"
                avatarUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => console.log("Contact clicked")}
              />
              <ProfileCard
                name="Quan Trong"
                title="BE Developer"
                handle="quantrong"
                status="Online"
                contactText="Contact now"
                avatarUrl="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => console.log("Contact clicked")}
              />
              <ProfileCard
                name="Quoc Cuong"
                title="BE Developer"
                handle="qcuong"
                status="Online"
                contactText="Contact now"
                avatarUrl="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => console.log("Contact clicked")}
              />
              <ProfileCard
                name="Kim Ngan"
                title="Mobile Developer"
                handle="k.ngan"
                status="Online"
                contactText="Contact now"
                avatarUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => console.log("Contact clicked")}
              />
            </Wrap>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
