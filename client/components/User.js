import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavLink from './NavLink';


const Post = React.createClass({

    render(){const {user} = this.props;

        return (
            <ReactCSSTransitionGroup
                transitionName="react-anime"
                transitionAppear = {true} transitionAppearTimeout = {5000}
                transitionEnter = {false} transitionLeave = {false}
            >
                <div className="col-lg-4 col-sm-6 col-md-4">
                    <div className="pt-sans bottom-padding zero-radius well custom-well custom-well-post left-right-margin-hack bottom-margin-30">
                        <p><b>Name: </b> {user.name}</p>
                        <p><b>Username: </b> {user.username}</p>
                        <p><b>Email: </b> {user.email}</p>
                        <p className="post-title"><NavLink to={"/users/"+ user.id} className="pt-sans">See More</NavLink></p>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
});

export default Post;