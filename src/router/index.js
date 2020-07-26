import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/introduce',
        name: 'introduce',
        component: () => import('../views/introduce/introduce')
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('../views/news/news')
    },
    {
        path: '/newsDetail',
        name: 'newsDetail',
        component: () => import('../views/news/newsDetail')
    },
    {
        path: '/product',
        name: 'product',
        component: () => import('../views/product/product')
    },
    {
        path: '/mgt/login',
        name: 'login',
        component: () => import('../views/mgt/login')
    },
    {
        path: '/mgt/mgt',
        name: 'mgt',
        component: () => import('../views/mgt/mgt')
    },
    {
        path: '/document',
        name: 'document',
        component: () => import('../views/document/document')
    }
]

const router = new VueRouter({
    routes
})

export default router
