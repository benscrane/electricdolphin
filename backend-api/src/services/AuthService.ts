import bcrypt from 'bcrypt';
import { knex } from '../utils/db';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../models';
import * as jwt from 'jsonwebtoken';

export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

export const createUser = async (email: string, password: string) => {
    const hashedPassword = await hashPassword(password);
    await checkDbForEmail(email);
    const user: User.User = {
        id: uuidv4(),
        email,
        password: hashedPassword,
    };
    let userId = await knex('user').insert(user, 'id');
    return {
        email,
        hashedPassword,
        userId,
    };
};

export const checkDbForEmail = async (email: string) => {
    const rows = await knex('user').where({ email }).select('id');
    if (rows.length > 0) {
        throw new Error('Account already exists for that email');
    }
}

export const loginUser = async ({ email, password}: { email: string, password: string}): Promise<{ token: string }> => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('No user with that email');
    }
    const validPassword = await User.validateUser(user, password!);

    if (!validPassword) {
        throw new Error('Invalid password');
    }

    const token = await createJwt(user);

    return {
        token
    }
};

export const createJwt = (user: User.User): string => {
    const todayMs = new Date().getTime();
    const todayEpoch = Math.floor(todayMs / 1000);
    const EXP_LENGTH = 7 * 24 * 60 * 60;
    const exp = todayEpoch + EXP_LENGTH;
    return jwt.sign({
        id: user.id,
        email: user.email,
        exp
    }, 'TOP_SECRET');
};
