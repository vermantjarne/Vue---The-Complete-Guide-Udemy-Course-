import { ref, computed, watch } from 'vue';

export function useSearch(items, searchProperty) {
	const enteredSearchTerm = ref('');
	const activeSearchTerm = ref('');

	const availableItems = computed(() => {

		let filteredItems = [];
		if (activeSearchTerm.value) {
			// To be able to use different filter functions, it is possible to pass a filter function as a parameter
			// Alternatively, if the filter always happens on a specific property of the items, the property can be passed as a parameter instead
			// filteredItems = items.filter((item) =>
			// 	item.fullName.includes(activeSearchTerm.value)
			// );
			filteredItems = items.value.filter(item => {
				return item[searchProperty].includes(activeSearchTerm.value);
			});
		} else if (items.value) {
			filteredItems = items.value;
		}
		return filteredItems;
	});

	watch(enteredSearchTerm, (value) => {
		setTimeout(() => {
			if (value === enteredSearchTerm.value) {
				activeSearchTerm.value = value;
			}
		}, 300);
	});

	function updateSearch(val) {
		enteredSearchTerm.value = val;
	}

	return {
		enteredSearchTerm,
		availableItems,
		updateSearch,
	}
}