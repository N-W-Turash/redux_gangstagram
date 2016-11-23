import React from 'react';
import Post from './Post';
import Loader from './Loader';

const PostGrid = React.createClass({
    componentDidMount(){
        const { fetchPosts } = this.props;
        fetchPosts();
    },

    render(){
        return (
            <div className="row center-text">
                {this.props.posts.isFetching ? <Loader /> : this.props.posts.list.map( (post, index) => <Post post={post} key={index}/> )}
            </div>
        )
    }
});

export default PostGrid;