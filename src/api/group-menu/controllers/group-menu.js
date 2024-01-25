'use strict';

/**
* group-menu controller
*/

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::group-menu.group-menu', ({ strapi }) => ({
    async GetMany(ctx) {
      const queryObj = ctx.request.query;
      console.error(queryObj);
      const start = (Number(queryObj.page) > 0 && queryObj !== null) ? (Number(queryObj.page) - 1) * Number(queryObj.pageSize) : 0;
      const pageSize = (Number(queryObj.page) > 0 && queryObj !== null) ? Number(queryObj.pageSize) : 10;
        try {
            const data = await strapi.entityService.findMany('api::group-menu.group-menu', {
                fields: ["Description", "OrderNumber", "Icon"],
                start:start,
                limit:pageSize
            });
            const allData = await strapi.entityService.findMany('api::group-menu.group-menu');
            const numData = Object.keys(allData).length;

            ctx.status = 200;

            ctx.body = {
                status: 'success',
                page:queryObj.page,
                totalData:numData,
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
    },

}));

