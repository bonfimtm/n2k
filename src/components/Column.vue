<script setup>
import Card from './Card.vue';
</script>

<script>
export default {
  props: {
    title: String,
    cards: Array,
  },
  emits: [
    'remove-card',
  ],
}
</script>

<template>
  <div class="column window">
    <h2 class="window-title">
      {{ title }}
    </h2>
    <Card v-for="card in cards" :key="card.id" :card="card" @remove-card="cardId => $emit('remove-card', cardId)" />
  </div>
</template>

<style scoped>
div {
  border: solid 1px black;
}
.column {
  padding: 0;
  height: 75vh;
}
</style>
