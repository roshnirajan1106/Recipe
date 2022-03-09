import React from 'react'
import { useState ,useRef} from 'react'
import {useHistory} from 'react-router-dom'
import { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import './Create.css'
const Create = () => {
  const[title,setTitle] = useState(null);
  const[method,setMethod] = useState(null);
  const[cookingTime,setCookingTime] = useState('');
  const [ingredients,setIngredients] = useState([]);
  const[newIngredients,setNewIngredients] = useState('');
  const ingredientInput = useRef(null);
  const {postData, data, error}= useFetch("http://localhost:8000/recipes","POST");
  //every req brings back some data, even its post
  const history = useHistory();
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(title,cookingTime, method);
    postData({title,ingredients,method,cookingTime:cookingTime + ' minutes'});

  }
  //redirecting the user

    useEffect(() =>{
        if(data){
          history.push('/');
        }
    },[data]);


  const handleClick = (e) =>
  {
    e.preventDefault();
    const ing = newIngredients.trim();
    if(ing && !ingredients.includes(ing)){
      setIngredients((prev)  =>[...prev,ing] )
    }
    setNewIngredients('');
    ingredientInput.current.focus();


  }
  return (
   <div className='create'>
     <h2 className='page-title'>Add a new Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title :</span>
          <input type="text" 
            onChange ={(e) =>setTitle(e.target.value)}
            value = {title}
            required
          />
        </label>
        <label>
          <span>Recipe Ingredients :</span>
          <div className='ingredients'>
            <input
              type="text"
              value={newIngredients}
              onChange= {(e) =>setNewIngredients(e.target.value) }
              
              ref={ingredientInput}
              />
              <button onClick ={handleClick}className='btn'>add</button>
          </div>
        </label>
        <p>Current Ingredients : {ingredients.map(i => <em key={i}> {i} ,</em>)}</p>
        <label>
          <span>Recipe Method :</span>
          <textarea type="text" 
            onChange ={(e) =>setMethod(e.target.value)}
            value = {method}
            required
          />
        </label>
        <label>
          <span>CookingTime(minutes):</span>
          <input type="text" 
            onChange ={(e) =>setCookingTime(e.target.value)}
            value = {cookingTime}
            required
          />
        </label>
        <button className='btn'>Submit</button>
      </form>
   
   </div>
   
  )
}

export default Create