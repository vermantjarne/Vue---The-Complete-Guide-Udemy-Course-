import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);

// use() allows the app to be connected with third-party packages
app.use(router);

app.mount('#app');
