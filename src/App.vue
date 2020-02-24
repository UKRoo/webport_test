<template>
  <div id="app">
      <ul>
        <li><router-link to="/all/" active-class="active">All Posts</router-link></li>
        <li><router-link to="/pagination/1" active-class="active">Pagination</router-link></li>
        <li><router-link to="/users/" active-class="active">Users</router-link></li>
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
body {
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.post {
  display: block;
  width: 300px;
  margin: 10px auto;
  border-left: 4px solid #4CAF50;
  border-radius: 5px;
  padding: 10px;
  background-color: #ffffff;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
}

li {
  float: left;
}

li a {
  display: block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #ddd;
}

li a.active {
  color: white;
  background-color: #4CAF50;
}
.button {
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 5px 20px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.button:hover {
  background-color: green;
}
</style>
