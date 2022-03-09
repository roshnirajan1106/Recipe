import React from 'react'
import {useLocation} from 'react-router-dom'
import RecipeList from '../../components/RecipeList'
import { useFetch } from '../../hooks/useFetch';
import './Search.css'
const Search = () => {
    const queryString = useLocation().search; // ?q=pie
    const queryParams = new URLSearchParams(queryString);
    const query = queryParams.get('q');
    const url ="http://localhost:8000/recipes?q=" + query;
    const {error,loading,data} = useFetch(url);
  return (
    <div className='search'>
    {error && <p className='error'>
      {error}
    </p>}
    {loading && <p className='loading'>Loading..</p>}
    {data && <RecipeList data = {data}/>}
  </div>
  )
}

export default Search