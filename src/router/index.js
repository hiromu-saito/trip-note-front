import Vue from 'vue'
import VueRouter from 'vue-router'
import TripBoardView from '../components/template/TripBoardView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: TripBoardView
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
