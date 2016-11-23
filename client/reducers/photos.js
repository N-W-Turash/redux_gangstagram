import {REQUEST_PHOTOS, REQUEST_PHOTOS_SUCCESS, REQUEST_SINGLE_PHOTO, REQUEST_SINGLE_PHOTO_SUCCESS} from '../actions/actionCreators';

function photos(state={ list :[], singlePhoto : {}, offset:0, limit:8}, action){
    //console.log(state, action);
    //console.log("pay",action.payload);
    switch (action.type){
        case REQUEST_PHOTOS:
            return {...state, isFetching : true}
        case REQUEST_PHOTOS_SUCCESS:
            const newList = action.payload.json.slice(action.payload.offset, action.payload.offset + state.limit);
            console.log("sliced",newList);
            return {...state, list : state.list.concat(newList) , isFetching: false, offset :action.payload.offset }
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