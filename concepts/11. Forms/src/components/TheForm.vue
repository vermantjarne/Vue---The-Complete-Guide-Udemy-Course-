<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: userNameValidity === 'invalid'}">
      <label for="user-name">Your Name</label>
			<!-- We use v-model here, as learnt before -->
			<!-- vmodel.trim removes any leading or trailing whitespace from the input, similar to the JavaScript function -->
      <input id="user-name" name="user-name" type="text" v-model.trim="userName" @blur="validateInput" />
			<p v-if="userNameValidity === 'invalid'">Please enter a valid name!</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
			<!-- The input field does not return a number here with a ref, despite the input type being "number" -->
			<!-- v-model.number does return a number automatically -->
      <input id="age" name="age" type="number" v-model.number="userAge" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
			<!-- The values of the select are stored in the referrer object -->
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
				<!-- For a checkbox input, we can also add v-model -->
				<!-- Each checkbox input needs a value, so Vue knows which to select or unselect -->
				<!-- The blur event occurs when the input field is not focused -->
        <input id="interest-news" name="interest" type="checkbox" value="news" v-model="interest" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" value="tutorials" v-model="interest" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" value="nothing" v-model="interest" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
				<!-- For radio buttons, we can also use v-model -->
				<!-- This works in a similar fashion to checkboxes -->
        <input id="how-video" name="how" type="radio" value="video-courses" v-model="how" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" value="blogs" v-model="how" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="other" v-model="how" />
        <label for="how-other">Other</label>
      </div>
    </div>
		<div class="form-control">
			<!-- Similar to how v-model is a shortcut for @input and :value on input fields, we can use it here -->
			<!-- Here, it is a shortcut for :model-value and @update:modelValue -->
			<!-- It creates a custom 'model-value' prop if using it on a custom component -->
			<!-- It also emits the 'update:modelValue' event -->
			<rating-control v-model="rating"></rating-control>
		</div>
		<div class="form-control">
			<input type="checkbox" id="confirm-terms" name="confirm-terms">
			<label for="confirm-terms">Agree to terms of use?</label>
		</div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from './RatingControl.vue';

export default {
	components: {
		RatingControl,
	},
	data() {
		return {
			userName: '',
			userAge: null,
			// Starting with a default choice can be done by setting the value of the select object to the preferred starting option
			referrer: 'wom',
			// The default value of a list of checkboxes should be an array
			interest: [],
			how: null,
			// When using a single value, a boolean should be used as the default value instead 
			confirm: false,
			userNameValidity: 'pending',
			rating: null,
		}
	},
	methods: {
		submitForm() {
			this.userName = '';
			this.userAge = null;
			this.referrer = 'wom';
			this.interest = null;
			this.how = null;
			console.log("Submitted!");
			this.rating = null;
		},
		validateInput() {
			if (this.userName === '') {
				this.userNameValidity = 'invalid';
			}
			else {
				this.userNameValidity = 'valid';
			}
		},
	},
}
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
	border-color: red;
}

.form-control.invalid label {
	color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>