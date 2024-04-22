import { useEffect, useState } from "react"

export const useFetch = () => {
  
   const [state, setState] = useState({
      data: null,
      isLoading: true,
      hasError: null,
      errorMessage: null
   })

   useEffect(() => {
      getFetch();
   }, [])

   const getFetch = async () => {
      const response = await fetch ('https://pokeapi.co/api/v2/pokemon/1');
      const data = await response.json();

      console.log (data);
   }
   return{
      data: state.data,
      isLoading: state.isLoading,
      hasError: state.hasError,
   }
}
