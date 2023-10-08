import { RootRoute, Route, Router } from '@tanstack/react-router';
import Root from './Root';

const rootRoute = new RootRoute({
	component: Root,
});
const indexRoute = new Route({ getParentRoute: () => rootRoute, path: '/' });
const weekRoute = new Route({ getParentRoute: () => rootRoute, path: 'week' });
const teamRoute = new Route({ getParentRoute: () => rootRoute, path: 'team' });
const teamIndexRoute = new Route({
	getParentRoute: () => teamRoute,
	path: '/',
});
// Test route can be eliminated without breaking anything
const testRoute = new Route({ getParentRoute: () => teamRoute, path: 'test' });

const routeTree = rootRoute.addChildren([
	indexRoute,
	weekRoute,
	teamRoute.addChildren([teamIndexRoute, testRoute]),
]);

const router = new Router({ routeTree });

export default router;
