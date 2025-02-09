<template>
	<div>
		<h2>{{ userName }}</h2>
		<h3>{{ user.age }}</h3>
	</div>
</template>

<script>
import {
	computed,
	inject,
	onBeforeMount,
	onMounted,
	// onBeforeUpdate,
	// onUpdated,
	// onBeforeUnmount,
	// onUnmounted,
} from 'vue';

export default {
	props: ['firstName', 'lastName'],
	// It's important to note that the Composition API can be combined with the Options API wherever preferred
	// computed: {
	// 	userName() {
	// 		return `${this.firstName} ${this.lastName}`;
	// 	},
	// },

	// In the setup function, the 'this' keyword is not available
	// Because of that, it gets props as its first argument, to get access to every prop of the component
	// Its second argument is context, which contains attrs, slots, emit, and refs
	// setup(props, context) {
	setup(props) {
		// inject: [],
		const userName = computed(() => {
			return `${props.firstName} ${props.lastName}`;
		});

		// Emitting can be done through the context
		// context.emit('save-data', 1);

		const user = inject('user');

		// Lifecycle hooks can be used in the setup function directly
		onBeforeMount(() => {
			console.log('Before Mount');
		});

		onMounted(() => {
			console.log('Mounted');
		});

		// ...

		return {
			userName,
			user,
		};
	},
}
</script>