<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            Company name
            <i class="fas fa-times" @click="close"></i>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <p>paragrph1 {{id}}</p>
            <p>paragrph1</p>
            <p>paragrph1</p>
            <p>paragrph1</p>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "modal",
  props: {
    id: {
      type: [String, Number],
    },
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style>
.fas {
    cursor: pointer;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(82, 74, 74, 0.158);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 400px;
}

.modal-header{
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
