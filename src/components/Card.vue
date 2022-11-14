<script setup>
import ButtonClose from './ButtonClose.vue'
</script>

<script>
export default {
  props: {
    card: Object,
  },
  emits: [
    'remove-card',
  ],
}
</script>

<template>
  <div class="card window">
    <ButtonClose @click="$emit('remove-card', card.id)" />
    {{ card.text }}
  </div>
</template>

<style scoped>
div {
  border: solid 1px black;
}
.card {
  min-height: 64px;
  padding: 8px;
  margin: 4px;
}
</style>
