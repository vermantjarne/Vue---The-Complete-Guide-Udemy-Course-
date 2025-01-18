const app = Vue.createApp({
	data() {
		return {
			counter: 0,
		};
	},
	watch: {
		result() {
			const that = this;
			setTimeout(function() {
				that.counter = 0;
			}, 5000);
		}
	},
	computed: {
		result() {
			if (this.counter < 37) {
				return "Not there yet";
			}
			if (this.counter > 37) {
				return "Too much!";
			}
			return this.counter;
		}
	},
	methods: {
		add(value) {
			this.counter += value;
		}
	}
})

app.mount('#assignment');