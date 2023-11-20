import { TextField, useMediaQuery } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import { theme } from "theme";

import { Label } from "./Label";

export function NameInput() {
  const { control } = useFormContext();

  const gtSmLtLg = useMediaQuery(
    `(max-width: ${theme.screens.lg.max}) and (min-width: ${theme.screens.sm.max})`
  );

  return (
    <Controller
      name="name"
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
          <Label htmlFor="name">Ім’я</Label>
          <TextField
            fullWidth
            id="name"
            onChange={(event) =>
              onChange(event.target.value.replace(/\d/g, ""))
            }
            value={value}
            placeholder="Введіть ваше ім’я"
            variant="standard"
            size="small"
            sx={{
              marginBottom: gtSmLtLg ? "79px" : 4.5,
            }}
          />
        </>
      )}
    />
  );
}
