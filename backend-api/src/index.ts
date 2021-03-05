import express, { Application } from 'express';
import { router } from './routes';
import { server as serverConfig } from './config';
import { testDBConnection } from './db/knexfile';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bodyParser from 'body-parser';

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

passport.use(
    'signup',
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    },
    async (email, password, done) => {
        try {
            const user = {
                email,
                password,
            };
            return done(null, user);
        } catch (error) {
            done(error);
        }
    })
);

passport.use(
    'login',
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    },
    async (email, password, done) => {
        try {
            const user = {
                email,
                password,
            };

            return done(null, user, { message: 'Logged in successfully'})
        } catch (error) {
            done(error);
        }
    })
);

app.listen(serverConfig.port, async () => {
  console.log('Server listening on port 3000');
  await testDBConnection();
});
