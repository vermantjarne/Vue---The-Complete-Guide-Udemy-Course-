<template>
  <div>
    <active-element
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></active-element>
    <knowledge-base></knowledge-base>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: 'basics',
          title: 'The Basics',
          description: 'Core Vue basics you have to know',
          fullText:
            'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
        },
        {
          id: 'components',
          title: 'Components',
          description:
            'Components are a core concept for building Vue UIs and apps',
          fullText:
            'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        },
      ],
      activeTopic: null,
    };
  },
	// Provide holds an object that can be listened to elsewhere
	// As we are defining the array twice, changes to the data would not be reflected in the provided data
	// provide: {
	// 	topics: [
  //       {
  //         id: 'basics',
  //         title: 'The Basics',
  //         description: 'Core Vue basics you have to know',
  //         fullText:
  //           'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
  //       },
  //       {
  //         id: 'components',
  //         title: 'Components',
  //         description:
  //           'Components are a core concept for building Vue UIs and apps',
  //         fullText:
  //           'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
  //       },
	// 	]
	// },
	// 
	// Making provide a method instead allows the use of existing data, rather than rewriting it
	// Note that this is not always beneficial, as it may make understanding the code more complex
	// It is not easy to see where the provided value and methods are being used
	provide() {
		return {
			topics: this.topics,
			// Points at a method, which can be passed to other elements
			selectTopic: this.activateTopic,
		};
	},
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
	mounted() {
		setTimeout(() => {
			this.topics.push({
				id: 'events',
				title: 'Events',
				description: 'Events are important in Vue',
				fullText: 'Events allow you to trigger code on demand!'
			})
		}, 3000);
	}
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
}
</style>