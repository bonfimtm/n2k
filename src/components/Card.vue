<script setup>
import ButtonClose from './ButtonClose.vue'
</script>

<template>
  <div class="card window">
    <slot></slot>
    <ButtonClose />
  </div>
</template>

<style scoped>
.card {
  min-height: 64px;
  padding: 8px;
  margin: 4px;
}
</style>
