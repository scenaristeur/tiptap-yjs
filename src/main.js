import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import { Button } from 'vant';
// 2. Import the components style
import 'vant/lib/index.css';

createApp(App).use(store).use(router)
// .use(Button)
.mount('#app')
