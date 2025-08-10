import LoginForm from "../components/LoginForm";

import { Box, Container } from "@mui/material";

const Login: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box>
        <LoginForm />
      </Box>

      <Box>hi</Box>
    </Box>
  );
};

export default Login;
