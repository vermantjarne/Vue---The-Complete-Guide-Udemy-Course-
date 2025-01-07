const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
			confirmedName: "",
    };
  },
  methods: {
    // Methods can have parameters
    add(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    },
    // This method has an event parameter. This is the default event object
    updateName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
		confirmName(event) {
			this.confirmedName = this.name;
		},
    submitForm(event) {
      // Prevent the default behavior of the form
      // This line is commented and replaced by a modifier in `index.html`
      //// event.preventDefault();
      alert("Submitted!");
    },
  },
});

app.mount("#events");
