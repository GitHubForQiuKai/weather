import Vue from 'vue';
import store from './store';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.use(VueRouter);
import App from './components/App.vue';
import Index from './components/index/Index.vue';
import locationPicker from './components/locationPicker/LocationPicker.vue';

const routes = [{
    path: '/',
    component: Index
}, {
    path: '/index',
    component: Index
}, {
    path: '/locationpicker',
    component: locationPicker
}]
const router = new VueRouter({
    routes,
    mode: 'history'
});
const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#gogo')
