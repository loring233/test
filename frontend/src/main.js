import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import Toast from 'vue-toastification'; // 新增
import 'vue-toastification/dist/index.css'; // 新增
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';

// 设置 Axios 的默认 baseURL
axios.defaults.baseURL = 'http://localhost:5000/api';

const app = createApp(App);
app.use(router);
app.use(Toast); // 新增
app.mount('#app');
