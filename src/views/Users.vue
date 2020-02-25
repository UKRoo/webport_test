<template>
  <div class="users-wrapper">
    <table>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Web-site</th>
        <th></th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.website }}</td>
        <td>
            <button type="button" class="button" @click="showModal" :id="user.id">
              Info
            </button>
            <modal v-show="isModalVisible" @close="closeModal" :user="thisID"/>
           
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import Modal from "../components/Modal.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Modal
  },
  data() {
    return {
      isModalVisible: false,
      thisID: "",
      // companyInfo: [],
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
      this.thisID = event.currentTarget.id;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  computed: {
    ...mapGetters({
      users: "getAllUsers"
    })
  }
};
</script>
<style lang="scss">
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
