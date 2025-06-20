"use client";

import React from "react";
import {
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  List,
  Field,
  Input,
  Textarea,
  Button,
  InputGroup,
  Box,
  FileUpload,
  CloseButton,
  NumberInput,
  Image,
} from "@chakra-ui/react";
import { IconUpload, IconPhotoUp } from "@tabler/icons-react";

export default function ApplyPage() {
  return (
    <Container maxW="7xl" py={20}>
      <Flex direction={{ base: "column", md: "row" }} gap={{ base: 8, md: 48 }}>
        <VStack align="start" gap={4} flex={1}>
          <Heading
            as="h2"
            size={{ base: "4xl", md: "6xl" }}
            fontWeight="normal"
          >
            What happens after you apply
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.500">
            Once you submit your application, our onboarding team will carefully
            review your profile to ensure it matches the quality and values we
            bring to our customers.
          </Text>
        </VStack>
        <VStack align="start" gap={8} flex={2}>
          <VStack align="start" gap={4}>
            <Text fontSize={{ base: "md", md: "lg" }}>
              SeasonDecor is growing fast, and we&apos;re inviting talented
              decorators and home design professionals to join our network of
              trusted providers.
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }}>
              Whether you&apos;re an individual stylist, a home makeover expert,
              or a full-service design team, you&apos;ll get the tools to manage
              your services, reach new clients, and grow your business.
            </Text>
          </VStack>

          <VStack align="start" gap={4}>
            <Heading as="h2" size={{ base: "xl", md: "2xl" }} fontWeight="bold">
              In this role you will...
            </Heading>
            <List.Root gap={2} pl={{ base: "1.25rem" }} lineHeight="1.75rem">
              <List.Item fontSize={{ base: "sm", md: "md" }}>
                We review your service portfolio and previous work to assess
                your design and execution capabilities.
              </List.Item>
              <List.Item fontSize={{ base: "sm", md: "md" }}>
                You may be invited for a quick interview to understand your
                style, process, and tools used.
              </List.Item>
              <List.Item fontSize={{ base: "sm", md: "md" }}>
                If accepted, you&apos;ll get access to our provider dashboard
                where you can publish services, set pricing, and manage
                bookings.
              </List.Item>
              <List.Item fontSize={{ base: "sm", md: "md" }}>
                You&apos;ll be guided through a short onboarding process to help
                you start attracting clients immediately.
              </List.Item>
            </List.Root>
          </VStack>

          <VStack align="start" gap={4}>
            <Heading as="h2" size={{ base: "xl", md: "2xl" }} fontWeight="bold">
              Why join our platform...
            </Heading>
            <List.Root gap={2} pl={{ base: "1.25rem" }} lineHeight="1.75rem">
              <List.Item fontSize={{ base: "sm", md: "md" }}>
                Reach thousands of clients actively seeking home decoration
                services.Have 5 years of software engineering experience
              </List.Item>
              <List.Item fontSize={{ base: "sm", md: "md" }}>
                Get a beautiful public profile showcasing your services, photos,
                and client reviews.
              </List.Item>
              <List.Item fontSize={{ base: "sm", md: "md" }}>
                Built-in tools to manage your schedule, communicate with
                customers, and track payments.
              </List.Item>
              <List.Item fontSize={{ base: "sm", md: "md" }}>
                We handle marketing and lead generation so you can focus on
                creating beautiful spaces.
              </List.Item>
            </List.Root>
          </VStack>

          <VStack align="start" gap={4}>
            <Heading as="h2" size={{ base: "xl", md: "2xl" }} fontWeight="bold">
              What we look for in a provider...
            </Heading>
            <List.Root gap={2} pl={{ base: "1.25rem" }} lineHeight="1.75rem">
              <List.Item fontSize={{ base: "sm", md: "md" }}>
                Proven experience in interior decorating or home styling
                (residential or commercial).
              </List.Item>
              <List.Item fontSize={{ base: "sm", md: "md" }}>
                Strong portfolio of completed projects, with photos and client
                references if possible.
              </List.Item>
              <List.Item fontSize={{ base: "sm", md: "md" }}>
                Excellent communication and reliability—you respect
                clients&apos; time and vision.
              </List.Item>
              <List.Item fontSize={{ base: "sm", md: "md" }}>
                Ability to provide clear service packages with transparent
                pricing.
              </List.Item>
            </List.Root>
          </VStack>

          <VStack align="start" gap={4} width="full">
            <Heading as="h2" size={{ base: "xl", md: "2xl" }} fontWeight="bold">
              How to apply?
            </Heading>
            <Text fontSize={{ base: "md", md: "xl" }}>
              Now that you know about us, we would like to learn more about you.
            </Text>
            <Box
              as="form"
              width="100%"
              bg="gray.900"
              p={{ base: 4, md: 6 }}
              border="1px solid"
              borderColor="gray.600"
              rounded="lg"
              spaceY={6}
            >
              <Field.Root required>
                <Field.Label fontSize={{ base: "sm", md: "md" }}>
                  Display avatar <Field.RequiredIndicator />
                </Field.Label>
                <HStack justifyContent="space-between" mb={3} width="full">
                  <Image
                    src="https://bit.ly/dan-abramov"
                    alt="display-avatar"
                    boxSize={{ base: "60px", md: "80px" }}
                    borderRadius="full"
                    fit="cover"
                  />
                  <FileUpload.Root accept="image/*" alignItems="end">
                    <FileUpload.HiddenInput />
                    <FileUpload.Trigger asChild>
                      <Button variant="outline" size={{ base: "xs", md: "sm" }}>
                        <IconPhotoUp /> Upload Images
                      </Button>
                    </FileUpload.Trigger>
                  </FileUpload.Root>
                </HStack>
              </Field.Root>

              <Field.Root required>
                <Field.Label fontSize={{ base: "sm", md: "md" }}>
                  Name <Field.RequiredIndicator />
                </Field.Label>
                <Input placeholder="Enter your name" variant="outline" />
              </Field.Root>

              <Field.Root required>
                <Field.Label fontSize={{ base: "sm", md: "md" }}>
                  Phone number <Field.RequiredIndicator />
                </Field.Label>
                <InputGroup startAddon="+84">
                  <Input type="tel" placeholder="0000000" variant="outline" />
                </InputGroup>
              </Field.Root>

              <Field.Root required>
                <Field.Label fontSize={{ base: "sm", md: "md" }}>
                  Describe your self <Field.RequiredIndicator />
                </Field.Label>
                <Textarea
                  resize="none"
                  size="md"
                  variant="outline"
                  placeholder="Tell us more about your self"
                  height="7rem"
                />
              </Field.Root>
              <Field.Root required>
                <Field.Label fontSize={{ base: "sm", md: "md" }}>
                  Your degree certification... <Field.RequiredIndicator />
                </Field.Label>
                <FileUpload.Root accept={["image/png"]}>
                  <FileUpload.HiddenInput />
                  <InputGroup
                    startElement={<IconUpload />}
                    endElement={
                      <FileUpload.ClearTrigger asChild>
                        <CloseButton
                          me="-1"
                          size="xs"
                          variant="surface"
                          focusVisibleRing="inside"
                          focusRingWidth="2px"
                          pointerEvents="auto"
                        />
                      </FileUpload.ClearTrigger>
                    }
                  >
                    <Input asChild>
                      <FileUpload.Trigger>
                        <FileUpload.FileText lineClamp={1} />
                      </FileUpload.Trigger>
                    </Input>
                  </InputGroup>
                  <FileUpload.List />
                </FileUpload.Root>
              </Field.Root>

              <Field.Root required>
                <Field.Label fontSize={{ base: "sm", md: "md" }}>
                  Years of experience
                  <Field.RequiredIndicator />
                </Field.Label>
                <NumberInput.Root defaultValue="1" min={1} width="full">
                  <NumberInput.Control />
                  <NumberInput.Input />
                </NumberInput.Root>
              </Field.Root>

              <Field.Root required>
                <Field.Label fontSize={{ base: "sm", md: "md" }}>
                  Past Work Places <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  placeholder="Enter your previous company"
                  variant="outline"
                />
              </Field.Root>

              <Button width={{ base: "full", md: "auto" }}>Submit</Button>
            </Box>
          </VStack>
        </VStack>
      </Flex>
    </Container>
  );
}
