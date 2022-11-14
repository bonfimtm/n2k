<script setup>
import ButtonClose from './ButtonClose.vue'
</script>

<script>
export default {
  props: {
    card: Object,
  },
}
</script>

<template>
  <div class="card window">
    <ButtonClose />
    {{ card.text }}
  </div>
</template>

<style scoped>
.card {
  min-height: 64px;
  padding: 8px;
  margin: 4px;
}
</style>
