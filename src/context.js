import React,{ useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";



const initialState = {
  articles:[],
  query:"tech",


}


const AppContext = React.createContext();

const AppProvider= ({children})=>{

const [state,dispatch]=useReducer(reducer,initialState);

    

const FetchApiData = async (url)=>{
    const result = await fetch(url);
    const data = await result.json();
    dispatch({
        type:"GET_STORIES",
        payload:{
            articles: data.articles,
        },
    })
   }

   const searchPost =(searchquery)=>{
    dispatch({
        type:'SEARCH_POST',
        payload:searchquery,
    })
   }
    useEffect(()=>{
        FetchApiData(`https://newsapi.org/v2/everything?q=${state.query}&apiKey=84079ee12c784213ac829991c4fa5162`);
    },[state.query]) 
    return(
        <AppContext.Provider value={{...state , searchPost}}>{children}</AppContext.Provider>
    )
}

const useGobalContext = ()=>{
    return useContext(AppContext);
}

export default useGobalContext;
export {AppContext,AppProvider};