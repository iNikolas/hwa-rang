import { Select } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "./Label";
import { MenuItem } from "./MenuItem";
import { FormControl } from "./FormControl";

export function HallInput() {
  const { control } = useFormContext();

  return (
    <Controller
      name="hall"
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <FormControl>
          <Label htmlFor="halls-select">Зал</Label>
          <Select
            id="halls-select"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          >
            <MenuItem sx={{ display: "none" }} value="none">
              Оберіть зал
            </MenuItem>
            <MenuItem value={"Метро диміївська / Метро Голосіївська"}>
              Метро Диміївська/Голосіївська
            </MenuItem>
            <MenuItem value={"Метро Іподором / Метро теремки"}>
              Метро Іподром/Теремки
            </MenuItem>
            <MenuItem value={"Метро Позняки"}>Метро Позняки</MenuItem>
            <MenuItem value={"Метро Героїв Дніпра"}>
              Метро Героїв Дніпра
            </MenuItem>
            <MenuItem value={"Метро Дарниця"}>Метро Дарниця</MenuItem>
          </Select>
        </FormControl>
      )}
    />
  );
}