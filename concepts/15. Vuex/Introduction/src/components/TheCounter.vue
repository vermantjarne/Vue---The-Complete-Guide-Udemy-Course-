<template>
	<h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		// counter() {
		// 	return this.$store.getters.finalCounter;
		// }
		// The mapGetters() retrieves the defined getters
		// Using ...mapGetters([...]) lets us define these getters as computed properties for a component
		// This no longer works with a namespace for the module
		// ...mapGetters(['finalCounter'])
		// Instead, it uses a first argument of the namespace, and a second argument of the getters
		...mapGetters('numbers', ['finalCounter'])
	},
}
</script>