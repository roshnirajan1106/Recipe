import './Search.css'
import RecipeList from '../../components/RecipeList'
import useFetch from '../../hooks/useFetch'
import React from 'react';
import { useLocation } from 'react-router-dom';
const Search = () => {


  const queryString = useLocation().search; //? 
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');
  const url ="http://localhost:8000/recipes?q=" + query;
  const {data, loading, error} = useFetch(url);
  

  return <div>
    <h2 className='page-title'>Recipes including {query}</h2>
    {error && <p className='error'>{error}</p>}
    {loading && <p className='loading'>Loading...</p>}
    {
      data && < RecipeList recipe = {data}/>
    }
  </div>;
};

export default Search;
