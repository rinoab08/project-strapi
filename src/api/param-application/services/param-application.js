'use strict';

/**
 * param-application service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::param-application.param-application');
