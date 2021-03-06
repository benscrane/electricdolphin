import Knex from 'knex';
import { knexConfig } from '../db/knexfile';

export const knex = Knex(knexConfig);
