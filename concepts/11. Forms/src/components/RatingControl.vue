<template>
	<ul>
		<!-- <li :class="{active: activeOption === 'poor'}"> -->
		<li :class="{active: modelValue === 'poor'}">
			<button type="button" @click="activate('poor')">Poor</button>
		</li>
		<li :class="{active: modelValue === 'average'}">
			<button type="button" @click="activate('average')">Average</button>
		</li>
		<li :class="{active: modelValue === 'great'}">
			<button type="button" @click="activate('great')">Great</button>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		'modelValue': {
			type: String,
		}
	},
	emits: ['update:modelValue'],
	// Data does not update if the modelValue changes, and only listens to it once, on creation
	// data() {
	// 	return {
	// 		activeOption: this.modelValue,
	// 	};
	// },
	// Computed properties do update the value of modelValue
	// This step is also able to be ignored though, as modelValue can be used directly in the template
	// computed: {
	// 	activeOption() {
	// 		return this.modelValue;
	// 	},
	// },
	methods: {
		activate(option) {
			this.activeOption = option;
			this.$emit('update:modelValue', option);
		},
	},
}
</script>

<style scoped>
.active {
	border-color: blue;
}

.active button {
	color: blue;
}

ul {
	list-style: none;
	margin: 0.5rem 0;
	padding: 0;
	display: flex;
}

li {
	margin: 0 1rem;
	border: 1px solid #ccc;
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
}

button {
	font: inherit;
	border: none;
	background-color: transparent;
	cursor: pointer;
}
</style>