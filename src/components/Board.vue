<script setup>
import Column from './Column.vue'
import Card from './Card.vue'
</script>

<script>
export default {
  data() {
    return {
      board: [
        {
          title: 'To Do',
          cards: [
            { id: 1, text: 'Go to the gym' },
            { id: 2, text: 'Watch TV' },
          ],
        },
        {
          title: 'Doing',
          cards: [
            { id: 3, text: 'Cook dinner' },
            { id: 4, text: 'Drink wine' },
          ],
        },
        {
          title: 'Done',
          cards: [
            { id: 5, text: 'Drink coffee' },
            { id: 6, text: 'Eat breakfast' },
            { id: 7, text: 'Eat lunch' },
          ],
        },
      ]
    };
  }
}
</script>

<template>
  <div class="board">
    <Column v-for="column in board">
      <template #title>
        {{ column.title }}
      </template>
      <template #content>
        <Card v-for="card in column.cards">
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
