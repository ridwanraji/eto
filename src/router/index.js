import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import SignIn from '../components/signin.vue'
import SignUp from '../components/signup.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ],
  mode: 'history'
})

export default router