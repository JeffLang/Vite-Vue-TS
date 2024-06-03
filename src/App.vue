<template>
  <h2>App</h2>
  <RouterView v-slot="{ Component }">
    <keep-alive>
      <component v-if="$route.meta.keepAlive" :is="Component"></component>
    </keep-alive>
    <component v-if="!$route.meta.keepAlive" :is="Component"></component>
  </RouterView>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
