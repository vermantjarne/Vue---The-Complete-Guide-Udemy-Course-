<template>
	<h3>{{ counter }}</h3>
	<p>We do more...</p>
</template>

<script>
export default {
	computed: {
		counter() {
			// This no longer works with a namespace
			// return this.$store.getters.normalizedCounter;
			// The reference to the getter is getters['<namespace>/<getter>']
			return this.$store.getters['numbers/normalizedCounter'];
		}
	},
}
</script>