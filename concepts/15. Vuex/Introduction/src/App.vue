<template>
  <base-container title="Vuex" v-if="isAuth">
		<the-counter></the-counter>
		<favorite-value></favorite-value>
		<button @click="addOne">Add 1</button>
		<change-counter></change-counter>
	</base-container>
	<base-container title="Auth">
		<user-auth></user-auth>
	</base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
		ChangeCounter,
		FavoriteValue,
		UserAuth,
  },
	methods: {
		addOne() {
			// The commit() method performs a specific mutation, as a string parameter
			// this.$store.commit('increment');
			// Passing in an object containing the value
			// this.$store.commit('increase', {
			// 	value: 10,
			// });
			// This is an alternative way of committing
			// this.$store.commit({
			// 	type: 'increase',
			// 	value: 10,
			// })
			this.$store.dispatch({
				// This no longer works with a namespace
				// type: 'increase',
				// Instead, it is required to be <namespace>/<action>
				type: 'numbers/increase',
				value: 10,
			})
		},
	},
	computed: {
		isAuth() {
			return this.$store.getters.userIsAuthenticated;
		}
	},
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>