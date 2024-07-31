/**
 * @description This module exports a configuration object for connecting to a
 * production PostgreSQL database.
 *
 * @module config/env/production/database.js
 *
 * @type {Object}
 * @property {Object} connection - An object containing configuration for the
 *   database connection.
 * @property {string} connection.client - The name of the database client.
 * @property {Object} connection.connection - An object containing configuration
 *   for the database connection.
 * @property {string} connection.connection.host - The host of the database.
 * @property {number} connection.connection.port - The port of the database.
 * @property {string} connection.connection.database - The name of the database.
 * @property {string} connection.connection.user - The username for the database.
 * @property {string} connection.connection.password - The password for the database.
 * @property {Object} connection.connection.ssl - An object containing
 *   configuration for SSL connections.
 * @property {string} connection.connection.ssl.ca - The path to the SSL CA file.
 */
module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: {
          // This is needed for SSL connections to work properly.
          ca: env('DATABASE_CA'),
        },
      },
    },
});

