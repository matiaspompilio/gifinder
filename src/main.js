require('dotenv').config();
import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/lib/theme-chalk/index.css';
import ElementPlus from 'element-plus';
import routes from './routes';

const app = createApp(App);

app.use(ElementPlus).use(routes).mount('#app')
