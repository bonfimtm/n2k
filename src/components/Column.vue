<script setup>
import Card from './Card.vue';
</script>

<script>
export default {
  props: {
    status: String,
    cards: Array,
  },
  emits: [
    'remove-card',
    'move-card',
  ],
  methods: {
    onDrop(event, status) {
      const cardId = event.dataTransfer.getData('cardId');
      this.$emit('move-card', { cardId, status });
    },
  }
}
</script>

<template>
  <div class="column window" @drop="onDrop($event, status)" @dragenter.prevent @dragover.prevent>
    <h2 class="window-title">
      {{ status }}
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
  height: 90vh;
}
</style>
