import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import axios from "axios";

interface WeatherContextType {
  city: string;
  setCity: (value: string) => void;
  weatherData: WeatherData | null;
  forecastData: ForecastDay[] | null;
}

interface WeatherData {
  ready: boolean;
  temperature: number;
  wind: number;
  humidity: number;
  date: Date;
  icon: string;
  description: string;
  city: string;
  low: number;
  high: number;
  lat: number;
  lon: number;
}

interface ForecastDay {
  date: Date;
  temperature: number;
  description: string;
  icon: string;
}

export const WeatherContext = createContext<WeatherContextType>({
  city: "",
  setCity: () => {},
  weatherData: null,
  forecastData: null,
});

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({
  children,
}) => {
  const [city, setCity] = useState<string>(() => {
    return localStorage.getItem("city") || "";
  });

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastDay[] | null>(null);

  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);

  useEffect(() => {
    if (!city) return;

    const apiKey = "f5e814a04eddfab1740f07bf0328eee2";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log("Raw API Response:", response.data);
        const processedData: WeatherData = {
          ready: true,
          temperature: response.data.main.temp,
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
          date: new Date(response.data.dt * 1000),
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          description: response.data.weather[0].description,
          city: response.data.name,
          low: response.data.main.temp_min,
          high: response.data.main.temp_max,
          lat: response.data.coord.lat,
          lon: response.data.coord.lon,
        };

        setWeatherData(processedData);
      })
      .catch((err) => {
        console.error("Weather API error:", err);
        setWeatherData(null);
      });
    axios
      .get(forecastUrl)
      .then((res) => {
        const dailyData: ForecastDay[] = [];
        const seenDates = new Set();

        res.data.list.forEach((item: any) => {
          const date = new Date(item.dt * 1000);
          const day = date.toDateString();

          // فقط یک رکورد در روز بگیریم
          if (!seenDates.has(day) && dailyData.length < 5) {
            seenDates.add(day);
            dailyData.push({
              date,
              temperature: item.main.temp,
              description: item.weather[0].description,
              icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
            });
          }
        });

        setForecastData(dailyData);
      })
      .catch((err) => {
        console.error("Forecast API error:", err);
        setForecastData(null);
      });
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{ city, setCity, weatherData, setWeatherData, forecastData }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};
