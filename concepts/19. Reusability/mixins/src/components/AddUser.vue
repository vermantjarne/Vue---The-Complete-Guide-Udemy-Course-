<template>
  <user-alert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script>
import alertMixin from '../mixins/alert.js';

import UserAlert from './UserAlert.vue';

export default {
  components: {
    UserAlert,
  },

	// The mixins property stores an array of mixins that is used in the component
	mixins: [alertMixin],

	// This commented code aligns entirely with the export now put in alert.js
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