import express, { Request, Response } from 'express';
import { ENV } from './utils/env';
import swaggerUi from 'swagger-ui-express';
import { swaggerDefinition } from './swagger/swaggerDef';

const app = express();

// Swagger setup using external contract
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to The Express JS Weather API');
})

// ...existing code...

import { getWeatherHandler } from './swagger/weather.handler';

app.get('/weather', getWeatherHandler);

app.listen(ENV.PORT, () => {
  console.log(`Server is running on http://localhost:${ENV.PORT}`);
  console.log("Swagger Docs available at http://localhost:" + ENV.PORT + "/api-docs");
});
