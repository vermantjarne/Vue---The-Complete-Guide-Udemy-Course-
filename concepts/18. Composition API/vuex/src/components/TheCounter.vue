<template>
  <h2>{{ counter }}</h2>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
		const store = useStore();

		// This uses a computed property to get the value from the store
    const counter = computed(() => {
			return store.getters.counter;
		});

    return { counter };
  },
};
</script>