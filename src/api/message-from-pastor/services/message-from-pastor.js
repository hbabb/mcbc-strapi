'use strict';

/**
 * message-from-pastor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::message-from-pastor.message-from-pastor');
