<template>
  <div class="post-wrapper">
    <h3>Post</h3>
     <div class="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
    <hr>
    <h3>Comments</h3>
    <div class="comment" v-for="comment in comments" :key="comment.id">
      <h3>{{ comment.name }}</h3>
      <p>{{ comment.email }}</p>
      <p>{{ comment.body }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getPostById: "getPostById",
      getCommentsForPost: "getCommentsForPost"
    }),
    post() {
      let id = 3;
      return this.getPostById(3);
    },
    comments() {
      let postId = 3;
      return this.getCommentsForPost(3);
    }
  },
};
</script>
<style lang="scss">
  hr {
    border: 1px solid #4CAF50;
  }
</style>