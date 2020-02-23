<template>
  <div class="all-posts-wrapper">
    <div class="post" v-for="(post, index) in posts" :key="post.id">
      <h3>{{ index }} {{ post.title }} {{ post.id }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// import { mapState } from "vuex";

export default {
  computed: {
    ...mapGetters({
      posts: "getAllPosts",
    }),
  },
};
</script>

