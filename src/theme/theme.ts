// import { ThemeOptions } from "@mui/material/styles";

// const getDesignTokens = (mode: "light" | "dark"): ThemeOptions => ({
//   palette: {
//     mode,
//     surface: {
//       50: "#FFFFFF",
//       100: "#F5F9FC",
//       200: "#E1E9EE",
//       300: "#CDD9E0",
//       400: "#AFBCC4",
//       500: "#8895A0",
//       600: "#62707C",
//       700: "#3D4B52",
//       800: "#25262E",
//       900: "#1C1B22",
//       A100: "#96AAB5",
//       A200: "#3F6A81",
//       A400: "#373E46",
//       A700: "#0C0C0C",
//     },
//     primary: {
//       light: "#98D8F1",
//       main: "#009CD8",
//       dark: "#10598E",
//       50: "#EEFAFF",
//       100: "#CEF2FA",
//       200: "#98D8F1",
//       300: "#57C0E9",
//       400: "#19ABE4",
//       500: "#009CD8",
//       600: "#0F6FA6",
//       700: "#10598E",
//       800: "#074979",
//       900: "#003464",
//       A100: "#82F8FF",
//       A200: "#44DDFF",
//       A400: "#29B2FF",
//       A700: "#298BFF",
//     },
//     error: {
//       light: "#E57373",
//       main: "#F44336",
//       dark: "#D32F2F",
//       50: "#FFEBEB",
//       100: "#FFCDD2",
//       200: "#EF9A9A",
//       300: "#E57373",
//       400: "#EF5350",
//       500: "#F44336",
//       600: "#E53935",
//       700: "#D32F2F",
//       800: "#C62828",
//       900: "#B71C1C",
//       A100: "#FF8A80",
//       A200: "#FF5252",
//       A400: "#FF1744",
//       A700: "#D50000",
//     },
//     warning: {
//       light: "#FFB74D",
//       main: "#FF9800",
//       dark: "#F57C00",
//       50: "#FFF3E0",
//       100: "#FFE0B2",
//       200: "#FFCC80",
//       300: "#FFB74D",
//       400: "#FFA726",
//       500: "#FF9800",
//       600: "#FB8C00",
//       700: "#F57C00",
//       800: "#EF6C00",
//       900: "#E65100",
//       A100: "#FFD180",
//       A200: "#FFAB40",
//       A400: "#FF9100",
//       A700: "#FF6D00",
//     },
//     success: {
//       light: "#81C784",
//       main: "#4CAF50",
//       dark: "#388E3C",
//       50: "#E8F5E9",
//       100: "#C8E6C9",
//       200: "#A5D6A7",
//       300: "#81C784",
//       400: "#66BB6A",
//       500: "#4CAF50",
//       600: "#43A047",
//       700: "#388E3C",
//       800: "#2E7D32",
//       900: "#1B5E20",
//       A100: "#B9F6CA",
//       A200: "#69F0AE",
//       A400: "#00E676",
//       A700: "#00C853",
//     },
//     info: {
//       light: "#64B5F6",
//       main: "#2196F3",
//       dark: "#1976D2",
//       50: "#E3F2FD",
//       100: "#BBDEFB",
//       200: "#90CAF9",
//       300: "#64B5F6",
//       400: "#42A5F5",
//       500: "#2196F3",
//       600: "#1E88E5",
//       700: "#1976D2",
//       800: "#1565C0",
//       900: "#0D47A1",
//       A100: "#82B1FF",
//       A200: "#448AFF",
//       A400: "#2979FF",
//       A700: "#2962FF",
//     },
//     background: {
//       default: mode === "light" ? "#FFFFFF" : "#121212",
//       paper: mode === "light" ? "#F5F5F5" : "#1E1E1E",
//     },
//     text: {
//       primary: mode === "light" ? "#212121" : "#FFFFFF",
//       secondary: mode === "light" ? "#757575" : "#B3B3B3",
//     },
//   },
// });

// export default getDesignTokens;




// src/theme/theme.ts
import { ThemeOptions } from "@mui/material/styles";

const getDesignTokens = (mode: "light" | "dark"): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: "#009CD8",
    },
    background: {
      default: mode === "light" ? "#FFFFFF" : "#121212",
      paper: mode === "light" ? "#F5F5F5" : "#1E1E1E",
    },
    text: {
      primary: mode === "light" ? "#212121" : "#FFFFFF",
      secondary: mode === "light" ? "#757575" : "#B3B3B3",
    },
  },
});

export default getDesignTokens;
