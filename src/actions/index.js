import jsonPlaceholder from '../api/jsonPlaeholder';

export const fetchPosts =()=> async (dispatch)=>{
    const results = await jsonPlaceholder.get('/posts');
    dispatch({type:"FETCH_POSTS", payload:results.data});
}

export const fetchUser = (id)=>async (dispatch)=>{
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type:"FETCH_USER", payload:response.data})
}