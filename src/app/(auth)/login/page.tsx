"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
  Alert,
  CloseButton,
} from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import {
  IconChevronLeft,
  IconArrowNarrowRight,
  IconMail,
  IconLock,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import Logo from "@/components/layout/logo";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, type LoginFormValues } from "@/schema/auth-schema";
import { signIn } from "next-auth/react";
import { BeatLoader } from "react-spinners";

export default function LoginPage() {
  const router = useRouter();
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      // TODO: Implement your login logic here
      console.log("Form submitted:", data);
      // router.push("/dashboard"); // Uncomment when ready to redirect
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch {
      setError("Failed to login with Google");
      setIsGoogleLoading(false);
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
          Login to SeasonDecor
        </Heading>
        <Text>
          Don&apos;t have an account?{" "}
          <ChakraLink as={Link} colorPalette="blue" href="/signup">
            Sign up.
          </ChakraLink>
        </Text>
        <Alert.Root status="error" variant="surface" hidden={!error}>
          <Alert.Indicator />
          <Alert.Title>{error}</Alert.Title>
          <CloseButton pos="relative" top="-2" insetEnd="-2" />
        </Alert.Root>
        <Box
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          w="full"
          spaceY={5}
          mt={8}
        >
          <Field.Root invalid={!!errors.email}>
            <Field.Label>Email</Field.Label>
            <InputGroup startElement={<IconMail size={18} />}>
              <Input
                {...register("email")}
                variant="outline"
                placeholder="example.123@example.com"
              />
            </InputGroup>

            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.password}>
            <HStack justifyContent="space-between" w="full">
              <Field.Label>Password</Field.Label>
              <Field.Label>
                <ChakraLink
                  as={Link}
                  colorPalette="blue"
                  href="/reset-password"
                >
                  Forgot your password?
                </ChakraLink>
              </Field.Label>
            </HStack>

            <InputGroup startElement={<IconLock size={18} />}>
              <PasswordInput
                {...register("password")}
                variant="outline"
                placeholder="••••••••••••"
              />
            </InputGroup>

            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
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
        <Button
          colorPalette="blue"
          variant="outline"
          w="full"
          onClick={handleGoogleSignIn}
          loading={isGoogleLoading}
          spinner={<BeatLoader size={8} color="white" />}
        >
          <IconBrandGoogleFilled /> Login with Google
        </Button>
        <Text fontSize="sm" textAlign="start" color="gray.400">
          By signing in, you agree to our{" "}
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
