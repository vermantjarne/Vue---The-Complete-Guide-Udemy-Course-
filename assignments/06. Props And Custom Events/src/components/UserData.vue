<template>
	<section>
		<form @submit.prevent="submitData">
			<div>
				<label>Name</label>
				<input type="text" v-model="enteredName">
			</div>
			<div>
				<label>Age</label>
				<input type="text" v-model="enteredAge">
			</div>
			<button>Update Data</button>
		</form>
	</section>
</template>

<script>
export default {
	emits: [
		'update-data'
	],
	data() {
		return {
			enteredName: '',
			enteredAge: '',
		}
	},
	methods: {
		submitData() {
			this.$emit('update-data', this.enteredName, this.enteredAge);
		}
	}
}
</script>