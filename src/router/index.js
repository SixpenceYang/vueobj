import Vue from "vue"
import VueRouter from "vue-router"
const Home = () => import("../views/home/home.vue")
const Category = () => import("../views/category/category.vue")
const Profile = () => import("../views/profile/profile.vue")
const Cart = () => import("../views/cart/cart.vue")

Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/profile',
  component: Profile
}, {
  path: '/category',
  component: Category
}, {
  path: '/cart',
  component: Cart
}, ]

const router = new VueRouter({
  routes,
  modules: 'history'
})

export default router
