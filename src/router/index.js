import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import CategoryView from '../views/CategoryView.vue'
import Search from '../views/Search.vue'
import Cart from '../views/Cart.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import MyAccout from '../views/MyAccount.vue'
import Checkout from '../views/Checkout.vue'
import Success from '../views/Success.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/:category_slug/:product_slug',
    name:'product',
    component: ProductView
  },
  {
    path:'/:category_slug',
    name:'category',
    component: CategoryView
  },
  {
    path:'/search',
    name:'search',
    component:Search
  },  
  {
    path: '/cart',
    name: 'cart',
    component:Cart 
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component:SignUp
  },
  {
    path: '/log-in',
    name: 'Login',
    component:Login
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component:MyAccout,
    meta:{
      requireLogin: true  
    }
  },
  {
    path: '/cart/checkout',
    name: 'Checkout',
    component:Checkout 
  },
  {
    path: '/cart/success',
    name: 'Success',
    component:Success
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// protected route
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'LogIn', query: { to: to.path } });
  } else {
    next()
  }
})

export default router
