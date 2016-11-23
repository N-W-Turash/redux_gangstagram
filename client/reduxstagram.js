// let's go!
import React from 'react';
import {render} from 'react-dom';

window.jQuery = window.$ =  require('jquery/dist/jquery.min');
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import css from './styles/style.styl';
import 'font-awesome/css/font-awesome.min.css';

//import components
import App from './components/App';
import Home from './components/Home';
import SinglePhoto from './components/SinglePhoto';
import PhotoGrid from './components/PhotoGrid';
import PostGrid from './components/PostGrid';
import SinglePost from './components/SinglePost';
import UserGrid from './components/UserGrid';
import SingleUser from './components/SingleUser';
import Contact from './components/Contact';

//import react router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';


const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/posts" component={PostGrid}></Route>
                <Route path="/posts/:id" component={SinglePost}></Route>
                <Route path="/photos" component={PhotoGrid}></Route>
                <Route path="/photos/:id" component={SinglePhoto}></Route>
                <Route path="/users" component={UserGrid}></Route>
                <Route path="/users/:id" component={SingleUser}></Route>
                <Route path="/contact" component={Contact}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));