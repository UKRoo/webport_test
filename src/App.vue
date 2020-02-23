<template>
  <div id="app">
    <h1><router-link to="/">All Posts</router-link></h1>
    {{test}}
    <div class="pagination">
      <router-link :to="`${page}`" v-for="page in pages" :key="page" active-class="active">{{ page }}</router-link>
    </div>
    <hr />
    <div class="post" v-for="(post, index) in showPosts" :key="post.id">
      <h3>{{ index}} {{ post.title }} {{ post.id }}</h3>
      <p>{{ post.body }}</p>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  data() {
    return {
      perPage: 10,
      currentPage: 0,
    };
  },
  computed: {
    ...mapGetters({
      posts: "getAllPosts",
      validPosts: "getValidPosts",
      getPostByPage: "getPostByPage"
    }),
    pages() {
      return this.posts.length / this.perPage;
    },
    showPosts() {
      let from = (this.$route.params.id - 1) * 10;
      let to = from + 10;
      return this.getPostByPage(from, to);
    },
    test() {
      // return console.log(this.$route.params.id * 10)
    }
  },
  methods: {
    ...mapActions({
      loadPosts: "loadPosts"
    })
  },
  mounted() {
    this.loadPosts();
  }
};
</script>
<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.post {
  display: block;
  width: 300px;
  margin: 10px auto;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
}

// Pagination
.pagination {
  display: inline-block;
  margin: 10px auto;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination a.active {
  background-color: #4caf50;
  color: white;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}
</style>
