<template>
  <h2>Parent</h2>
  <div>parent:{{ count }}</div>
  <!-- <button @click="clickHandle()">parent</button> -->
  <h2>Children</h2>
  <!-- 自定义事件(相当于react中props的方法) -->
  <Children :parentVal="parentVal" @add-count="addCount" />
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import Children from '../Children/Children.vue'

const count = ref<number>(1)
const parentVal = ref<string>('我是父组件的value')

const addCount = (num: number) => {
  count.value = num
}

// 给子孙组件传递值
provide('count', count)
provide('addCount', addCount)


</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter')
    // 在渲染该组件的对应路由被 渲染 前调用
    // 不能获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(vm => {
      console.log('vm', vm)
      // next来访问组件实例,就可以访问实例‘this’，在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。
    })
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate')
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave')
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next()
  },
})
</script>

<style lang="scss" scoped></style>
