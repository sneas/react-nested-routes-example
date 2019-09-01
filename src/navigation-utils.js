export const nestPaths = (routes, parent = "") =>
  routes.map(route => {
    const path = `${parent}${route.path}`.replace("//", "/");

    return {
      ...route,
      path,
      ...(route.children && { children: nestPaths(route.children, path) })
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
      ...(withParent.children && {
        children: setupParents(withParent.children, withParent)
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
    .map(route => [route, route.children ? flattenRoutes(route.children) : []])
    .flat(Infinity);

export const generateAppRoutes = routes => {
  return flattenRoutes(setupParents(nestPaths(routes)));
};
