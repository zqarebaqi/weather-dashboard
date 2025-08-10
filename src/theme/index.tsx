// src/theme/index.ts
import { createTheme } from "@mui/material/styles";
import getDesignTokens from "./theme";

const createMuiTheme = (mode: "light" | "dark") => {
  return createTheme(getDesignTokens(mode));
};

export default createMuiTheme;
