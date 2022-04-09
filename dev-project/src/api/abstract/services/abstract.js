'use strict';

/**
 * abstract service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::abstract.abstract');
