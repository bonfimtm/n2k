<script setup>
import Card from './Card.vue';
</script>

<script>
export default {
  props: {
    title: String,
    cards: Array,
  },
}
</script>

<template>
  <div class="column window">
    <h2 class="window-title">
      {{ title }}
    </h2>
    <Card v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>

<style scoped>
.column {
  padding: 0;
  height: 75vh;
}
</style>
