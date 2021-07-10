import TripBoardView from '../components/template/TripBoardView'
import TripSigninView from '../components/template/TripSigninView'
import TripSignupView from '../components/template/TripSignupView'
import TripHotelBoard from '../components/orgasms/TripHotelBoard'
import TripMemoryBoard from '../components/orgasms/TripMemoryBoard'

export default [
  {
    path: '/',
    // nameがあるとmetaが効かない？
    // name: 'TripBoardView',
    component: TripBoardView,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: TripMemoryBoard
      },
      {
        path: 'search',
        component: TripHotelBoard
      }
    ]
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