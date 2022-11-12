<script setup>
import Board from './components/Board.vue'
import ButtonCreate from './components/ButtonCreate.vue';
</script>

<template>
  <header>
    <div style="display: inline-flex; width: 100%;">
      <div style="width: 100%">
        <h1 class="app-title" style="margin: 0">Notes 2000</h1>
      </div>
      <div>
        <ButtonCreate />
      </div>
    </div>
  </header>

  <main>
    <Board />
  </main>
</template>

<style scoped>

</style>
