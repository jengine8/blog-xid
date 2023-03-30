<script setup lang="ts">
import CommentItem from '@/components/CommentItem.vue';
import {useFetch} from "@/composables/useFetch"
interface Comment {
 
 id:string,
 
}
const props = defineProps<{
  commentId: Comment
}>()

const {data,
    isLoading,
    error,
    makeFetch} = useFetch();

makeFetch(`https://jsonplaceholder.typicode.com/posts/${props.commentId}/comments`);



</script>

<template>
    <h4 class="text-center mt-5">Comentarios</h4>
   
      <CommentItem v-for="comment in data" :key="comment.id" :info="comment"/>  
  
  
    
  
</template>