import { MenuItemProps, MenuItem as MuiMenuItem } from "@mui/material";

import { theme } from "theme";

export const MenuItem = ({ sx, ...props }: MenuItemProps) => {
  return (
    <MuiMenuItem
      sx={{
        color: theme.colors["deep-black"],
        "&.Mui-selected": {
          backgroundColor: theme.colors["dark-blue"],
          color: theme.colors.white,
          "&:hover": { backgroundColor: theme.colors["dark-blue"] },
        },
        ...sx,
      }}
      {...props}
    />
  );
};
