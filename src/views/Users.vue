<template>
  <div class="users-wrapper">
    <table>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Email / Website</th>
        <th></th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td class="col">
          {{ user.email.toLowerCase() }}
          <span>{{ user.website }}</span>
        </td>
        <td>
          <button type="button" class="button" @click="showModal" :id="user.id">
            Info
          </button>
          <modal
            v-show="isModalVisible"
            @close="closeModal"
            :companyInfo="companyInfo"
          />
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
      companyInfo: {}
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
      let thisID = event.currentTarget.id;
      this.companyInfo = {};
      this.companyInfo = this.users[thisID - 1].company;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  computed: {
    ...mapGetters({
      users: "getAllUsers"
    })
  }
};
</script>
