<script setup>
</script>

<template>
  <div class="column window">
    <h2 class="window-title">
      <slot name="title"></slot>
    </h2>
    <slot name="content"></slot>
  </div>
</template>

<style scoped>
.column {
  padding: 0;
  height: 75vh;
}
</style>
