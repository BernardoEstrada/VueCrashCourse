import { ref } from 'vue';
import { testPosts } from "../5-microblog/testPosts.js";

export function usePosts() {
  const posts = ref(testPosts);

  const addPost = (post) => {
    post.id = posts.value.length + 1;
    posts.value.push(post);
    return post.id;
  }

  return { posts, addPost };
}