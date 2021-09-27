<template>
  <p class="h3">{{ post.title }}</p>
  <p>{{ post.content }}</p>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: [],
    }
  },
  computed: {
    post() {
      return this.posts.find(x => x.id === parseInt(this.$route.params.id, 10))
    }
  }
}
</script>

<style scoped>
</style>
