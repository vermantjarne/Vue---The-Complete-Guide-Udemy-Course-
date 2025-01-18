const app = Vue.createApp({
	data() {
		return {
			userInput: '',
			tasks: [],
			showList: true,
		}
	},
	computed: {
		buttonCaption() {
			return this.showList ? 'Hide List' : 'Show List';
		}
	},
	methods: {
		addTask() {
			this.tasks.push(this.userInput);
		},
		toggleShowList() {
			this.showList = !this.showList;
		}
	}
})

app.mount('#assignment');