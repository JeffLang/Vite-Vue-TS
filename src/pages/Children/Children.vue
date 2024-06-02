<template>
  <div class="child-box">
    <p>vant</p>
    <van-field label="文本" placeholder="请输入用户名" />
    <van-button type="primary">主要按钮</van-button>
    <p>我是子组件</p>
    <!-- 插槽 -->
    <slot name="children"></slot>
  </div>
  <div>children:{{ count }}</div>
  <button @click="handleClick($event)">count</button>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(1)
    return { count }
  },

  methods: {
    handleClick(event: any) {
      console.log(event, event.target, event.currentTarget, event.nativeEvent)
      this.count++
    },
  },
}
</script>
<style>
.child-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
