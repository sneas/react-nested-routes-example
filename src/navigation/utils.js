/**
 * Combine paths
 *
 * @param {string} parent
 * @param {string} child
 * @returns {string}
 */
export const combinePaths = (parent, child) =>
  `${parent.replace(/\/$/, "")}/${child.replace(/^\//, "")}`;

/**
 * Recursively build paths for each navigation item
 *
 * @param navigation
 * @param {string} parentPath
 * @returns {*}
 */
export const buildPaths = (navigation, parentPath = "") =>
  navigation.map(route => {
    const path = combinePaths(parentPath, route.path);

    return {
      ...route,
      path,
      ...(route.routes && { routes: buildPaths(route.routes, path) })
    };
  });

/**
 * Recursively provide parent reference for each navigation item
 *
 * @param navigation
 * @param parentRoute
 * @returns {*}
 */
export const setupParents = (navigation, parentRoute = null) =>
  navigation.map(route => {
    const withParent = {
      ...route,
      ...(parentRoute && { parent: parentRoute })
    };

    return {
      ...withParent,
      ...(withParent.routes && {
        routes: setupParents(withParent.routes, withParent)
      })
    };
  });

/**
 * Convert navigation tree into flat array
 *
 * @param navigation
 * @returns {any[]}
 */
export const flattenNavigation = navigation =>
  navigation
    .map(route => [route, route.routes ? flattenNavigation(route.routes) : []])
    .flat(Infinity);

/**
 * Combine all the above functions together
 *
 * @param navigation
 * @returns {any[]}
 */
export const generateAppRoutes = navigation => {
  return flattenNavigation(setupParents(buildPaths(navigation)));
};

/**
 * Provide list of parents for an individual route
 *
 * @param route
 * @returns {any[]|Array}
 */
export const flattenParents = route => {
  if (!route.parent) {
    return [];
  }

  return [route.parent, ...flattenParents(route.parent)].flat(Infinity);
};
