import { useEffect, useState } from "react"


const localCache = {};

export const useFetch = (url) => {

   const [state, setState] = useState({
      data: null,
      isLoading: true,
      hasError: null,
      errorMessage: null
   })

   useEffect(() => {
      getFetch(url);
   }, [url]);

   const setLoadingState = () => {
      setState({
         data: null,
         isLoading: true,
         hasError: null,
         errorMessage: null
      });
   }

   const getFetch = async (url) => {
      if (localCache[url]) {
         console.log('data from cache');
         setState({
            data: localCache[url],
            isLoading: false,
            hasError: false,
            errorMessage: null
         });
         return;
      }
      setLoadingState();

      const response = await fetch(url);

      // sleep(2000);

      await new Promise(resolve => setTimeout(resolve, 1000));

      if (!response.ok) {
         return setState({
            data: null,
            isLoading: false,
            hasError: true,
            errorMessage: 'Error fetching data'
         });
      }
      const data = await response.json();

      setState({
         data,
         isLoading: false,
         hasError: false,
         errorMessage: null

      });

      localCache[url] = data;

   }
   return {
      data: state.data,
      isLoading: state.isLoading,
      hasError: state.hasError,
   }
}
