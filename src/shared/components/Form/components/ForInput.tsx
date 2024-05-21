import { Radio, RadioGroup, useMediaQuery } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "./Label";
import { FormControlLabel } from "./FormControlLabel";

import { theme } from "theme";

export function ForInput() {
  const { control } = useFormContext();

  const gtSmLtLg = useMediaQuery(
    `(max-width: ${theme.screens.lg.max}) and (min-width: ${theme.screens.sm.max})`,
  );

  return (
    <Controller
      name="for"
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Label htmlFor="row-radio-buttons-group-label">
            Оберіть хто буде тренуватись
          </Label>
          <RadioGroup
            onBlur={onBlur}
            row
            id="row-radio-buttons-group-label"
            onChange={onChange}
            value={value}
            sx={{ marginBottom: gtSmLtLg ? "58px" : 2 }}
          >
            <FormControlLabel
              value="Дорослий"
              control={<Radio />}
              label="Дорослий"
            />
            <FormControlLabel
              value="Дитина"
              control={<Radio />}
              label="Дитина"
            />
          </RadioGroup>
        </>
      )}
    />
  );
}
