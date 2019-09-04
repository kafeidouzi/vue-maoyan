import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import  Movies from './pages/movies/Movies'
import  Theaters from './pages/theaters/Theaters'
import Profile from './pages/profile/Profile'

import Hotmovies from './pages/movies/Hotmovies'
import Comingmovies from './pages/movies/Comingmovies'

const router= new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      redirect:'/movies'
    },
   {
     path:'/movies',
     component:Movies,
     redirect:'/movies/hotmovies',
     children:[
        {
          path:'hotmovies',
          name:'hotmovies',
          component:Hotmovies
        },
        {
          path:'comingmovies',
          name:'comingmovies',
          component:Comingmovies
        }
     ]
   },
   {
     path:'/theaters',
     component:Theaters
   },
   {
     path:'/profile',
     component:Profile
   }
  ]
})
export default router