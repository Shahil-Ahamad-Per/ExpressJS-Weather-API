import dotenv from 'dotenv';

dotenv.config();

const getEnv = (key: string, required = true): string => {
  const value = process.env[key];
  if (!value && required) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value!;
};

export const ENV = {
  PORT: parseInt(process.env.PORT || '3000'),
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || '',
  WEATHER_API_BASE_URL: process.env.WEATHER_API_BASE_URL || '',
};

