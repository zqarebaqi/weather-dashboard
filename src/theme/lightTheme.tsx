import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#cdd9e0",
    },
    background: {
      default: "#F3FAFE",
      paper: "#e1e9ee",
      // appbar: "#4e5b63",
    },
    text: {
      primary: "#003464",
    },
  },
  typography: {
    fontFamily: "IRANSans, Arial, sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
});

export default lightTheme;
