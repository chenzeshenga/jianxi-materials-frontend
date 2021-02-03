import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: () => import('../views/introduce/introduce'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/news/news'),
  },
  {
    path: '/newsDetail',
    name: 'newsDetail',
    component: () => import('../views/news/newsDetail'),
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/product/product'),
  },
  {
    path: '/product_detail',
    name: 'product_detail',
    component: () => import('../views/product/product_detail'),
  },
  {
    path: '/mgt/login',
    name: 'login',
    component: () => import('../views/mgt/login'),
  },
  {
    path: '/mgt/mgt',
    name: 'mgt',
    component: () => import('../views/mgt/mgt'),
  },
  {
    path: '/document',
    name: 'document',
    component: () => import('../views/document/document'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact/contact'),
  }
]

const router = new VueRouter({
  routes
})

document.title = '宁波建锡新材料有限公司';

export default router
