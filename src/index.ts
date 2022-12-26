import express from 'express';
import swaggerUI from 'swagger-ui-express';
import yaml from 'yamljs';

import { usersRoutes } from './routes/users.routes';

const app = express();

const swaggerDocument = yaml.load('./openapi.yaml');

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/users', usersRoutes);

export { app };
