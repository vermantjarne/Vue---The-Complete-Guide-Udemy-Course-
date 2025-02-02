<template>
  <section>
		<base-card>
			<template #header>
				<h2>Available Badges</h2>
			</template>
			<template #default>
				<ul>
					<li>
						<base-badge type="admin" caption="ADMIN"></base-badge>
					</li>
					<li>
						<base-badge type="author" caption="AUTHOR"></base-badge>
					</li>
				</ul>
			</template>
		</base-card>
  </section>
</template>

// Normally, this style affects all files
// Sometimes it is preferred for certain styles to be used globally, though these would be defined in App.vue
// scoped ensures it is only used in this component, not even in the child components
// Behind the scenes, this means that Vue assigns an additional attribute to the CSS selector to ensure styling only happens on that specific element
<style scoped>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>