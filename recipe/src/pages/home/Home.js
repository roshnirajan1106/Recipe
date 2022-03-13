import React, { useState } from 'react'
import './Home.css'
import { projectFirestore } from '../../firebase/config';
import RecipeList from '../../components/RecipeList';
import { useEffect } from 'react';
const Home = () => {
  const[data,setData] = useState(null);
  const[error,setError] = useState(null);
  const[loading, setLoading] = useState(false);
  
  useEffect(()=>{
    setLoading(true);
    //this is listening
    const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) =>{
       if(snapshot.empty){
         setError("No recipes to load")
         setLoading(false);
        }else{
          let results=[]
          snapshot.docs.forEach(doc =>{
            results.push({id:doc.id,...doc.data()})
          })
          setData(results)
          setLoading(false)
        }
        //snapshot has the data
    },(err) =>{
      setError(err.message)
      setLoading(false);
    })
    return () =>{
      unsub();
    }

  
    
    //this will connect to recipes connection
    //async

  },[]);
  
  return (
    <div className='home'>
      {error && <p className='error'>
        {error}
      </p>}
      {loading && <p className='loading'>Loading..</p>}
      {data && <RecipeList data = {data}/>}
    </div>
  )
}

export default Home