import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { AppContext } from "../context/AppContext";

const LanguageSelect: React.FC = () => {
  const { language, setLanguage } = React.useContext(AppContext);
  const { t } = useTranslation();

  const handleChange = (event: any) => {
    setLanguage(event.target.value as "en" | "fa");
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
      <InputLabel id="language-select-label">
        {t("language") || "Language"}
      </InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={language}
        onChange={handleChange}
        label="Language"
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="fa">فارسی</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
