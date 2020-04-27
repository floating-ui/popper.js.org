export default function processRoutes(routes, path) {
  const versionMatch = path.match(/^\/docs\/(v[0-9]+)\//);
  const docsVersion = versionMatch ? versionMatch[1] : null;

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
