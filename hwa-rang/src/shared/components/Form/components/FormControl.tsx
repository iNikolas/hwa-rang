import {
  FormControlProps,
  FormControl as MuiFormControl,
  useMediaQuery,
} from "@mui/material";

import { theme } from "theme";

export const FormControl = (props: FormControlProps) => {
  const gtSmLtLg = useMediaQuery(
    `(max-width: ${theme.screens.lg.max}) and (min-width: ${theme.screens.sm.max})`
  );
  return (
    <MuiFormControl
      className="[&_.MuiSelect-select]:text-gray-400"
      variant="standard"
      size="small"
      fullWidth
      sx={{ mb: gtSmLtLg ? "62px" : 4.5 }}
      {...props}
    />
  );
};
