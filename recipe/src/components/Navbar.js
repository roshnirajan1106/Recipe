import React from 'react'
import { Link } from 'react-router-dom'
import {useTheme} from '../hooks/useTheme'
import './Navbar.css'

import SearchBar from './SearchBar'

const Navbar = () => {
  const {color,changeColor} = useTheme();
  return (
    <div className="navbar" style={{background : color}}>
        <nav onClick={() =>changeColor('pink')}>
            <Link to ="/" className="brand">
                <h1>Cooking Ninja</h1>
            </Link>
            <SearchBar />
            <Link to ="/create">
                Create Recipe
            </Link>
            
        </nav>
    </div>
  )
}

export default Navbar