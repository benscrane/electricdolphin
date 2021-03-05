import { Strategy as LocalStrategy } from 'passport-local';
import { createUser } from '../services/AuthService';

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
