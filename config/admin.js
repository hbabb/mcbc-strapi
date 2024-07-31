/**
 * This file exports a configuration object for the admin panel.
 *
 * @description This module exports a configuration object for the admin panel.
 *
 * @module config/admin.js
 *
 * @type {Object}
 * @property {Object} auth - An object containing the configuration for the admin panel's authentication.
 * @property {string} auth.secret - The secret key for JWT tokens.
 * @property {Object} apiToken - An object containing the configuration for the admin panel's API tokens.
 * @property {string} apiToken.salt - The salt for API tokens.
 * @property {Object} transfer - An object containing the configuration for the admin panel's transfer tokens.
 * @property {Object} transfer.token - An object containing the configuration for the transfer tokens.
 * @property {string} transfer.token.salt - The salt for transfer tokens.
 * @property {Object} flags - An object containing flags for the admin panel.
 * @property {boolean} flags.nps - A boolean flag for whether to show the NPS survey.
 * @property {boolean} flags.promoteEE - A boolean flag for whether to promote the Enterprise Edition.
 */
module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
