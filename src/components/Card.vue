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
  methods: {
    onDragStart: (event, card) => {
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('cardId', card.id);
    }
  }
}
</script>

<template>
  <div class="card window" draggable="true" @dragstart="onDragStart($event, card)">
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
