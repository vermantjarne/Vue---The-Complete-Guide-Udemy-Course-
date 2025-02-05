<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
			<p v-if="isLoading">Loading...</p>
			<p v-else-if="error">{{ error }}</p>
			<p v-else-if="!results || results.length === 0">No stored experiences found.</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
	data() {
		return {
			results: [],
			isLoading: false,
			error: null,
		};
	},
	methods: {
		loadExperiences() {
			this.error = null;
			this.isLoading = true;
			// The default request for fetch is a GET request
			// It returns an object that can be listened to by using .then()
			fetch('https://vue-http-demo-25147-default-rtdb.europe-west1.firebasedatabase.app/surveys.json')
				// By default, .then(function()) passes a response as a parameter
				// This response is a JSON object
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
				})
				// This responds when the data has been fetched
				// The 'this' keyword does not refer to the Vue instance when using the function() keyword
				// .then(function(data) {
				// Instead, an arrow function can be used to still be able to refer to the 'this'
				.then((data) => {
					const results = [];
					for (const id in data) {
						results.push({
							id: id,
							name: data[id].name,
							rating: data[id].rating,
						});
					}
					this.results = results;
					this.isLoading = false;
				})
				// This catches an error message whenever an error is thrown
				// It does not catch failed responses if the failure is on the server-side, through a different status code
				// If the error object is not used, it can simply not be passed
				// .catch((error) => {
				.catch(() => {
					this.error = 'Failed to fetch data - please try again later';
					this.isLoading = false;
				});
		},
	},
	mounted() {
		this.loadExperiences();
	},
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>