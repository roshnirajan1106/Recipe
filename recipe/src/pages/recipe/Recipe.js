import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import './Recipe.css'
const Recipe = () => {
  const {id} = useParams();
  const url = "http://localhost:8000/recipes/" +id;
  const {data,loading,error} = useFetch(url);
  console.log(data);
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
      </>
      }
    </div>
  )
}

export default Recipe