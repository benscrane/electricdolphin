import { knex } from '../utils/db'
import * as Knex from 'knex';
import { omit } from 'lodash';
import { hashPassword } from '../services/AuthService';
import bcrypt from 'bcrypt';

export interface User {
    id?: string;
    email: string;
    password?: string;
}

interface FindOptions {
    email?: string;
    single?: boolean;
}

export const findOne = async (options: FindOptions): Promise<User> => {
    return await find({
        ...options,
        single: true,
    }) as User;
};

export const find = async (options: FindOptions): Promise<User | User[]> => {
    const knexOpts = formatOptions(options);
    const rows = await knex('user').where(knexOpts).select(['id', 'email', 'password']);
    const users = rows.map((u: any) => formatUser(u));

    return options.single
        ? users[0]
        : users;
};

export const create = async (options: { email: string, password: string, id: string }): Promise<User> => {
    const dbOutput = await knex('user').insert(options, ['id', 'email']);
    return formatUser(dbOutput);
};

export const formatUser = (input: any): User => {
    return {
        id: input.id,
        email: input.email,
        password: input.password,
    };
}

export const formatOptions = (options: FindOptions): any => {
    return omit(options, ['single']);
};

export const validateUser = async (user: User, inputPass: string) => {
    const { password: dbPass } = user;
    if (!dbPass) {
        throw new Error('Failed to load database password')
    }
    const passwordMatch = bcrypt.compare(inputPass, dbPass);

    return passwordMatch;
};
