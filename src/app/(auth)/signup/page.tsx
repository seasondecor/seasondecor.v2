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
  Portal,
  Select,
  createListCollection,
  Link as ChakraLink,
} from "@chakra-ui/react";

import {
  IconChevronLeft,
  IconMail,
  IconLock,
  IconBrandGoogleFilled,
  IconLockCheck,
} from "@tabler/icons-react";
import { Logo, DatePicker, PasswordInput } from "@/components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupFormSchema, type SignupFormValues } from "@/schema/auth-schema";

export default function SignupPage() {
  const router = useRouter();
  const [dateOfBirth, setDateOfBirth] = React.useState<Date | undefined>();

  const genders = createListCollection({
    items: [
      { label: "Male", value: "true" },
      { label: "Female", value: "false" },
    ],
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
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

  // Update form value when date changes
  React.useEffect(() => {
    if (dateOfBirth) {
      setValue("dateOfBirth", dateOfBirth.toISOString());
    }
  }, [dateOfBirth, setValue]);

  return (
    <Box
      position="relative"
      minH="100vh"
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
          <HStack gap={4} w="full">
            <Select.Root
              required
              collection={genders}
              size="sm"
              variant="subtle"
            >
              <Select.HiddenSelect />
              <Select.Label>Select gender</Select.Label>
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="Select gender" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {genders.items.map((gender) => (
                      <Select.Item item={gender} key={gender.value}>
                        {gender.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
            <Field.Root invalid={!!errors.dateOfBirth}>
              <Field.Label>Date of birth</Field.Label>
              <DatePicker
                value={dateOfBirth}
                onChange={setDateOfBirth}
                placeholder="Select date of birth"
              />
              <Field.ErrorText>{errors.dateOfBirth?.message}</Field.ErrorText>
            </Field.Root>
          </HStack>

          <Button
            type="submit"
            w="full"
            disabled={!!Object.keys(errors).length}
          >
            Create account
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
