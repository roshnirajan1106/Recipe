import { useState,useEffect } from "react";


const useFetch = (url ,method = "GET") => {
    const[data,setData] = useState(null);
    const[error,setError] = useState(null);
    const[loading,setLoading] = useState(false);
    const [options, setOptions] = useState(null)

    const postData = (postData) => {
      setOptions({
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          //type of data- > json data
        },
        body: JSON.stringify(postData)
      })
    }
    
    useEffect(() => {
      const controller = new AbortController()
  
      const fetchData = async (fetchOptions) => {
        setLoading(true)
        
        try {
          const res = await fetch(url, { ...fetchOptions, signal: controller.signal })
          if(!res.ok) {
            throw new Error(res.statusText)
          }
          const data = await res.json()
  
          setLoading(false)
          setData(data)
          setError(null)
        } catch (err) {
          if (err.name === "AbortError") {
            console.log("the fetch was aborted")
          } else {
            setLoading(false)
            setError('Could not fetch the data')
          }
        }
      }
  
      // invoke the function
      if (method === "GET") {
        fetchData()
      }
      if (method === "POST" && options) {
        fetchData(options)
      }
  
      return () => {
        controller.abort()
      }
  
    }, [url, method, options])
  return { data, loading, error, postData } 
};

export default useFetch;
