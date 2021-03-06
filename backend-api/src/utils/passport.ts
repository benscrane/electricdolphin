import { Strategy as LocalStrategy } from 'passport-local';
import { createUser } from '../services/AuthService';
import * as User from '../models/user';

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
