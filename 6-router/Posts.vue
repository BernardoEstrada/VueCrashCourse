<template>
  <p class="h2"> Posts </p>
  <router-link to="/posts/new">New Post</router-link>
  <ul class="unordered-list">
    <li
      v-for = "post in posts"
      :key = "post.id"
    >
      <router-link :to = "`/posts/${post.id}`">
        {{ post.title }}
      </router-link>
    </li>
  </ul>
  <br />
  <router-view />
</template>

<script>
import { usePosts } from './usePosts.js'
export default {
  setup() {
    const postStore = usePosts();
    return {
      posts: postStore.posts
    }
  }
}
</script>

<style lang="postcss" scoped >
</style>
