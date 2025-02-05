<template>
	<!-- In this case, we don't just wanna route the user, we also want to perform actions -->
	<!-- This means we should navigate away programmatically -->
	<button @click="confirmInput">Confirm</button>
	<button @click="saveChanges">Save changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
	data() {
		return {
			changesSaved: false,
		};
	},
	methods: {
		confirmInput() {
			// Do something (like storing data in a server)
			// ...
			
			// this.$router is available through the vue-router package, allowing access to the router
			// This makes it possible to programmatically alter the route
			// In its simplest form, push() contains a path for the navigation
			this.$router.push('/teams');
			// this.$router.back();
			// this.$router.forward();
		},
		saveChanges() {
			this.changesSaved = true;
		}
	},
	// This is a lifecycle hook introduced by vue-router, before the route is changed
	// This also works similarly to beforeEach on the router object
	beforeRouteEnter(to, from, next) {
		next();
	},
	// We would like to run code whenever the component is left from within the component itself
	// Say there are unsaved changes that would be lost if the user leaves
	beforeRouteLeave(to, from, next) {
		if (!this.changesSaved) {
			// The confirm() function lets the user confirm leaving the page
			// It returns a boolean based on which response the user has given to the prompt
			const userWantsToLeave = confirm('Your unsaved changes would be lost. Are you sure you want to leave?');
			next(userWantsToLeave);
		}
		else {
			next();
		}
	},
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>