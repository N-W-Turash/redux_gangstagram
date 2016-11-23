import {createStore, compose, applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from './reducers/index';
//import comments from './data/comments';
//import posts from './data/posts';

// create an object for the default state

const defaultState = {
    post:[],
}

const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));
export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot){
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;