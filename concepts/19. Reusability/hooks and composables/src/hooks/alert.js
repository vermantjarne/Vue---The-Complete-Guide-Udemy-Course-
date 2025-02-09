import { ref } from 'vue';

// The naming convention for hooks is for them to start with use
// It can accept whichever parameters that are preferred to adjust the behavior, making it very flexible
export function useAlert(startingVisibility = false) {
	const alertIsVisible = ref(startingVisibility);

	function showAlert() {
		alertIsVisible.value = true;
	}
	function hideAlert() {
		alertIsVisible.value = false;
	}
	
	// return {
	// 	alertIsVisible,
	// 	showAlert,
	// 	hideAlert
	// };
	
	// Seeing as this is a custom function, we are able to return the data however we prefer
	return [
		alertIsVisible,
		showAlert,
		hideAlert
	];
}