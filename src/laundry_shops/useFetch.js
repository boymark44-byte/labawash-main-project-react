import { useEffect, useState } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)


  useEffect(()=>{
    fetch(url)
    .then(response => {
      if(!response.ok){
        throw Error('could not fetch data for that resource')
      }
      return response.json()
    }).then((data)=>{
      setData(data)
      setIsPending(false)
      setError(null)
    })
    .catch((error)=>{
      setIsPending(false)
      setError(error.message)
    })
  },[url]);

  return {data,isPending, error}
} 
export default useFetch