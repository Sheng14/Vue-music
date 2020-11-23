import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recommend/recommend.vue'
import Rank from '../components/rank/rank.vue'
import Singer from '../components/singer/singer.vue'
import Search from '../components/search/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Recommend
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
