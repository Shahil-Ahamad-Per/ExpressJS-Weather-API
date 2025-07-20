import { weatherSchema } from './weather.schema';

export const contarct = {
  '/weather': {
    get: {
      tags: ['Weather'],
      summary: 'Get weather information for a city',
      parameters: [
        {
          in: 'query',
          name: 'city',
          schema: { type: 'string' },
          required: true,
          description: 'Name of the city',
        },
      ],
      responses: {
        200: {
          description: 'Weather data',
          content: {
            'application/json': {
              schema: weatherSchema,
            },
          },
        },
        400: {
          description: 'City parameter is required',
        },
        500: {
          description: 'Failed to fetch weather data',
        },
      },
    },
  },
};
