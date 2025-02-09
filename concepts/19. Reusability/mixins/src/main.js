import { createApp } from 'vue';

import loggerMixin from './mixins/logger.js';

import App from './App.vue';

const app = createApp(App);

// Mixins can be registered globally to the app as well
app.mixin(loggerMixin);

app.mount('#app');
