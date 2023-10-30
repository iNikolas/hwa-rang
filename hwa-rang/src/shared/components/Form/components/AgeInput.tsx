import { TextField, useMediaQuery } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import { theme } from "theme";

import { Label } from "./Label";

export function AgeInput() {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const gtSmLtLg = useMediaQuery(
    `(max-width: ${theme.screens.lg.max}) and (min-width: ${theme.screens.sm.max})`
  );

  const error = errors.age;

  return (
    <Controller
      name="age"
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Label htmlFor="age">Вік</Label>
          <TextField
            fullWidth
            error={!!error}
            value={value}
            onChange={(event) =>
              onChange(event.target.value.replace(/\D/g, ""))
            }
            onBlur={onBlur}
            id="age"
            size="small"
            placeholder="Вкажіть ваш вік"
            variant="standard"
            sx={{ marginBottom: gtSmLtLg ? 7.5 : 5.25 }}
          />
        </>
      )}
    />
  );
}
