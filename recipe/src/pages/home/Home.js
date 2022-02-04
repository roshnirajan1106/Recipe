import './Home.css'
import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';

const Home = () => {
  const[url,setUrl] = useState("http://localhost:8000/recipes");

  const {data, loading,error} = useFetch(url);
  console.log(data);
  return <div className='home'>
      {loading && <p className='loading'>Loading...</p>}
      {error && <p className='error'>{error}</p>}
      {data && <RecipeList recipe = {data} />}
  </div>;
};

export default Home;
