const Pool = require('pg').Pool;
const pgFormat = require('pg-format');

const pool = new Pool({
    host:  process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'trade_journal',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'admin'
});

module.exports = {
    pool,
    pgFormat
};