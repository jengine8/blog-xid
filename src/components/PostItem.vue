<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useFetch } from '@/composables/useFetch'
import CommentList from '@/components/CommentList.vue'
const route = useRoute()
const router = useRouter()

const { data, isLoading, error, makeFetch } = useFetch()

makeFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.entry}`)
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 mt-3">
        <div v-if="isLoading">
          <h1 class="mt-5 text-center">Cargando...</h1>
        </div>
        <div v-else>
          <div v-if="error === ''">
            <h4 class="text-center my-3">Entrada</h4>
            <div class="card my-3">
              <div class="card-body">
                <h5 class="card-title">{{ data.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">By: {{ route.params.authorName }}</h6>
                <p class="card-text">{{ data.body }}</p>
                <RouterLink class="card-link" :to="{ path: `/user/${route.params.author}` }"
                  >Ver Autor</RouterLink
                >
              </div>
            </div>
            <CommentList :commentId="route.params.entry" />
            <div class="d-flex justify-content-end p-3">
              <button class="btn btn-primary" @click="() => router.push({ path: '/' })">
                Regresar
              </button>
            </div>
          </div>
          <div v-else>
            <h1 class="mt-5 text-center error">{{ error }}</h1>
            <div class="d-flex justify-content-end p-3">
              <button class="btn btn-primary" @click="() => router.push({ path: '/' })">
                Regresar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-title {
  text-transform: capitalize;
}
</style>
