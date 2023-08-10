import express, { Request, Response } from 'express';
import 'dotenv/config';
import middlewares from './middlewares';
import { routes } from './routes';
import path from 'path';

const app = express();
const port = 3003;
app.use(middlewares);
app.use(express.static(process.cwd() + '/htdocs'));

for (const route of Object.values(routes)) {
  app[route.method](`/api${route.path}`, route.endpoint);
}

app.get('/*', (req: Request, res: Response) => {
  res.sendFile(`${process.cwd()}/htdocs/index.html`);
});

app.listen(port, () => {
  return console.log(`Listening: http://localhost:${port}.`);
});

