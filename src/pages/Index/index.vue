<template>
  <h2>Index</h2>
  <van-button type="primary" @click="toParent">跳转到Parent</van-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const toParent = () => {
  router.push('/parent')
}
</script>

<style lang="scss" scoped></style>
