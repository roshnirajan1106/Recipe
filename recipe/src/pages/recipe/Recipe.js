import './Recipe.css'
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

const Recipe = () => {
  const {id} = useParams();
  const [url,setUrl] = useState('http://localhost:8000/recipes/'+id);
  const  {data,loading,error} = useFetch(url);
  
 return <div className='recipe'>
      {loading &&<h2>Loading...</h2>}
      {error && <p>{error}</p>}
      {data && 
        <>
        <h2 className='page-title'>{data.title}</h2>
        <p>Takes {data.cookingTime} to cook</p>
        <ul>
          {data.ingredients.map((ing) => <li key={ing}>{ing}</li>)}
        </ul>
        <p className="method">{data.method}</p>
        </>
      }
  </div>;
};

export default Recipe;
