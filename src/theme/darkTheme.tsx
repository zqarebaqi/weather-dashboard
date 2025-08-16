import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#dfe1e4",
    },
    secondary: {
      main: "#cdd9e0",
    },
    background: {
      default: "#151d32",
      paper: "#292f45",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "IRANSans, Arial, sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
});

export default darkTheme;
