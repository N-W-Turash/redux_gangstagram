import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router';

let SingleUser = React.createClass({

    componentDidMount(){
        const {id} = this.props.params;
        const { fetchSingleUser } = this.props;
        fetchSingleUser(id);
    },
    render(){

        const {users} = this.props;

        return (
            <ReactCSSTransitionGroup
                transitionName="react-anime"
                transitionAppear = {true} transitionAppearTimeout = {5000}
                transitionEnter = {false} transitionLeave = {false}
            >
                <div className="back">
                    <Link to="/users">Go Back to Posts</Link>
                </div>
                <div className="pt-sans bottom-padding zero-radius well custom-well custom-well-post left-right-margin-hack bottom-margin-30">
                    <p><b>ID: </b> {users.singleUser.id}</p>
                    <p><b>Name: </b> {users.singleUser.name}</p>
                    <p><b>Username: </b> {users.singleUser.username}</p>
                    <p><b>Email: </b> {users.singleUser.email}</p>
                    <p><b>Phone: </b> {users.singleUser.phone}</p>
                    <p><b>Website: </b> {users.singleUser.website}</p>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
});


export default SingleUser;

