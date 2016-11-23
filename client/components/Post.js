import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavLink from './NavLink';


const Post = React.createClass({

    render(){const {post} = this.props;

        return (
            <ReactCSSTransitionGroup
                transitionName="react-anime"
                transitionAppear = {true} transitionAppearTimeout = {5000}
                transitionEnter = {false} transitionLeave = {false}
            >
                <div className="col-lg-6 col-sm-12 col-md-6">
                    <div className="pt-sans bottom-padding zero-radius well custom-well custom-well-post left-right-margin-hack">
                        <p><b>Post ID:</b> {post.id}</p>
                        <p className="post-title"><b>Title: </b>{post.title}</p>
                        <p><b>Post: </b>{post.body.substr(0,50)} <span><NavLink to={"/posts/"+post.id} className="pt-sans">See More</NavLink></span></p>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
});

export default Post;