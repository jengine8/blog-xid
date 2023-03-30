import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostList from '@/components/PostList.vue'
import PostItem from "@/components/PostItem.vue"
import UserDetails from "@/components/UserDetails.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[
        {
          path:"",
          name:"post-list",
          component:PostList,
          
        }
      ]
      
    },
    {
      path:"/entry/:author/:entry/:authorName",
      name:"entry",
      component:PostItem
    },
    {
      path:"/user/:userId",
      name:"user",
      component:UserDetails
    }
    
  ]
})

export default router
