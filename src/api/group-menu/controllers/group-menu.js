'use strict';

/**
 * group-menu controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::group-menu.group-menu', ({ strapi }) => ({
  async findMany(ctx) {
    try {
      const data = await strapi.entityService.findMany('api::group-menu.group-menu', {
        fields: ["Description", "OrderNumber", "Icon"],
      });

      ctx.status = 200;

      ctx.body = {
        status: 'success',
        statusCode: ctx.status,
        data: data,
      };
    } catch (error) {
      ctx.status = error.status || 500;

      // You might want to log the error here for debugging purposes.
      console.error(error);

      ctx.body = {
        status: 'error',
        statusCode: ctx.status,
        error: error.message,
      };
    }
  }
}))
