import Vue from 'vue'
import VueRouter from 'vue-router'
import Pagination from '../views/Pagination.vue'
import AllPosts from '../views/AllPosts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/all/',
    name: 'AllPosts',
    component: AllPosts
  },
  {
    path: '/pagination',
    name: 'Pagination',
    component: Pagination
  },
  {
    path: '/pagination/:id',
    name: 'Pagination',
    component: Pagination
  },
  // {
  //   path: '/users/',
  //   name: 'Users',
  //   component: Users
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

