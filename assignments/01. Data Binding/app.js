const app = Vue.createApp({
	data() {
		return {
			name: 'Jarne Vermant',
			age: 21,
			imageUrl: 'https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/c8fd260bd00730736bcd50bac2a6b6a5240f678d'
		};
	},
	methods: {
		random() {
			return Math.random();
		}
	}
});

app.mount('#assignment');