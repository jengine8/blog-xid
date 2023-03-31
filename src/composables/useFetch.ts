import { ref } from 'vue'
import axios from 'axios'

export function useFetch() 
{
  const data = ref({})
  const isLoading = ref(false)
  const error = ref("")

  async function makeFetch(url:string) 
  {
    isLoading.value = true
    try {
      const response = await axios.get(url)
      data.value = response.data
      
    } catch (e) {
      error.value = "Algo salio mal al consultar la informacion..."
    } finally {
      isLoading.value = false
    }
  }

  return {
    data,
    isLoading,
    error,
    makeFetch
  }
}
