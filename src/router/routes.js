import TripBoardView from '../components/template/TripBoardView'
import TripSigninView from '../components/template/TripSigninView'
import TripSignupView from '../components/template/TripSignupView'

export default [
  {
    path: '/',
    // nameがあるとmetaが効かない？
    // name: 'TripBoardView',
    component: TripBoardView,
    meta: { requiresAuth: true }
  },
  {
    path: '/signin',
    name: 'TripSigninView',
    component: TripSigninView
  },
  {
    path: '/signup',
    name: 'TripSignupView',
    component: TripSignupView
  },
  {
    path: '*',
    redirect: '/'
  }
]