const mariadb = require('mariadb');

const config ={
    host: '127.0.0.1', //localhost
    user: 'mariadb_user',
    password: 'abc123',
    database: 'stockdb',
    port: 3307,
    connectionLimmit: 10

};

const pool = mariadb.createPool(config);

module.exports = pool;