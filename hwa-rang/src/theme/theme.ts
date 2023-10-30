import resolveConfig from "tailwindcss/resolveConfig";
//eslint-disable-next-line
// @ts-ignore
import tailwindConfig from "../../tailwind.config.js";
import { createTheme } from "@mui/material";

export const { theme } = resolveConfig(tailwindConfig);

export const muiTheme = createTheme({
  typography: { fontFamily: "Montserrat, sans-serif" },
});
