<script setup lang="ts"></script>

<template>
  <div>
    <MyParent></MyParent>
  </div>
</template>

<script setup lang="ts">
import MyParent from './pages/MyParent/MyParent.vue'
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
