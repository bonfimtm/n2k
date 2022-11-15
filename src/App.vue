<script setup>
import Board from './components/Board.vue'
import FormAdd from './components/FormAdd.vue';
import { Status, AllStatuses } from './model';
</script>

<script>
export default {
  data() {
    return {
      text: '',
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
    add(text) {
      const newId = this.cards.length + 1;
      const newCard = { id: newId, text, status: Status.ToDo };
      this.cards = [...this.cards, newCard];
    },
    remove(cardId) {
      this.cards = this.cards.filter(card => card.id !== cardId);
    },
  },
}
</script>

<template>
  <header>
    <div style="display: inline-flex; width: 100%;">
      <div style="width: 100%">
        <h1 class="app-title" style="margin: 0">Notes 2000</h1>
      </div>
      <div>
        <FormAdd @add-card="add" />
      </div>
    </div>
  </header>

  <main>
    <Board :cards="cards" @remove-card="remove" />
  </main>
</template>

<style scoped>

</style>
