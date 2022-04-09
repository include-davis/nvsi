'use strict';

/**
 *  abstract controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::abstract.abstract');
