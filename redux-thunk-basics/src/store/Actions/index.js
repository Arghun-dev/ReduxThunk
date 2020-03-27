import * as ACTIONTYPES from './actionTypes';

import jsonPlaceholder from '../../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return async function(dispatch, getState) {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: ACTIONTYPES.FETCH_POSTS, payload: response.data })

    }
}

export const fetchUsers = (id) => {
    return async function(dispatch, getState) {
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({ type: ACTIONTYPES.FETCH_USERS, payload: response.data })
    }
}