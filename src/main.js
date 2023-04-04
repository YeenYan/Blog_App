import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';
import router from './router';
import Vue2Editor from "vue2-editor";


const app = createApp(App);

app.use(Vue2Editor);
app.use(store);
app.use(router);

app.mount('#app');
