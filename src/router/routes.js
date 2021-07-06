import TripBoardView from '../components/template/TripBoardView'
import TripSigninView from '../components/template/TripSigninView'
import TripSignupView from '../components/template/TripSignupView'

export default [
  {
    path: '/',
    name: 'TripBoardView',
    component: TripBoardView
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