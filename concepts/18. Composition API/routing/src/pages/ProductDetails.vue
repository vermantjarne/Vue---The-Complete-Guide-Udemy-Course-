<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price}}</h3>
    <p>{{ description}}</p>
		<!-- The URL updates, but the content does not change -->
		<!-- This is a similar issue as faced before in the course with routing -->
		<!-- <router-link to="/products/p2">Product 2</router-link> -->
		<router-link to="/products/p2">Product 2</router-link>
  </section>
</template>

<script>
import { inject, computed } from 'vue';
// Composables (= hooks) can be imported to allow the usage of routing in setup() with the Composition API
// The useRoute is a custom hook provided by Vue Router
import { useRoute } from 'vue-router';

export default {
	props: ['pid'],
  setup(props) {
		const products = inject('products');

		// The useRoute hook returns the current route object
		const route = useRoute();
		console.log(route);

		// pid is the id of the route parameter defined in main.js
		const selectedProduct = computed(() => {
			return products.value.find(product => product.id === props.pid);
		});
    const title = computed(() => selectedProduct.value.title);
    const price = computed(() => selectedProduct.value.price);
    const description = computed(() => selectedProduct.value.description);

    return { title, price, description };
  },
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>