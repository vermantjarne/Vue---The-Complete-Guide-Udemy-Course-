// Import from newly installed vue-router package
import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './pages/UsersList.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

// createRouter() requires a JavaScript object as a parameter
// When it loads a component, it does not replace the entire screen with the component
// Instead, it loads it in where the <router-view> component is placed in a template
const router = createRouter({
	// Determines how to manage the routing history
	// There are 2 different kinds that can be used
	// createWebHistory() uses the built-in browser support for managing the history of routing
	history: createWebHistory(),
	// Array of supported routes
	// These routes are parsed from first to last in this array, thus the order of defining the routes matters
	routes: [
		// A redirect can happen to another path
		{
			path: '/',
			redirect: '/teams',
		},
		// Each basic element of the array is an object, containing a path and component
		{
			// The 'name' property is used to reference this path
			name: 'teams',
			path: '/teams',
			// The 'meta' property allows specific properties to be added
			// This can then be used in the 'to' and 'from' parameters in route navigation functions 
			meta: {
				needsAuth: true,
			},
			// component: TeamsList,
			// Multiple components can be supported for a single route
			components: {
				default: TeamsList,
				footer: TeamsFooter,
			},
			// An alternative to a redirect is to set the alias on an existing path
			// However, alias does not change the URL, as it simply loads the same component
			// alias: '/',

			// children takes an array of routes, which allows nested routes to be defined
			// This requires a second <router-view> to be added, here in the TeamsList component
			// Otherwise, it does not render the child routes in the parent component
			children: [
				// Route parameters are supported by using :, followed by the parameter
				{
					name: 'team-members',
					path: ':teamId',
					component: TeamMembers,
					// The props option lets the vue router pass the dynamic parameters as props when it is loaded, which can avoid certain issues
					props: true,
				},
			],
		},
		// This is inserted into the children array of /teams instead
		// {
		// 	path: '/teams/:teamId',
		// 	component: TeamMembers,
		// 	props: true,
		// },
		{
			path: '/users',
			components: {
				default: UsersList,
				footer: UsersFooter,
			},
			// beforeEnter() is similar to beforeEach, but for a specific path
			// Its parameters are exactly the same as beforeEach()
			beforeEnter(to, from, next) {
				next();
			},
		},
		// This path serves as a fallback, ensuring that any value that is not defined as a path redirects it
		// It uses regex to reference every path possible
		{
			path: '/:notFound(.*)',
			component: NotFound,
		},
	],
	// vue-router automatically assigns the 'router-link-active' and 'router-link-exact-active' to the active path
	// 'router-link-active' is applied to any navigation route that uses the current route as a part of its route
	// 'router-link-exact-active' only focuses the exact current route
	// The classes that are assigned can be altered usign linkActiveClass
	linkActiveClass: 'active',
	// The scrollBehavior property is a method that is called whenever the page changes
	// It automatically accepts 3 parameters: to, from and savedPosition
	// to and from are the pages the user is navigating to and navigating from
	// savedPosition determines the 'left' and 'top' property when the user navigates
	// Starting a parameter with '_' makes the IDE aware that the parameters are necessary, but unused
	scrollBehavior(_, _2, savedPosition) {
		// If the saved position exist, it returns to the saved position, unless it does not exist
		// This means that, when navigating back using the back arrow, the position the user was on is stored
		if (savedPosition) {
			return savedPosition;
		}
		return {
			left: 0,
			top: 0,
		}
	},
});

// Before navigating to a route, the beforeEach() function is called
// 'to' and 'from' are the routes navigated to and from
// 'next'
router.beforeEach(function(to, from, next) {
	// Using next() allows the navigation to happen
	// next();
	// Using next(false) fails the loading of the page
	// Failing to load can allow it to be cancelled under certain conditions
	// next(false);
	// if (to.name === 'team-members') {
	// 	next();
	// }
	// else {
	// 	next({
	// 		name: 'team-members',
	// 		params: { teamId: 't2' },
	// 	})
	// }
	if (to.meta.needsAuth) {
		console.log('This route needs authentication!');
		next();
	}
	else {
		next()
	}
});

// This runs after the navigation has happened
// This is useful for sending analytics data, not for controlling the navigation
// router.afterEach(function(to, from) {
router.afterEach(function() {

});

export default router;