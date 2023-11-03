import { Select } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
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
        <FormControl>
          <Label htmlFor="services-select">Послуги</Label>
          <Select id="services-select" value={value} onChange={onChange}>
            <MenuItem sx={{ display: "none" }} value="none">
              Оберіть послугу
            </MenuItem>
            <MenuItem value={"Групові тренування"}>Групові тренування</MenuItem>
            <MenuItem value={"Персональні тренування"}>
              Персональні тренування
            </MenuItem>
            <MenuItem value="Он-лайн тренування">Он-лайн тренування</MenuItem>
          </Select>
        </FormControl>
      )}
    />
  );
}
