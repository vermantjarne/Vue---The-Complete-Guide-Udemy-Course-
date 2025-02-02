<template>
	<li>
		<h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
		<button @click="toggleFavorite">{{ isFavorite ? 'Remove' : 'Add' }} favorite</button>
		<button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone:</strong> {{ phoneNumber }}</li>
			<li><strong>Email:</strong> {{ emailAddress }}</li>
		</ul>
		<!-- AN emit can also be done directly inline -->
		<button @click="$emit('delete', id)">Delete</button>
	</li>
</template>

<script>
export default {
	// Props are written with a capital letter to be able to reference them properly in the JavaScript code
	// These are automatically rewritten to use kebab-case in the template
	// Props are used similarly to data, and can be referenced as their notation here
	// This also means there can be clashes between prop names and data value names
	// Data passed from App to FriendContact should only be changed in App, not in FriendContact
	// A child should thus not change the props of a parent
	// Props form the parent -> child communication
	// props: [
	// 	'name',
	// 	'phoneNumber',
	// 	'emailAddress',
	// 	'isFavorite',
	// ],
	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			// Adds validation for the tye of the prop
			type: String,
			required: true
		},
		phoneNumber: {
			type: String,
			required: true
		},
		emailAddress:  {
			type: String,
			required: true
		},
		isFavorite:  {
			// type: String,
			// required: false,
			// // This value is used when this prop is not passed
			// default: '0',
			// // A validator can be used to validate the value of the prop
			// validator: function(value) {
			// 	return value === '1' || value === '0';
			// }
			type: Boolean,
			required: false,
			default: false,
		},
	},
	// The 'emits' key documents which custom events the element uses
	// This is optional, but it makes life easier
	// Validation can be added to ensure the data passed is valid
	// emits: {
	// 	'toggle-favorite': function(id) {
	// 		if (id) {
	// 			return true;
	// 		}
	// 		else {
	// 			console.warn('Id is missing!');
	// 			return false;
	// 		}
	// 	},
	// },
	emits: [
		'toggle-favorite',
		'delete'
	],
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: "manuel",
				name: "Manuel Lorenz",
				phone: "01234 5678 991",
				email: "manuel@localhost.com",
			},
			// This reuses the existing isFavorite property, allowing this to be adjusted
			// Note that this does not change the original data
			// friendIsFavorite: this.isFavorite,
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
		toggleFavorite() {
			// if (this.friendIsFavorite === '1') {
			// 	this.friendIsFavorite = '0';
			// } else {
			// 	this.friendIsFavorite = '1';
			// }
			// this.friendIsFavorite = !this.friendIsFavorite;
			// 
			// this.$emit allows us to emit a specific event
			// This can be listened to, similar to a click event
			// Every extra argument after the first is data that is passed along with the event
			// Custom events form the child -> parent communication
			this.$emit('toggle-favorite', this.id);
		},
	}
};
</script>