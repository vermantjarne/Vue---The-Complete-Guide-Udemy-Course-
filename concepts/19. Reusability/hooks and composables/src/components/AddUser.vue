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
// import { ref } from 'vue';
import UserAlert from './UserAlert.vue';
import { useAlert } from '../hooks/alert';

export default {
  components: {
    UserAlert,
  },
  setup() {
		// The custom hook is used here. It still allows the refs used within the hook to be accessed and updated when these are changed.
		const [ alertIsVisible, showAlert, hideAlert ] = useAlert();

		return {
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
    //   hideAlert
    // };
  },
};
</script>