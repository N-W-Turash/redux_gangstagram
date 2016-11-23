import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router';

let SinglePost = React.createClass({

    componentDidMount(){
        const {id} = this.props.params;
        const { fetchSinglePost } = this.props;
        fetchSinglePost(id);
    },
    render(){

        const {posts} = this.props;

        return (
            <ReactCSSTransitionGroup
                transitionName="react-anime"
                transitionAppear = {true} transitionAppearTimeout = {5000}
                transitionEnter = {false} transitionLeave = {false}
            >
                <div className="back">
                    <Link to="/posts">Go Back to Posts</Link>
                </div>
                <div className="pt-sans bottom-padding zero-radius well custom-well custom-well-post left-right-margin-hack bottom-margin-30">
                    <p><b>User ID:</b> {posts.singlePost.userId}</p>
                    <p className="post-title pt-sans"><b>Title: </b>{posts.singlePost.title}</p>
                    <p className="post-title pt-sans"><b>Post No. : </b>{posts.singlePost.id}</p>
                    <p><b>Post: </b>{posts.singlePost.body}</p>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
});


export default SinglePost;

