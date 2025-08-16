// import axios from "axios";

// // const apiKey = "f5e814a04eddfab1740f07bf0328eee2";

// export const fetchWeather = async (city: string) => {
//   const res = await axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//   );
//   const data = res.data;
//   return {
//     temperature: data.main.temp,
//     humidity: data.main.humidity,
//     wind: data.wind.speed,
//     description: data.weather[0].description,
//     icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
//     city: data.name,
//   };
// };
