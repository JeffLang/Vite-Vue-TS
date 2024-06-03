<template>
  <div class="child-box">
    <!-- <p>vant</p> -->
    <!-- <van-field label="文本" placeholder="请输入用户名" /> -->
    <!-- 插槽 -->
    <!-- <slot name="children"></slot> -->
    <!-- 父组件的值 -->
    <div>parentVal: {{ parentVal }}</div>
    <van-button type="primary" @click="addCount">新增count</van-button>
  </div>
  <!-- <button @click="handleClick">count</button> -->
</template>
<script setup lang="ts">
import { ref, useAttrs, inject } from 'vue'

const childCount = ref<number>(1)

defineProps<{ parentVal: string }>();

// 使用emits,不能同时使用attrs
// const emit = defineEmits<{ (event: "addCount", num: number): void }>()

const count = (inject('count').value)
const parentAddCount = (inject('addCount'))

// 也可以使用attr
const attrs = useAttrs()
const addCount = () => {
  console.log('attrs', attrs)
  console.log('count', count)
  console.log('parentAddCount', parentAddCount)
  // attrs.onAddCount(childCount.value++)
  parentAddCount(childCount.value++)
  return
  // emit('addCount', childCount.value++);
}


// const handleClick = (event: any) => {
//   console.log(event, event.target, event.currentTarget, event.nativeEvent)
//   count.value++
// }

</script>
<style>
.child-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
