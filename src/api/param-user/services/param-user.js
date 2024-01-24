'use strict';

/**
 * param-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::param-user.param-user');
