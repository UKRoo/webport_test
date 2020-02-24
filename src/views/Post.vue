<template>
  <div class="post-wrapper">


    </div>
  </div>
</template>
<script>
// import AddPost from "../components/AddPost.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      posts: "getAllPosts"
    })
  },
  components: {
    // AddPost
  }
};
</script>
