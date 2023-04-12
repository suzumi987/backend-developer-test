
import Knex from 'knex';

const write = {
    client: "postgres",
    version: '11.6',
    connection: { connectionString: process.env.DATABASE_CONNCET, ssl: { rejectUnauthorized: false } },
    pool: { min: 0, max: 100 },
    searchPath: ['knex', 'public']
}

const masterDb = Knex(write);

export {
    masterDb
}