export default {
	increment(state) {
		state.counter = state.counter + 2;
	},
	// A committed mutation may expect a certain payload
	// This is an object that contains the expected properties in the method
	increase(state, payload) {
		state.counter = state.counter + payload.value;
	},
}