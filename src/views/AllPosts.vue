<template>
  <div class="all-posts-wrapper">
    <AddPost />
    <div class="post" v-for="(post, index) in posts" :key="post.id">
      <h3>{{ index }} {{ post.title }} {{ post.id }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>
<script>
import AddPost from "../components/AddPost.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      posts: "getAllPosts"
    })
  },
  components: {
    AddPost
  }
};
</script>
