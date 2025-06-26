"use client";

import * as React from "react";
import { Button } from "@chakra-ui/react";
import { IconCalendarWeekFilled } from "@tabler/icons-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type DatePickerProps = {
  value?: Date;
  onChange?: (date: Date) => void;
  showOutsideDays?: boolean;
  disabled?: boolean;
  placeholder?: string;
};

export const CustomDatePicker = ({
  value,
  onChange,
  disabled = false,
  placeholder = "Pick a date",
}: DatePickerProps) => {
  return (
    <>
      <DatePicker
        customInput={
          <Button
            variant="subtle"
            width="full"
            size="sm"
            justifyContent="start"
            textAlign="left"
            disabled={disabled}
          >
            <IconCalendarWeekFilled />
            {value ? value.toLocaleDateString() : placeholder}
          </Button>
        }
        onChange={(date: Date | null) => {
          if (date instanceof Date && onChange) {
            onChange(date);
          }
        }}
        selected={value || null}
        disabled={disabled}
        dateFormat="y-MM-dd"
        calendarClassName="chakra-datepicker"
        showYearDropdown
        showMonthDropdown
        dropdownMode="select"
      />
    </>
  );
};
