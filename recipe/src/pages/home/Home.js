import React, { useState } from 'react'
import './Home.css'
import {useFetch} from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList';
const Home = () => {

  
  const {data,loading,error} = useFetch('http://localhost:8000/recipes');
  console.log(data);
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