import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Comics from '@/components/Comics'
import IndividualComic from '@/components/IndividualComic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/comics',
      name: 'Comics',
      component: Comics
    },
    {
      path: '/comic/:id',
      name: 'IndividualComic',
      component: IndividualComic
    }
  ]
})
