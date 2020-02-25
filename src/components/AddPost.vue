<template>
  <form @submit.prevent="submit">
    <div class="row">
      <label for="title"><b>Title:</b></label>
      <input type="text" v-model="title" required />
    </div>
    <div class="row">
      <label for="title"><b>Text:</b></label>
      <input type="text" v-model="body" required />
    </div>
    <button class="button" type="submit">Add Post</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      title: "",
      body: ""
    };
  },
  methods: {
    ...mapMutations({
      ADD_POST: "ADD_POST"
    }),
    submit() {
      this.ADD_POST({
        title: this.title,
        body: this.body,
        id: Date.now()
      });
      this.title = this.body = "";
    }
  }
};
</script>
