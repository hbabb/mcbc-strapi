
/**
 * @description This module exports a configuration object for the server in production environment.
 *
 * @module config/env/production/server.js
 *
 * @type {Object}
 */
module.exports = ({ env }) => ({
  /**
   * @description Enables proxy mode.
   */
  proxy: true,

  /**
   * @description The URL of the application.
   */
  url: env('APP_URL'),

  /**
   * @description The keys for the application.
   */
  app: {
    keys: env.array('APP_KEYS'),
  }
});
