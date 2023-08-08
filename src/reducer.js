const reducer=(state,action)=>{
 switch(action.type)
 {
    case 'GET_STORIES':
        return {
            ...state,
            articles:action.payload.articles,
        };
        case 'SEARCH_POST':
        return {
            ...state,
            query:action.payload,
        };
 }
 return state;

}

export default reducer;