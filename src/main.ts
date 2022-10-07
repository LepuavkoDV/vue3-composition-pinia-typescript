import { createApp } from 'vue';
import './registerServiceWorker';
import router from '@/modules/router';
import store from '@/modules/store';
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
