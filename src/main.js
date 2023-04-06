import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import { Button } from 'vant';
// 2. Import the components style
import 'vant/lib/index.css';

import NoosPlugin from './plugins/noos-plugin';

createApp(App).use(store).use(router)
.use(NoosPlugin, {store: store, router: router})
// .use(Button)
.mount('#app')
