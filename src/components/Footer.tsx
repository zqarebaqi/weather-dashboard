import React from "react";
import { Box, Typography, Stack, Link, useTheme } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const theme = useTheme(); 

  const { t } = useTranslation();

  const date = new Date().toLocaleString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Box
      component="footer"
          sx={{
        backgroundColor: theme.palette.background.paper ,
        borderTop: "1px solid #ddd",
        px: 4,
        py: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body2">{t("copyright")}</Typography>

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <CalendarTodayIcon fontSize="small" />
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <MailOutlineIcon fontSize="small" />
          <Link
            href="mailto:info@nadin.ir"
            underline="hover"
            color="text.primary"
            variant="body2"
          >
            {t("contact_us")} : info@nadin.ir
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
