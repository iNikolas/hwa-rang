import { FormControlProps, FormControl as MuiFormControl } from "@mui/material";

export const FormControl = (props: FormControlProps) => {
  return (
    <MuiFormControl
      className="[&_.MuiSelect-select]:text-gray-400"
      variant="standard"
      size="small"
      fullWidth
      sx={{ mb: 4.5 }}
      {...props}
    />
  );
};
