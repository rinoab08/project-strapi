'use strict';

/**
* group-menu router
*/

const { createCoreRouter } = require('@strapi/strapi').factories;
const defaultRouter = createCoreRouter("api::group-menu.group-menu");

const customRouter = (innerRouter, extraRoutes = []) => {
    let routes;
    return {
      get prefix() {
        return innerRouter.prefix;
      },
      get routes() {
        if (!routes) routes = innerRouter.routes.concat(extraRoutes);
        return routes;
      },
    };
};

  const myExtraRoutes = [
    {
        method: "GET",
        path: "/group-menu",
        handler: "group-menu.GetMany",
    }
  ];

  module.exports = customRouter(defaultRouter, myExtraRoutes);

