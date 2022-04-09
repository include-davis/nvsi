'use strict';

/**
 * abstract router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::abstract.abstract');
