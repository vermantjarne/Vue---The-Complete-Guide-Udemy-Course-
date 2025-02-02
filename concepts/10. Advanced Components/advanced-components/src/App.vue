<template>
  <div>
    <the-header></the-header>
		<!-- This can also be written as TheHeader -->
		<!-- <TheHeader></TheHeader> -->
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->
		<!-- Instead of defining the #default on a template, it can be put directly on the component -->
		<!-- This is only possible if there is exactly a single slot in the component -->
		<!-- <course-goals #default="slotProps"> -->
			<!-- Properties of a slot can be passed along with the name of the slot -->
			<!-- <template #default="slotProps"> -->
				<!-- <h2>{{ slotProps.item }}</h2>
				<p>{{ slotProps['another-prop'] }}</p> -->
			<!-- </template> -->
		<!-- </course-goals> -->
		<button @click="setSelectedComponent('active-goals')">Active Goals</button>
		<button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
		<!-- Vue has an alternative to the code below: dynamic components -->
		<!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
		<manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
		<!-- The component element does not work on its own - it requires the :is property -->
		<!-- This has the same behavior, without multiple v-if statements -->
		<!-- The reason this works is because selectedComponent holds the name of the element -->
		<!-- If the component has an input field, and the component is switched away to another component, the previous element is cleared -->
		<!-- This happens because Vue natively destroys the DOM element -->
		<!-- keep-alive allows the preservation of the state, keeping it cached behind the scenes -->
		<keep-alive>
			<component :is="selectedComponent"></component>
		</keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
	// The components property allows us to import components locally
	// This means that these components are only usable in this component
	// The registration for this uses similarly to the registration of global components
	// It can be written shorter, as Vue will automatically allow the use of <the-header></the-header>
	components: {
		TheHeader,
		// BadgeList,
		// UserInfo,
		// CourseGoals,
		ActiveGoals,
		ManageGoals,
	},
  data() {
    return {
			selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
	methods: {
		setSelectedComponent(component) {
			this.selectedComponent = component;
		}
	}
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>