<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useFetch } from '@/composables/useFetch'

const route = useRoute()
const router = useRouter()
const { data, isLoading, error, makeFetch } = useFetch()

makeFetch(`https://jsonplaceholder.typicode.com/users?id=${route.params.userId}`)
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 mt-5">
        <div v-if="isLoading">
          <h1 class="mt-5 text-center">Cargando...</h1>
        </div>
        <div v-else>
          <div v-if="error === ''">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title mb-3">
                  Informacion sobre el usuario: {{ data[0]?.username }}
                </h5>
                <h5 class="card-subtitle mb-2 text-muted">Nombre</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ data[0]?.name }}</h6>
                <h5 class="card-subtitle mb-2 text-muted">Email</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ data[0]?.email }}</h6>
                <h5 class="card-subtitle mb-2 text-muted">Direccion</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {{ data[0]?.address.street }}, {{ data[0]?.address.suite }},
                  {{ data[0]?.address.city }}
                </h6>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button class="btn btn-primary mt-3" @click="() => router.back()">Regresar</button>
            </div>
          </div>
          <div v-else>
            <h1 class="my-5 text-center error">{{ error }}</h1>
            <div class="d-flex justify-content-end">
              <button class="btn btn-primary mt-3" @click="() => router.back()">Regresar</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>
