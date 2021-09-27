<template>
  <input
    class="inp"
    :value="currentTag"
    @input="setHashtag"
  />
  <div class="container">
    <card
      v-for="post in filteredPosts"
      :key="post.id"
    >
      <template v-slot:title>
        {{ post.title }}
      </template>
      <template v-slot:content>
        {{ post.content }}
      </template>
      <template v-slot:description>
        <controls :post="post" />
      </template>
    </card>
  </div>
</template>

<script>
import { computed } from 'vue'
import Card from '../3-pokemon/Card.vue'
import Controls from './Controls.vue'
import { store } from './store.js'

export default {
  components: {
    Card,
    Controls
  },
  setup() {

    const setHashtag = ($event) => {
      store.setHashtag($event.target.value)
    }

    return {
      setHashtag,
      filteredPosts: computed(() => store.filteredPosts),
      currentTag: computed(() => store.state.currentTag),
    }
  }
}
</script>

<style lang="postcss" scoped>
  .container {
    @apply
      flex
      flex-wrap
      flex-row
      items-start
      justify-center
      px-5
      m-0
      md:px-10
      md:mx-auto
    ;
  }
  .card {
    @apply
      flex-auto
      md:w-1/5
      md:flex-initial
    ;
  }
  .inp {
    @apply
      mx-10
      mb-1
      mt-5
      md:mx-20
      block
      text-sm
      font-bold

      bg-gray-200
      appearance-none
      border-2
      border-gray-200
      rounded
      py-2
      px-4
      text-gray-700
      leading-tight
      focus:outline-none
      focus:bg-gray-100
      focus:border-red-500
    ;
  }
</style>