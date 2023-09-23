import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import { Button } from 'vant';
// 2. Import the components style
import 'vant/lib/index.css';

import BootstrapVue3 from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import NoosPlugin from './plugins/noos-plugin';

createApp(App).use(store).use(router)
.use(BootstrapVue3)
.use(NoosPlugin, {store: store, router: router})
// .use(Button)
.mount('#app')
