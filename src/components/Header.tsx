import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
} from "@mui/material";
import SettingsMenu from "./SettingsMenu";
import { useWeather } from "../context/WeatherContext";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  onLocationChange: (location: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onLocationChange }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { setCity } = useWeather();

  const [inputValue, setInputValue] = useState<string>("");
  const { t } = useTranslation();

  const handleSearch = () => {
    setCity(inputValue.trim());
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: theme.palette.background.default }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src="/images/logo.png"
            alt="logo"
            sx={{ width: 50, mr: 1 }}
          />
          {!isMobile && (
            <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
              {t("weather_dashboard")}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <TextField
              label={t("search_your_location")}
              size="small"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={handleSearch}
              disabled={!inputValue.trim()}
              sx={{ height: "40px", marginLeft: "10px" }}
            >
              {t("search")}
            </Button>
          </Box>
          <SettingsMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
