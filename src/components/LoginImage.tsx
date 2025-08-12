import { Grid, Box } from "@mui/material";

const LoginImage: React.FC = () => {
  return (
    <Box>
      <Grid container xs={12}>
        <Grid
          item
          xs={6}
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

        <Grid>
          <Box item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
            <img
              src="/images/midrain.png"
              alt="rain image"
              style={{ width: 200 }}
            />
            <img
              src="/images/wind.png"
              alt="wind image"
              style={{ width: 200 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginImage;
