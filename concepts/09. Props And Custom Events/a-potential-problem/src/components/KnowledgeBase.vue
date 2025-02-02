<template>
  <section>
    <h2>Select a Topic</h2>
		<!-- KnowledgeBase acts as an intermediate component between KnowledgeGrid and App -->
		<!-- The @select-topic event is passed through here, but never used within this component -->
    <!-- <knowledge-grid :topics="topics" @select-topic="$emit('select-topic', $event)"></knowledge-grid> -->
    <knowledge-grid></knowledge-grid>
  </section>
</template>

<script>
export default {
  // props: ['topics'],
  // emits: ['select-topic'],
};
</script>