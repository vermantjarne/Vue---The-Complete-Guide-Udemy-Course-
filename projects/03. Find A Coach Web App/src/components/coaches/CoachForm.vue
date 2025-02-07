<template>
	<form @submit.prevent="submitForm">
		<div class="form-control" :class="{invalid: !firstName.isValid}">
			<label for="firstName">First name</label>
			<input type="text" name="firstName" id="firstName" v-model.trim="firstName.value" @blur="clearValidity('firstName')" />
			<p v-if="!firstName.isValid">First name must not be empty.</p>
		</div>
		<div class="form-control" :class="{invalid: !lastName.isValid}">
			<label for="lastName">Last name</label>
			<input type="text" name="lastName" id="lastName" v-model.trim="lastName.value" @blur="clearValidity('lastName')" />
			<p v-if="!lastName.isValid">Last name must not be empty.</p>
		</div>
		<div class="form-control" :class="{invalid: !description.isValid}">
			<label for="description">Description</label>
			<textarea name="description" id="description" rows="5" v-model.trim="description.value" @blur="clearValidity('description')"></textarea>
			<p v-if="!description.isValid">Description must not be empty.</p>
		</div>
		<div class="form-control" :class="{invalid: !hourlyRate.isValid}">
			<label for="hourlyRate">Hourly Rate</label>
			<input type="number" name="hourlyRate" id="hourlyRate" v-model.number="hourlyRate.value" @blur="clearValidity('hourlyRate')" />
			<p v-if="!hourlyRate.isValid">Hourly rate must be greater then 0.</p>
		</div>
		<div class="form-control" :class="{invalid: !areas.isValid}">
			<h3>Areas of Expertise</h3>
			<div>
				<input type="checkbox" name="frontend" id="frontend" value="frontend" v-model="areas.value" @blur="clearValidity('areas')" />
				<label for="frontend">Frontend Development</label>
			</div>
			<div>
				<input type="checkbox" name="backend" id="backend" value="backend" v-model="areas.value" @blur="clearValidity('areas')" />
				<label for="backend">Backend Development</label>
			</div>
			<div>
				<input type="checkbox" name="career" id="career" value="career" v-model="areas.value" @blur="clearValidity('areas')" />
				<label for="career">Career Advisory</label>
			</div>
			<p v-if="!areas.isValid">At least one expertise should be selected.</p>
		</div>
		<p v-if="!formIsValid">Please fix the above error(s) and submit again.</p>
		<base-button>Register</base-button>
	</form>
</template>

<script>
export default {
	emits: ['save-data'],
	data() {
		return {
			firstName: {
				value: '',
				isValid: true,
			},
			lastName: {
				value: '',
				isValid: true,
			},
			description: {
				value: '',
				isValid: true,
			},
			hourlyRate: {
				value: null,
				isValid: true,
			},
			areas: {
				value: [],
				isValid: true,
			},
			formIsValid: true,
		}
	},
	methods: {
		clearValidity(input) {
			this[input].isValid = true;
		},
		validateForm() {
			this.formIsValid = true;
			if (this.firstName.value === '') {
				this.firstName.isValid = false;
				this.formIsValid = false;
			}
			if (this.lastName.value === '') {
				this.lastName.isValid = false;
				this.formIsValid = false;
			}
			if (this.description.value === '') {
				this.description.isValid = false;
				this.formIsValid = false;
			}
			if (!this.hourlyRate.value || this.hourlyRate.value <= 0) {
				this.hourlyRate.isValid = false;
				this.formIsValid = false;
			}
			if (this.areas.value.length === 0) {
				this.areas.isValid = false;
				this.formIsValid = false;
			}
		},
		submitForm() {
			this.validateForm();

			if (!this.formIsValid) {
				return;
			}

			const formData = {
				firstName: this.firstName.value,
				lastName: this.lastName.value,
				description: this.description.value,
				hourlyRate: this.hourlyRate.value,
				areas: this.areas.value,
			};
			
			this.$emit('save-data', formData);
		},
	},
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>