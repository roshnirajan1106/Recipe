//1.first create the context
//2. send it through context provider
//3.wrap the provider aroing context
// 3.use the hook useContext to get the context

import { createContext,useReducer } from "react";
export const ThemeContext = createContext();
const themeReducer = (state,action) =>{
//to make sttate changes and storing the value
    switch(action.type){
        case 'CHANGE_COLOR':
            return {...state,color:action.payload}
    
        default:
            return state
        }
}
export function ThemeProvider({children}){
    const [state,dispatch] = useReducer(themeReducer,{
        color:'#58249c' //intial state
    });
    const changeColor=(color) =>{
        dispatch({type:'CHANGE_COLOR',payload:color});
        //type of state change
    }
   return( <ThemeContext.Provider value={{...state,changeColor}}>
        {children}
    </ThemeContext.Provider>

);}