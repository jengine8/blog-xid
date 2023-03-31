<script setup lang="ts">
import PostInfo from "@/components/PostInfo.vue"
import {useFetch} from "@/composables/useFetch"


const {data,
    isLoading,
    error,
    makeFetch} = useFetch();

makeFetch("http://jsonplaceholder.typicode.com/posts?userId=2");

  
   

</script>

<template>
 <div class="container">
    <div class="row">
      <div v-if="isLoading">
        <h1 class="mt-5 text-center">Cargando...</h1>
      </div>
      <div v-else>
        <div v-if="error === '' ">
          <h2 class="text-center my-3">Nuestras entradas en el Blog</h2>
          <PostInfo v-for="(post, i) in data" :key="i" :post="post"/>
        </div>
        <div v-else>
          <h1 class="mt-5 text-center error">{{ error }}</h1>
          <h2 class="mt-5 text-center">Recargue la pagina nuevamente!</h2>
        </div>
        
      </div>
       
     
    </div>
  </div>
</template>

<style lang="scss">
body{
  background-color: rgb(253, 251, 251);
}
.error{
  color: rgb(182, 42, 42);
}
</style>