<template>
  <div class="pagination-wrapper">
    <AddPost />
    <div class="pagination">
      <router-link
        :to="`/pagination/${page}`"
        v-for="page in pages"
        :key="page"
        active-class="active"
        >{{ page }}</router-link
      >
    </div>
    <router-link
      tag="div"
      :to="`/post-${post.id}`"
      class="post"
      v-for="post in showPosts"
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
