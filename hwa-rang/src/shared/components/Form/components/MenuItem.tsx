import { MenuItemProps, MenuItem as MuiMenuItem } from "@mui/material";

import { theme } from "theme";

export const MenuItem = (props: MenuItemProps) => {
  return (
    <MuiMenuItem
      sx={{
        color: theme.colors.gray[400],
        "&.Mui-selected": {
          backgroundColor: theme.colors["dark-blue"],
          color: theme.colors.white,
        },
      }}
      {...props}
    />
  );
};
