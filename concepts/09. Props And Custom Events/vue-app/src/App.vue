<template>
	<section>
		<header>
			<h1>My Friends</h1>
		</header>
		<new-friend @add-contact="addContact"></new-friend>
		<ul>
			<!-- binding should be used on any non-string prop being passed -->
			<!-- We can use v-for with :key to loop through a list, reusing the same component -->
			<!-- An option for binding every single value of an object from an object is to directly pass the object using v-bind, for example v-bind="person" -->
			<!-- This omits the need to bind every single individual element of person -->
			<friend-contact
				v-for="friend in friends"
				:key="friend.id"
				:id="friend.id"
				:name="friend.name"
				:phone-number="friend.phone"
				:email-address="friend.email"
				:is-favorite="friend.isFavorite"
				@toggle-favorite="toggleFavoriteStatus"
				@delete="deleteContact"
			></friend-contact>
		</ul>
	</section>
</template>

<script>
import NewFriend from './components/NewFriend.vue';
export default {
  components: { NewFriend },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
					isFavorite: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
					isFavorite: false,
        },
      ],
    };
  },
	methods: {
		toggleFavoriteStatus(friendId) {
			const friend = this.friends.find(friend => friend.id === friendId);
			friend.isFavorite = !friend.isFavorite;
		},
		addContact(name, phone, email) {
			const newFriendContact = {
				id: new Date().toISOString(),
				name: name,
				phone: phone,
				email: email,
				isFavorite: false,
			}
			this.friends.push(newFriendContact);
		},
		deleteContact(friendId) {
			this.friends = this.friends.filter(friend => friend.id !== friendId);
		},
	}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form div {
  margin: 1rem 0;
}

</style>