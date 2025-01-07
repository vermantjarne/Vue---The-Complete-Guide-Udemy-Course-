const app = Vue.createApp({
	data() {
		return {
			userInput: '',
			confirmedInput: ''
		}
	},
	methods: {
		showAlert() {
			alert('Hello!');
		},
		updateUserInput() {
			this.userInput = event.target.value;
		},
		updateConfirmedInput() {
			this.confirmedInput = this.userInput;
		}
	}
});

app.mount('#assignment');