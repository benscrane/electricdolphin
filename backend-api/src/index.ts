import express, { Application } from 'express';
import { router } from './routes';
import { server as serverConfig } from './config';
import { testDBConnection } from './db/knexfile';
import bodyParser from 'body-parser';
import passport from 'passport';
import { jwtStrategy } from './utils/passport';

passport.use(jwtStrategy);

const app: Application = express();

app.use(bodyParser.json({}));

app.use(router);

app.use((err: any, _: any, res: any) => {
    res.status(err.status || 500);
    res.json({ error: err});
});

app.listen(serverConfig.port, async () => {
  console.log('Server listening on port 3000');
  await testDBConnection();
});
