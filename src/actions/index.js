import jsonPlaceholder from '../api/jsonPlaeholder';
import _ from 'lodash';

export const fetchPostsUser = ()=> async (dispatch, getState)=>{
    await dispatch(fetchPosts());
    const UserIds = _.uniq(_.map(getState().posts,'userId'));
    UserIds.forEach(id=> dispatch(fetchUser(id)));
}

export const fetchPosts =()=> async (dispatch)=>{
    const results = await jsonPlaceholder.get('/posts');
    dispatch({type:"FETCH_POSTS", payload:results.data});
}

export const fetchUser = (id)=>async (dispatch)=>{
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type:"FETCH_USER", payload:response.data})
}