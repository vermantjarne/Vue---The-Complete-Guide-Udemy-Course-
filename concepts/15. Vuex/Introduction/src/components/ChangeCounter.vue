<template>
	<button @click="inc">Add 1</button>
	<button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	methods: {
		// addOne() {
		// 	// this.$store.commit('increment');
		// 	this.$store.dispatch('increment');
		// },
		// mapActions passes along all of the action names
		// Using ...mapActions([...]) this way can put all actions as methods
		// ...mapActions(['increment', 'increase']),
		// It is also possible to map existing actions to custom references
		...mapActions({
			// These are required to be changed with a namespace
			// inc: 'increment',
			// increase: 'increase',
			// They use the format <namespace>/<action>
			inc: 'numbers/increment',
			increase: 'numbers/increase',
		}),
	}
}
</script>