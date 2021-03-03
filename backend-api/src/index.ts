import express, { Application } from 'express';
import { router } from './routes';
import { server as serverConfig } from './config';
import { testDBConnection } from './db/knexfile';

const app: Application = express();

app.use(router);

app.listen(serverConfig.port, async () => {
  console.log('Server listening on port 3000');
  await testDBConnection();
});
