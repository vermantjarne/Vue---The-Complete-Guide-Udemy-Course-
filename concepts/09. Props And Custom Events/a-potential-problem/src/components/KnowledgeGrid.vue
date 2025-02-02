<template>
  <ul>
		<!-- KnowledgeGrid also passes @select-topic through this, while it does not actually use the event -->
    <!-- <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-element> -->
		<knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // props: ['topics'],
	// inject works similarly to props, inserting data injected from another component
	// Injecting only works from higher-up parent components
	inject: ['topics'],
  // emits: ['select-topic']
};
</script>