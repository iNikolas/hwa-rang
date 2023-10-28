import resolveConfig from "tailwindcss/resolveConfig";
//eslint-disable-next-line
// @ts-ignore
import tailwindConfig from "../../tailwind.config.js";

export const { theme } = resolveConfig(tailwindConfig);
