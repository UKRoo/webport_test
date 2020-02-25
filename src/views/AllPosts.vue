<template>
  <div class="all-posts-wrapper">
    <AddPost />
    <router-link
      tag="div"
      :to="`/post-${post.id}`"
      class="post"
      v-for="post in posts"
      :key="post.id"
    >
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </router-link>
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
