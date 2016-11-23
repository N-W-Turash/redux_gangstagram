import {REQUEST_USERS, REQUEST_USERS_SUCCESS, REQUEST_SINGLE_USER, REQUEST_SINGLE_USER_SUCCESS} from '../actions/actionCreators';

function users(state={ list :[], singleUser : {}}, action){
    //console.log(state, action);
    switch (action.type){
        case REQUEST_USERS:
            return {...state, isFetching : true}
        case REQUEST_USERS_SUCCESS:
            return {...state, list:action.payload.json, isFetching: false}
        case REQUEST_SINGLE_USER:
            return {...state, isFetching: true}
        case REQUEST_SINGLE_USER_SUCCESS:
            return {...state, singleUser:action.payload.json, isFetching: false}

        default:
            return state;
    }
    return state;
}

export default users;