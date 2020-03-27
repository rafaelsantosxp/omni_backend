// Import knex from knex
const knex = require('knex');
// Import knexfile to dbconfig
const dbconfig = require('../../knexfile');
// Use Knex to import dbconfig (file) and enter in development block
const connection = knex(dbconfig.development);
//export connection
module.exports = connection;