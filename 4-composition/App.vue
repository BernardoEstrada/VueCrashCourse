<template>
  <button @click="increment">{{ count }}</button>
  <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button>
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
import { ref, reactive, computed, watch, watchEffect } from 'vue'
import { useNumbers } from './useNumbers.js'

export default {
  setup() {
    // ref -> number or string (primitives)
    const count = ref(0)

    // reactive -> { Object }
    const numbers = reactive({
      a: 0,
      b: 0,
    })

    const increase = (n) => {
      numbers[n]++
    }

    const increment = () => {
      count.value++
    }

    // you specify what you want to watch
    watch(numbers, (newVal) => {
      console.log(`${newVal.a}, ${newVal.b}`)
    }, {
      immediate: true,
    })

    // watch oldValue only works with ref
    watch(count, (newVal, oldVal) => {
      console.log(`${oldVal} -> ${newVal}`)
    })
    
    // watchEffect just watches the variables used
    watchEffect(() => {
      console.log(numbers.a, numbers.b)
    })

    const {
      a, b, history, total, 
    } = useNumbers()

    return {
      a,
      b,
      count,
      numbers,
      total,
      history,
      increment,
      increase,
    }
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