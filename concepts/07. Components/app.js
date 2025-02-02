const app = Vue.createApp({
  data() {
    return {
			// detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
	// methods: {
		// This shows the details for all friends, rather than showing the details for the specific friend
		// To solve this, we could pass an id, however this would be cumbersome
		// Instead, we will use a component
		// toggleDetails() {
		// 	this.detailsAreVisible = !this.detailsAreVisible;
		// }
	// }
});

// This tells Vue to create a component
// The first element is an identifier, which is a custom component
// It is important to not clash with built-in html elements
// A component is a new view app, which is connected to the main app
// Every component needs its own template
// Components also offer communication between them and other elements
app.component('user-details', {
	template: `
	<li>
		<h2>{{ friend.name }}</h2>
		<button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone:</strong> {{ friend.phone }}</li>
			<li><strong>Email:</strong> {{ friend.email }}</li>
		</ul>
	</li>
	`,
	data() {
		return {
			detailsAreVisible: false,
      friend: {
				id: "manuel",
				name: "Manuel Lorenz",
				phone: "01234 5678 991",
				email: "manuel@localhost.com",
			},
		}
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		}
	}
});

app.mount("#app");
