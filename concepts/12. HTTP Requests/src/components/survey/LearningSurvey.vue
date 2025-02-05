<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Great</label>
        </div>
        <p
          v-if="invalidInput"
        >One or more input fields are invalid. Please check your provided data.</p>
				<p v-if="error">{{ error }}</p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
			error: null,
    };
  },
  // emits: ['survey-submit'],
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

			// Fetch can be used to retrieve and send data to a url, as its first argument
			// For firebase realtime database, 'surveys.json' should be added to the base url
			fetch(
				// An example of a bad request is a status code of 400
				// Catch does not pick this up
				'https://vue-http-demo-25147-default-rtdb.europe-west1.firebasedatabase.app/surveys.json',
				{
					// The method determines which type of request is sent
					method: 'POST',
					// Headers are necessary for determining the Content-Type of the body
					headers: {
						'Content-Type': 'application/json'
					},
					// The body determines the contents of the message
					body: JSON.stringify({
						name: this.enteredName,
						rating: this.chosenRating,
					}),
				},
			)
			// This solves the scenario of the response not having a status code of 200
			.then(response => {
				if (response.ok) {
					// ...
				}
				else {
					throw new Error('Could not save data.');
				}
			}).catch((error) => {
				this.error = error.message;
			});

      // this.$emit('survey-submit', {
      //   userName: this.enteredName,
      //   rating: this.chosenRating,
      // });

      this.enteredName = '';
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>