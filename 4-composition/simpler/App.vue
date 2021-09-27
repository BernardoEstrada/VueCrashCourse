<template>
  <button @click="a++">{{ a }}</button>
  <button @click="b++">{{ b }}</button>
  <p>{{ total }}</p>
  <div
    v-for="n in history"
    :key="n"
  >
    {{ n }}
  </div>
</template>

<script>
import { useNumbers } from './useNumbers.js'

export default {
  setup() {
    return useNumbers()
  }
}
</script>

<style scoped>
p {
  font-size: 40px;
}
button {
  height: 90px;
  width: 90px;
  font-size: 40px;
}
</style>