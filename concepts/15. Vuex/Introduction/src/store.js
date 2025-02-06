// // The logic for the store has been completely separated into their own files
// // For this project, it wouldn't be necessary, however it is good practice

// import { createStore } from 'vuex';

// // This module works exactly the same as a store
// const counterModule = {
// 	// The 'namedspaced' property defines whether or not a module should be detached from the main store
// 	// This means that, to reference any of its state, getters, etc it requires a named reference
// 	// This named reference is the key in the 'modules' property of the main store
// 	namespaced: true,
// 	// The state inside of a module is treated as a local state to this module
// 	// Anything adjusted in this module only affects things inside of this module
// 	state() {
// 		return {
// 			counter: 0,
// 		};
// 	},
// 	getters: {
// 		finalCounter(state) {
// 			return state.counter * 2;
// 		},
// 		normalizedCounter(_, getters) {
// 			const finalCounter = getters.finalCounter;
// 			if (finalCounter < 0) {
// 				return 0;
// 			}
// 			if (finalCounter > 100) {
// 				return 100;
// 			}
// 			return finalCounter;
// 		},
// 		// Modules get the rootState and rootGetters, so that they are able to access the main store's state and getters
// 		// testAuth(state, getters, rootState, rootGetters) {
// 		testAuth(state, getters, rootState) {		
// 			return rootState.isLoggedIn;
// 		}
// 	},
// 	mutations: {
// 		increment(state) {
// 			state.counter = state.counter + 2;
// 		},
// 		// A committed mutation may expect a certain payload
// 		// This is an object that contains the expected properties in the method
// 		increase(state, payload) {
// 			state.counter = state.counter + payload.value;
// 		},
// 	},
// 	actions: {
// 		increment(context) {
// 			setTimeout(() => {
// 				context.commit('increment');
// 			}, 2000);
// 		},
// 		increase(context, payload) {
// 			context.commit('increase', payload);
// 		},
// 	},
// };

// // Vuex gives an alternative, better method, of implementing state management
// // This is something that is possible through data and provide() and inject(), however it is less convenient
// // Vuex lets use define the data flow very strictly
// const store = createStore({
// 	// Modules are other stores that are integrated into this main store
// 	// This allows the separation of logic into various objects
// 	modules: {
// 		// In this case, 'numbers' refers to counterModule
// 		numbers: counterModule,
// 	},
// 	// The state is similar to data that is used globally
// 	state() {
// 		return {
// 			isLoggedIn: false,
// 		};
// 	},
// 	// Getters are similar to computed properties, defined globally
// 	// This once again ensures that logic is not written twice across various places
// 	// This also keeps the logic in components simpler
// 	// These get 2 optional parameters: state and getters
// 	// The state parameter passes the state of the store
// 	// The getters parameter passes a list of all other getters, so they are usable in the getter
// 	getters: {
// 		userIsAuthenticated(state) {
// 			return state.isLoggedIn;
// 		},
// 	},
// 	// Through mutations, every component that modifies the state does it the same way
// 	// This avoids code duplication across various components
// 	// The state is never directly edited from within components, instead the components commit mutations
// 	// Mutations must be synchronous and may thus not be performing asynchronous functionalities
// 	// A functionality like setTimeout() would work, but is bad practice
// 	mutations: {
// 		setAuth(state, payload) {
// 			state.isLoggedIn = payload.isAuth;
// 		},
// 	},
// 	// It is good practice to use actions to communicate from a component to a mutation
// 	// Actions may use the same name as mutations, and it usually makes sense to do so
// 	// Actions receive a context, which allows a mutation to be committed
// 	// This context can also call other actions, getters, etc
// 	// The difference between actions and mutations is that actions are able to perform asynchronous actions
// 	actions: {
// 		login(context) {
// 			context.commit('setAuth', {
// 				isAuth: true,
// 			});
// 		},
// 		logout(context) {
// 			context.commit('setAuth', {
// 				isAuth: false,
// 			});
// 		},
// 	},
// })

// export default store;