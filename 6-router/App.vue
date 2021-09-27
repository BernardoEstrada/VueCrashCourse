<template>
  <div id="content">
    | 
    <router-link to="/hello"> Hello </router-link> | 
    <router-link to="/posts"> Posts </router-link> | 
    <br />
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="postcss" scoped>
  #content {
    @apply
      p-4
    ;
  }
</style>