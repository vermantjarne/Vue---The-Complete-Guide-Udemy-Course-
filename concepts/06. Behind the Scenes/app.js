const app = Vue.createApp({
	// Vue uses an internal proxy to automatically detect changes to the data
	// This ensures they can update the data shown on the screen
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;

			// this.$refs is an object full of key-value pairs, with the keys referring to the string used in the html file
			// This allows us to get full access to the entire input element
			// This means we can set the value of the message to the value of the input element once, when pressing the button.
			// This increase performance compared to updating data behind the scenes on every keystroke
			this.message = this.$refs.userText.value;
    },
  },
	// This triggers on the beforeCreate() lifecycle step
	beforeCreate() {
		console.log('beforeCreate()');
	},
	created() {
		console.log('created()');
	},
	beforeMount() {
		console.log('beforeMount()');
	},
	// By adding breakpoints in the app.js file in 'Sources', you can see that the output is shown after the beforeMount() step
	mounted() {
		console.log('mounted()');
	},
	beforeUpdate() {
		console.log('beforeUpdate()');
	},
	// After beforeUpdate(), the adjustments are shown when data is changed
	updated() {
		console.log('updated()');
	},
	beforeUnmount() {
		console.log('beforeUnmount()');
	},
	unmounted() {
		console.log('unmounted()');
	},
});

app.mount('#app');

// This method is rarely called in a real scenario
// Later in the course, a more realistic way to unmount an application is discussed
setTimeout(function() {
	app.unmount();
}, 3000);

// There is no connection between two Vue applications.
// Any parts that are required to work together should be controlled by the same application.
// There is a 1:1 ratio on creating an app and mounting an HTML section to it.
const app2 = Vue.createApp({
	// Alternative way to introduce a template
	// Even with this alternative way to define a template, it needs to be mounted
	template: `
		<p>{{ favoriteMeal }}</p>
	`,
	data() {
		return {
			favoriteMeal: 'Pizza',
		};
	}
})

app2.mount('#app2');

// ...

let message = 'Hello!';

let longMessage = message + ' World!';

// This message shows 'Hello World!'
console.log(longMessage);

message = 'Hello!!!!';

// This message shows 'Hello World!', as JavaScript is not reactive
// The calculation for longMessage is not reactivated and is thus not updated
console.log(longMessage);

// ...

const data = {
	message: 'Hello!',
	longMessage: 'Hello! World!'
};

const handler = {
	// target, key and value are automatically passed along
	set(target, key, value) {
		// Value: { message: 'Hello!' }
		console.log(target);
		// Value: message
		console.log(key);
		// Value: Hello!!!!
		console.log(value);

		if (key === 'message') {
			target.longMessage = value + ' World';
		}
		target.message = value;
	}
};

// This is a proxy that is available in modern JavaScript
// It requires 2 parameters: data and handler
const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!';

// The value of longMessage is updated accordingly by making use of the proxy
// This is a simplified version of how Vue behaves reactively behind the scenes
console.log(longMessage);