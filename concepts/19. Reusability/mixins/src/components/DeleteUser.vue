<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import alertMixin from '../mixins/alert.js';

import UserAlert from './UserAlert.vue';

export default {
  components: {
    UserAlert,
  },

	// Data can still be provided regularly in the component
	// Mixins merge all properties of the component itself with the properties of the mixin
	// If there are any conflicts, the properties of the component will take precedence
	data() {
		return {
			alertTitle: 'Delete the User?',
			alertIsVisible: true,
		};
	},
	
	mixins: [alertMixin],

	// All of the code commented here is exactly the same as the code in alert.js
  // data() {
  //   return {
  //     alertIsVisible: false,
  //   };
  // },
  // methods: {
  //   showAlert() {
  //     this.alertIsVisible = true;
  //   },
  //   hideAlert() {
  //     this.alertIsVisible = false;
  //   },
  // },
};
</script>