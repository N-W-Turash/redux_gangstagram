import fetch from 'isomorphic-fetch';

export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const REQUEST_SINGLE_PHOTO = 'REQUEST_SINGLE_PHOTO';
export const REQUEST_SINGLE_PHOTO_SUCCESS = 'REQUEST_SINGLE_PHOTO_SUCCESS';
export const REQUEST_PHOTOS_SUCCESS = 'REQUEST_PHOTOS_SUCCESS';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const REQUEST_SINGLE_POST = 'REQUEST_SINGLE_POST';
export const REQUEST_SINGLE_POST_SUCCESS = 'REQUEST_SINGLE_POST_SUCCESS';
export const REQUEST_POSTS_SUCCESS = 'REQUEST_POSTS_SUCCESS';

export const REQUEST_USERS = 'REQUEST_USERS';
export const REQUEST_SINGLE_USER = 'REQUEST_SINGLE_USER';
export const REQUEST_SINGLE_USER_SUCCESS = 'REQUEST_SINGLE_USER_SUCCESS';
export const REQUEST_USERS_SUCCESS = 'REQUEST_USERS_SUCCESS';

export function requestPhotos(){
    return {
        type: 'REQUEST_PHOTOS',
    }
}

export function receivePhotos(json, offset){
    return {
        type: REQUEST_PHOTOS_SUCCESS,
        payload : {
            json,
            offset
        }
    }
}

export function requestSinglePhoto(id){
    return {
        type: REQUEST_SINGLE_PHOTO,
        payload: {
            id
        }
    }
}

export function receiveSinglePhoto(json){
    return {
        type: REQUEST_SINGLE_PHOTO_SUCCESS,
        payload : {
            json
        }
    }
}

export function requestPosts(){
    return {
        type: REQUEST_POSTS
    }
}

export function receivePosts(json){
    return {
        type: REQUEST_POSTS_SUCCESS,
        payload : {
            json
        }
    }
}

export function requestSinglePost(id){
    return {
        type: REQUEST_SINGLE_POST,
        payload: {
            id
        }
    }
}

export function receiveSinglePost(json){
    return {
        type: REQUEST_SINGLE_POST_SUCCESS,
        payload : {
            json
        }
    }
}

export function requestUsers(){
    return {
        type: REQUEST_USERS
    }
}

export function receiveUsers(json){
    return {
        type: REQUEST_USERS_SUCCESS,
        payload : {
            json
        }
    }
}

export function requestSingleUser(id){
    return {
        type: REQUEST_SINGLE_USER,
        payload: {
            id
        }
    }
}

export function receiveSingleUser(json){
    return {
        type: REQUEST_SINGLE_USER_SUCCESS,
        payload : {
            json
        }
    }
}

export function fetchPhotos(offset) {
    return dispatch => {
        dispatch(requestPhotos())
        return fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => dispatch(receivePhotos(json, offset)))
    }
}

export function fetchSinglePhoto(id) {
    return dispatch => {
        dispatch(requestSinglePhoto())
        return fetch('https://jsonplaceholder.typicode.com/photos/'+id)
            .then(response => response.json())
            .then(json => dispatch(receiveSinglePhoto(json)))
    }
}

export function fetchPosts() {
    return dispatch => {
        dispatch(requestPosts())
        console.log('fetching posts')
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
    }
}

export function fetchSinglePost(id) {
    return dispatch => {
        dispatch(requestSinglePost())
        return fetch('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(response => response.json())
            .then(json => dispatch(receiveSinglePost(json)))
    }
}

export function fetchUsers() {
    return dispatch => {
        dispatch(requestUsers())
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(receiveUsers(json)))
    }
}

export function fetchSingleUser(id) {
    return dispatch => {
        dispatch(requestSingleUser())
        return fetch('https://jsonplaceholder.typicode.com/users/'+id)
            .then(response => response.json())
            .then(json => dispatch(receiveSingleUser(json)))
    }
}