<template>
  <section class="container">
		<!-- Here, .value is not required, as Vue automatically exposes it when returning the object -->
    <!-- <h2>{{ userName }}</h2>
		<h3>{{ user.age }}</h3> -->
		<user-data :first-name="firstName" :last-name="lastName" :user="user"></user-data>
		<button @click="setAge">Change Age</button>
		<div>
			<!-- As before, .value is not required in the template -->
			<!-- <input type="text" placeholder="First Name" v-model="firstName">
			<input type="text" placeholder="Last Name" v-model="lastName"> -->
			<input type="text" placeholder="First Name" v-model="firstName">
			<input type="text" placeholder="Last Name" ref="lastNameInput">
			<button @click="setLastName">Set Last Name</button>
		</div>
  </section>
</template>

<script>
// The ref import is necessary to use the Composition API
// This is a different concept to the ref attribute in HTML elements
import { ref } from 'vue';

// The reactive import is similar to ref, but is used specifically for objects
import { reactive } from 'vue';

// The computed import is used to create a computed property
import { computed } from 'vue';

// The watch import can be used to create a watcher
import { watch } from 'vue';

// The provide import is another function, that allows a value to be provided globally
import { provide } from 'vue';

// These functions can be used to check whether a variable is a ref or reactive variable
// If the value these return is true, changes to the variable are recognized by Vue
// import { isRef, isReactive } from 'vue';

// The toRefs function can convert the elements in a reactive object into refs
// import { toRefs } from 'vue';

import UserData from './components/UserData.vue';

export default {
  components: { UserData },
	// The setup function is ran before the component is created
	// This makes the 'this' keyword unavailable in this function
	// As an alternative, <script setup> can be used to define the setup function
	setup() {
		// The ref function creates a reactive variable
		// It accepts the initial value of the variable as a parameter
		// The reason the ref function is necessary is so that Vue recognizes changes to the variable
		// const userName = ref('Jarne');
		// const age = ref(21);

		// Rather than defining two variables, it can be grouped together in a single ref object
		// const user = ref({
		// 	name: 'Jarne',
		// 	age: 21,
		// });
		// The reactive function defines the object exactly the same way as ref
		const user = reactive({
			// name: 'Jarne',
			age: 21,
		});
		const firstName = ref('');
		const lastName = ref('');
		// Refs to bind to a DOM element are also defined in the setup here
		const lastNameInput = ref(null);

		// setTimeout(() => {
		// 	// The value of the variable can be changed by setting the value property of the variable
		// 	// user.value.name = 'Jarne Vermant';
		// 	// user.value.age = 22;

		// 	// With the reactive function, the value property is not necessary
		// 	user.name = 'Jarne';
		// 	user.age = 22;
		// }, 2000);

		// The provide function requires a key, as well as a ref
		provide('user', user);

		// The computed function holds the computed property
		const userName = computed(() => {
			return firstName.value + ' ' + lastName.value;
		});

		// The first parameter of the watch function is the variable to watch
		// The function that is passed to it automatically gets the new and old value of the variable
		// watch(firstName, (newValue, oldValue) => {
		// 	console.log(oldValue + " -> " + newValue);
		// });
		// Unlike in the Options API, multiple variables can be watched at once
		// This changes the parameters passed to newValues and oldValues
		watch([firstName, lastName], (newValues, oldValues) => {
			console.log('First name:' + oldValues[0] + " -> " + newValues[0]);
			console.log('Last name:' + oldValues[1] + " -> " + newValues[1]);
		});

		// Rather than using methods, functions can be defined in the setup function
		function setNewAge() {
			user.age += 1;
		}

		function setFirstName(event) {
			firstName.value = event.target.value;
		}

		// Without ref value of element
		// function setLastName(event) {
		// 	lastName.value = event.target.value;
		// }

		function setLastName() {
			// The first value is that of the ref, the second is the value of the input field
			lastName.value = lastNameInput.value.value;
		}

		// The variable is not only accessible once the value is exposed in the returned object of setup()
		return {
			// Passing the variables this way means the variables are not reactive
			// This means vue will not see the changes made to these variables
			// name: user.value.name,
			// age: user.value.age,

			// Instead, the proper raw ref object can be passed
			// user: user.value,

			// As with altering the object, the .value property is not necessary when using reactive
			user,

			firstName,
			lastName,
			lastNameInput,

			userName,

			// A function can also be passed along in the return statement
			setAge: setNewAge,

			setFirstName,
			setLastName,
		}
	},
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
	// methods: {
	// 	setNewAge() {
	// 		this.age = 21;
	// 	},
	// },
	// computed: {
	// 	userName() {
	// 		return this.firstName + ' ' + this.lastName;
	// 	},
	// }
	// watch: {
	// 	age(value) {
	// 		console.log(value);
	// 	}
	// }
	// provide() {
	// 	return {
	// 		age,
	// 	};
	// },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>