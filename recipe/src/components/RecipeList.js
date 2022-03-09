import React from 'react'
import { Link } from 'react-router-dom'
import './RecipeList.css'
const RecipeList = ({data}) => {
  return (
    <div className="recipe-list">
    { data.map(d =>(
        <div key = {d.id} className ="card"> 
            <h3>{d.title}</h3>
            <p>{d.cookingTime} to make</p>
            <div>{d.method.substr(0,100)}...</div>
            <Link to={`/recipe/${d.id}`}>Cook This</Link>
        </div>
    ))    
    
    }
    </div>
  )
}

export default RecipeList