import Knex from 'knex';
import { join } from 'path';
import * as url from 'url';
import { knexConfig } from './knexfile';

export const latest = () => {
    const knex = Knex(knexConfig);

    return knex.migrate.latest({
        directory: join(__dirname, 'migrations'),
        extension: 'ts',
    })
        .then((res: any) => printMigrations(knexConfig.connection, res))
        .then(() => process.exit())
        .catch((err: any) => {
            console.error(err);
            process.exit(1);
        });
};

export const rollback = () => {
    const knex = Knex(knexConfig);

    return knex.migrate.rollback({
        directory: join(__dirname, 'migrations'),
        extension: 'ts',
    })
        .then((res: any) => printMigrations(knexConfig.connection, res))
        .then(() => process.exit())
        .catch((err: any) => {
            console.error(err);
            process.exit(1);
        });
};

const printMigrations = (connection: any, migrationGroup: any) => {
    let dbConnection: any = {};

    if (typeof connection === 'string') {
        const urlObj = url.parse(connection);
        dbConnection.host = urlObj.hostname;
        dbConnection.port = urlObj.port;
        dbConnection.database = urlObj.path && urlObj.path.slice(1);
    } else {
        dbConnection = connection;
    }

    console.info(`Host: ${dbConnection.host}, Port: ${dbConnection.port}, Database: ${dbConnection.database}`);

    migrationGroup.forEach((val: any, index: any) => {
        if (index === 0) {
            console.info(`Batch Number: ${val}`);
            return;
        }

        val.forEach((migration: any) => {
            console.info(migration.replace(process.cwd(), '.'));
        });
        console.info('');
    });
    console.info('');
};