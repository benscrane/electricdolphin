import bcrypt from 'bcrypt';
import { knex } from '../utils/db';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../models';

export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

export const createUser = async (email: string, password: string) => {
    const hashedPassword = await hashPassword(password);
    await checkDbForEmail(email);
    const user: User = {
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