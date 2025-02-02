<template>
	<div>
		<active-user
			:username="user.name"
			:userage="user.age"
		></active-user>
		<user-data
			@update-data="updateData"
		></user-data>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: {
				name: 'Jarne Vermant',
				age: 21,
			}
		}
	},
	methods: {
		updateData(name, age) {
			this.user = {
				name: name,
				age: +age,
			}
		}
	}
}
</script>

<style>
	section {
		margin: 2rem auto;
		max-width: 40rem;
		border-radius: 12px;
		border: 1px solid #ccc;
		padding: 10px;
	}

	label {
		margin-right: 5px;
	}
</style>