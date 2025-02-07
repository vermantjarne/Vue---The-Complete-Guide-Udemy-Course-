<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
	<!-- Method 1 + Options API -->
  <h3 v-if="goalIsVisible">{{ courseGoal }}</h3>
	<!-- Methods 2 & 3 -->
  <!-- <h3 v-if="courseGoal.goalIsVisible">{{ courseGoal.courseGoal }}</h3> -->
  <!-- <h3 v-if="goalIsVisible">{{ courseGoal }}</h3> -->
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
	<!-- Methods 1, 2 & 3 + Options API -->
  <button @click="toggleGoalVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref } from 'vue';
// import { reactive } from 'vue';

export default {
	// setup() {
		// Task 1
		// const courseGoal = 'Learn Vue!';

		// Task 2
		// const goalIsVisible = ref(true);
		//
		// function toggleGoalVisibility() {
		// 	goalIsVisible = !goalIsVisible;
		// }
		//
		// return {
		// 	courseGoal,
		// 	goalIsVisible,
		// 	toggleGoalVisibility,
		// }

		// Task 3 - Method 1
		// const courseGoal = ref('Learn Vue!');

		// Task 3 - Method 2
		// const courseGoal = ref({
		// 	courseGoal: 'Master Vue!',
		// 	goalIsVisible: true,
		// })
		//
		// function toggleGoalVisibility() {
		// 	courseGoal.value.goalIsVisible = !courseGoal.value.goalIsVisible;
		// }
		//
		// return {
		// 	courseGoal,
		// 	toggleGoalVisibility,
		// }

		// Task 3 - Method 3
		// const courseGoal = reactive({
		// 	courseGoal: 'Perfect Vue!',
		// 	goalIsVisible: true,
		// });
		//
		// function toggleGoalVisibility() {
		// 	courseGoal.goalIsVisible = !courseGoal.goalIsVisible;
		// }
		//
		// return {
		// 	courseGoal,
		// 	toggleGoalVisibility,
		// }
	// },
	data() {
		return {
			courseGoal: 'Learn Vue!',
			goalIsVisible: true,
		}
	},
	methods: {
		toggleGoalVisibility() {
			this.goalIsVisible = !this.goalIsVisible;
		},
	},
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>