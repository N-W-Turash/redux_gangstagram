import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import photos from './photos';
import posts from './posts';
import users from './users';

const rootReducer = combineReducers({photos, posts, users, routing: routerReducer});

export default rootReducer;