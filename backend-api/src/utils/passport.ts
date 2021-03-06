import { Strategy as LocalStrategy } from 'passport-local';
import { createUser } from '../services/AuthService';
import * as User from '../models/user';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

export const signupStrategy = new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
    },
    async (email, password, done) => {
        try {
            const user = await createUser(email, password);
            return done(null, user);
        } catch (error) {
            done(error);
        }
    }
);

export const loginStrategy = new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
    },
    async (email, password, done) => {
        try {
            console.log(email);
            const user = await User.findOne({ email });

            if (!user) {
                return done(null, false, { message: 'User not found'});
            }
            console.log(user);

            const validPassword = await User.validateUser(user, password);

            if (!validPassword) {
                return done(null, false, { message: "Password not valid" })
            }

            return done(null, user, { message: 'Logged in successfull' });

        } catch (error) {
            done(error);
        }
    }
);

export const jwtStrategy = new JWTStrategy(
    {
        secretOrKey: 'TOP_SECRET',
        jwtFromRequest: ExtractJwt.fromUrlQueryParameter('secret_token')
    },
    async (token, done) => {
        try {
            return done(null, token.user);
        } catch (error) {
            done(error);
        }
    }
)
