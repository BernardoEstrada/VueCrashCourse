import { reactive } from 'vue';
import { testPosts } from './testPosts.js'

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentTag: null,
    })
  }
  setHashtag(tag) {
    this.state.currentTag = tag;
  }

  incrementLikes(post) {
    // This also works
    // post.likes++;
    const selectedPost = this.state.posts.find(p => p.id === post.id)
    if (!selectedPost) {
      return
    }
    selectedPost.likes++
  }

  get filteredPosts() {
    if (!store.state.currentTag) {
      return store.state.posts
    }
    const regex = new RegExp(store.state.currentTag, "i")
    return store.state.posts.filter((post) =>
      post.hashtags.some((h) => regex.test(h))
    )
  }
}

export const store = new Store()