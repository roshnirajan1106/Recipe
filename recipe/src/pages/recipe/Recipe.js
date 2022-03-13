import React from 'react'
import { useParams } from 'react-router-dom'
import './Recipe.css'
import { projectFirestore } from '../../firebase/config'
import { useState } from 'react'
import { useEffect } from 'react'
const Recipe = () => {
  const {id} = useParams();
  const[data,setData] = useState(null);
  const[error,setError] = useState(null);
  const[loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    const unsub = projectFirestore.collection('recipes').doc(id)
    .onSnapshot((doc)=>{
      if(doc.exists){
        setData(doc.data());
        setLoading(false);
        
      }else{
        setError('It doesnt exits')
        setLoading(false);
      }
    })
    return () =>{
      unsub();
    }
  },[id])
  const handleClick = () =>{
    projectFirestore.collection('recipes').doc(id).
    update({
      title :'Somethijbhvng'
    })
  }
  return (
    <div className='recipe'>
      {error && <p>Could Not fetch the data</p>}
      {data && 
      <>
        <h2 className="page-title">
          {data.title}
        </h2>
        <p>Takes {data.cookingTime}</p>
        <ul>
          {data.ingredients.map((ing) => <li>{ing}</li> )}
        </ul>
        <p>{data.method}</p>
        <button onClick={handleClick} >Update me</button>
      </>
      }
    </div>
  )
}

export default Recipe