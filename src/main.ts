import express, { Request, Response } from 'express';
import axios from 'axios';
import { ENV } from './utils/config/env';

const app = express();

app.get('/weather', async (req: Request, res: Response) => {
  const city = req.query.city as string;

  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }

  try {
    const weatherUrl = `${ENV.WEATHER_API_BASE_URL}?key=${ENV.WEATHER_API_KEY}&q=${encodeURIComponent(city)}`;
    const response = await axios.get(weatherUrl);
    const data = response.data;

    res.json({
      city: data.location.name,
      region: data.location.region,
      country: data.location.country,
      temperature_c: data.current.temp_c,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      humidity: data.current.humidity,
      wind_kph: data.current.wind_kph,
    });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch weather data', details: error.message });
  }
});

app.listen(ENV.PORT, () => {
  console.log(`Server is running on http://localhost:${ENV.PORT}`);
});
