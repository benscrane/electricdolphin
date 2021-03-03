import Knex from 'knex';
import { join } from 'path';
import { knexConfig } from './knexfile';

const args = process.argv.slice(2);
const name = args[0];

if (!name) {
    throw new Error('"name" is required');
}

const knex = Knex(knexConfig);

knex.migrate.make(name, {
    directory: join(__dirname, 'migrations'),
    extension: 'ts',
})
    .then((res: any) => process.exit(0))
    .catch((err: any) => {
        console.error(err);
        process.exit(1);
    });
    