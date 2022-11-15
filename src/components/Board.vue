<script setup>
import Column from './Column.vue';
import { Status, AllStatuses } from '../model';
</script>

<script>
export default {
  props: {
    cards: Array,
  },
  methods: {
    cardsFor(column) {
      return new Map(AllStatuses.map(status => [status, this.cards.filter(card => card.status === status)])).get(column);
    },
  },
}
</script>

<template>
  <div class="board" @remove-card="remove(cardId)">
    <Column v-for="column in AllStatuses" :title="column" :cards="cardsFor(column)"
      @remove-card="cardId => $emit('remove-card', cardId)" />
  </div>
</template>

<style scoped>
.board {
  column-count: 3;
}
</style>
