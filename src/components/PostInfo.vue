<script setup lang="ts">
import { useFetch } from '@/composables/useFetch'
interface Post {
  body: string
  id: number
  title: string
  userId: number
}
const props = defineProps<{
  post: Post
}>()

const { data, isLoading, error, makeFetch } = useFetch()

makeFetch('https://jsonplaceholder.typicode.com/users?id=2')


</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div class="card my-3">
          <div class="card-body">
            <h5 class="card-title">{{ `${props.post.title.substring(0, 10)}...` }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ data[0]?.name }}</h6>

            <RouterLink
              class="card-link"
              :to="{ path: `/entry/${props.post.userId}/${props.post.id}/${data[0]?.name}` }"
              >Ver Post</RouterLink
            >
          </div>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-title{
  text-transform: capitalize;
}
</style>
