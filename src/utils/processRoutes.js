export default function processRoutes(routes, path) {
  const section = path
    .split('/')
    .slice(1, 3)
    .join('/');

  const preprocessedRoutes = routes.filter(
    route =>
      route.slug.split('/').length <= 4 || route.slug.startsWith(`/${section}`)
  );

  return preprocessedRoutes;
}
