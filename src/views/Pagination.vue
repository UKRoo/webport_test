<template>
  <div class="pagination-wrapper">
    <AddPost />
    <div class="pagination">
      <router-link
        :to="`/pagination/${page}`"
        v-for="page in pages"
        :key="page"
        active-class="active"
      >{{ page }}</router-link>
    </div>
    <div class="post" v-for="post in showPosts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>
<script>
import AddPost from "../components/AddPost.vue";
import { mapGetters, mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  data() {
    return {
      perPage: 10
    };
  },
  components: {
    AddPost
  },
  computed: {
    ...mapGetters({
      posts: "getAllPosts",
      getPostByPage: "getPostByPage"
    }),
    pages() {
      return Math.round(this.posts.length / this.perPage);
    },
    showPosts() {
      let from = (this.$route.params.id - 1) * this.perPage;
      let to = from + this.perPage;
      return this.getPostByPage(from, to);
    }
  }
};
</script>
<style lang="scss">
.pagination-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
