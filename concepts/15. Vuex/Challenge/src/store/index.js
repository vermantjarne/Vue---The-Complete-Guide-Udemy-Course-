import { createStore } from 'vuex';

import productsModule from './modules/products.js';
import cartModule from './modules/cart.js';

const store = createStore({
	modules: {
		products: productsModule,
		cart: cartModule,
	},
	state() {
		return {
			isLoggedIn: false,
		};
	},
	getters: {
		isAuthenticated(state) {
			return state.isLoggedIn;
		},
	},
	mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
	},
	actions: {
		login(context) {
			context.commit('login');
		},
		logout(context) {
			context.commit('logout');
		},
	},
});

export default store;