const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
			lastName: '',
			// fullName: ''
    };
  },
	// Watch is used to watch for changes in data properties
	// The method is called whenever the data property with the same name is changed
	// The names are redefined from the data properties
	// For certain cases, computed properties allow the same thing to be done with less code
	watch: {
		// 'value' is automatically passed by vue as the value, which is the current value
		// This also accepts two arguments: newValue and oldValue
		// name(value) {
		// 	if (value === '') {
		// 		this.fullName = '';
		// 		return;
		// 	}
		// 	this.fullName = value + ' ' + this.lastName;
		// },
		// lastName(value) {
		// 	if (value === '') {
		// 		this.fullName = '';
		// 		return;
		// 	}
		// 	this.fullName = this.name + ' ' + value;
		// }

		// A better scenario for a counter is to use it for the following
		counter(value) {
			if (value > 50) {
				const that = this;
				// Set a timeout to reset the counter after 2 seconds
				setTimeout(function () {
					that.counter = 0;
				}, 2000);
				//this.counter = 0;
			}
		}
	},
	// In computed, methods are cached, resulting in only being recalculated when the dependent data changes
	// These methods are used in the html, without ()
	// Computed properties need a different name than the data properties
	computed: {
		fullName() {
			if (this.name === '' || this.lastName === '') {
				return '';
			}
			return this.name + ' ' + this.lastName;
		}
	},
  methods: {
		// This method is not ideal for using directly in html, as methods are recalculated whenever the page is rerendered
		outputFullName() {
			if (this.name === '') {
				return '';
			}
			return this.name + ' ' + 'Vermant';
		},
		// Methods are stil used for events and things that do need to be recalculated on page rerender
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
		resetInput() {
			this.name = '';
		}
  }
});

app.mount('#events');
