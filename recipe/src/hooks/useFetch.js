import { useEffect,useState } from 'react'
export const useFetch = (url,method = "GET") => {
    const[data,setData] = useState(null);
    const[error,setError] = useState(null);
    const[loading, setLoading] = useState(false);
    const[options,setOptions] = useState(null);
    const postData = (postData) =>{
        setOptions({
            method :"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(postData)
        })
    }
    //for making a post req , u need header, body and method
    //in header - u mention type of data
    //in body - u mention  the data
    useEffect( () =>{
        setLoading(true);
       const fetchData = async(fetchOptions) =>{
        
        try{
            const res =await fetch(url,{...fetchOptions});
            if(!res.ok){
                throw new Error(res.statusText);
            }
            const json = await res.json();
            setData(json);
            setLoading(false);
            setError(null);
        }catch(err){
            console.log(err);
            setError('Could Not fetch the data');
            
            setLoading(false);
        }

       }
       
       if(method === "GET"){
       fetchData()
       }
       if(method === "POST" && options){
           fetchData(options)
       }


    },[url,method,options]);
  return {data,loading,error,postData}
}

