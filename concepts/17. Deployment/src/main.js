// When an import is set up, Vue is told that the code in this file is necessary
// This means that it is loaded every time, even if it is not needed
// defineAsyncComponent allows certain components to only be loaded when they are required
// This can also be used for local components
// These components are compacted into the 0.js file in the browser
import { createApp, defineAsyncComponent } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
// import BaseDialog from './components/ui/BaseDialog.vue';

const BaseDialog = defineAsyncComponent(() => import('./components/ui/BaseDialog.vue'));

const app = createApp(App)

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
// Asynchronous components are still registered to the app in the same way
app.component('base-dialog', BaseDialog);

app.mount('#app');
