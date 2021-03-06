import express, { Application } from 'express';
import { router } from './routes';
import { server as serverConfig } from './config';
import { testDBConnection } from './db/knexfile';
import bodyParser from 'body-parser';
import passport from 'passport';
import { loginStrategy, signupStrategy } from './utils/passport';

passport.use('signup', signupStrategy);
passport.use('login', loginStrategy);

const app: Application = express();

app.use(bodyParser.json({}));

app.use(router);

app.listen(serverConfig.port, async () => {
  console.log('Server listening on port 3000');
  await testDBConnection();
});
