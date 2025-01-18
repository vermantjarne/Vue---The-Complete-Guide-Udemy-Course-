const app = Vue.createApp({
  data() {
    return {
			enteredGoalValue: '',
			goals: []
		};
  },
	methods: {
		addGoal() {
			this.goals.push(this.enteredGoalValue);
		},
		removeGoal(index) {
			// This removes 1 element from the list at the index location
			this.goals.splice(index, 1);
		}
	}
});

app.mount('#user-goals');
