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
  <router-view
    :posts="posts"
    @createPost="createPost"
  />
</template>

<script>
import { testPosts } from  '../5-microblog/testPosts.js'
export default {
  data() {
    return {
      posts: testPosts,
    }
  },
  methods: {
    createPost(newPost) {
      newPost.id = this.posts.length + 1;
      this.posts.push(newPost);

      this.$router.push(`/posts/${newPost.id}`);
    }
  }
}
</script>

<style lang="postcss" scoped >
</style>
