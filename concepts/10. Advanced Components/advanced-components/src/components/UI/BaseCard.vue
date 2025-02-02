// This component is a wrapper component with a style attached to it
// This means it is reusable, however it still needs to pass the wrapped content
// There may be two slots required, which can have a name assigned to it
// 1 slot may remain unnamed, being left as the default slot
<template>
	<div>
		<header v-if="$slots.header">
			<!-- Any content within the <slot></slot> tag is being treated as fallback content -->
			<!-- In this case, it is a header, and fallback content isn't necessary, but this can be useful -->
			<!-- If there is no fallback content defined, the header is still rendered, but left empty -->
			<!-- Semantically, that is not ideal -->
			<!-- We can determine if the slot exists with v-if above, making the header not rendered if left blank -->
			<slot name="header">
				<!-- <h2>The Default</h2> -->
			</slot>
		</header>
		<slot></slot>
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>