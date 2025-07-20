import { Request, Response } from 'express';
import axios from 'axios';
import { ENV } from '../utils/env';

export const getWeatherHandler = async (req: Request, res: Response) => {
  const city = req.query.city as string;

  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }

  try {
    const weatherUrl = `${ENV.WEATHER_API_BASE_URL}?key=${ENV.WEATHER_API_KEY}&q=${encodeURIComponent(city)}`;
    const response = await axios.get(weatherUrl);
    const data = response.data;

    // Make the response more frontend-friendly
    res.json({
      city: data.location.name,
      country: data.location.country,
      region: data.location.region,
      localtime: data.location.localtime,
      temperature_c: data.current.temp_c,
      temperature_f: data.current.temp_f,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      humidity: data.current.humidity,
      wind_kph: data.current.wind_kph,
      wind_mph: data.current.wind_mph,
      wind_dir: data.current.wind_dir,
      pressure_mb: data.current.pressure_mb,
      pressure_in: data.current.pressure_in,
      cloud: data.current.cloud,
      feelslike_c: data.current.feelslike_c,
      feelslike_f: data.current.feelslike_f,
      uv: data.current.uv,
      last_updated: data.current.last_updated,
    });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch weather data', details: error.message });
  }
};
