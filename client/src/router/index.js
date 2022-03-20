import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import thankyou from '../views/thankyou.vue'

const routes = [
  {path: '/',name: 'Home',component: Home},
  {path: '/cart', name: 'Cart',component: Cart },
  {path:'/Login',name:'Login',component: Login},
  {path:'/thankyou',name:'thankyou',component: thankyou}
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
