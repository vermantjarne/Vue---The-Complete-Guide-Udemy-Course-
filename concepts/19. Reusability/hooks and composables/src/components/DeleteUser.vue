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
import { ref } from 'vue';
import UserAlert from './UserAlert.vue';
import { useAlert } from '../hooks/alert';

export default {
  components: {
    UserAlert,
  },
  setup() {
		// Any additional logic can be added, regardless of whether or not other hooks are being used
		const alertTitle = ref('Delete the User?');

		// The custom hook is used here. It still allows the refs used within the hook to be accessed and updated when these are changed.
		const [ alertIsVisible, showAlert, hideAlert ] = useAlert(true);

		return {
			alertTitle,
			alertIsVisible,
			showAlert,
			hideAlert,
		};

    // const alertIsVisible = ref(false);

    // function showAlert() {
    //   alertIsVisible.value = true;
    // }
    // function hideAlert() {
    //   alertIsVisible.value = false;
    // }

    // return {
    //   alertIsVisible,
    //   showAlert,
    //   hideAlert,
    // };
  },
};
</script>