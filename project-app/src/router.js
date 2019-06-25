import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./views/Home";
import Data from "./views/Data";

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/TT1',
            component: TT1
        },
        // {
        //     path: '/TT2',
        //     component: TT2
        // },
        // {
        //     path: '/TT3',
        //     component: TT3
        // },
        {
            path: '/data',
            component: Data
        }
    ]
})