"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { Box, Button, Popover, Portal } from "@chakra-ui/react";
import { IconCalendarWeekFilled } from "@tabler/icons-react";
import "react-day-picker/style.css";

export type DatePickerProps = {
  value?: Date;
  onChange?: (date: Date) => void;
  showOutsideDays?: boolean;
  disabled?: boolean;
  placeholder?: string;
};

export const DatePicker = ({
  value,
  onChange,
  showOutsideDays = true,
  disabled = false,
  placeholder = "Pick a date",
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover.Root open={isOpen} positioning={{ placement: "bottom-start" }}>
      <Popover.Trigger asChild width="100%">
        <Button
          variant="subtle"
          width="100%"
          justifyContent="start"
          textAlign="left"
          fontWeight="normal"
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled}
        >
          <IconCalendarWeekFilled />
          {value ? value.toLocaleDateString() : placeholder}
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow />
            <Popover.Body>
              <Box>
                <DayPicker
                  mode="single"
                  showOutsideDays={showOutsideDays}
                  selected={value}
                  onSelect={(date: Date | undefined) => {
                    if (date && onChange) {
                      onChange(date);
                      setIsOpen(false);
                    }
                  }}
                  disabled={disabled}
                />
              </Box>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};

DatePicker.displayName = "DatePicker";
