<template>
	<ul>
		<!-- We could want the contents of the list to be different for each element -->
		<!-- The issue here is that the goal element is only available within this component -->
		<!-- For this, scoped slots can be used -->
		<li v-for="goal in goals" :key="goal">
			<!-- {{ goal }} -->
			<slot :item="goal" another-prop="..."></slot>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			goals: ['Finish the course', 'Learn Vue'],
		};
	}
}
</script>