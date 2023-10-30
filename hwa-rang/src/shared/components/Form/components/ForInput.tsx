import { Radio, RadioGroup } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "./Label";
import { FormControlLabel } from "./FormControlLabel";

export function ForInput() {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const error = errors.for;

  return (
    <Controller
      name="for"
      control={control}
      rules={{
        required: true,
      }}
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
            sx={{ marginBottom: 2 }}
          >
            <FormControlLabel
              error={!!error}
              value="Дорослий"
              control={<Radio />}
              label="Дорослий"
            />
            <FormControlLabel
              error={!!error}
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
