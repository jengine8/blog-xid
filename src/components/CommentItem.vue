<script setup lang="ts">
interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}
const props = defineProps<{
  info: Comment
}>()
</script>

<template>
  <div class="p-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ props.info.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">By: {{ props.info.email }}</h6>
        <p class="card-text">{{props.info.body }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-title{
  text-transform: capitalize;
}
</style>