import * as Knex from "knex";


export const up = async (knex: Knex): Promise<any> => {
    return Promise.all([
        knex.schema.alterTable('user', t => {
            t.string('password').notNullable();
        })
    ])
}


export const down = async (knex: Knex): Promise<any> => {
    return Promise.all([
        knex.schema.alterTable('user', t => {
            t.dropColumn('password');
        }),
    ]);
};

