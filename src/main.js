import {createApp} from 'vue'
import App from './App.vue'

import 'bootstrap';
import Home from "./views/Home.vue";
import Profile from "./views/Profile.vue";
import {createMemoryHistory, createRouter} from "vue-router";

const routes = [
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

const app = createApp(App);

app.use(router);
app.mount('#app');
