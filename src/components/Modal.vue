<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="$emit('close')">
      <div class="modal">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            {{ companyInfo.name }}
            <i class="fas fa-times" @click="close"></i>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <div class="row">
              <b>Catch Phrase:</b>
              <p>{{ companyInfo.catchPhrase }}</p>
            </div>
            <div class="row">
              <b>BS:</b>
              <p>{{ companyInfo.bs }}</p>
            </div>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "modal",
  props: ["companyInfo"],
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
