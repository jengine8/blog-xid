<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

</script>

<template>
  
  <div class="container">
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="mt-5">
               <h1>404 Page Not Found</h1>
                <button class="btn btn-primary mt-3" @click="()=>router.back()">Regresar</button> 
            </div>
            
        </div>
        <div class="col-md-4"></div>
    </div>
  </div>
    
  
</template>

