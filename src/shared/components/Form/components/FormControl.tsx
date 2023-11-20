import {
  FormControlProps,
  FormControl as MuiFormControl,
  useMediaQuery,
} from "@mui/material";

import { cn } from "utils/index";
import { theme } from "theme";

export const FormControl = ({
  className,
  selected = false,
  ...props
}: { selected?: boolean } & FormControlProps) => {
  const gtSmLtLg = useMediaQuery(
    `(max-width: ${theme.screens.lg.max}) and (min-width: ${theme.screens.sm.max})`
  );
  return (
    <MuiFormControl
      className={cn(
        "[&_.MuiSelect-select]:text-gray-400",
        selected && "[&_.MuiSelect-select]:text-deep-black",
        className
      )}
      variant="standard"
      size="small"
      fullWidth
      sx={{ mb: gtSmLtLg ? "62px" : 4.5 }}
      {...props}
    />
  );
};
