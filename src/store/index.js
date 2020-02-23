import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    posts: [],
    comments: [],
    users: [],
  },
  actions: {
    loadPosts({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(r => r.data)
        .then(posts => {
          commit('SET_POSTS', posts)
        })
    },
    loadComments({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(r => r.data)
        .then(comments => {
          commit('SET_COMMENTS', comments)
        })
    },
    loadUsers({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(r => r.data)
        .then(users => {
          commit('SET_USERS', users)
        })
    },
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  getters: {
    getAllPosts(state) {
      return state.posts;
    },
    getValidPosts(state) {
      return state.posts.filter(p => {
        return p.id >= 1 && p.id <= 10;
      });
    },
    // getPostByPage: (state, getters) => (a, b) => {
    //   return state.posts.filter(post => post.id >= a && post.id <= b)
    // },
    getPostByPage: (state, getters) => (a, b) => {
      return state.posts.slice(a, b)
    },
  },
  modules: {

  }
});
