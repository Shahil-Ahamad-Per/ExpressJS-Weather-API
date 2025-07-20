import { contarct } from './contracts';

export const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Weather API',
    version: '1.0.0',
    description: 'A simple Express Weather API',
  },
  tags: [
    {
      name: 'Weather',
      description: 'Weather related endpoints',
    },
  ],
  // API contracts (OpenAPI paths)
  paths:contarct,
};
