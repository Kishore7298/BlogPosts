import jsonPlaceholder from '../api/jsonPlaeholder';

export const fetchPosts =()=> async (dispatch)=>{
    const results = await jsonPlaceholder.get('/posts');
    dispatch({type:"FETCH_POSTS", payload:results.data});
}
