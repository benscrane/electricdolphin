import { Strategy as LocalStrategy } from 'passport-local';
import { createUser } from '../services/AuthService';
import * as User from '../models/user';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

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
