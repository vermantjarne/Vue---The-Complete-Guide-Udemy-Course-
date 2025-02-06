import counterGetters from './getters.js';
import counterMutations from './mutations.js';
import counterActions from './actions.js';

// This module works exactly the same as a store
export default {
	// The 'namedspaced' property defines whether or not a module should be detached from the main store
	// This means that, to reference any of its state, getters, etc it requires a named reference
	// This named reference is the key in the 'modules' property of the main store
	namespaced: true,

	// The state inside of a module is treated as a local state to this module
	// Anything adjusted in this module only affects things inside of this module
	state() {
		return {
			counter: 0,
		};
	},

	getters: counterGetters,

	mutations: counterMutations,
	
	actions: counterActions,
};