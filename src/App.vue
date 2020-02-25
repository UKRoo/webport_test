<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/" active-class="active" exact>All Posts</router-link>
      </li>
      <li>
        <router-link to="/pagination/1" active-class="active">Pagination</router-link>
      </li>
      <li>
        <router-link to="/users" active-class="active">Users</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  methods: {
    ...mapActions({
      loadPosts: "loadPosts",
      loadComments: "loadComments",
      loadUsers: "loadUsers"
    })
  },
  mounted() {
    this.loadPosts();
    this.loadComments();
    this.loadUsers();
  }
};
</script>
<style lang="scss">
@import "./style/main.scss";
@import "./style/media.scss";
</style>
