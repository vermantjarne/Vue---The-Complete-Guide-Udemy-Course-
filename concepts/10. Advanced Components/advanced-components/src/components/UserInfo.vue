<template>
  <section>
		<base-card>
			<!-- The v-slot directive lets Vue know which slot the template should go to -->
			<!-- The markup of components that are passed as slots are not affected when defined in this component -->
			<!-- <template v-slot:header> -->
			<!-- This can also be replaced with #header, as # is a shorthand for v-slot: -->
			<template #header>
				<h3>{{ fullName }}</h3>
				<base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
			</template>
			<!-- The default slot is not necessary, but can be defined explicitly -->
			<!-- This clarifies that the default slot was not forgotten, but still defined -->
			<template #default>
				<p>{{ infoText }}</p>
			</template>
		</base-card>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>