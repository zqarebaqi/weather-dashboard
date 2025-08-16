import { Grid, Box } from "@mui/material";

const LoginImage: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/images/Sunrain.png"
            alt="sunny rainy image"
            style={{ width: 200 }}
          />
        </Grid>

        <Grid
          size={{ xs: 6 }}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <img
            src="/images/midrain.png"
            alt="rain image"
            style={{ width: 200 }}
          />
          <img src="/images/wind.png" alt="wind image" style={{ width: 200 }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginImage;
