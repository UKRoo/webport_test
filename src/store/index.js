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
        .get('https://jsonplaceholder.typicode.com/comments')
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
    ADD_POST(state, post) {
      state.posts.unshift(post);
    },
  },
  getters: {
    getAllPosts(state) {
      return state.posts.filter(p => {
        return p.title && p.body;
      });
    },
    getAllUsers(state) {
      return state.users;
    },
    getPostByPage: (state) => (from, to) => {
      return state.posts.slice(from, to)
    },
    getPostById: (state) => (postId) => {
      return state.posts.filter(post => post.id === postId)
    },
    getCommentsForPost: (state) => (postId) => {
      return state.comments.filter(p => {
        return p.id == postId;
      });
    },
  },
  modules: {

  }
});
