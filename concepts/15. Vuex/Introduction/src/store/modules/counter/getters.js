export default {
	finalCounter(state) {
		return state.counter * 2;
	},
	normalizedCounter(_, getters) {
		const finalCounter = getters.finalCounter;
		if (finalCounter < 0) {
			return 0;
		}
		if (finalCounter > 100) {
			return 100;
		}
		return finalCounter;
	},
	// Modules get the rootState and rootGetters, so that they are able to access the main store's state and getters
	// testAuth(state, getters, rootState, rootGetters) {
	testAuth(state, getters, rootState) {		
		return rootState.isLoggedIn;
	}
}