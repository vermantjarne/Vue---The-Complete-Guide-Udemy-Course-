<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
		<!-- This changes the URL, however the data does not update along -->
		<!-- The vue-router does not destroy and recreate the component when the URL changes -->
		<!-- this.$route does update -->
		<router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
	inject: ['users', 'teams'],
	// If this component is not loaded through routing, it would use a prop to determine the teamId
	props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
			teamName: '',
			members: [],
    };
  },
	methods: {
		loadTeamMembers(teamId) {
			// this.$route allows access to the current route, including the path
			// this.$route.path
			// this.$route.params has access to the id chosen in the router definition
			const selectedTeam = this.teams.find(team => team.id === teamId);
			const members = selectedTeam.members;
			const selectedMembers = [];
			for (const member of members) {
				const selectedUser = this.users.find(user => user.id === member);
				selectedMembers.push(selectedUser);
			}

			this.teamName = selectedTeam.name;
			this.members = selectedMembers;
		}
	},
	created() {
		this.loadTeamMembers(this.teamId);
		// Query parameters can be loaded in using this.$route.query
		// console.log(this.$route.query);
	},
	// beforeRouteUpdate() is a hook called whenever the route is changed in this component
	// This is an alternative to watching the teamId
	// It is less flexible, as it does not use props
	beforeRouteUpdate(to, from, next) {
		// this.loadTeamMembers(to.params.teamId);
		next();
	},
	watch: {
		teamId(newId) {
			this.loadTeamMembers(newId);
		}
	}
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>