<!-- ReactivityDemo.vue -->
<script setup>
import { ref } from 'vue'

// 这是一个普通的 JavaScript 变量
let plainJSCounter = 0

// 这是一个 Vue 的响应式数据 (ref)
const reactiveCounter = ref(0)

function incrementPlain() {
  plainJSCounter++
  // 打开浏览器控制台，你会看到它的值在稳定增长
  console.log(`普通变量被点击后: ${plainJSCounter}`)
}

function incrementReactive() {
  reactiveCounter.value++
  // 控制台也会显示它的值在增长
  console.log(`响应式变量被点击后: ${reactiveCounter.value}`)
}
</script>

<template>
  <div>
    <h3>响应式 vs. 非响应式</h3>
    <p>
      <b>普通 JS 变量:</b> {{ plainJSCounter }}
      <button @click="incrementPlain">增加普通变量</button>
    </p>
    <p>
      <b>Vue 响应式变量:</b> {{ reactiveCounter }}
      <button @click="incrementReactive">增加响应式变量</button>
    </p>
    <p class="note">
      请仔细观察并操作：<br/>
      1. 点击 "增加普通变量" 按钮，后台 `console.log` 会显示它的值在增加，但页面上的数字 **不会** 变。这是因为 Vue 没有追踪它的变化。<br/>
      2. 点击 "增加响应式变量" 按钮，页面上的数字会 **立即** 更新。<br/>
      3. **最关键的一点**：在你点击过几次 "增加普通变量" 之后，再点击一次 "增加响应式变量"。你会发现，普通变量的值也 "突然" 更新到了最新！这是因为响应式变量的更新触发了组件的重新渲染，Vue 在渲染时读取了普通变量的最新值。这清晰地证明了，只有响应式数据的变化才能**触发**更新。
    </p>
  </div>
</template>

<style scoped>
.note {
  margin-top: 1rem;
  padding: 0.8rem;
  background-color: #e6f7ff;
  border-left: 5px solid #91d5ff;
}
button {
  margin-left: 10px;
}
</style>