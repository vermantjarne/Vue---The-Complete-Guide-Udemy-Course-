const app = Vue.createApp({
	// Data object defining key-value pairs -> globally accessible
	data() {
		return {
			courseGoalA: 'Finish the course and learn Vue!',
			courseGoalB: 'Master Vue and build amazing apps!',
			courseGoalC: '<h2>Master Vue and build amazing apps!</h2>',
			vueLink: 'https://vuejs.org/'
		};
	},
	// Methods object defining methods
	methods: {
		outputGoal() {
			const random = Math.random();
			if (random < 0.5) {
				return this.courseGoalA;
			}
			return this.courseGoalB;
		}
	}
});

app.mount('#user-goal');