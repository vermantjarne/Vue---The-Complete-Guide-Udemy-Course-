import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './modules/counter/index.js';

// Vuex gives an alternative, better method, of implementing state management
// This is something that is possible through data and provide() and inject(), however it is less convenient
// Vuex lets use define the data flow very strictly
const store = createStore({
	// Modules are other stores that are integrated into this main store
	// This allows the separation of logic into various objects
	modules: {
		// In this case, 'numbers' refers to counterModule
		numbers: counterModule,
	},

	// The state is similar to data that is used globally
	state() {
		return {
			isLoggedIn: false,
		};
	},

	// Getters are similar to computed properties, defined globally
	// This once again ensures that logic is not written twice across various places
	// This also keeps the logic in components simpler
	// These get 2 optional parameters: state and getters
	// The state parameter passes the state of the store
	// The getters parameter passes a list of all other getters, so they are usable in the getter
	getters: rootGetters,

	// Through mutations, every component that modifies the state does it the same way
	// This avoids code duplication across various components
	// The state is never directly edited from within components, instead the components commit mutations
	// Mutations must be synchronous and may thus not be performing asynchronous functionalities
	// A functionality like setTimeout() would work, but is bad practice
	mutations: rootMutations,

	// It is good practice to use actions to communicate from a component to a mutation
	// Actions may use the same name as mutations, and it usually makes sense to do so
	// Actions receive a context, which allows a mutation to be committed
	// This context can also call other actions, getters, etc
	// The difference between actions and mutations is that actions are able to perform asynchronous actions
	actions: rootActions,
})

export default store;