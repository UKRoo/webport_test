import Vue from "vue";
import VueRouter from "vue-router";
import Pagination from "../views/Pagination.vue";
import AllPosts from "../views/AllPosts.vue";
import Users from "../views/Users.vue";
import Post from "../views/Post.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AllPosts",
    component: AllPosts
  },
  {
    path: "*pagination/:id",
    name: "Pagination",
    component: Pagination
  },
  {
    path: "/users",
    name: "Users",
    component: Users
  },
  {
    path: "/post-:id",
    name: "Post",
    component: Post
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
