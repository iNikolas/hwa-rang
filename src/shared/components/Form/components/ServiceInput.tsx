import { Select } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import services from "data/services.json";

import { Label } from "./Label";
import { MenuItem } from "./MenuItem";
import { FormControl } from "./FormControl";

export function ServiceInput() {
  const { control } = useFormContext();

  return (
    <Controller
      name="service"
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControl selected={value !== "none"}>
          <Label htmlFor="services-select">Послуги</Label>
          <Select id="services-select" value={value} onChange={onChange}>
            <MenuItem sx={{ display: "none" }} value="none">
              Оберіть послугу
            </MenuItem>
            {services.map(({ title }) => (
              <MenuItem key={title} value={title}>
                {title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
}
