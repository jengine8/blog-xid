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
        <h2 class="text-center my-3">Nuestras entradas en el Blog</h2>
     <PostInfo v-for="(post, i) in data" :key="i" :post="post"/>
     
    </div>
  </div>
</template>