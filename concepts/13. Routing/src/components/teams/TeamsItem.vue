<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
		<!-- 'to' can also be bound with : -->
		<!-- This allows the id prop to be passed in the router link -->
		<!-- In this case, it uses a computed property to avoid code in the template -->
    <!-- <router-link :to="teamMembersLink">View Members</router-link> -->
		<!-- 'to' can also accept an object -->
    <router-link :to="teamMembersLink">View Members</router-link>
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'memberCount'],
	computed: {
		teamMembersLink() {
			// return '/teams/' + this.id + '?sort=asc';
			// Using an object is a lot more maintainable
			// The large advantage is that, if the path changes, it also changes the path in each reference in other components
			return {
				// The path is no longer needed here, as the 'name' references the path fully
				// path: '/teams' + this.id,
				name: 'team-members',
				params: {
					teamId: this.id,
				},
				// This adds a query parameter to the URL
				query: {
					sort: 'asc'
				},
			};
		},
	},
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>