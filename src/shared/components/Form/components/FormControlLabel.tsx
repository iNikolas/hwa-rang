import {
  FormControlLabelProps,
  FormControlLabel as MuiFormControlLabel,
} from "@mui/material";

import { theme } from "theme";

export const FormControlLabel = ({
  error = false,
  sx,
  ...props
}: { error?: boolean } & FormControlLabelProps) => {
  return (
    <MuiFormControlLabel
      className="[&_.MuiTypography-root]:text-secondary"
      sx={{
        height: 48,
        ...(error && {
          "& .MuiRadio-colorPrimary,.MuiCheckbox-colorPrimary,.MuiFormControlLabel-label":
            {
              color: theme.colors.red[400],
            },
        }),
        "& .Mui-checked.MuiRadio-colorPrimary": {
          color: theme.colors.purple,
        },
        "& .Mui-checked.MuiCheckbox-colorPrimary": {
          color: theme.colors["dark-blue"],
        },
        ...sx,
      }}
      {...props}
    />
  );
};
