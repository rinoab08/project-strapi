'use strict';

/**
 * group-menu router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::group-menu.group-menu');
module.exports = {
  routes: [
      {
          method: "GET",
          path: "/group-menus",
          handler: "group-menu.findMany",
          config: {
              policies: [],
              middlewares: [],
          },
      },
  ],
};
