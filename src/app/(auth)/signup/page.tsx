"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Box,
  Button,
  VStack,
  HStack,
  Heading,
  Text,
  Field,
  Input,
  InputGroup,
  Separator,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import {
  IconChevronLeft,
  IconArrowNarrowRight,
  IconMail,
  IconLock,
  IconBrandGoogleFilled,
  IconLockCheck,
} from "@tabler/icons-react";
import Logo from "@/components/layout/logo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupFormSchema, type SignupFormValues } from "@/schema/auth-schema";

export default function SignupPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupFormSchema),
  });

  const onSubmit = async (data: SignupFormValues) => {
    try {
      // TODO: Implement your signup logic here
      console.log("Form submitted:", data);
      // router.push("/dashboard"); // Uncomment when ready to redirect
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <Box
      position="relative"
      minH="100vh"
      bgGradient="to-r"
      gradientFrom="gray.900"
      gradientTo="gray.950"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={4}
      py={8}
    >
      <Button
        position="absolute"
        top={4}
        left={1}
        variant="ghost"
        size="sm"
        colorPalette="blue"
        rounded="full"
        onClick={() => router.push("/")}
      >
        <IconChevronLeft /> Home
      </Button>
      <VStack as="main" gap={4} maxW="md">
        <Logo />
        <Heading as="h1" size="3xl" color="white" mt={4} mb={2}>
          Create an account
        </Heading>
        <Text>
          Already have an account?{" "}
          <ChakraLink as={Link} colorPalette="blue" href="/login">
            Log in.
          </ChakraLink>
        </Text>
        <Box
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          w="full"
          spaceY={5}
          mt={8}
        >
          <HStack gap="5" width="full">
            <Field.Root required>
              <Field.Label>
                First name <Field.RequiredIndicator />
              </Field.Label>
              <Input
                {...register("firstName")}
                placeholder="John"
                variant="subtle"
              />
            </Field.Root>
            <Field.Root required>
              <Field.Label>
                Last name <Field.RequiredIndicator />
              </Field.Label>
              <Input
                {...register("lastName")}
                placeholder="Doe"
                variant="subtle"
              />
            </Field.Root>
          </HStack>
          <Field.Root invalid={!!errors.email}>
            <Field.Label>Email</Field.Label>
            <InputGroup startElement={<IconMail size={18} />}>
              <Input
                {...register("email")}
                variant="subtle"
                placeholder="example.123@example.com"
              />
            </InputGroup>

            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.password}>
            <>
              <Field.Label>Password</Field.Label>
            </>

            <InputGroup startElement={<IconLock size={18} />}>
              <PasswordInput
                {...register("password")}
                variant="subtle"
                placeholder="••••••••••••"
              />
            </InputGroup>

            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.confirmPassword}>
            <>
              <Field.Label>Confirm Password</Field.Label>
            </>

            <InputGroup startElement={<IconLockCheck size={18} />}>
              <PasswordInput
                {...register("confirmPassword")}
                variant="subtle"
                placeholder="••••••••••••"
              />
            </InputGroup>

            <Field.ErrorText>{errors.confirmPassword?.message}</Field.ErrorText>
          </Field.Root>
          <Button
            type="submit"
            w="full"
            disabled={!!Object.keys(errors).length}
          >
            Continue
            <IconArrowNarrowRight />
          </Button>
        </Box>
        <HStack w="full" align="center">
          <Separator flex="1" />
          <Text fontSize="sm">OR</Text>
          <Separator flex="1" />
        </HStack>
        <Button colorPalette="blue" variant="outline" w="full">
          <IconBrandGoogleFilled /> Login with Google
        </Button>
        <Text fontSize="sm" textAlign="start" color="gray.400">
          By signing up, you agree to our{" "}
          <ChakraLink
            as={Link}
            colorPalette="blue"
            href="/legal/terms-of-service"
          >
            Terms of Service
          </ChakraLink>{" "}
          and{" "}
          <ChakraLink
            as={Link}
            colorPalette="blue"
            href="/legal/privacy-policy"
          >
            Privacy Policy
          </ChakraLink>
          .
        </Text>
      </VStack>
    </Box>
  );
}
