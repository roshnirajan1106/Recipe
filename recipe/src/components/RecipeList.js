import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom'
import TrashCan from '../Assets/trash.svg'
import { projectFirestore } from '../firebase/config'
import './RecipeList.css'
const RecipeList = ({data}) => {
  
  
  const handleClick =  (id) =>{
    projectFirestore.collection('recipes').doc(id)
    .delete()
    
    
  }
  return (
    <div className="recipe-list">
    { data.map(d =>(
        <div key = {d.id} className ="card"> 
            <h3>{d.title}</h3>
            <p>{d.cookingTime} to make</p>
            <div>{d.method.substr(0,100)}...</div>
            <Link to={`/recipe/${d.id}`}>Cook This</Link>
            <img src={TrashCan} className="delete"
            onClick={() => handleClick(d.id)} />
        </div>
    ))    
    
    }
    </div>
  )
}

export default RecipeList