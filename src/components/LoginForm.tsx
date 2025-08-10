import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === "") {
      alert(t("please_enter_name"));
      return;
    }
    localStorage.setItem("userName", name);
    navigate("/dashboard");
  };

  return (
     
        <Paper elevation={6} sx={{ padding: 4, marginTop: 8 }}>
          <Typography variant="h6" component="h1" gutterBottom>
            {t("login")}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              fullWidth
              label={t("enter_name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              variant="outlined"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {t("submit")}
            </Button>
          </Box>
        </Paper>
    

     
  );
};

export default LoginForm;
