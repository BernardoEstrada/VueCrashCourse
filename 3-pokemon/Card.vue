<template>
  <div class="card">
    <div class="title">
      <slot name="title" />
    </div>
    <hr />
    <div class="content">
      <slot name="content" />
    </div>
    <hr />
    <div class="description">
      <slot name="description" />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="postcss" scoped>
.card {
  @apply
    space-y-3
    px-4
    py-4
    mx-1
    my-2
    rounded-3xl
    shadow-sm
    border
    cursor-pointer
    hover:shadow-lg
    transition
    duration-200
  ;
}
.title, .content, .description {
  @apply
    px-4
    capitalize
    text-center
  ;
}
.title {
  @apply text-xl;
}
</style>