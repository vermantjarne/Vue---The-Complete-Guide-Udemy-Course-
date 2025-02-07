<template>
	<div>
		<base-dialog :show="!!error" title="An error occured!" @close="handleError">
			<p>{{ error }}</p>
		</base-dialog>
		<section>
			<coach-filter @change-filter="setFilters"></coach-filter>
		</section>
		<section>
			<base-card>
				<div class="controls">
					<base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
					<!-- As link is simply a boolean, it can be passed without a value to be true -->
					<base-button v-if="!isCoach && !isLoading" link to="/register">Register as Coach</base-button>
				</div>
				<div v-if="isLoading">
					<base-spinner></base-spinner>
				</div>
				<ul v-else-if="hasCoaches">
					<coach-item v-for="coach in filteredCoaches" :key="coach.id"
						:id="coach.id"
						:first-name="coach.firstName"
						:last-name="coach.lastName"
						:rate="coach.hourlyRate"
						:areas="coach.areas"
					>

					</coach-item>
				</ul>
				<h3 v-else>No coaches found.</h3>
			</base-card>
		</section>
	</div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
	components: {
		CoachItem,
		CoachFilter,
	},
	data() {
		return {
			isLoading: false,
			error: null,
			activeFilters: {
				frontend: true,
				backend: true,
				career: true,
			}
		}
	},
	computed: {
		filteredCoaches() {
			const coaches = this.$store.getters['coaches/coaches'];
			return coaches.filter(coach => {
				return Object.keys(this.activeFilters)
					.filter(key => this.activeFilters[key])
					.some(key => coach.areas.includes(key));
			});
		},
		hasCoaches() {
			return this.$store.getters['coaches/hasCoaches'];
		},
		isCoach() {
			return this.$store.getters['coaches/isCoach'];
		},
	},
	methods: {
		setFilters(updatedFilters) {
			this.activeFilters = updatedFilters;
		},
		async loadCoaches(refresh = false) {
			this.isLoading = true;
			try {
				await this.$store.dispatch('coaches/loadCoaches', {
					forceRefresh: refresh,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong!';
			}
			this.isLoading = false;
		},
		handleError() {
			this.error = null;
		},
	},
	created() {
		this.loadCoaches();
	},
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>