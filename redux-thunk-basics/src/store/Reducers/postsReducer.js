import * as ACTIONTYPES from '../Actions/actionTypes';

export default (state = [], action) => {
    switch(action.type){
        case ACTIONTYPES.FETCH_POSTS:
            return action.payload
        default:
            return state
    }
}