<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useFetch } from '@/composables/useFetch'

const route = useRoute()

const { data, isLoading, error, makeFetch } = useFetch()

makeFetch(`https://jsonplaceholder.typicode.com/users?id=${route.params.userId}`)
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 mt-5">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Informacion sobre el usuario: {{ data[0]?.username }}</h5>
            <h5 class="card-subtitle mb-2 text-muted">Nombre</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ data[0]?.name }}</h6>
            <h5 class="card-subtitle mb-2 text-muted">Email</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ data[0]?.email }}</h6>
            <h5 class="card-subtitle mb-2 text-muted">Direccion</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              {{ data[0]?.address.street }}, {{ data[0]?.address.suite }}, {{ data[0]?.address.city }}
            </h6>
          </div>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>
