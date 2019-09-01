export const nestPaths = (pages, parent = "") =>
  pages.map(page => {
    const path = `${parent}${page.path}`.replace("//", "/");

    return {
      ...page,
      path,
      ...(page.children && { children: nestPaths(page.children, path) })
    };
  });

export const setupParents = (pages, parent = null) =>
  pages.map(page => {
    const withParent = {
      ...page,
      ...(parent && { parent })
    };

    return {
      ...withParent,
      ...(withParent.children && {
        children: setupParents(withParent.children, withParent)
      })
    };
  });

export const flattenParents = page => {
  if (!page.parent) {
    return [];
  }

  return [page.parent, ...flattenParents(page.parent)].flat(Infinity);
};

export const flattenPages = pages =>
  pages
    .map(page => [page, page.children ? flattenPages(page.children) : []])
    .flat(Infinity);

export const generateAppPages = pages => {
  return flattenPages(setupParents(nestPaths(pages)));
};
