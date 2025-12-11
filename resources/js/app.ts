import { createApp } from 'vue';
import App from './Layouts/App.vue';
import router from './router';

createApp(App)
  .use(router)
  .mount('#app');
