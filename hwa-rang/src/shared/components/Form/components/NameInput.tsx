import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import { Label } from "./Label";

export function NameInput() {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const error = errors.name;

  return (
    <Controller
      name="name"
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Label htmlFor="name">Ім’я</Label>
          <TextField
            error={!!error}
            id="name"
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            placeholder="Введіть ваше ім’я"
            variant="standard"
            size="small"
            sx={{
              marginBottom: 4.5,
            }}
          />
        </>
      )}
    />
  );
}
