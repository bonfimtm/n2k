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
      cards: [],
      sequence: 0,
    };
  },
  methods: {
    add(text) {
      const newId = ++this.sequence;
      const newCard = { id: newId, text, status: Status.ToDo };
      this.cards = [...this.cards, newCard];
    },
    move(transition) {
      const { cardId, status } = transition;
      this.cards = this.cards.map(card => {
        if (card.id === cardId) {
          return { ...card, status };
        } else {
          return card;
        }
      });
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
    <Board :cards="cards" @remove-card="remove" @move-card="transition => move(transition)" />
  </main>
</template>

<style scoped>

</style>
