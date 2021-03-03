const baseTen = 10;

export const server = {
    port: parseInt(process.env.HTTP_SERVER_PORT || '3000', baseTen),
};

export const db = {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DATABASE,
    user: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD,
    port: parseInt(process.env.DATABASE_PORT || '5432', baseTen),
};
