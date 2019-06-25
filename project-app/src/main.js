import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import TT1 from './views/TT1'
// import TT2 from './views/TT2'
// import TT3 from './views/TT3'
import Data from './views/Data'


// import store from 'vuex';


Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/TT1', component: TT1 },
    // { path: '/TT2', component: TT2 },
    // { path: '/TT3', component: TT3 },
    { path: '/data', component: Data }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')