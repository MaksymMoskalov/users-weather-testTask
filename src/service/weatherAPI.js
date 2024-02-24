import axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.open-meteo.com/v1/`,
});

export const requestWeather = async (latitude, longitude) => {
  const config = {
    params: {
      latitude: latitude,
      longitude: longitude,
      current_weather: true,
      hourly: 'temperature_2m',
      forecast_days: 1,
    },
  };
  const { data } = await instance.get(`forecast`, config);
  return data;
};
