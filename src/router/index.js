import Vue from 'vue'
import VueRouter from 'vue-router'
import products from '../views/products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: products
  },
  {
    path: '/products',
    name: 'Products',
    component: products
  },
  
]

const router = new VueRouter({
  routes
})

export default router
