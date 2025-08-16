// src/components/CurrentWeather.tsx
import React from "react";
import { useWeather } from "../context/WeatherContext";
import { Typography, Paper, Grid, Box } from "@mui/material";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import FormattedDate from "../utils/FormattedDate";
const CurrentWeather: React.FC = () => {

  const { weatherData } = useWeather();

  if (!weatherData)
    return (
      <Typography
        variant="h5"
        sx={{ width: "100%", p: 6, textAlign: "center"  }}
      >
        No location selected <br />
        Enter a city to get started ☺
      </Typography>
    );
  if (!weatherData.ready) return <Typography>Loading...</Typography>;

  return (
    <Paper
      elevation={3}
      sx={{ padding: 1, marginTop: 2, maxWidth: 500, marginX: 10 }}
    >
      <Grid container size={12} spacing={2} p={1}>
        <Grid size={6} direction="column">
          <Box
            sx={{ bgcolor: "secondary.main", borderRadius: 5, width: 150 }}
            padding={1}
          >
            <Typography
              display="flex"
              alignItems="center"
              bgcolor="theme.primary.main"
              variant="h5"
            >
              <LocationPinIcon sx={{ fontSize: 30, mb: 1 }} />
              {weatherData.city}
            </Typography>
          </Box>

          <Box mt={2} ml={1}>
            {/* <Typography>{weatherData.date.toLocaleString()}</Typography> */}
            <FormattedDate dateAndTime={weatherData.date} />
          </Box>

          <Box>
            <Typography sx={{ fontSize: "50px" }}>
              {Math.floor(weatherData?.temperature)}°C
            </Typography>

            <Typography ml={1}>
              High: {Math.ceil(weatherData.high)}, low:
              {Math.floor(weatherData.low)}
            </Typography>
          </Box>
        </Grid>

        <Grid size={6}>
          <img
            src={weatherData.icon}
            alt={weatherData.description}
            width="150"
          />
          <Typography>{weatherData.description}</Typography>
          <Typography>Wind: {weatherData.wind} m/s</Typography>
          <Typography>Humidity: {weatherData.humidity}%</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CurrentWeather;
