<template>
	<!-- <transition-group> works with multiple elements, animating multiple items at the same time, in the same way -->
	<!-- Unlike <transition>, this actually render an element in the DOM -->
	<!-- The tag determines which element it is replaced with -->
	<!-- The tag may also be a custom component, but should be a valid HTML element -->
	<transition-group tag="ul" name="user-list">
		<li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
	</transition-group>
	<div>
		<input type="text" ref="userNameInput">
		<button @click="addUser">Add User</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: ['Max', 'Thomas', 'Julie', 'Agatha', 'Bart']
		};
	},
	methods: {
		addUser() {
			const enteredUserName = this.$refs.userNameInput.value;
			this.users.unshift(enteredUserName); 
		},
		removeUser(user) {
			this.users = this.users.filter(existingUser => existingUser !== user);
		},
	},
}
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

li {
	border: 1px solid #ccc;
	padding: 1rem;
	text-align: center;
}

.user-list-enter-from {
	opacity: 0;
	transform: translateX(-30px);
}

.user-list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}

.user-list-enter-active {
	transition: all 1s ease-out;
}

.user-list-leave-active {
	transition: all 1s ease-in;
	position: absolute;
}

.user-list-enter-to,
.user-list-leave-from {
	opacity: 1;
	transform: translateX(0);
}

/* *-move is a dedicated class added to all of the other elements that are not entering or leaving */
/* It uses a transform function under the hood, which can then be used in the transition */
.user-list-move {
	transition: transform 1.5s ease;
}
</style>