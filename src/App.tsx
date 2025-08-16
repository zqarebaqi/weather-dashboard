import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";
import { useMemo, useContext, useEffect } from "react";
import { AppProvider, AppContext } from "./context/AppContext";
import { WeatherProvider } from "./context/WeatherContext";
import i18n from "./i18n";

const AppRoutes: React.FC = () => {
  const { mode, language } = useContext(AppContext);

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  }, [language]);

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <WeatherProvider>
                <Dashboard />
              </WeatherProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
