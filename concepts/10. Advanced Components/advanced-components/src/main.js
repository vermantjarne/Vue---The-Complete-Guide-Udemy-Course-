import { createApp } from 'vue';

import App from './App.vue';
// import TheHeader from './components/TheHeader.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
import BaseCard from './components/UI/BaseCard.vue';

const app = createApp(App);

// These components are registered as global components, meaning they can be used across any other component
// This is not always the preferred method, as the code is loaded in when the application is booted
// When it is redundant, it is preferred to register these locally
// Registering these components globally is often correct if there are multiple purposes for a component
// To keep this file short and component usage strict and clear, we can also mostly use local component imports
// app.component('the-header', TheHeader);
app.component('base-badge', BaseBadge);
// app.component('badge-list', BadgeList);
// app.component('user-info', UserInfo);
app.component('base-card', BaseCard);

app.mount('#app');
