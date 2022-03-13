import { useContext } from "react";
import {ThemeContext} from '../context/ThemeContext'

import React from 'react'


export const useTheme = () => {
    const context = useContext(ThemeContext)
   
    if(context === undefined){
        //if context is applied outside context provider
        throw new Error("Use theme must be used inside themeProvider");

    }
  return context;
}

