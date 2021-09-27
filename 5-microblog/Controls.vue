<template>
  <button @click="click">
    <span class="likes">
      {{ post.likes }}&nbsp;
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" class="inline-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
    </svg>
  </button>
  
  <hashtag
    v-for="hashtag in post.hashtags"
    :key="hashtag"
    :hashtag="hashtag"
  />
</template>

<script>
import Hashtag from './Hashtag.vue'
import { store} from './store'

export default {
  components: { Hashtag },
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  setup(props) {
    const click = () => store.incrementLikes(props.post)

    return { click }
  }
}
</script>

<style lang="postcss" scoped>

</style>
