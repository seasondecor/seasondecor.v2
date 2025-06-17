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
          variant="outline"
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
                  classNames={{
                    months: "flex flex-col space-y-4 sm:space-x-4 sm:space-y-0",
                    month: "space-y-4",
                    month_caption: "flex justify-center relative items-center",
                    nav: "space-x-1 flex justify-between items-center",
                    nav_button_previous: "absolute left-1",
                    nav_button_next: "absolute right-1",
                    month_grid: "w-full border-collapse space-y-1",
                    head_cell:
                      "text-gray.500 rounded-md w-9 font-normal text-[0.8rem]",
                    row: "flex w-full mt-2",
                    cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                    day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                    range_end: "day-range-end",
                    day_selected:
                      "bg-blue.500 text-white hover:bg-blue.600 hover:text-white focus:bg-blue.600 focus:text-white",
                    today: "bg-gray.100 text-gray.900",
                    outside:
                      "text-gray.400 opacity-50 aria-selected:bg-gray.100 aria-selected:text-gray.900 aria-selected:opacity-30",
                    disabled: "text-gray.400 opacity-50",
                    range_middle:
                      "aria-selected:bg-gray.100 aria-selected:text-gray.900",
                    hidden: "invisible",
                  }}
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
