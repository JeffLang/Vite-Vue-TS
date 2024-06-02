<template>
  <h2>Parent</h2>
  <Children v-slot:children>
    <div>123</div>
  </Children>
  <div>parent:{{ count }}</div>
  <button @click="clickHandle()">parent</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Children from '../Children/Children.vue'

const count = ref<number>(1)

const clickHandle = () => {
  count.value++
}
</script>

<style lang="scss" scoped></style>
