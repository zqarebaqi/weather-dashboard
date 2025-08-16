import React from "react";
import { useWeather } from "../context/WeatherContext";
import { Card, CardContent, Typography, Paper, Box } from "@mui/material";
import Grid from "@mui/material/Grid";

const Forecast: React.FC = () => {
  const { forecastData } = useWeather();

  if (!forecastData) return null;

  return (
    <Box sx={{ mt: 2, mx: 10, mb: 2 }}>
      <Paper elevation={3} sx={{ display: "inline-block", p: 2 }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="stretch"
        >
          {forecastData.map((day, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 2 }} key={idx}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                  <Typography variant="subtitle1">
                    {day.date.toLocaleDateString("en-US", { weekday: "long" })}
                  </Typography>
                  <img src={day.icon} alt={day.description} />
                  <Typography variant="h6">
                    {Math.round(day.temperature)}°C
                  </Typography>
                  <Typography
                    variant="body2"
                    noWrap
                    sx={{ textOverflow: "ellipsis", overflow: "hidden" }}
                  >
                    {day.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Forecast;
