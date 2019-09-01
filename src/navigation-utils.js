export const combine = (parent, path) =>
  `${parent.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;

export const nestPaths = (routes, parent = "") =>
  routes.map(route => {
    const path = combine(parent, route.path);

    return {
      ...route,
      path,
      ...(route.routes && { routes: nestPaths(route.routes, path) })
    };
  });

export const setupParents = (routes, parent = null) =>
  routes.map(route => {
    const withParent = {
      ...route,
      ...(parent && { parent })
    };

    return {
      ...withParent,
      ...(withParent.routes && {
        routes: setupParents(withParent.routes, withParent)
      })
    };
  });

export const flattenParents = route => {
  if (!route.parent) {
    return [];
  }

  return [route.parent, ...flattenParents(route.parent)].flat(Infinity);
};

export const flattenRoutes = routes =>
  routes
    .map(route => [route, route.routes ? flattenRoutes(route.routes) : []])
    .flat(Infinity);

export const generateAppRoutes = routes => {
  return flattenRoutes(setupParents(nestPaths(routes)));
};
