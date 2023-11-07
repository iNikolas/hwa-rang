import { TextField } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

export const CustomPhoneInput = React.forwardRef<
  HTMLInputElement,
  { name?: string }
>(({ name = "", ...props }, ref) => {
  const {
    formState: { errors },
  } = useFormContext();

  const error = errors[name];
  return (
    <TextField
      {...props}
      inputRef={ref}
      error={!!error}
      id={name}
      size="small"
      variant="standard"
      placeholder="+38 0XX XXX XX XX"
    />
  );
});
