import {REQUEST_PHOTOS, REQUEST_PHOTOS_SUCCESS, REQUEST_SINGLE_PHOTO, REQUEST_SINGLE_PHOTO_SUCCESS} from '../actions/actionCreators';

function photos(state={ list :[], singlePhoto : {}}, action){
    //console.log(state, action);
    switch (action.type){
        case REQUEST_PHOTOS:
            return {...state, isFetching : true}
        case REQUEST_PHOTOS_SUCCESS:
            return {...state, list:action.payload.json.slice(0,50), isFetching: false}
        case REQUEST_SINGLE_PHOTO:
            return {...state, isFetching: true}
        case REQUEST_SINGLE_PHOTO_SUCCESS:
            return {...state, singlePhoto:action.payload.json, isFetching: false}

        default:
            return state;
    }
    return state;
}

export default photos;