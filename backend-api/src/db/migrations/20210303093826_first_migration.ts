import * as Knex from "knex";


export const up = async (knex: Knex): Promise<any> => {
    return Promise.all([
        knex.schema.createTable('user', t => {
            t.uuid('id').primary();
            t.string('email').unique().notNullable();
            t.timestamps(true, true);
        })
    ])
}


export const down = async (knex: Knex): Promise<any> => {
    return Promise.all([
        knex.schema.dropTableIfExists('user'),
    ]);
};

