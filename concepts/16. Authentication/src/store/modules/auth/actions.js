let timer;

export default {
	async login(context, payload) {
		context.dispatch('auth', {
			...payload,
			mode: 'login',
		});
	},
	async signup(context, payload) {		
		context.dispatch('auth', {
			...payload,
			mode: 'login',
		});
	},
	async auth(context, payload) {
		const mode = payload.mode;
		// This web API key is provided by firebase as the 'Web API Key' in the project settings
		let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAf07ZkSvI7IqB5TDsCmcbQxbEQJ4-pwMk';
		if (mode === 'signup') {
			url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAf07ZkSvI7IqB5TDsCmcbQxbEQJ4-pwMk'
		}

		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify({
				email: payload.email,
				password: payload.password,
				returnSecureToken: true,
			}),
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to authenticate user. Ensure your login data is correct.');
			throw error;
		}

		// Since tokens only last 1h, it is important to store the expiration date
		const expiresIn = +responseData.expiresIn * 1000;
		// This is a test value of 5 seconds for the expiration date
		// const expiresIn = 5000;
		const expirationDate = new Date().getTime() + expiresIn;

		// The token, userId and expirationDate are all stored locally
		localStorage.setItem('token', responseData.idToken);
		localStorage.setItem('userId', responseData.localId);
		localStorage.setItem('expirationDate', expirationDate);

		timer = setTimeout(() => {
			context.dispatch('autoLogout');
		}, expiresIn);

		context.commit('setUser', {
			token: responseData.idToken,
			userId: responseData.localId,
		});
	},
	autoLogin(context) {
		// localStorage stores the data in the browser, to persist when the page is reloaded
		const token = localStorage.getItem('token');
		const userId = localStorage.getItem('userId');
		const expirationDate = localStorage.getItem('expirationDate');

		const expiresIn = +expirationDate - new Date().getTime();

		if (expiresIn < 0) {
			return;
		}

		setTimeout(() => {
			context.dispatch('autoLogout');
		}, expiresIn);

		if (token && userId) {
			context.commit('setUser', {
				token: token,
				userId: userId,
			});
		}
	},
	logout(state) {
		localStorage.removeItem('token');
		localStorage.removeItem('userId');
		localStorage.removeItem('expirationDate');

		clearTimeout(timer);

		state.commit('setUser', {
			token: null,
			userId: null,
		});
	},
	autoLogout(context) {
		context.dispatch('logout');
		context.commit('setAutoLogout');
	},
};