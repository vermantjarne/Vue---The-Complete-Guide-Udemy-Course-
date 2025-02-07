export default {
	async registerCoach(context, payload) {
		const userId = context.rootGetters.userId;
		const coachData = {
			...payload,
		};

		const response = await fetch(`https://vue-main-project-e0adf-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, {
			method: 'PUT',
			body: JSON.stringify(coachData),
		});

		// const responseData = await response.json();

		if (!response.ok) {
			// error ...
		}

		context.commit('registerCoach', {
			id: userId,
			...coachData,
		});
	},
	async loadCoaches(context, payload) {
		if (!payload.forceRefresh && !context.getters.shouldUpdate) {
			return;
		}

		const response = await fetch(
			`https://vue-main-project-e0adf-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
		);
		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch data!');
			throw error;
		}

		const coaches = [];

		for (const key in responseData) {
			const coach = {
				id: key,
				firstName: responseData[key].firstName,
				lastName: responseData[key].lastName,
				description: responseData[key].description,
				hourlyRate: responseData[key].hourlyRate,
				areas: responseData[key].areas,
			};
			coaches.push(coach);
		}

		context.commit('setCoaches', coaches);
		context.commit('setFetchTimestamp');
	},
};