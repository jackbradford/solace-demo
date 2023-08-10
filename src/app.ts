import express, { Request, Response } from 'express';
import 'dotenv/config';
import { routes } from './routes';

const app = express();
const port = 3003;

app.get('/', (req: Request, res: Response) => {
  res.send("Done."); // FIXME: deliver FE.
});

for (const route of Object.values(routes)) {
  app[route.method](`/api${route.path}`, route.endpoint);
}

app.listen(port, () => {
  return console.log(`Listening: http://localhost:${port}.`);
});

