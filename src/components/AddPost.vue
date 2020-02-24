<template>
  <form @submit.prevent="submit">
    <label for="title"><b>Title:</b></label>
    <input type="text" v-model="title" required/>
    <label for="title"><b>Body:</b></label>
    <input type="text" v-model="body" required/>
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
<style lang="scss">
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
  label {
    padding-left: 10px;
  }
  input{
  margin: 10px;
  }
</style>
