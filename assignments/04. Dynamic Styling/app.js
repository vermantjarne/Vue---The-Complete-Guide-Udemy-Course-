const app = Vue.createApp({
	data() {
		return {
			input: '',
			paragraphIsVisible: true,
			backgroundColorInput: '',
		}
	},
	computed: {
		paragraphClasses() {
			return {
				user1: this.input === 'user1',
				user2: this.input === 'user2',
				visible: this.paragraphIsVisible,
				hidden: !this.paragraphIsVisible,
			}
		}
	},
	methods: {
		toggleVisibility() {
			this.paragraphIsVisible = !this.paragraphIsVisible;
		}
	}
});

app.mount('#assignment');