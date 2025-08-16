import React from "react";
import { useWeather } from "../context/WeatherContext";
import { Card, CardContent, Typography, Grid, Paper, Box } from "@mui/material";

const Forecast: React.FC = () => {
  const { forecastData } = useWeather();

  if (!forecastData) return null;

  return (
    <Box sx={{ mt: 2, mx: 10, mb: 2 }}>
      <Paper elevation={3} sx={{ display: "inline-block" }}>
        <Grid
          container
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ margin: "auto", padding: 2, mt: 2 }}
        >
          {forecastData.map((day, idx) => (
            <Grid item xs={12} sm={6} md={2} key={idx}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="subtitle1">
                    {day.date.toLocaleDateString("En", { weekday: "long" })}
                  </Typography>
                  <img src={day.icon} alt={day.description} />
                  <Typography variant="h6">
                    {Math.round(day.temperature)}°C
                  </Typography>
                  <Typography variant="body2">{day.description}</Typography>
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
