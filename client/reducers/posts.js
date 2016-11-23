import {REQUEST_POSTS, REQUEST_POSTS_SUCCESS, REQUEST_SINGLE_POST, REQUEST_SINGLE_POST_SUCCESS} from '../actions/actionCreators';

function posts(state={ list :[], singlePost : {}}, action){
    //console.log(state, action);
    switch (action.type){
        case REQUEST_POSTS:
            return {...state, isFetching : true}
        case REQUEST_POSTS_SUCCESS:
            return {...state, list:action.payload.json.slice(0,50), isFetching: false}
        case REQUEST_SINGLE_POST:
            return {...state, isFetching: true}
        case REQUEST_SINGLE_POST_SUCCESS:
            return {...state, singlePost:action.payload.json, isFetching: false}

        default:
            return state;
    }
    return state;
}

export default posts;