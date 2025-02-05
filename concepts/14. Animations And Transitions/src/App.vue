<template>
	<!-- <div class="container">
		<users-list></users-list>
	</div>
  <div class="container">
    <div class="block" :class="{animate: animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
	<div class="container"> -->
		<!-- Transition will manipulate the wrapped element -->
		<!-- It may only contain 1 direct child -->
		<!-- Vue adds 3 classes, *-enter-from, *-enter-to and *-enter-active when an element gets mounted -->
		<!-- It also adds *-leave-from, *-leave-to and *-leave-active when an element gets unmounted -->
		<!-- Vue only removes the element once the animation on it has finished -->
		<!-- A name can be added, defining which classes are added to the element -->
		<!-- In the case the entire animation should be replaced, it is possible to define the individual classes for each part of the animation -->
		<!-- <transition enter-to-class="..." enter-active-class="..."> -->
		<!-- There are also built-in events emitted by the <transition> element -->
		<!-- Optionally, these events pass an argument containing the element wrapped by the <transition> element -->
		<!-- These events are fired, even if there is no CSS animation bound to it -->
		<!-- The @enter-cancelled and @leave-cancelled events are triggered when the respective animations are cancelled -->
		<!-- <transition name="para" -->
		<!-- Setting :css makes Vue aware that no CSS is used to animate this transition -->
		<!-- This improves the performance for transitions if the animation is fully done through JavaScript -->
		<!-- <transition :css="false"
			@before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cancelled="enterCancelled"
			@before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @leave-cancelled="leaveCancelled"
		>
			<p v-if="paragraphIsVisible">This is only sometimes visible...</p>
		</transition>
		<button @click="toggleParagraph">Toggle Paragraph</button>
	</div>
	<div class="container"> -->
		<!-- Exceptionally, the transition component can also wrap multiple elements -->
		<!-- This is only possible if there is a guarantee that only 1 of the elements is visible at a time -->
		<!-- Vue does not analyze these conditions itself with v-if -->
		<!-- We should thus use v-else instead -->
		<!-- mode can contain one of two values: 'in-out' or 'out-in' -->
		<!-- This determines which element should be animated first, which creates a more desirable output -->
		<!-- <transition name="fade-button" mode="out-in">
			<button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
			<button @click="hideUsers" v-else>Hide Users</button>
		</transition>
	</div> -->
	<!-- Despite there only being 1 child element, there are actually 2 elements, a div and dialog, in the component -->
	<!-- Instead, we will use it directly in the BaseModal -->
	<!-- <transition name="modal"> -->
		<!-- v-if does not allow animations to work -->
		<!-- <base-modal @close="hideDialog" v-if="dialogIsVisible"> -->
		<!-- <base-modal @close="hideDialog" :open="dialogIsVisible">
			<p>This is a test dialog!</p>
			<button @click="hideDialog">Close it!</button>
		</base-modal> -->
	<!-- </transition> -->
  <!-- <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->

	<!-- For animating routes, <transition> should be put inside of the <router-view> -->
	<!-- The router view automatically retrieves slotProps, which has a property name 'Component' -->
	<!-- This holds the component for the currently selected route -->
	<!-- This only works if the routed components have exactly 1 root element -->
	<router-view v-slot="slotProps">
		<transition name="route" mode="out-in">
			<component :is="slotProps.Component"></component>
		</transition>
	</router-view>
</template>  

<script>
export default {
  data() {
    return {
			animatedBlock: false,
			dialogIsVisible: false,
			paragraphIsVisible: false,
			usersAreVisible: false,
			enterInterval: null,
			leaveInterval: null,
		};
  },
  methods: {
		animateBlock() {
			this.animatedBlock = true;
		},
		toggleParagraph() {
			this.paragraphIsVisible = !this.paragraphIsVisible;
		},
		showUsers() {
			this.usersAreVisible = true;
		},
		hideUsers() {
			this.usersAreVisible = false;
		},
		// The element as a parameter is optional
		// beforeEnter() {
			
		// },
		// These hooks allow us to programmatically animate the elements
		beforeEnter(el) {
			el.style.opacity = 0;
		},
		// done can be called explicitly to make Vue aware that the animation is done
		// This makes Vue aware of when the animation has finished and when afterEnter should play
		enter(el, done) {
			let i = 1;
			this.enterInterval = setInterval(() => {
				el.style.opacity = i * 0.01;
				i++;
				if (i > 100) {
					clearInterval(this.enterInterval);
					done();
				}
			}, 20);
		},
		afterEnter() {

		},
		beforeLeave() {
			
		},
		leave(el, done) {
			let i = 1;
			this.leaveInterval = setInterval(() => {
				el.style.opacity = 1 - i * 0.01;
				i++;
				if (i > 100) {
					clearInterval(this.leaveInterval);
					done();
				}
			}, 20);
		},
		afterLeave(el) {
			el.style.opacity = 0;
		},
		enterCancelled() {
			clearInterval(this.enterInterval);
		},
		leaveCancelled() {
			clearInterval(this.leaveInterval);
		},
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
	/* transition: transform 0.3s; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
	/* transform: translateX(-150px); */
	animation: slide-fade 0.3s ease-out forwards;
}

/* All of the below classes are removed once the animation is over */
/* This class defines the start state of the appearing animation */
/* .v-enter-from {
	opacity: 0;
	transform: translateY(-30px);
} */

/* This class defines the transition of the entire appearing animation */
/* .v-enter-active { */
	/* transition: all 0.3s ease-out; */
	/* animation: slide-scale 0.3s ease-out reverse;
} */
/* .para-enter-active { */
	/* transition: all 0.3s ease-out; */
	/* animation: slide-scale 0.3s ease-out reverse;
} */

/* This class defines the end state of the appearing animation */
/* .v-enter-to {
	opacity: 1;
	transform: translateY(0);
} */

/* This class defines the start state of the disappearing animation */
/* .v-leave-from {
	opacity: 1;
	transform: translateX(0px);
} */

/* This class defines the transition of the entire disappearing animation */
/* .v-leave-active { */
	/* transition: all 0.3s ease-in; */
	/* animation: slide-scale 0.3s ease-out;
} */
/* .para-leave-active { */
	/* transition: all 0.3s ease-in; */
	/* animation: slide-scale 0.3s ease-out;
} */

/* This class defines the end state of the disappearing animation */
/* .v-leave-to {
	opacity: 0;
	transform: translateX(30px);
} */

.fade-button-enter-from,
.fade-button-leave-to {
	opacity: 0
}

.fade-button-enter-active {
	transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
	transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
	opacity: 1;
}

.route-enter-active {
	animation: slide-scale 0.4s ease-out reverse;
}

.route-leave-active {
	animation: slide-scale 0.4s ease-in;
}

@keyframes slide-scale {
	0% {
		transform: translateX(0) scale(1);
	}

	70% {
		transform: translate(-120px) scale(1.1);
	}

	100% {
		transform: translateX(-150px) scale(1);
	}
}
</style>