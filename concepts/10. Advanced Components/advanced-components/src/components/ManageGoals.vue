<template>
	<!-- Notice how it is allowed to have multiple root elements in a template -->
	<h2>Manage Goals</h2>
	<input type="text" ref="goal">
	<button @click="setGoal">Set Goal</button>
	<!-- Having the error alert be nested inside of other components isn't ideal for accessibility -->
	<!-- This can be resolved by using the teleport property -->
	<!-- After 'to', it is defined where the element is rendered -->
	<teleport to="body">
		<error-alert v-if="inputIsInvalid">
			<h2>Input is invalid!</h2>
			<p>Please enter something in the input field</p>
			<button @click="closeError">Close</button>
		</error-alert>
	</teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
	components: {
		ErrorAlert,
	},
	data() {
		return {
			inputIsInvalid: false,
		};
	},
	methods: {
		setGoal() {
			const enteredValue = this.$refs.goal.value;
			if (enteredValue === '') {
				// An alert is often not preferred. A custom modal is usually better
				// alert("The input field may not be empty!");
				this.inputIsInvalid = true;
			}
			else {
				this.inputIsInvalid = false;
			}
		},
		closeError() {
			this.inputIsInvalid = false;
		}
	}
}
</script>