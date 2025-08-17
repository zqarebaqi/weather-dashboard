import Grid from "@mui/material/Grid";
import LoginForm from "../components/LoginForm";
import LoginImage from "../components/LoginImage";
import LanguageSelect from "../components/LanguageSelect";

const Login: React.FC = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", gap: 3 }}
    >
      <Grid
        xs={10}
        md={8}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: 4,
          display: "flex",
        }}
      >
        <Grid
          xs={12}
          md={6}
          sx={{
            bgcolor: "white",
            p: 6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <LoginForm />
        </Grid>
        <Grid
          xs={12}
          md={6}
          sx={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <LoginImage />
        </Grid>
      </Grid>

      <Grid xs={10} md={8}>
        <LanguageSelect />
      </Grid>
    </Grid>
  );
};

export default Login;
