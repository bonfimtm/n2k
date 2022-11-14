<script setup>
import Column from './Column.vue'
import Card from './Card.vue'
import { Status, AllStatuses } from './model';
</script>

<script>
export default {
  data() {
    return {
      cards: [
        { id: 1, text: 'Go to the gym', status: Status.ToDo },
        { id: 2, text: 'Watch TV', status: Status.ToDo },

        { id: 3, text: 'Cook dinner', status: Status.Doing },
        { id: 4, text: 'Drink wine', status: Status.Doing },

        { id: 5, text: 'Drink coffee', status: Status.Done },
        { id: 6, text: 'Eat breakfast', status: Status.Done },
        { id: 7, text: 'Eat lunch', status: Status.Done },
      ]
    };
  },
  methods: {
    cardsFor(column) {
      return new Map(AllStatuses.map(status => [status, this.cards.filter(card => card.status === status)])).get(column);
    },
    remove(card) {
      console.log(`Removing ${card.text}`);
    }
  },
}
</script>

<template>
  <div class="board">
    <Column v-for="column in AllStatuses">
      <template #title>
        {{ column }}
      </template>
      <template #content>
        <Card v-for="card in cardsFor(column)">
          {{ card.text }}
        </Card>
      </template>
    </Column>
  </div>
</template>

<style scoped>
.board {
  column-count: 3;
}
</style>
