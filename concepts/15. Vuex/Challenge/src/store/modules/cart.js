export default {
	namespaced: true,
	state() {
		return {
			items: [],
			total: 0,
			qty: 0,
		};
	},
	getters: {
		products(state) {
			return state.items
		},
		totalSum(state) {
			return state.total;
		},
		quantity(state) {
			return state.qty;
		},
	},
	mutations: {
    addProductToCart(state, payload) {
			const productData = payload;
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += productData.price;
    },

    removeProductFromCart(state, payload) {
			const prodId = payload.productId;
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    }
	},
	actions: {
		addToCart(context, payload) {
			// The context passed to actions has access to the rootState and rootGetters
			const productId = payload.id;
			const products = context.rootGetters['products/products'];
			const product = products.find(product => product.id === productId);
			context.commit('addProductToCart', product);
		},
		removeFromCart(context, payload) {
			context.commit('removeProductFromCart', payload);
		},
	},
}