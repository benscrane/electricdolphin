import Knex from 'knex';
import { db as config } from '../config';

const knexConnections: { [key: string]: Knex.Config} = {
    development: {
        client: 'pg',
        connection: {
            host: config.host,
            port: config.port,
            database: config.database,
            user: config.user,
            password: config.password,
        },
    },

    stage: {
        client: 'pg',
        connection: {
            host: config.host,
            port: config.port,
            database: config.database,
            user: config.user,
            password: config.password,
        },
    },

    production: {
        client: 'pg',
        connection: {
            host: config.host,
            port: config.port,
            database: config.database,
            user: config.user,
            password: config.password,
        },
    }
};

export const knexConfig = knexConnections[process.env.NODE_ENV || 'development'];

export const testDBConnection = async () => {
    const knex = Knex(knexConfig);

    try {
        await knex.raw('SELECT 1');
    } catch (err) {
        console.error(`Failed to connect to database: ${err}`);
        process.exit(1);
    }
}