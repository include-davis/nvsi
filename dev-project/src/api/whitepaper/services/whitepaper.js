'use strict';

/**
 * whitepaper service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::whitepaper.whitepaper');
