<template>
  <button @click="inc">Increment</button>
</template>

<script>
// Similar to the router package, vuex provides a useStore hook for the Composition API
import { useStore } from 'vuex';

export default {
  setup() {
		// Instead of this.$store, we now use the useStore hook
		const store = useStore();

    function inc() {
			store.dispatch('increment');
		}

    return { inc };
  },
};
</script>