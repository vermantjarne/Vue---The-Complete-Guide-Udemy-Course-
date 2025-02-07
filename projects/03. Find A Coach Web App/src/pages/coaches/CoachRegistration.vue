<template>
	<section>
		<base-card>
			<h2>Register as a coach now!</h2>
			<coach-form @save-data="saveData"></coach-form>
		</base-card>
	</section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
	components: {
		CoachForm,
	},
	methods: {
		saveData(data) {
			this.$store.dispatch('coaches/registerCoach', data);
			// The .replace() method on the router forces the user to not be able to return to the previous tab
			this.$router.replace('/coaches');
		},
	},
}
</script>