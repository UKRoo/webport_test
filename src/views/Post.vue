<template>
  <div class="post-wrapper">
    <!-- {{showPost}} -->
    {{post}}
    {{test}}

  </div>
</template>
<script>
// import AddPost from "../components/AddPost.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      post: "getPostById",
      comments: "getCommentsForPost"
    }),
    // showPost() {
    //     let id = 3;
    //     return this.getPostById(id)
    // },
    test() {
        return getPostById(1)
    },
  },
  components: {
    // AddPost
  }
};
</script>
