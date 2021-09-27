<template>
  <p class="h3">New Post</p>
  <form @submit.prevent="submit">
    <input 
      v-model="newPost.title"
      placeholder="Title"
    />
    <br />
    <textarea
      cols="50"
      rows="10"
      v-model="newPost.content"
      placeholder="Content"
    />
    <br />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { usePosts } from './usePosts.js';
export default {
  setup() {
    const postStore = usePosts();
    const router = useRouter();


    const newPost = reactive({
      title: '',
      content: '',
    })

    const submit = () => {
      const insertId = postStore.addPost({
        title: newPost.title,
        content: newPost.content,
      });
      router.push(`/posts/${insertId}`);
    }

    return {
      newPost,
      submit,
    }
  },
}
</script>

<style lang="postcss" scoped>
  button {
    @apply
      shadow
      bg-red-500
      hover:bg-red-400
      focus:shadow-inner
      focus:outline-none
      text-white
      font-bold
      py-2
      px-4
      rounded
    ;
  }
  input, textarea {
    @apply
      bg-gray-200
      appearance-none
      border-2
      border-gray-200
      rounded
      w-full
      py-2
      px-4
      my-2
      text-gray-700
      leading-tight
      focus:outline-none
      focus:bg-white
      focus:border-red-500
    ;
  }
</style>
