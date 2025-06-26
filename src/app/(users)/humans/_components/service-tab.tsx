"use client";

import { FC } from "react";
import {
  For,
  Box,
  SimpleGrid,
  Wrap,
  WrapItem,
  Portal,
  Select,
  createListCollection,
  Field,
  NumberInput,
  Skeleton,
  Stack,
  Button,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { DecorServiceSchema } from "@/types";
import { DecorServiceCard } from "@/components";
import {
  IconFilter,
  IconRefresh,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import { EmptyUi } from "@/components";

interface ServiceTabProps {
  decorService: DecorServiceSchema[];
  isFetching: boolean;
  totalCount: number;
}

const frameworks = createListCollection({
  items: [
    { label: "From A to Z", value: "react" },
    { label: "From Z to A", value: "vue" },
  ],
});

export const ServiceTab: FC<ServiceTabProps> = ({
  decorService,
  isFetching,
  totalCount,
}) => {
  return (
    <Box spaceY={10}>
      <Wrap gap={4} align="flex-end" mb={6}>
        <WrapItem flex={{ base: "100%", md: "20%" }}>
          <Select.Root
            collection={frameworks}
            width="full"
            size="sm"
            variant="subtle"
          >
            <Select.HiddenSelect />
            <Select.Label>Order</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Default" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {frameworks.items.map((framework) => (
                    <Select.Item item={framework} key={framework.value}>
                      {framework.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </WrapItem>

        <WrapItem flex={{ base: "100%", md: "40%" }}>
          <Stack direction={{ base: "column", sm: "row" }} gap={3} width="100%">
            <Field.Root flex="1">
              <Field.Label>Price from</Field.Label>
              <NumberInput.Root size="sm" variant="subtle" min={0} width="100%">
                <NumberInput.Control />
                <NumberInput.Input placeholder="0" />
              </NumberInput.Root>
            </Field.Root>
            <Icon size="sm" alignSelf="center" mt={5}>
              <IconArrowsLeftRight />
            </Icon>

            <Field.Root flex="1">
              <Field.Label>Price to</Field.Label>
              <NumberInput.Root size="sm" variant="subtle" min={0} width="100%">
                <NumberInput.Control />
                <NumberInput.Input placeholder="10000" />
              </NumberInput.Root>
            </Field.Root>
          </Stack>
        </WrapItem>

        <WrapItem flex={{ base: "100%", md: "auto" }}>
          <Wrap gap={3}>
            <Button colorPalette="cyan" variant="solid" size="sm">
              <IconFilter /> Filter
            </Button>
            <Button colorPalette="red" variant="ghost" size="sm">
              <IconRefresh />
              Refresh
            </Button>
          </Wrap>
        </WrapItem>
      </Wrap>
      <SimpleGrid column={1} gap={6}>
        {isFetching ? (
          Array.from({ length: 6 }).map((_, idx) => (
            <Skeleton key={idx} height="320px" borderRadius="lg" />
          ))
        ) : totalCount === 0 ? (
          <Box gridColumn="1/-1">
            <EmptyUi
              image="https://cdn.divineshop.vn/static/b1d68ae70c17522557b7ac822a0fe731.svg"
              title="No decor services match your search!"
              description="You can try a simpler keyword or contact support."
            />
          </Box>
        ) : (
          <For each={decorService ?? []}>
            {(decorService: DecorServiceSchema) => (
              <DecorServiceCard
                key={decorService.id}
                decorService={decorService}
              />
            )}
          </For>
        )}
      </SimpleGrid>
    </Box>
  );
};
