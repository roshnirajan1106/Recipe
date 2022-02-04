import { useState,useEffect } from "react";

import React from 'react';

const useFetch = (url) => {
    const[data,setData] = useState(null);
    const[error,setError] = useState(null);
    const[loading,setLoading] = useState(false);

    useEffect( ()=>{
        const controller = new AbortController()

            const fetchData = async() =>{
                setLoading(true);
                try{
                const res = await fetch(url, { signal: controller.signal });
                if(!res.ok){
                    throw new Error(res.statusText);
                }
                const json = await res.json();
                setData(json);
                setLoading(false);
                setError(null);
            }
            catch(err){
                if (err.name === "AbortError") {
                    console.log("the fetch was aborted")
                  } else{
                    setLoading(false);
                     setError('Could not fetch the data');
               
                  }
                 }
                 
            }
        
        
        fetchData();
            
    return () => {
        controller.abort()
      }
    } ,[url]);
    
  return {data,loading,error};
};

export default useFetch;
