import React from "react";
import { Select } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import hallsData from "data/halls.json";

import { Label } from "./Label";
import { MenuItem } from "./MenuItem";
import { FormControl } from "./FormControl";

export function HallInput() {
  const { control, watch, setValue } = useFormContext();

  const service = watch("service");

  const disabled =
    service?.toLowerCase().replace(/[\s-]/g, "") === "онлайнтренування";

  React.useEffect(() => {
    if (disabled) {
      setValue("hall", "none");
    }
  }, [disabled, setValue]);

  return (
    <Controller
      name="hall"
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <FormControl selected={value !== "none"}>
          <Label htmlFor="halls-select">Зал</Label>
          <Select
            id="halls-select"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
          >
            <MenuItem sx={{ display: "none" }} value="none">
              Оберіть зал
            </MenuItem>
            {hallsData.map((h) => (
              <MenuItem key={h.name} value={h.name}>
                {h.name
                  .split(" ")
                  .map((word) => word[0].toUpperCase() + word.slice(1))
                  .join(" ")
                  .replace(" / ", "/")}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
}
