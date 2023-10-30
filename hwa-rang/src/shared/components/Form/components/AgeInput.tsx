import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "./Label";

export function AgeInput() {
  const {
    formState: { errors },
    control,
  } = useFormContext();

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
            sx={{ marginBottom: 5.25 }}
          />
        </>
      )}
    />
  );
}
