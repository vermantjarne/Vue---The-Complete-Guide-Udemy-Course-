export default {
	coaches(state) {
		return state.coaches;
	},
	hasCoaches(state) {
		return state.coaches && state.coaches.length > 0;
	},
	isCoach(state, getters, rootState, rootGetters) {
		const coaches = getters.coaches;
		const userId = rootGetters.userId;
		return coaches.some(coach => coach.id === userId);
	},
	// The shouldUpdate getter checks if the last fetch has happened within the last minute
	// This ensures it does not continuously send requests
	shouldUpdate(state) {
		const lastFetch = state.lastFetch;
		if (!lastFetch) {
			return true;
		}
		
		const currentTimestamp = new Date().getTime();
		return (currentTimestamp - lastFetch) / 1000 > 60;
	},
};