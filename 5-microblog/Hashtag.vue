<template>
  <div
    class="hashtag"
    @click="setHashtag"
  >
    #{{ hashtag }}
  </div>
</template>

<script>
import { store } from './store.js'

export default {
  props: {
    hashtag: {
      type: String,
      required: true,
    }
  },
  setup(props, context) {
    const setHashtag = () => {
      store.setHashtag(props.hashtag)
    }
    return {
      setHashtag,
    }
  },
}
</script>

<style lang="postcss" scoped>
  .hashtag {
    @apply
      text-cyan-600
      hover:text-cyan-800
      hover:underline
    ;
  }
</style>