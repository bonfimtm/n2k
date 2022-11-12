<script setup>
import Column from './Column.vue'
import Card from './Card.vue'
</script>

<script>
export default {
  data() {
    return {
      appName: 'Notes 2000',
      board: [
        {
          title: 'To Do',
          cards: ['Go to the gym', 'Watch TV'],
        },
        {
          title: 'Doing',
          cards: ['Cook dinner', 'Drink wine'],
        },
        {
          title: 'Done',
          cards: ['Drink coffee', 'Eat breakfast', 'Eat lunch'],
        },
      ]
    };
  }
}
</script>

<template>
  <h1 class="title">Notes 2000</h1>
  <div class="board">
    <Column v-for="column in board">
      <template #title>
        {{ column.title }}
      </template>
      <template #content>
        <Card v-for="card in column.cards">
          {{ card }}
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
