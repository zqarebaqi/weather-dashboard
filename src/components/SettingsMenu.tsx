import { useState, useContext } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Box,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useWeather } from "../context/WeatherContext";
import { useTranslation } from "react-i18next";

export default function SettingsMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const { mode, setMode, language, setLanguage } = useContext(AppContext);
  const { setCity } = useWeather();
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExit = () => {
    localStorage.clear();
    setMode("light");
    setLanguage("en");
    setCity("");
    setAnchorEl(null);
    navigate("/login", { replace: true });
  };

  // const handleModeChange = (event, newMode) => {
  //   if (newMode) setMode(newMode);
  // };

  // const handleLanguageChange = (event, newLang) => {
  //   if (newLang) setLanguage(newLang);
  // };

const handleModeChange = (
  _event: React.MouseEvent<HTMLElement>,
  newMode: "light" | "dark" | null
) => {
  if (newMode) setMode(newMode);
};

const handleLanguageChange = (
  _event: React.MouseEvent<HTMLElement>,
  newLang: "fa" | "en" | null
) => {
  if (newLang) setLanguage(newLang);
};

  return (
    <div>
      <IconButton onClick={handleClick}>
        <SettingsIcon color="primary" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: { p: 1, minWidth: 200 },
        }}
      >
        <Box sx={{ px: 1, mb: 1 }}>
          <Box sx={{ fontSize: 14, mb: 0.5 }}>{t("mode")}</Box>
          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={handleModeChange}
            fullWidth
          >
            <ToggleButton value="light">
              <LightModeIcon fontSize="small" /> {t("light")}
            </ToggleButton>
            <ToggleButton value="dark">
              <DarkModeIcon fontSize="small" /> {t("dark")}
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box sx={{ px: 1, mb: 1 }}>
          <Box sx={{ fontSize: 14, mb: 0.5 }}>{t("language")}</Box>
          <ToggleButtonGroup
            value={language}
            exclusive
            onChange={handleLanguageChange}
            fullWidth
          >
            <ToggleButton value="en">En</ToggleButton>
            <ToggleButton value="fa">Fa</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Divider sx={{ my: 1 }} />

        <MenuItem onClick={handleExit}>{t("exit")}</MenuItem>
      </Menu>
    </div>
  );
}
