import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { ThemeProvider, CssBaseline } from "@mui/material";
// import createMuiTheme from "./theme";
// import { useMemo, useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    // <ThemeProvider theme={theme}>
    // <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    // </ThemeProvider>
  );
};

export default App;
