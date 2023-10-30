import { Select } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "./Label";
import { MenuItem } from "./MenuItem";
import { FormControl } from "./FormControl";

export function ServiceInput() {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const error = errors.service;

  return (
    <Controller
      name="service"
      control={control}
      rules={{
        required: true,
        validate: (value) => value !== "none",
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <FormControl>
          <Label htmlFor="services-select">Послуги</Label>
          <Select
            error={!!error}
            id="services-select"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          >
            <MenuItem sx={{ display: "none" }} value="none">
              Оберіть послугу
            </MenuItem>
            <MenuItem value={"Групові тренування"}>Групові тренування</MenuItem>
            <MenuItem value={"Персональні тренування"}>
              Персональні тренування
            </MenuItem>
          </Select>
        </FormControl>
      )}
    />
  );
}
